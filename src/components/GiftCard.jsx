import { FaHeart } from "react-icons/fa";
import { MdMessage } from "react-icons/md";

/* eslint-disable react/prop-types */
function GiftCard({ data }) {
  return (
    <div className="w-72 h-[330px] overflow-hidden bg-red-500  shadow-sm">
      <div className="w-full h-72 border border-black rounded-md">
        <img
          className="w-full h-full object-cover object-center"
          src={data.imgSrc}
          alt=""
        />
      </div>
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center justify-center gap-3 text-sm">
          <section className="flex items-center justify-center gap-1">
            <FaHeart />
            <p>{data.likes}</p>
          </section>
          <section className="flex items-center justify-center gap-1">
            <MdMessage />
            <p>{data.comments}</p>
          </section>
        </div>
        <a className="bg-transparent text-sm uppercase " href="/">
          share
        </a>
      </div>
    </div>
  );
}

export default GiftCard;
