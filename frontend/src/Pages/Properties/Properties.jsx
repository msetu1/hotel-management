import { Helmet } from "react-helmet-async";
import PropertyBanner from "../../components/Common/PropertyBanner";
import Container from "../../components/Shared/Container";
import AllProperties from "../../components/Page/Properties/AllProperties";

const Properties = () => {
  return (
    <div>
      <Helmet>
        <title>StaySphere | Properties </title>
      </Helmet>
      <PropertyBanner />
      <Container>
        <h2 className="text-2xl font-bold text-center mt-10 mb-3">
          Explore Your Dream Properties & Book Today
        </h2>
      </Container>
      <AllProperties/>
    </div>
  );
};

export default Properties;
