import Banner from "../../components/Banner/Banner";
import MealsByCategory from "../../components/Home/MealsByCategory";
import Section1 from "../../components/Home/Section1";
import Section2 from "../../components/Home/Section2";
import Section3 from "../../components/Home/Section3";
import Section4 from "../../components/Home/Section4";
import Section5 from "../../components/Home/Section5";
import Section6 from "../../components/Home/Section6";
import Section7 from "../../components/Home/Section7";
import Section9 from "../../components/Home/Section9";

const Home = () => {
    return (
        <div>
            <Banner/>
            <div className="mx-10 my-20">
            <Section1/>
            <MealsByCategory/>
            <Section2/>
            <Section3/>
            <Section4/>
            <Section5/>
            <Section6/>
            <Section7/>
            <Section9/>
            </div>
        </div>
    );
};

export default Home;