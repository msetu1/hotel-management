import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../../Hooks/useAxiosCommon";
import LoadingSpinner from "../../Common/LoadingSpinner";
import Container from "../../Shared/Container";
import Heading from "../../Common/Heading";
import LandCard from "./LandCard";

const AllLandsData = () => {
    const axiosCommon = useAxiosCommon();
    const { data: lands = [], isLoading } = useQuery({
      queryKey: ["lands"],
      queryFn: async () => {
        const { data } = await axiosCommon.get(`/lands`);
        return data;
      },
    });
    if (isLoading) return <LoadingSpinner />;
    return (
        <Container>
      {lands && lands.length > 0 ? (
        <div className="pt-12 grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4  gap-8 gap-y-16">
          {lands.map((land) => (
            <LandCard key={land._id} land={land} />
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

export default AllLandsData;