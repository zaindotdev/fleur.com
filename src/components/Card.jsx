function Card({ title, para, imgSrc }) {
  return (
    <div className="w-64 h-96 bg-[#bcbcbc] rounded-t-full overflow-hidden relative">
      <img src={imgSrc} className="object-center object-cover h-1/2 w-full" />
      <div className="bg-transparent px-4 flex items-center justify-center flex-col">
        <h1 className="bg-transparent text-xl font-bold mt-3">{title}</h1>
        <p className="bg-transparent text-center text-sm my-2">{para}</p>
        <a className="a bg-transparent mt-2" href="/">
          Read More
        </a>
      </div>
    </div>
  );
}

export default Card;
