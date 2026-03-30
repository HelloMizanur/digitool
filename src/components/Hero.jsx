import { RxVideo } from "react-icons/rx";
import rounder from "../assets/group-5.png";
import banner from "../assets/banner.png";
import UserRating from "./UserRating";
const Hero = () => {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={banner} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <div>
              <span className="bg-[#9514fa]/20 p-2 rounded-2xl text-[#9514fa] flex gap-2 items-center w-fit">
                <img src={rounder} alt="Rounded" className="w-5 h-5" />
                New: AI-Powered Tools Available
              </span>
            </div>
            <h1 className="text-3xl md:text-6xl font-bold pt-5">
              Supercharge Your Digital Workflow
            </h1>
            <p
              className="py-6 text-gray-500
           pr-30"
            >
              Access premium AI tools, design assets, templates, and
              productivity software—all in one place. Start creating faster
              today. Explore Products
            </p>
            <div className="space-x-2">
              <button className="btn text-xl bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-2xl text-white border-none">
                Explore Products
              </button>
              <button className="btn border-2 text-xl font-bold border-[#4f39f6] rounded-2xl bg-linear-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent">
                <RxVideo className="text-[#9514fa]" /> Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>
      <UserRating />
    </>
  );
};

export default Hero;
