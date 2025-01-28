import { Helmet } from "react-helmet-async";
import AddEventsForm from "../../../../components/Form/EventsForm/AddEventsForm";
import useAuth from "../../../../Hooks/useAuth";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { imageUpload } from "../../../../utils";

const AddEvents = () => {
  const navigate=useNavigate()
  const axiosSecure=useAxiosSecure()
  const { user, loading, setLoading } = useAuth();
  const [imagePreview, setImagePreview] = useState();
  const [imageText, setImageText] = useState("Upload Image");
  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  // date range handler
  const handleDates = (item) => {
    setDates(item.selection);
  };


  const { mutateAsync } = useMutation({
    mutationFn: async (eventData) => {
      const { data } = await axiosSecure.post(`/event`, eventData);
      return data;
    },
    onSuccess: () => {
      toast.success("Event Added successfully !");
      navigate("/dashboard/my-listings");
      setLoading(false);
    },
  });

  // Handle form submission
  const handleSubmit =async (e) => {
    e.preventDefault();
    const form = e.target;
    const location = form.location.value;
    const category = form.category.value;
    const title = form.title.value;
    const to = dates.endDate;
    const from = dates.startDate;
    const venue = form.venue.value;
    const ticketPrice = form.ticketPrice.value;
    const capacity = form.capacity.value;
    const availableSeats = form.availableSeats.value;
    const organizer = form.organizer.value;
    const description = form.description.value;
    const image = form.image.files[0];
    const host = {
      name: user?.displayName,
      email: user?.email,
      image: user?.photoURL,
    };

    try {
      const image_url = await imageUpload(image);
      const newEvent = {
        location,
        category,
        title,
        to,
        from,
        venue,
        ticketPrice,
        capacity,
        availableSeats,
        organizer,
        description,
        image: image_url,
        host,
      };
      // post request to server
      await mutateAsync(newEvent);
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };

  
   // handle image changes
   const handleImage = (image) => {
    setImagePreview(URL.createObjectURL(image));
    setImageText(image.name);
  };

  return (
    <div>
      <Helmet>
        <title>Add Events | Dashboard</title>
      </Helmet>
      <div>
        <h2 className="text-3xl font-bold my-3 text-left">Add New Event</h2>
      </div>
      <AddEventsForm
        dates={dates}
        handleDates={handleDates}
        handleSubmit={handleSubmit}
        setImagePreview={setImagePreview}
        imagePreview={imagePreview}
        handleImage={handleImage}
        imageText={imageText}
        loading={loading}
      />
    </div>
  );
};

export default AddEvents;
