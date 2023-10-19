import { ErrorTypes } from "../constants/local_constants";
import { ErrorBaseModel } from "../models/error";

export const throwInvalidDataType = ({
  data,
  more,
}: {
  data: any;
  more?: string;
}): ErrorBaseModel => {
  return {
    name: ErrorTypes.invalidDataType,
    message: `Invalid data type received. %${data}% Please provide the expected format. ${more}`,
  } as ErrorBaseModel;
};
