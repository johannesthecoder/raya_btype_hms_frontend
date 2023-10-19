import { BiLogInCircle } from "react-icons/bi";
import { ErrorMessage } from "../core/components/error_message";
import { Outlet } from "react-router-dom";
import { ErrorTypes } from "../core/constants/local_constants";
import { PrimaryLink } from "../core/components/primary_link";
import { useAppSelector } from "../core/hooks";

export const App = (): JSX.Element => {
  const loggedInEmployee = useAppSelector((state) => state.auth.loggedInEmployee);
  return (
    <>
      {loggedInEmployee ? (
        <div className="h-full w-full grid-cols-2 gap-6 justify-center items-center text-neutral overflow-y-hidden">
          <Outlet />
        </div>
      ) : (
        <div className="h-full w-full flex flex-col gap-6 justify-center items-center border border-red-500 text-neutral">
          <ErrorMessage
            type={ErrorTypes.unauthorized.toLocaleLowerCase() + "😵"}
            message="there is no logged in user found & you need to login to access the system. please click below button to login"
          />
          <PrimaryLink url="auth" suffix={<BiLogInCircle className="text-2xl" />}>
            Let's go & login
          </PrimaryLink>
        </div>
      )}
    </>
  );
};
