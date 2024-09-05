

const Best = ({sellerB}) => {
  const { image, price } = sellerB;
  return (
    <div className="">
    <div className="overflow-hidden">
      <figure>
        <img className='hover:scale-110 transition ease-in-out'
          src={image}
          alt="Shoes" />
      </figure>
    </div>
    <div className="my-6">
      <p className="text-xl my-2">If a dog chews shoes whose shoes does he choose?</p>
      <p className="text-2xl">Price: ${price}</p>
    </div>
  </div>
  );
};

export default Best;