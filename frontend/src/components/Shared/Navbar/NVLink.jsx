import { Link } from "react-router-dom";

const NVLink = () => {
  return (
    <>
      <li className="hover:underline hover:underline-offset-4 ">
        <Link to="/">
          <div>Home</div>
        </Link>
      </li>

      <li className="hover:underline hover:underline-offset-4 ">
        <Link to="/meals">
          <div>Meals</div>
        </Link>
      </li>
      <li className="hover:underline hover:underline-offset-4 ">
        <Link to="/rooms">
          <div>Rooms</div>
        </Link>
      </li>
      <li className="hover:underline hover:underline-offset-4 ">
        <Link to="/events">
          <div>Events</div>
        </Link>
      </li>
      <li className="hover:underline hover:underline-offset-4 ">
        <Link to="/gallery">
          <div>Gallery</div>
        </Link>
      </li>
      <li className="hover:underline hover:underline-offset-4 ">
        <Link to="/login">
          <div>Login</div>
        </Link>
      </li>
    </>
  );
};

export default NVLink;
