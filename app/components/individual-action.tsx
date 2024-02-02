import React from "react";
import Actions from "./types/actions";

type Props = {
  action: Actions;
};

const IndividualAction: React.FC<Props> = ({ action }) => {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-2 items-center md:flex md:flex-col md:max-w-48 lg:min-w-52 lg:max-w-none">
      <div className="w-[4rem] h-[4rem] border border-black p-2 rounded-lg sm:w-[4.3rem] sm:h-[4.3rem] lg:w-[5rem] lg:h-[5rem]">
        <img src={action.img} alt={action.alt} className="w-full h-full" />
      </div>
      <div>
        <h3 className="text-sm font-bold sm:text-lg md:text-center lg:text-xl">
          {action.title}
        </h3>
        <p className="text-xs sm:text-sm md:text-center lg:text-md">
          {action.info}
        </p>
      </div>
    </div>
  );
};

export default IndividualAction;
