import { useNavigate } from "react-router-dom";
import { useRouteError } from "react-router-dom";
import { RiArrowGoBackLine } from "react-icons/ri";
import pageNotFoundImage from "../../assets/images/undraw_page_not_found_re_e9o6.svg";
import { PrimaryButton } from "../components/primary_button";
import { ErrorMessage } from "../components/error_message";
import { ErrorTypes } from "../constants/local_constants";

export const PageNotFoundPage = (): JSX.Element => {
  const error: any = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="h-full w-full flex flex-col gap-9 justify-center items-center text-neutral">
      <img src={pageNotFoundImage} alt="pageNotFound-404" className="h-1/4" />

      <ErrorMessage
        type={ErrorTypes.notFound.toLocaleLowerCase() + "😱"}
        message={(error.statusText || error.message).toLocaleLowerCase()}
      />

      <PrimaryButton
        onClick={() => {
          navigate(-1);
        }}
        suffix={<RiArrowGoBackLine className="text-2xl" />}
      >
        go back 😮‍💨
      </PrimaryButton>
    </div>
  );
};
