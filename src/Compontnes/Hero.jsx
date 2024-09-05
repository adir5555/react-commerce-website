import Marquee from "react-fast-marquee";
import photos from '../assets/processor/amd Ryzen 7 3700X with Wraith Prism & RGB LED Cooler (100-100000071BOX) 3.6 Ghz Upto 4.4 Ghz AM4 Socket 8  2.webp';
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div >
      <div className="mt-36">
        <Marquee pauseOnHover={true} className="bg-slate-50 text-3xl "
          direction={"left" | "right" | "up" | "down"} >
          <p className="mr-36">Welcome to my store, thank you for shopping.</p>
          <p className="mr-36">Thank you for visiting my store.</p>
          <p className="mr-36">Will come again thanks.</p>
        </Marquee>
      </div>
      {/*  */}


      <div className="hero bg-base-200 mt-16 py-5 border border-indigo-600 ">

        <div className="hero-content flex-col gap-32 lg:flex-row-reverse">
          <img
            src={photos}
            className="max-w-sm rounded-lg shadow-2xl" />
          <div>

            <p className="uppercase"> ---our bestsellers <br /><small className="text-3xl font-normal">latest arrivals</small><br /> shop now---</p>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi<br /> exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>

            <Link to='/Prodect'>
              <button className="btn btn-outline btn-accent">Prodect</button>
            </Link>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Hero;