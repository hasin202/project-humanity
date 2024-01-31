const Footer = () => {
  return (
    <div className="w-full pt-8 border-t">
      <div className="px-12">
        <h2 className="font-black">
          PROTECT <span className="text-sky-500">HUMANITY</span>
        </h2>
        <p className="text-xs">
          Any act of kindness can ripple across the world.
        </p>
        <div className="mt-4 flex justify-between">
          <a
            href="mailto: protect.humanity.uk@gmail.com"
            className="border border-sky-500 text-sky-500 font-semibold px-2 rounded-lg text-sm flex items-center"
          >
            GET IN TOUCH
          </a>
          <a
            href="https://www.instagram.com/protect_humanity?igsh=YWJ6djluNWZ4Z2J3"
            target="_blank"
          >
            <img
              src="/instagram.svg"
              className="w-6 h-6"
              alt="instagram icon"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
