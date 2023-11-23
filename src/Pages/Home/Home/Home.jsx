import SectionTitle from "../../../components/SectionTitle";
import Banner from "../Banner/Banner";
import BestSells from "../BestSells/BestSells";
import SectionBanner from "../SectionBanner/SectionBanner";
import SectionCard from "../SectionCard/SectionCard";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <SectionTitle
        heading="Trending On This Week"
        subHeading="Over 800 Pieces Sold In Just 5 Days"></SectionTitle>
      <SectionCard></SectionCard>
      <SectionBanner></SectionBanner>
      <BestSells></BestSells>
    </div>
  );
};

export default Home;
