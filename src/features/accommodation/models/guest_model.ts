import { Nationalities, NationalitiesMapping } from "../../../core/constants/global_constants";
import { _id } from "../../../core/constants/local_constants";
import { toBoolean, toDate, toEnum } from "../../../core/utilities/convertor";

interface GuestBaseModel {
  _id: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  phoneNumber: string;
  email?: string;
  identificationNumber: string;
  nationality: Nationalities;
  createdAt: Date;
  isActive: boolean;
}

export interface GuestCreateModel extends Omit<GuestBaseModel, "_id"> {}

export interface GuestReadModel extends GuestBaseModel {}

export function jsonGuestBaseModel(json: any): any {
  let guest = {} as GuestBaseModel;

  guest._id = json["_id"];
  guest.firstName = json["firstName"];
  guest.lastName = json["lastName"];
  guest.middleName = json["middleName"];
  guest.phoneNumber = json["phoneNumber"];
  guest.email = json["email"];
  guest.identificationNumber = json["identificationNumber"];
  guest.nationality = toEnum<Nationalities>({
    data: json["nationality"],
    mapping: NationalitiesMapping,
  });
  guest.createdAt = toDate(json["createdAt"]);
  guest.isActive = toBoolean(json["isActive"]);

  return guest;
}

export function jsonGuestCreateModel(json: any): GuestCreateModel {
  const guest: GuestCreateModel = jsonGuestBaseModel({ ...json, _id: _id });
  return guest;
}

export function jsonGuestReadModel(json: any): GuestReadModel {
  const guest: GuestReadModel = jsonGuestBaseModel(json);
  return guest;
}
