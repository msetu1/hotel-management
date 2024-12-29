import Button from "../Banner/Button";

const Section6 = () => {
  return (
    <div className="mt-16">
      <div className="hero bg-base-200 min-h-[550px]" >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div>
            <h1 className="text-5xl font-bold">Download Our Mobile App</h1>
            <p className="py-6 mr-20">
            Browse For More Properties" is an engaging and straightforward call to action that encourages users to explore a broader range of options within a platform or service. The phrase implies that there is a diverse selection of properties available, catering to different needs, preferences, or interests. It suggests an abundance of choices, which can excite and intrigue potential users, motivating them to continue their search and discover what suits them best.

The word "browse" adds a sense of ease and flexibility to the experience, signaling that users are free to explore at their own pace without any pressure. It evokes a sense of discovery, as though embarking on a journey to find hidden gems or perfect matches among the properties listed. 

<br /> <br />

"More properties" highlights variety and inclusivity, appealing to users with different tastes, budgets, or requirements. It conveys that the platform or service offers something for everyone, whether they're looking for luxury accommodations, budget-friendly stays, or unique options like vacation rentals or hostels.
Overall, "Browse For More Properties" acts as an open invitation for users to delve deeper into the offerings, promising a rewarding and satisfying exploration experience. It inspires curiosity and trust in the platform’s ability to provide ample, high-quality choices.
            </p>
            <Button buttonName={`Find A Property`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
