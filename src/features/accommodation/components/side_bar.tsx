import {
  IoMenuOutline,
  IoGridOutline,
  IoCalendarOutline,
  IoCashOutline,
  IoPersonOutline,
  IoBedOutline,
  IoLogOutOutline,
  IoRocketOutline,
} from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { useAppDispatch } from "../../../core/hooks";
import { logoutAnEmployee } from "../../auth/slice/auth_slice";

export const AccommodationSideBar = (): JSX.Element => {
  const dispatch = useAppDispatch();

  return (
    <div className="w-full tablet:w-16 tablet:h-full flex flex-row tablet:flex-col gap-1.5 justify-between items-center">
      <div className="py-1.5 flex tablet:flex-col justify-center items-center  rounded-lg">
        <IoRocketOutline className=" text-6xl" />
        <span className="flex flex-col justify-start">
          <h1 className="text-xl font-bold m-0">RAYA</h1>
          <span className="text-sm -mt-2 word" style={{ wordSpacing: "5px" }}>
            B Y T E
          </span>
        </span>
      </div>
      <div className="p-1 hidden phone:flex flex-col rounded-lg">
        <NavItems />
      </div>
      <div className="flex items-center">
        <button
          className="p-3 flex flex-col justify-center items-center rounded-lg hover:bg-primary-light"
          onClick={() => {
            dispatch(logoutAnEmployee());
          }}
        >
          <span className="text-2xl">
            <IoLogOutOutline />
          </span>
          <span className="text-sm">Logout</span>
        </button>
        <button
          className="p-3 phone:hidden flex flex-col justify-center items-center rounded-lg hover:bg-primary-light"
          onClick={() => {
            console.log("Just clicked menu");
            console.log("BEGAN");

            let element: HTMLElement | null = document.getElementById(
              "accommodation-side-bar-dropdown-content"
            );

            if (element !== null) {
              element.style.display = element.style.display !== "flex" ? "flex" : "none";
            }
            console.log("ENDED");
          }}
        >
          <span className="text-2xl">
            <IoMenuOutline />
          </span>
          <span className="text-sm">Menu</span>
          <div
            id="accommodation-side-bar-dropdown-content"
            className="top-16 right-3 absolute p-1 hidden bg-white shadow-lg rounded-lg"
          >
            <NavItems />
          </div>
        </button>
      </div>
    </div>
  );
};

const NavItems = (): JSX.Element => {
  const locationInPieces = useLocation().pathname.split("/");
  const current =
    locationInPieces[1] === "accommodation" &&
    locationInPieces.length > 2 &&
    ["booking", "payments", " guests", "rooms"].includes(locationInPieces[2])
      ? locationInPieces[2]
      : "";
  const sideLinks: { name: string; icons: JSX.Element; url: string }[] = [
    { name: "Daily", icons: <IoGridOutline />, url: "" },
    { name: "Bookings", icons: <IoCalendarOutline />, url: "bookings" },
    { name: "Payments", icons: <IoCashOutline />, url: "payments" },
    { name: "Guests", icons: <IoPersonOutline />, url: "guests" },
    { name: "Rooms", icons: <IoBedOutline />, url: "rooms" },
  ];

  return (
    <ul className="grow flex phone:flex-row tablet:flex-col flex-col gap-1 items-center ">
      {sideLinks.map((sideLink) => (
        <Link
          key={`accommodation-side-link-${sideLink.url}`}
          to={sideLink.url}
          className={`w-24 phone:w-16 tablet:w-full pb-1 pt-2 px-1 flex flex-row phone:flex-col gap-1.5 phone:gap-0 justify-start phone:justify-center items-center ${
            current === sideLink.url
              ? "bg-primary-light text-primary-dark"
              : "hover:text-neutral-dark hover:bg-neutral-lighter"
          }  rounded-lg`}
        >
          <span className="first:text-2xl">{sideLink.icons}</span>
          <span className="text-sm">{sideLink.name}</span>
        </Link>
      ))}
    </ul>
  );
};
