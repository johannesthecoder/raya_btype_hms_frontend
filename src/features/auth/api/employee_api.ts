import { employees } from "../../../assets/dummy_data/employees";
import { ErrorTypes } from "../../../core/constants/local_constants";
import { ErrorBaseModel } from "../../../core/models/error";
import { EmployeeReadModel } from "../models/employee_model";

// export const findEmployeeByFilterAPI = async ({name, phoneNumber, jobTitle}: {name: string, phoneNumber: string, jobTitle: JobTitles}): Promise<ErrorBaseModel | EmployeeReadModel> => {}
// export const findEmployeeByIdAPI = async (_id: string): Promise<ErrorBaseModel | EmployeeReadModel> => {}
export const findEmployeeByPinCodedAPI = async (
  pinCode: string
): Promise<ErrorBaseModel | EmployeeReadModel> => {
  const matchedEmployee = employees.find((employee: any) => {
    return employee.pinCode === pinCode;
  });

  await new Promise((res) => setTimeout(res, 100));

  return matchedEmployee
    ? (matchedEmployee as EmployeeReadModel)
    : ({ message: "employee not found", name: ErrorTypes.notFound } as ErrorBaseModel);
};
