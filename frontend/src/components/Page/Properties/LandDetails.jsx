import { useParams } from "react-router-dom";
import useAxiosCommon from "../../../Hooks/useAxiosCommon";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../Common/LoadingSpinner";
import EventReservation from "../Events/EventReservation";
import { Helmet } from "react-helmet-async";
import PropertyDetailsBanner from "./PropertyDetailsBanner";
import Heading from "../../Common/Heading";

const LandDetails = () => {
    const { id } = useParams();
    const axiosCommon = useAxiosCommon();
    const {
      data: land = {},
      isLoading,
      refetch,
    } = useQuery({
      queryKey: ["land", id],
      queryFn: async () => {
        const { data } = await axiosCommon.get(`/land/${id}`);
        return data;
      },
    });
    console.log(land);
    if (isLoading) return <LoadingSpinner />;
    return (
      <div>
      <Helmet>
        <title>Properties / Details</title>
      </Helmet>
      <PropertyDetailsBanner eventImg={land?.image} />
      {land && (
        <div className="max-w-screen-lg mx-auto mt-10">
          {/* Header */}
          <div className="flex flex-col gap-6">
            <div className="mt-10">
              <Heading title={land?.title} subtitle={land?.location} />
              <div className="w-full md:h-[60vh] overflow-hidden rounded-xl ">
                <img
                  className="object-cover w-full"
                  src={land?.image}
                  alt="header image"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6">
            {/* land Info */}
            <div className="col-span-4 flex flex-col gap-8">
              <div className="flex  justify-between">
                <div className="flex flex-col gap-2">
                  <div
                    className="
                text-xl 
                font-semibold 
                flex 
                flex-row 
                items-center
                gap-2
              "
                  >
                    <div>Hosted by {land?.host?.name}</div>

                    <img
                      className="rounded-full"
                      height="30"
                      width="30"
                      alt="Avatar"
                      src={land?.host?.image}
                    />
                  </div>
                  <div
                    className="
                flex 
                flex-row 
                items-center 
                gap-4 
                font-light
                text-neutral-500
              "
                  >
                    <div className="flex items-center gap-2 font-bold">
                      Price : ${land?.price}
                    </div>
                  </div>
                </div>
                <div>
                  <span className="px-3 py-1 bg-red-100 text-red-900 hover:bg-red-200 rounded-full text-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 font-medium">
                    {land.category}
                  </span>
                  <div className="mt-3">
                    <h2 className="flex items-center gap-2 font-bold text-neutral-500">
                      Land Area :
                    </h2>
                  </div>
                </div>
              </div>
              <hr />
              <div className=" flex justify-between items-center">
                <div>
                  <div className="mt-4">
                    <p className=" text-gray-600">
                      <strong>Investment:</strong>{" "}
                      {land?.investment || "Not selected"}
                    </p>
                    <p className=" text-gray-600">
                      <strong>Road Access:</strong>{" "}
                      {land?.roadAccess || "Not selected"}
                    </p>
                  </div>
                </div>
                <div>
                  <p className=" text-gray-600">
                    <strong>Parking Availability:</strong>{" "}
                    {land?.parking_availability ? "Yes":'No'}
                  </p>
                  <p className=" text-gray-600">
                    <strong>Property Tax:</strong>{" "}
                    {land?.property_tax && "Ok"}
                  </p>
                </div>
              </div>

              <div className="text-lg font-semibold flex items-center gap-5">
                <h2 className="">
                  Ownership Type : {land?.ownership_type}
                </h2>
                /<h2 className="my-2"> {land?.legal_status}</h2>/
                <h2 className=""> {land?.sale_status}</h2>
              </div>

              <hr />
              <div
                className="
          text-lg font-light text-neutral-500"
              >
                {land?.description}
              </div>
              <hr />
            </div>

            <div className="md:col-span-3 order-first md:order-last mb-10">
              {/* RoomReservation */}
              <EventReservation land={land} refetch={refetch} />
            </div>
          </div>
        </div>
      )}
    </div>
    );
};

export default LandDetails;