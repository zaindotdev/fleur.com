import Button from "../Button";
function Header() {
  const navItems = [
    {
      name: "Collections",
    },
    {
      name: "About",
    },
    {
      name: "Contact",
    },
  ];
  return (
    <div className="w-full h-[80px] flex items-center justify-around">
      <h1 className="nav font-bold text-[8vh] cursor-pointer">Fleur</h1>
      <ul className="flex items-center justify-center gap-10">
        {navItems.map((item, index) => (
          <li key={index}>
            <a className="text-sm font-semibold" href="">
              {item.name}
            </a>
          </li>
        ))}
        <Button
          type={"submit"}
          bgColor={"bg-[#F18D52]"}
          className={"text-sm font-semibold tracking-wider px-6"}
        >
          SHOP
        </Button>
      </ul>
    </div>
  );
}

export default Header;
