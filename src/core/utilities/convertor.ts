import { ErrorTypes } from "../constants/local_constants";
import { ErrorBaseModel } from "../models/error";
import { throwInvalidDataType } from "./thrower";

export const toBoolean = (data: any): boolean => {
  if (typeof data === "boolean") return data;
  if (typeof data === "number") return data > 0 ? true : false;
  if (typeof data === "string")
    return ["yes", "yep", "yeah", "true", "correct", "t", "y", "okay"].includes(data)
      ? true
      : false;

  const error: ErrorBaseModel = {
    name: ErrorTypes.invalidDataType,
    message: `expected a boolean data but instead got "${data} => ${typeof data}"`,
  };

  throw error;
};

export const toNumber = (data: any): number => {
  if (typeof data === "number") return data;
  if (typeof data === "string" && !isNaN(parseFloat(data))) return parseFloat(data);

  const error: ErrorBaseModel = {
    name: ErrorTypes.invalidDataType,
    message: `expected a number data but instead got "${data} => ${typeof data}"`,
  } as ErrorBaseModel;
  throw error;
};

export const toEnum = <E>({ data, mapping }: { data: string; mapping: Record<string, E> }): E => {
  if (Object.keys(mapping).includes(data)) return mapping[data];

  const error: ErrorBaseModel = throwInvalidDataType({ data: data });
  throw error;
};

export const toDate = (data: any): Date => {
  const timestamp = Date.parse(data);

  if (!isNaN(timestamp)) {
    const parsedDate = new Date(timestamp);
    if (!isNaN(parsedDate.getTime())) return parsedDate;
  }

  const error: ErrorBaseModel = {
    name: ErrorTypes.invalidDataType,
    message: `expected a valid date-time value but instead got "${data}}"`,
  } as ErrorBaseModel;
  throw error;
};
