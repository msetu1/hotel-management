import { Helmet } from "react-helmet-async";
import EventsBanner from "../../components/Common/EventsBanner";
import AllEvents from "../../components/Page/Events/AllEvents";
import Container from "../../components/Shared/Container";

const Events = () => {
  return (
    <div>
      <Helmet>
        <title>StayVista | Vacation Homes & Condo Rentals</title>
      </Helmet>

      <EventsBanner />
      <Container>
        <h2 className="text-2xl font-bold text-center mt-10 mb-3">
          Explore Your Dream Events & Book Today
        </h2>
      </Container>
      <AllEvents />
    </div>
  );
};

export default Events;
