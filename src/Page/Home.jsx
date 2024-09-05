import BestSeller from "../Compontnes/BestSeller";
import Disquent from "../Compontnes/Disquent";
import Hero from "../Compontnes/Hero";
import LatestCollection from "../Compontnes/LatestCollection";


const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <LatestCollection></LatestCollection>
      <BestSeller></BestSeller>
      <Disquent></Disquent>
    </div>
  );
};

export default Home;