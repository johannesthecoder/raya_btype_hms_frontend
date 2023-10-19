import {
  RoomStatuses,
  RoomStatusesMapping,
  RoomTypes,
  RoomTypesMapping,
} from "../../../core/constants/app_constants";
import { _id } from "../../../core/constants/local_constants";
import { toBoolean, toEnum, toNumber } from "../../../core/utilities/convertor";

interface RoomBaseModel {
  _id: string;
  number: string;
  type: RoomTypes;
  floor: string;
  rate?: number;
  status: RoomStatuses;
  features?: string;
  description?: string;
  images: string[];
  issues: string[];
  isActive: boolean;
}

export interface RoomCreateModel extends Omit<RoomBaseModel, "_id"> {}

export interface RoomReadModel extends RoomBaseModel {}

export function jsonToRoomBaseModel(json: any): any {
  let room = {} as RoomBaseModel;

  room._id = json["_id"];
  room.number = json["number"];
  room.type = toEnum<RoomTypes>({ data: json["type"], mapping: RoomTypesMapping });
  room.floor = json["floor"];
  if (json["rate"] !== null) room.rate = toNumber(json["rate"]);
  room.status = toEnum<RoomStatuses>({ data: json["status"], mapping: RoomStatusesMapping });
  room.features = json["features"];
  room.description = json["description"];
  room.images = json["images"] !== null ? json["images"] : [];
  room.issues = json["issues"] !== null ? json["issues"] : [];
  room.isActive = toBoolean(json["isActive"]);

  return room;
}

export function jsonToRoomCreateModel(json: any): RoomCreateModel {
  const room: RoomCreateModel = jsonToRoomBaseModel({ ...json, _id: _id });
  return room;
}

export function jsonToRoomReadModel(json: any): RoomReadModel {
  const room: RoomReadModel = jsonToRoomBaseModel(json);
  return room;
}
