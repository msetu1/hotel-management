import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-black bg-opacity-60 flex items-center justify-between py-8 fixed z-10 w-full px-7 text-white">
      <div className="">
        <div className="flex gap-2 items-center">
          <img className="w-auto h-7" src="" alt="" />
          <span className="font-bold text-3xl font-lobster">
            Stay<span>Sphere</span>
          </span>
        </div>
      </div>
      <div>
        <ul className="menu menu-horizontal px-1 font-semibold text-[16px]">
          <li>
            <Link to="/">
              <div>Home</div>
            </Link>
          </li>

          <li>
            <div>Meals</div>
          </li>
          <li>
            <div>Share Stories</div>
          </li>
          <li>
            <div>Find a Property</div>
          </li>
          <li>
            <Link to="/gallery">
              <div>Gallery</div>
            </Link>
          </li>
          <Link to="/login">
            <li>
              <div>Login</div>
            </li>
          </Link>
        </ul>
      </div>
      <div className="flex gap-2 items-center">
        <div className="dropdown dropdown-end z-50">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full" title="">
              <img
                referrerPolicy="no-referrer"
                alt="User Profile Photo"
                src=""
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-semibold text-[16px]"
          >
            <li>
              <div>Dashboard</div>
            </li>
            <li className="mt-2">
              <button className="bg-gray-200 block text-center">Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
