import { Outlet } from "react-router-dom";
import { AccommodationSideBar } from "../components/side_bar";

export const AccommodationPage = (): JSX.Element => {
  return (
    <div className="w-full h-full p-1.5 flex flex-col tablet:flex-row gap-3 tablet:gap-12">
      <div className="">
        <AccommodationSideBar />
      </div>
      <div className="grow h-full flex overflow-auto ">
        <Outlet />
      </div>
    </div>
  );
};
