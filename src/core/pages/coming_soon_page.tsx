import { Link } from "react-router-dom";
import { IoReturnUpBackOutline } from "react-icons/io5";
import pageNotFoundImage from "../../assets/images/undraw_under_construction_-46-pa.svg";

export function ComingSoonPage({ pageName }: { pageName: string }): JSX.Element {
  return (
    <div className="h-full w-full flex flex-col gap-9 justify-center items-center text-neutral">
      <img src={pageNotFoundImage} alt="pageNotFound-404" className="h-1/4" />
      <p className="text-xl">
        We are working on "<span className="font-bold">{pageName} - Page</span>". It'll be available
        soon{" "}
      </p>
      <Link
        to={`/`}
        className="flex gap-5 justify-center items-center bg-main py-2 px-5 text-white"
      >
        <span>Go back</span>
        <IoReturnUpBackOutline className="text-3xl" />
      </Link>
    </div>
  );
}
