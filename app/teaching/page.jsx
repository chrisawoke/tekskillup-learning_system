import TeachingHero from "./TeachingHero";
import Impression from "./Impression";
import Join from "./Join";
import Reasons from "./Reasons";
import Support from "./Support";
import Teacher from "./Teacher";
import ToBegin from "./ToBegin";

const page = () => {
  return (
    <main className="max-width">
      <TeachingHero />
      <Reasons />
      <Impression />
      <ToBegin />
      <Teacher />
      <Support />
      <Join />
    </main>
  );
};

export default page;
