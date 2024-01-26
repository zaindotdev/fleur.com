import bgOne from "../assets/bg-one.jpg";
import Button from "./Button";
import {
  FaArrowRight,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";
export default function Hero() {
  return (
    <div
      className="w-full h-[500px] bg-center bg-cover relative"
      style={{
        background: `url(${bgOne}) no-repeat`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute w-full h-full bg-transparent z-20 flex flex-col items-center justify-center ">
        <h1 className="text-[4vw] bg-transparent text-white">
          Custom Flower Bouquets
        </h1>
        <p className="bg-transparent text-white font-semibold text-[24px] my-6">
          Free Delivery on orders over $79
        </p>
        <Button
          type={"button"}
          className={
            "bg-[#8e9473] tracking-tight px-6 py-2 text-sm font-semibold hover:bg-[#6C7057] transition-all duration-200"
          }
        >
          SHOP
        </Button>

        <div className="w-full bg-transparent absolute bottom-5 left-0 flex items-center justify-between">
          <div className="w-1/2 bg-transparent text-white flex items-center justify-center gap-6">
            <FaInstagram className="bg-transparent cursor-pointer" />
            <FaTwitter className="bg-transparent cursor-pointer" />
            <FaFacebookF className="bg-transparent cursor-pointer" />
            <FaEarthAmericas className="bg-transparent cursor-pointer" />
          </div>
          <div className="w-1/2 bg-transparent text-white flex items-center justify-center gap-1">
            <h2 className="bg-transparent">Dried Pampas Collections</h2>
            <FaArrowRight className="text-xl bg-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
}
