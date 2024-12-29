const Footer = () => {
  return (
    <div className="bg-[#EFF0F2]">
      <footer className="footer text-base-content px-10 py-16">
        <aside>
          <span className="font-bold text-3xl font-lobster">
            Stay<span>Sphere</span>
          </span>
          <p className="max-w-[400px] mt-4">
            StaySphere is a cutting-edge hotel management system designed to
            streamline operations, enhance guest experiences, and optimize
            overall efficiency. The name (StaySphere) reflects a holistic
            approach, creating a unified `sphere` where every aspect of hotel
            management comes together seamlessly.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">HELP CENTER</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">CONTACT INFO</h6>
          <a className="link link-hover">Phone: 017-----</a>
          <a className="link link-hover">Email:msetu5763@gmail.com</a>
          <a className="link link-hover">Location: 100 Smart Street, LA, UA</a>
        </nav>
      </footer>
      <hr className="my-6 border-gray-200 md:my-10 " />

      <div className="flex flex-col items-center sm:flex-row sm:justify-between px-7 pb-10">
        <p className="text-sm text-gray-500 ">
          © Copyright 2021. All Rights Reserved.
        </p>

        <h2>Created with love by thecreation.design</h2>
      </div>
    </div>
  );
};

export default Footer;
