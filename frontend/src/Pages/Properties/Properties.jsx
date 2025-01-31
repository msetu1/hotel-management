import { Helmet } from "react-helmet-async";
import PropertyBanner from "../../components/Common/PropertyBanner";
import Container from "../../components/Shared/Container";
import AllProperties from "../../components/Page/Properties/AllProperties";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import AllBuildingsData from "../../components/Page/Properties/AllBuildingsData";
import AllLandsData from "../../components/Page/Properties/AllLandsData";

const Properties = () => {
  return (
    <div>
      <Helmet>
        <title>StaySphere | Properties </title>
      </Helmet>
      <PropertyBanner />
      <Container>
        <h2 className="text-2xl font-bold text-center mt-10 ">
          Explore Your Dream Properties & Book Today
        </h2>
      </Container>

      <Tabs className="w-full  ">
          {/* Tabs Navigation */}
          <TabList className="flex border-b border-gray-300 max-w-[400px] mb-3">
            <Tab
              className="flex-1 text-center py-2 font-semibold text-gray-600 hover:text-rose-500 cursor-pointer"
              selectedClassName="text-rose-500 border-b-2 border-rose-500"
            >
              Building
            </Tab>
            <Tab
              className="flex-1 text-center py-2 font-semibold text-gray-600 hover:text-rose-500 cursor-pointer"
              selectedClassName="text-rose-500 border-b-2 border-rose-500"
            >
              Land
            </Tab>
          </TabList>

          {/* Tab Content */}
          {/* Building */}
          <TabPanel className="bg-white ">
            <AllBuildingsData />
          </TabPanel>
          {/* Land  */}
          <TabPanel className="bg-white ">
            <AllLandsData />
          </TabPanel>
        </Tabs>

      <AllProperties />
    </div>
  );
};

export default Properties;
