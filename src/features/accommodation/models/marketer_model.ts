import {
  MarketerCategories,
  MarketerCategoriesMapping,
} from "../../../core/constants/app_constants";
import { _id } from "../../../core/constants/local_constants";
import { toEnum } from "../../../core/utilities/convertor";

interface MarketerBaseModel {
  _id: string;
  category: MarketerCategories;
  source: string;
  fullName: string;
  phoneNumber: string;
  commissionPercentage?: number;
}

export interface MarketerCreateModel extends Omit<MarketerBaseModel, "_id"> {}

export interface MarketerReadModel extends MarketerBaseModel {}

export function jsonToMarketerBaseModel(json: any): any {
  let marketer = {} as MarketerBaseModel;

  marketer._id = json["_id"];
  marketer.category = toEnum<MarketerCategories>({
    data: json["category"],
    mapping: MarketerCategoriesMapping,
  });
  marketer.source = json["source"];
  marketer.fullName = json["fullName"];
  marketer.phoneNumber = json["phoneNumber"];
  marketer.commissionPercentage = json["commissionPercentage"];

  return marketer;
}

export function jsonToMarketerCreateModel(json: any): MarketerCreateModel {
  const marketer: MarketerCreateModel = jsonToMarketerBaseModel({ ...json, _id: _id });
  return marketer;
}

export function jsonToMarketerReadModel(json: any): MarketerReadModel {
  const marketer: MarketerReadModel = jsonToMarketerBaseModel(json);
  return marketer;
}
