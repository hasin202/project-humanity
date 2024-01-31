import React from "react";
import Actions from "./types/actions";

type Props = {
  action: Actions;
};

const IndividualAction: React.FC<Props> = ({ action }) => {
  return (
    <>
      <div className="max-w-[100px] max-h-[100px] border border-black p-2 rounded-lg">
        <img src={action.img} alt={action.alt} className="w-full h-full" />
      </div>
      <div>
        <h3 className="text-sm font-bold">{action.title}</h3>
        <p className="text-xs">{action.info}</p>
      </div>
    </>
  );
};

export default IndividualAction;
