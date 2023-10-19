import { Link, Outlet, useLocation } from "react-router-dom";

export const AccommodationDailyPage = (): JSX.Element => {
  const location = useLocation();

  return (
    <div className="w-full h-full flex flex-col gap-9  justify-center items-center">
      <ul className="mt-3 tablet:mt-6 flex gap-3 items-center">
        <li>
          <Link
            to={``}
            className={`p-3 rounded-lg font-bold hover:underline hover:bg-neutral-lighter ${
              location.pathname === "/accommodation" ? "bg-primary-light" : ""
            }`}
          >
            Home
          </Link>
        </li>
        <div className="h-full border border-neutral"></div>
        <li>
          <Link
            to={`status`}
            className={`p-3 rounded-lg font-bold hover:underline hover:bg-neutral-lighter ${
              location.pathname === "/accommodation/status" ? "bg-primary-light" : ""
            }`}
          >
            Status
          </Link>
        </li>
      </ul>
      {<Outlet />}
    </div>
  );
};
