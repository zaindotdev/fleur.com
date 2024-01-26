import gift from "../assets/gift.jpg";
import GiftCard from "./GiftCard";
import card1 from "../assets/card1.jpg";
import card2 from "../assets/card2.jpg";
import card3 from "../assets/card3.jpg";
function Gift() {
  const giftCard = [
    {
      imgSrc: card1,
      likes: "605",
      comments: "100",
    },
    {
      imgSrc: card2,
      likes: "10k",
      comments: "1k",
    },
    {
      imgSrc: card3,
      likes: "400",
      comments: "24",
    },
  ];
  return (
    <div className="w-full min-h-screen py-10">
      <div className="w-full h-[400px] relative flex items-start justify-around bg-white">
        <div className="w-1/3 h-96 flex items-center justify-center flex-col p-10 bg-transparent mt-10">
          <h2 className="text-[#6C7057] font-semibold bg-transparent uppercase">
            Remember your loved ones
          </h2>
          <h1 className="text-[2vw] mt-5 bg-transparent">
            Gift Ideas that Last Longer
          </h1>
          <p className="w-[500px] text-sm text-center my-4 bg-transparent">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit sapiente tempore sit rem modi laudantium error neque
            dolore optio, est officiis magni exercitationem quis nisi saepe.
            Praesentium commodi aut nemo facere, repellendus veniam aliquid
            voluptatem, quas pariatur error cupiditate temporibus explicabo,
            iure vero voluptates perferendis at autem hic libero ea!
          </p>
          <button className="py-2 px-6 uppercase outline-none tracking-tight bg-[#F18D52] rounded-sm">
            Let&apos;s go
          </button>
        </div>
        <div className="w-1/3 h-[550px] rounded-b-full overflow-hidden">
          <img
            className="w-full h-full object-center object-cover"
            src={gift}
            alt=""
          />
        </div>
      </div>
      <div className="w-full flex items-center justify-center flex-col mt-20">
        <h1 className="text-md text-[#aaa] font-semibold uppercase">
          Dried FLower Collection
        </h1>
        <h1 className="text-[2vw] mt-2">See What&apos;s popular</h1>
        <div className="w-[80%] flex items-center justify-around mt-20">
          {giftCard.map((card) => (
            <div key={card.likes}>
              <GiftCard data={card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gift;
