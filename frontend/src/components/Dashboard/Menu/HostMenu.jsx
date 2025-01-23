import { BsFillHouseAddFill } from "react-icons/bs";
import { MdHomeWork, MdOutlineManageHistory } from "react-icons/md";
import { LuTableProperties } from "react-icons/lu";
import MenuItem from "./MenuItem";
import { MdOutlineEventAvailable } from "react-icons/md";

const HostMenu = () => {
  return (
    <>
      <MenuItem icon={BsFillHouseAddFill} label="Add Room" address="add-room" />
      <MenuItem icon={LuTableProperties} label="Add Property" address="add-property" />
      <MenuItem icon={MdOutlineEventAvailable} label="Add Events" address="add-events" />
      <MenuItem icon={MdHomeWork} label="My Listings" address="my-listings" />
      <MenuItem
        icon={MdOutlineManageHistory}
        label="Manage Bookings"
        address="manage-bookings"
      />
    </>
  );
};

export default HostMenu;
