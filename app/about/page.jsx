import AboutUs from "./AboutUs";
import Achievements from "./Achievements";
import Hero from "./Hero";
import OurMission from "./OurMission";
import OurTeam from "./OurTeam";
import WorldClass from "./WorldClass";

const About = () => {
  return <main className="max-width">
    <Hero/>
    <AboutUs/>
    <OurMission/>
    <WorldClass/>
    <Achievements/>
    <OurTeam/>
  </main>;
};

export default About;
