import IndividualAction from "./individual-action";
import { actionsData } from "@/public/actions-data";

const Actions = () => {
  return (
    <div className="w-full flex flex-col text-xl px-12 justify-start gap-8 lg:px-28 xl:px-44 2xl:px-80">
      <h2 className="w-full font-bold text-2xl sm:text-3xl md:text-center">
        Actions we take
      </h2>
      <div className="flex flex-col gap-4 md:flex-row md:justify-between">
        {actionsData.map((action, i) => {
          return (
            <div key={i}>
              <IndividualAction action={action} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Actions;
