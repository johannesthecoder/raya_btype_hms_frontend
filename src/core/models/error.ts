import { ErrorTypes } from "../constants/local_constants";

export interface ErrorBaseModel extends Error {
  name: ErrorTypes;
  message: string;
}
