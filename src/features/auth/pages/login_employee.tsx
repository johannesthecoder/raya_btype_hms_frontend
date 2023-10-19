import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { jsonToEmployeeReadModel } from "../models/employee_model";
import { LoadingPage } from "../../../core/components/loading_page";
import { findEmployeeByPinCode } from "../repository/employee_repository";
import { useAppDispatch, useAppSelector } from "../../../core/hooks";
import { loginAnEmployee } from "../slice/auth_slice";
import { toggleCurrentPageLoading } from "../../../core/root_slice";
import { ErrorBaseModel } from "../../../core/models/error";

export const LoginEmployeePage = (): JSX.Element => {
  const [pinCode, setPinCode] = useState<string>("");
  const [currentErrorMessage, setCurrentErrorMessage] = useState<string>("");

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const currentPageIsLoading = useAppSelector((state) => state.root.currentPageIsLoading);

  function handlePinCodeUpdate(newPinCode: string) {
    if (newPinCode.length === 0) {
      setPinCode("");
    } else {
      if (/^[0-9]+$/.test(newPinCode)) setPinCode(newPinCode);
    }
  }

  const handleSubmission = async () => {
    dispatch(toggleCurrentPageLoading());
    findEmployeeByPinCode(pinCode)
      .then((result: any) => {
        dispatch(loginAnEmployee(jsonToEmployeeReadModel(result)));
        navigate("/");
      })
      .catch((error: ErrorBaseModel) => {
        setCurrentErrorMessage(error.message);
      })
      .finally(() => {
        dispatch(toggleCurrentPageLoading());
      });
  };

  return (
    <div className="p-3 rounded-lg text-3xl font-bold">
      <div className="w-72 text-sm font-normal flex justify-center items-center text-failure text-center">
        {currentErrorMessage}
      </div>
      <input
        type="password"
        id="login-pinCode-input"
        placeholder="Enter your code"
        value={pinCode}
        className="w-72 h-16 text-center rounded-lg outline-none"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          handlePinCodeUpdate(event.target.value);
        }}
        onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
          if (event.key === "Enter" || event.key === " ") handleSubmission();
        }}
        autoFocus={true}
      />
      <div className="relative">
        {currentPageIsLoading ? <LoadingPage></LoadingPage> : <></>}
        <div className="mt-6 h-96 grid grid-cols-3 gap-1">
          {["1", "2", "3", "4", "5", "6", "7", "8", "9", "❌", "0", "👍"].map(
            (buttonValue: string) => (
              <button
                key={`login-keyboard-${buttonValue}`}
                className={`border hover:border-primary hover:text-primary rounded-lg flex justify-center items-center ${
                  buttonValue === "❌"
                    ? "hover:border-failure"
                    : buttonValue === "👍"
                    ? "hover:border-success"
                    : "hover:border-neutral-grey"
                }`}
                onClick={() => {
                  if (buttonValue === "❌") setPinCode(pinCode.slice(0, pinCode.length - 1));
                  else if (buttonValue === "👍") handleSubmission();
                  else handlePinCodeUpdate(`${pinCode}${buttonValue}`);

                  document.getElementById("login-pinCode-input")?.focus();
                }}
              >
                {buttonValue}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};
