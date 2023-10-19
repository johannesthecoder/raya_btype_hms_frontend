import { LoginEmployeePage } from "./login_employee";

export const AuthHomePage = (): JSX.Element => {
  return (
    <div className="w-full h-full flex justify-center items-center text-neutral">
      <LoginEmployeePage />
    </div>
  );
};
