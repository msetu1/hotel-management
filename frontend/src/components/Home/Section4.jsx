import Button from "../Banner/Button";

const Section4 = () => {
  return (
    <div className="mt-16">
      <div className="hero bg-base-200 min-h-[550px]" >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div>
            <h1 className="text-5xl font-bold">Try Hosting With Us</h1>
            <p className="py-6 mr-20">
              Try Hosting With Us" is a warm and inviting statement that
              encourages potential users to explore the benefits of partnering
              with a platform or service designed to simplify and enhance their
              hosting experience. The phrase suggests a collaborative approach,
              emphasizing that the user is not alone in their hosting journey.
              It conveys the idea that the service is not just a tool but a
              supportive partner committed to helping users succeed in managing
              their properties or enhancing their hospitality offerings. <br /> <br />
              This tagline resonates with trust and approachability, making
              users feel confident about trying something new. It subtly
              promises a seamless, stress-free experience, implying that hosting
              with the platform will bring improvements, efficiency, and
              satisfaction. The use of "try" softens the commitment, making it
              feel like a low-risk opportunity to discover something valuable.
              The inclusion of "us" creates a sense of partnership, highlighting
              a shared goal of delivering exceptional hosting services and guest
              experiences. Ultimately, "Try Hosting With Us" reflects confidence
              in the quality of the offering and an invitation to experience the
              difference firsthand. It’s an appealing call to action for anyone
              looking to elevate their hosting game.
            </p>
            <Button buttonName={`Become A Host`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
