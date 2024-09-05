import BestSeller from "../Compontnes/BestSeller";
import Disquent from "../Compontnes/Disquent";
import LatestCollection from "../Compontnes/LatestCollection";

const Logout = () => {
  return (
    <div>
         <LatestCollection></LatestCollection>
      <BestSeller></BestSeller>
      <Disquent></Disquent>
    </div>
  );
};

export default Logout;