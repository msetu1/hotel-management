const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const jwt = require("jsonwebtoken");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const port = process.env.PORT || 7000;

// middleware
const corsOptions = {
  origin: ["https://stay-sphere.netlify.app","http://localhost:5173", "http://localhost:5174"],
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());

// Verify Token Middleware
const verifyToken = async (req, res, next) => {
  const token = req.cookies?.token;
  console.log(token);
  if (!token) {
    return res.status(401).send({ message: "unauthorized access" });
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      console.log(err);
      return res.status(401).send({ message: "unauthorized access" });
    }
    req.user = decoded;
    next();
  });
};

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.dthbdpl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // -------- collection--------//
    const db = client.db("hotel-managements");
    const usersCollection = db.collection("users");
    const roomsCollection = db.collection("rooms");
    const bookingsCollection = db.collection("bookings");
    const mealsCollection = db.collection("meals");
    const eventsCollection = db.collection("events");
    const buildingCollection = db.collection("buildings");
    const landCollection = db.collection("lands");
    // admin
    const verifyAdmin = async (req, res, next) => {
      const user = req.user;
      console.log("uservvvvvv", user);
      const query = { email: user?.email };
      const result = await usersCollection.findOne(query);
      if (!result || result?.role !== "admin")
        return res.status(401).send({ message: "Unauthorized Access" });
      next();
    };
    // host
    const verifyHost = async (req, res, next) => {
      const user = req.user;
      const query = { email: user?.email };
      const result = await usersCollection.findOne(query);
      if (!result || result?.role !== "host")
        return res.status(401).send({ message: "Unauthorized Access" });

      next();
    };

    // -------- auth related api--------//
    app.post("/jwt", async (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "365d",
      });
      res
        .cookie("token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
        })
        .send({ success: true });
    });

    // -------- Logout--------//
    app.get("/logout", async (req, res) => {
      try {
        res
          .clearCookie("token", {
            maxAge: 0,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
          })
          .send({ success: true });
        console.log("Logout successful");
      } catch (err) {
        res.status(500).send(err);
      }
    });

    // -------- crate payment intent--------//
    app.post("/create-payment-intent", verifyToken, async (req, res) => {
      const { price } = req.body;
      const priceInCent = parseFloat(price) * 100;
      if (!price || priceInCent < 1) return;

      // generate client secret
      const { client_secret } = await stripe.paymentIntents.create({
        amount: priceInCent,
        currency: "usd",
        automatic_payment_methods: {
          enabled: true,
        },
      });

      //send client secret as response
      res.send({ clientSecret: client_secret });
    });

    // -------- Statistics --------//

    // --------user and Admin--------//
    // save user is required
    app.put("/user", async (req, res) => {
      const user = req.body;
      const query = { email: user?.email };
      // check if user already exists in db
      const isExists = await usersCollection.findOne(query);
      if (isExists) {
        if (user.status === "Requested") {
          const result = await usersCollection.updateOne(query, {
            $set: { status: user?.status },
          });
          return res.send(result);
        } else {
          return res.send(isExists);
        }
      }

      // save user for the first time
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          ...user,
          timestamp: Date.now(),
        },
      };
      const result = await usersCollection.updateOne(query, updateDoc, options);
      res.send(result);
    });

    // get a user info by email for db
    app.get("/user/:email", async (req, res) => {
      const email = req.params.email;
      const result = await usersCollection.findOne({ email });

      res.send(result);
    });

    // get all users data form db
    app.get("/users", verifyToken, verifyAdmin, async (req, res) => {
      const result = await usersCollection.find().toArray();
      res.send(result);
    });

    // update a user role
    app.patch("/users/update/:email", async (req, res) => {
      const email = req.params.email;
      const user = req.body;
      const query = { email };
      const updateDoc = {
        $set: {
          ...user,
          timestamp: Date.now(),
        },
      };

      const result = await usersCollection.updateOne(query, updateDoc);
      res.send(result);
    });

    // -------- Meals--------//
    // get all meals
    app.get("/meals", async (req, res) => {
      const result = await mealsCollection.find().toArray();
      res.send(result);
    });

    // -------- Rooms--------//
    // get all rooms
    app.get("/rooms", async (req, res) => {
      const category = req.query.category;
      let query = {};
      if (category && category !== "null") query = { category };

      const result = await roomsCollection.find(query).toArray();
      res.send(result);
    });

    // single rooms
    app.get("/room/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await roomsCollection.findOne(query);
      res.send(result);
    });

    // -------- Events--------//
    // get all events
    app.get("/events", async (req, res) => {
      const result = await eventsCollection.find().toArray();
      res.send(result);
    });

    // single event
    app.get("/event/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await eventsCollection.findOne(query);
      res.send(result);
    });

    // -------- Events--------//

    // building
    app.get("/buildings", async (req, res) => {
      const result = await buildingCollection.find().toArray();
      res.send(result);
    });

    // land
    app.get("/lands", async (req, res) => {
      const result = await landCollection.find().toArray();
      res.send(result);
    });

    // single building
    app.get("/building/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await buildingCollection.findOne(query);
      res.send(result);
    });

    // single land
    app.get("/land/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await landCollection.findOne(query);
      res.send(result);
    });

    // -------- Guest--------//
    // save a guest booking room
    app.post("/room-booking", verifyToken, async (req, res) => {
      const bookingData = req?.body;
      const result = await bookingsCollection.insertOne(bookingData);

      // sent email to guest
      // sendEmail(bookingData?.guest?.email, {
      //   subject: "Booking Successfully",
      //   message: `You have successfully booked room through stayVista . Transaction id: ${bookingData.transactionId}`,
      // });

      // sent email to host
      // sendEmail(bookingData?.host?.email, {
      //   subject: "Your room got booked successfully!",
      //   message: `Get ready to welcome ${bookingData.guest.name}`,
      // });

      res.send(result);
    });

    // update room status
    app.patch("/room/status/:id", async (req, res) => {
      const id = req.params.id;
      const status = req.body.status;

      // change room availability
      const query = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: {
          booked: status,
        },
      };
      const result = await roomsCollection.updateOne(query, updateDoc);
      res.send(result);
    });

    // get all my booking for a guest
    app.get("/my-bookings-room/:email", verifyToken, async (req, res) => {
      const email = req.params.email;
      const query = { "guest.email": email };

      const result = await bookingsCollection.find(query).toArray();
      res.send(result);
    });
    //  delete a booking
    app.delete("/booking-room/:id", verifyToken, async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await bookingsCollection.deleteOne(query);
      res.send(result);
    });

    // -------- Host --------//
    // Save a room data Add room
    app.post("/room", verifyToken, verifyHost, async (req, res) => {
      const result = await roomsCollection.insertOne(req.body);
      res.send(result);
    });

    // get all rooms and my listing for host
    app.get(
      "/my-listings-room/:email",
      verifyToken,
      verifyHost,
      async (req, res) => {
        const email = req.params.email;
        let query = { "host.email": email };
        const result = await roomsCollection.find(query).toArray();
        res.send(result);
      }
    );

    // delete a room for host
    app.delete("/room/:id", verifyToken, verifyHost, async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await roomsCollection.deleteOne(query);
      res.send(result);
    });

    // Update a room for host data
    app.put("/room/update/:id", verifyToken, verifyHost, async (req, res) => {
      const id = req.params.id;
      const roomData = req.body;
      const query = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: roomData,
      };
      const result = await roomsCollection.updateOne(query, updateDoc);
      res.send(result);
    });

    // get all manage booking for room a host
    app.get(
      "/manage-bookings-room/:email",
      verifyToken,
      verifyHost,
      async (req, res) => {
        const email = req.params.email;
        const query = { "host.email": email };

        const result = await bookingsCollection.find(query).toArray();
        res.send(result);
      }
    );

    // event related
    // Save a room data Add event
    app.post("/event", verifyToken, verifyHost, async (req, res) => {
      const result = await eventsCollection.insertOne(req.body);
      res.send(result);
    });

    // get all rooms and my listing for host
    app.get(
      "/my-listings-event/:email",
      verifyToken,
      verifyHost,
      async (req, res) => {
        const email = req.params.email;
        let query = { "host.email": email };
        const result = await eventsCollection.find(query).toArray();
        res.send(result);
      }
    );
    // delete a event for host
    app.delete("/event/:id", verifyToken, verifyHost, async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await eventsCollection.deleteOne(query);
      res.send(result);
    });

    // Update a event for host data
    app.put("/event-update/:id", verifyToken, verifyHost, async (req, res) => {
      const id = req.params.id;
      const eventData = req.body;
      const query = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: eventData,
      };
      const result = await eventsCollection.updateOne(query, updateDoc);
      res.send(result);
    });

    // property

    // building or property
    // Save a building data Add building
    app.post("/building", verifyToken, verifyHost, async (req, res) => {
      const result = await buildingCollection.insertOne(req.body);
      res.send(result);
    });

    // land or property
    // save a land data Add land
    app.post("/land", verifyToken, verifyHost, async (req, res) => {
      const result = await landCollection.insertOne(req.body);
      res.send(result);
    });

    // get all building and my listing for host
    app.get(
      "/my-listings-building/:email",
      verifyToken,
      verifyHost,
      async (req, res) => {
        const email = req.params.email;
        let query = { "host.email": email };
        const result = await buildingCollection.find(query).toArray();
        res.send(result);
      }
    );
    // get all land and my listing for host
    app.get(
      "/my-listings-land/:email",
      verifyToken,
      verifyHost,
      async (req, res) => {
        const email = req.params.email;
        let query = { "host.email": email };
        const result = await landCollection.find(query).toArray();
        res.send(result);
      }
    );

    // delete a building for host
    app.delete("/building/:id", verifyToken, verifyHost, async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await buildingCollection.deleteOne(query);
      res.send(result);
    });
    // delete a building for host
    app.delete("/land/:id", verifyToken, verifyHost, async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await landCollection.deleteOne(query);
      res.send(result);
    });

      // Update a building data for host data
      app.put("/building-update/:id", verifyToken, verifyHost, async (req, res) => {
        const id = req.params.id;
        const buildingData = req.body;
        const query = { _id: new ObjectId(id) };
        const updateDoc = {
          $set: buildingData,
        };
        const result = await buildingCollection.updateOne(query, updateDoc);
        res.send(result);
      });

      // Update a land data for host data
      app.put("/land-update/:id", verifyToken, verifyHost, async (req, res) => {
        const id = req.params.id;
        const landData = req.body;
        const query = { _id: new ObjectId(id) };
        const updateDoc = {
          $set: landData,
        };
        const result = await landCollection.updateOne(query, updateDoc);
        res.send(result);
      });
  

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello from StaySphere Server..");
});

app.listen(port, () => {
  console.log(`StaySphere is running on port ${port}`);
});
