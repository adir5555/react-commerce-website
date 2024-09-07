import BestSeller from "../Compontnes/BestSeller";
import Disquent from "../Compontnes/Disquent";
import LatestCollection from "../Compontnes/LatestCollection";


const Collection = () => {
 
  return (

    <div className="mt-40">
       <LatestCollection></LatestCollection>
      <BestSeller></BestSeller>
      <Disquent></Disquent>
    </div>
  );
};

export default Collection;