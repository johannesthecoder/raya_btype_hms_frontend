import { PaymentMethods, PaymentMethodsMapping } from "../../../core/constants/app_constants";
import { _id } from "../../../core/constants/local_constants";
import { toBoolean, toDate, toEnum, toNumber } from "../../../core/utilities/convertor";

interface PaymentBaseModel {
  _id: string;
  receptionId: string;
  payerId: string;
  verifierId?: string;
  amount: number;
  paidAt: Date;
  method: PaymentMethods;
  verified: boolean;
  note?: string;
}

export interface PaymentCreateModel extends Omit<PaymentBaseModel, "_id"> {}

export interface PaymentReadModel extends PaymentBaseModel {}

export function jsonToPaymentBaseModel(json: any): any {
  let payment = {} as PaymentBaseModel;

  payment._id = json["_id"];
  payment.receptionId = json["receptionId"];
  payment.payerId = json["payerId"];
  payment.verifierId = json["verifierId"];
  payment.amount = toNumber(json["amount"]);
  payment.paidAt = toDate(json["paidAt"]);
  payment.method = toEnum<PaymentMethods>({ data: json["method"], mapping: PaymentMethodsMapping });
  payment.verified = toBoolean(json["verified"]);
  payment.note = json["note"];

  return payment;
}

export function jsonToPaymentCreateModel(json: any): PaymentCreateModel {
  const payment: PaymentCreateModel = jsonToPaymentBaseModel({ ...json, _id: _id });
  return payment;
}

export function jsonToPaymentReadModel(json: any): PaymentReadModel {
  const payment: PaymentReadModel = jsonToPaymentBaseModel(json);
  return payment;
}
