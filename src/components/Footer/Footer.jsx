export default function Footer() {
  const h5s = [
    "Contact us",
    "ordering & payments",
    "shipping",
    "returns",
    "faq",
    "sizing guide",
  ];
  const contactInfo = ["+923421031334", "user@user.com", "Find a store"];
  return (
    <div className="w-full h-[600px] ">
      <div className="w-full h-2/3 bg-white pt-20 flex items-center justify-center">
        <div className="w-[500px] h-full bg-[#aaaaaa] px-10 rounded-t-full flex items-center justify-center flex-col">
          <h1 className="text-[2vw] bg-transparent capitalize">
            Talk to our staff
          </h1>
          <p className="text-center w-full bg-transparent my-6 font-light tracking-tight text-[12px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora vel
            inventore rem? Esse animi, atque quia officiis voluptatum fugit
            doloremque aliquid eveniet dicta, minus fuga?
          </p>
          <button
            className="py-2 px-6 bg-[#dadada] rounded-sm shadow-xl"
            type="button"
          >
            Let&apos;s Talk
          </button>
        </div>
      </div>

      <div className="w-full flex items-center justify-between px-20 py-10">
        <div>
          <h1 className="nav font-bold text-3xl tracking-wide">Fleur</h1>
          <p className="text-[12px] font-semibold uppercase">
            Copyright&copy; All rights reserved.
          </p>
          <div className="mt-10">
            <input
              className="p-2 bg-white rounded-sm"
              placeholder="Email Address"
              type="email"
              name="email"
              id="email"
            />
            <button
              type="button"
              className="py-2 px-6 outline-none bg-[#aaaaaa] ml-5 rounded-sm shadow-sm"
            >
              Subscribe
            </button>
          </div>
        </div>
        <div className="flex items-start justify-center gap-10">
          <div>
            {contactInfo.map((info) => (
              <h5 key={info} className="text-[12px] uppercase">
                {info}
              </h5>
            ))}
          </div>
          <div>
            {h5s.map((footer) => (
              <h5 key={footer} className="text-[12px] uppercase">
                {footer}
              </h5>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
