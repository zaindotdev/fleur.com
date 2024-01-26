import Card from "./Card";
import custom from "../assets/Custom.jpg";
import occasion from "../assets/occansional.jpg";
import Premade from "../assets/Premade.jpg";
export default function Service() {
  const cardContent = [
    {
      title: "Custom Bouquet",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum totam quae ducimus.",
      imgSrc: custom,
    },
    {
      title: "Occasional Bouquet",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum totam quae ducimus.",
      imgSrc: occasion,
    },
    {
      title: "Premade Bouquet",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum totam quae ducimus.",
      imgSrc: Premade,
    },
  ];
  return (
    <div className="w-full h-screen  mt-20 z-10 bg-transparent flex items-center justify-start flex-col">
      <h2 className="text-[#F18D52] font-semibold ">This is what we do</h2>
      <h1 className="font-light text-[4vw]">Our Services</h1>
      <div className="w-[80%] flex items-center justify-around mt-20">
        {cardContent.map((content, index) => (
          <div key={index}>
            <Card
              title={content.title}
              para={content.para}
              imgSrc={content.imgSrc}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
