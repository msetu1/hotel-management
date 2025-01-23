import { Helmet } from "react-helmet-async";
import Categories from "../../components/Page/Rooms/Categories/Categories";
import AllRooms from "../../components/Page/Rooms/Room/AllRooms";
import Container from "../../components/Shared/Container";

const Rooms = () => {
  return (
    <div className="pt-32 min-h-screen">
      <Helmet>
        <title>StayVista | Vacation Homes & Condo Rentals</title>
      </Helmet>
      <Container>
        <h2 className="text-4xl font-bold ">Rooms</h2>
      </Container>
      {/* category section  */}
      <Categories />
      {/* rooms section  */}
      <AllRooms />
    </div>
  );
};

export default Rooms;
