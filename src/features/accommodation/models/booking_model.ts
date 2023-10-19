import {
  MarketerCategories,
  MarketerCategoriesMapping,
  MealPlans,
  MealPlansMapping,
} from "../../../core/constants/app_constants";
import { _id } from "../../../core/constants/local_constants";
import { toDate, toEnum, toNumber } from "../../../core/utilities/convertor";

interface BookingBaseModel {
  _id: string;
  receptionId: string;
  guestId: string;
  payerId: string;
  roomId: string;
  bookedAt: Date;
  checkIn: Date;
  checkOut?: Date;
  pax: number;
  rate: number;
  mealPlan: MealPlans;
  balance: number;
  marketSource: MarketerCategories;
  commissionId?: string;
  note?: string;
}

export interface BookingCreateModel extends Omit<BookingBaseModel, "_id"> {}

export interface BookingReadModel extends BookingBaseModel {}

export function jsonToBookingBaseModel(json: any): any {
  let booking = {} as BookingBaseModel;

  booking._id = json["_id"];
  booking.receptionId = json["receptionId"];
  booking.payerId = json["payerId"];
  booking.guestId = json["guestId"];
  booking.roomId = json["roomId"];
  booking.bookedAt = toDate(json["bookedAt"]);
  booking.checkIn = toDate(json["checkIn"]);
  if (json["checkOut"] != null) booking.checkOut = toDate(json["checkOut"]);
  booking.pax = toNumber(json["pax"]);
  booking.rate = toNumber(json["rate"]);
  booking.mealPlan = toEnum<MealPlans>({ data: json["mealPlan"], mapping: MealPlansMapping });
  booking.balance = toNumber(json["balance"]);
  booking.marketSource = toEnum<MarketerCategories>({
    data: json["marketSource"],
    mapping: MarketerCategoriesMapping,
  });
  booking.commissionId = json["commissionId"];
  booking.note = json["note"];

  return booking;
}

export function jsonToBookingCreateModel(json: any): BookingCreateModel {
  const booking: BookingCreateModel = jsonToBookingBaseModel({ ...json, _id: _id });
  return booking;
}

export function jsonToBookingReadModel(json: any): BookingReadModel {
  const booking: BookingReadModel = jsonToBookingBaseModel(json);
  return booking;
}
