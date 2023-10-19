import { RoomStatuses } from "../../../../core/constants/app_constants";

export const AccommodationDailyHomePage = (): JSX.Element => {
  return (
    <div className="w-full h-full flex flex-col justify-center">
      {/* ############################################ */}
      <div className="w-full p-1 flex gap-1 text bg-neutral-lighter font-bold rounded-lg">
        <span className="w-6">#</span>
        <span className="grow">Guest Name</span>
        <span className="w-14">Rate</span>
        <span className="w-24">{RoomStatuses.outOfOrder}</span>
      </div>
      <div className="grow flex flex-col">
        <div className="w-full p-1 flex gap-1 ">
          <span className="w-6">#</span>
          <span className="grow">Guest Name</span>
          <span className="w-14">Rate</span>
          <span className="w-24">{RoomStatuses.outOfOrder}</span>
        </div>
        <div className="w-full p-1 flex gap-1 ">
          <span className="w-6">#</span>
          <span className="grow">Guest Name</span>
          <span className="w-14">Rate</span>
          <span className="w-24">{RoomStatuses.outOfOrder}</span>
        </div>
      </div>
    </div>
  );
};
