import Items from "../Maps/Items";
import UseMenu from "../Hooks/UseMenu";

const LatestCollection = () => {
  const [menu] = UseMenu()
  return (
    <div className=" mt-12 p-4">
      <div className="md:w-1/3 mx-auto text-center mb-6">
        <h3 className="text-4xl py-2 border-y-4 uppercase font-normal">latest Collection</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, at!</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 gap-y-6 ">
        {
          menu.slice(0, 7).map(cart => <Items key={cart._id}
            cart={cart}
          ></Items>)
        }
      </div>
    </div>
  );
};

export default LatestCollection;