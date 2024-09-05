import UseMenu from "../Hooks/UseMenu";
import Best from "../Maps/Best";

const BestSeller = () => {
  const [menu] = UseMenu();
  const seller= menu.filter(bestSeller => bestSeller.bestseller === true)
  return (
    <div className="mt-12 p-4">
       <div className="md:w-1/3 mx-auto text-center">
        <h3 className="text-4xl py-2 border-y-4 uppercase font-normal">Best seller</h3>
        <p className="m-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, at!</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 gap-y-6 ">
        {
          seller.slice(0, 5).map( sellerB => <Best key={sellerB._id} sellerB={sellerB}></Best>)
        }
      </div>

    </div>
  );
};

export default BestSeller;