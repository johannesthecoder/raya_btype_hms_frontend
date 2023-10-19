import {
  AccessLevels,
  AccessLevelsMapping,
  JobTitles,
  JobTitlesMapping,
} from "../../../core/constants/app_constants";
import { EmployeeResourcePermissions } from "../../../core/models/employee_resource_permission";
import { toEnum } from "../../../core/utilities/convertor";
import { throwInvalidDataType } from "../../../core/utilities/thrower";
import { validatePinCode } from "../utilities/validate_pin_code";

interface EmployeeBaseModel {
  _id: string;
  name: {
    firstName: string;
    lastName: string;
    middleName?: string;
  };
  phoneNumber: string;
  pinCode: string;
  jobTitle: JobTitles;
  accessLevel: EmployeeResourcePermissions;
}

export interface EmployeeCreateModel extends Omit<EmployeeBaseModel, "_id"> {}

export interface EmployeeReadModel extends Omit<EmployeeBaseModel, "pinCode"> {}

export function jsonToEmployeeBaseModel(json: any, omit: string[] = []): any {
  let employee = {} as EmployeeBaseModel;

  if (!validatePinCode(json["pinCode"]))
    throw throwInvalidDataType({
      data: json["pinCode"],
      more: "Pin code only be digits characters.",
    });

  employee._id = json["_id"];
  employee.name = {
    firstName: json["name"]["firstName"],
    lastName: json["name"]["lastName"],
    middleName: json["name"]["middleName"],
  };
  employee.phoneNumber = json["phoneNumber"];
  employee.pinCode = json["pinCode"];
  employee.jobTitle = toEnum<JobTitles>({ data: json["jobTitle"], mapping: JobTitlesMapping });
  employee.accessLevel = {
    employees: json["accessLevel"]["employees"]
      ? toEnum<AccessLevels>({
          data: json["accessLevel"]["employees"],
          mapping: AccessLevelsMapping,
        })
      : AccessLevels.noAccess,
    rooms: json["accessLevel"]["employees"]
      ? toEnum<AccessLevels>({
          data: json["accessLevel"]["rooms"],
          mapping: AccessLevelsMapping,
        })
      : AccessLevels.noAccess,
    guests: json["accessLevel"]["employees"]
      ? toEnum<AccessLevels>({
          data: json["accessLevel"]["guests"],
          mapping: AccessLevelsMapping,
        })
      : AccessLevels.noAccess,
    reservations: json["accessLevel"]["employees"]
      ? toEnum<AccessLevels>({
          data: json["accessLevel"]["reservations"],
          mapping: AccessLevelsMapping,
        })
      : AccessLevels.noAccess,
    bookings: json["accessLevel"]["employees"]
      ? toEnum<AccessLevels>({
          data: json["accessLevel"]["bookings"],
          mapping: AccessLevelsMapping,
        })
      : AccessLevels.noAccess,
    payments: json["accessLevel"]["employees"]
      ? toEnum<AccessLevels>({
          data: json["accessLevel"]["payments"],
          mapping: AccessLevelsMapping,
        })
      : AccessLevels.noAccess,
    expenses: json["accessLevel"]["employees"]
      ? toEnum<AccessLevels>({
          data: json["accessLevel"]["expenses"],
          mapping: AccessLevelsMapping,
        })
      : AccessLevels.noAccess,
    commissions: json["accessLevel"]["employees"]
      ? toEnum<AccessLevels>({
          data: json["accessLevel"]["commissions"],
          mapping: AccessLevelsMapping,
        })
      : AccessLevels.noAccess,
  };

  return employee;
}

export function jsonToEmployeeCreateModel(json: any): EmployeeCreateModel {
  const employee: EmployeeCreateModel = jsonToEmployeeBaseModel({
    ...json,
    _id: "1234567890abcdef1234567890abcdef",
  });
  return employee;
}

export function jsonToEmployeeReadModel(json: any): EmployeeReadModel {
  console.log(json);
  try {
    const employee: EmployeeReadModel = jsonToEmployeeBaseModel({ ...json, pinCode: "0000" });
    return employee;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
