type ActionsData = {
  title: string;
  info: string;
  alt: string;
  img: string;
};

export const actionsArr: ActionsData[] = [
  {
    title: "Nourish the Future",
    info: "Delivering meals to children and families, ensuring people don’t go hungry",
    alt: "food on plate icon",
    img: "/nourish.svg",
  },
  {
    title: "Hope for the homless",
    info: "Providing warm, nutritious food to those without homes.",
    alt: "hands holding up heart icon",
    img: "/heart-hands.svg",
  },
  {
    title: "Gifts of joys",
    info: "Offering clothes, shoes, and toys, bringing smiles and comfort to those in need.",
    alt: "gift icon",
    img: "/gift.svg",
  },
  {
    title: "Wells for wellness",
    info: "Supplying clean water to communities, one drop at a time.",
    alt: "well icon",
    img: "/well.svg",
  },
];

const Actions = () => {
  return (
    <div className="w-full flex flex-col text-xl px-12 justify-start gap-4">
      <h2 className="font-bold">Actions we take:</h2>
      <div className="flex flex-col gap-4">
        {actionsArr.map((action, i) => {
          return (
            <div
              key={i}
              className="grid grid-cols-[auto_1fr] gap-2 items-center"
            >
              <div className="max-w-[100px] max-h-[100px] border border-black p-2 rounded-lg">
                <img
                  src={action.img}
                  alt={action.alt}
                  className="w-full h-full"
                />
              </div>
              <div>
                <h3 className="text-sm font-bold">{action.title}</h3>
                <p className="text-xs">{action.info}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Actions;
