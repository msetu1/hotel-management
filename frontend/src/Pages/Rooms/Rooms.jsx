import { Helmet } from "react-helmet-async";
import Categories from "../../components/Page/Rooms/Categories/Categories";
import AllRooms from "../../components/Page/Rooms/Room/AllRooms";
import Container from "../../components/Shared/Container";
import RoomBanner from "../../components/Common/RoomBanner";

const Rooms = () => {
  return (
    <div className=" min-h-screen">
      <RoomBanner/>
      <Helmet>
        <title>StayVista | Vacation Homes & Condo Rentals</title>
      </Helmet>
      <Container>
        <h2 className="text-2xl font-bold text-center mt-10 mb-3">Explore Your Dream Room & Book Today</h2>
      </Container>
      {/* category section  */}
      <Categories />
      {/* rooms section  */}
      <AllRooms />
    </div>
  );
};

export default Rooms;
