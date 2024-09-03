import Marquee from "react-fast-marquee";

const Hero = () => {
  return (
    <div className="mt-5">
      <Marquee pauseOnHover={true} className="bg-slate-50 text-3xl"
       direction={"left" | "right" | "up" | "down"}
       >
      
        <p className="mr-36">Welcome to my store, thank you for shopping.</p>
        <p className="mr-36">Thank you for visiting my store.</p>
        <p>Will come again thanks.</p>
      </Marquee>
    </div>
  );
};

export default Hero;