import { findEmployeeByPinCodedAPI } from "../api/employee_api";
import { EmployeeReadModel } from "../models/employee_model";

export const findEmployeeByPinCode = async (pinCode: string): Promise<EmployeeReadModel> => {
  const apiResult = await findEmployeeByPinCodedAPI(pinCode).then();

  if ("_id" in apiResult) return apiResult;
  else throw apiResult;
};
