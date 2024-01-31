import IndividualAction from "./individual-action";
import { actionsData } from "@/public/actions-data";

const Actions = () => {
  return (
    <div className="w-full flex flex-col text-xl px-12 justify-start gap-8">
      <h2 className="font-bold text-2xl">Actions we take</h2>
      <div className="flex flex-col gap-4">
        {actionsData.map((action, i) => {
          return (
            <div
              key={i}
              className="grid grid-cols-[auto_1fr] gap-2 items-center"
            >
              <IndividualAction action={action} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Actions;
