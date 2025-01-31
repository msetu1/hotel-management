import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../../Hooks/useAxiosCommon";
import LoadingSpinner from "../../Common/LoadingSpinner";
import Container from "../../Shared/Container";
import Heading from "../../Common/Heading";
import BuildingCard from "./BuildingCard";

const AllBuildingsData = () => {
    const axiosCommon = useAxiosCommon();
    const { data: buildings = [], isLoading } = useQuery({
      queryKey: ["buildings"],
      queryFn: async () => {
        const { data } = await axiosCommon.get(`/buildings`);
        return data;
      },
    });
    if (isLoading) return <LoadingSpinner />;
    return (
        <Container>
        {buildings && buildings.length > 0 ? (
          <div className="pt-12 grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4  gap-8 gap-y-16">
            {buildings.map((building) => (
              <BuildingCard key={building._id} building={building} />
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center min-h-[calc(100vh-300px)]">
            <Heading
              center={true}
              title="No Rooms Available In This Category!"
              subtitle="Please Select Other Categories."
            />
          </div>
        )}
      </Container>
    );
};

export default AllBuildingsData;