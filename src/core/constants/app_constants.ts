export enum AccommodationUrlCategories {
  index = "index",
  guests = "guests",
  rooms = "rooms",
  reservations = "reservations",
  bookings = "bookings",
  payments = "payments",
  commissions = "commissions",
  expenses = "expenses",
}

export const AccommodationUrlCategoriesMapping = {
  index: AccommodationUrlCategories.index,
  guests: AccommodationUrlCategories.guests,
  rooms: AccommodationUrlCategories.rooms,
  reservations: AccommodationUrlCategories.reservations,
  bookings: AccommodationUrlCategories.bookings,
  payments: AccommodationUrlCategories.payments,
  commissions: AccommodationUrlCategories.commissions,
  expenses: AccommodationUrlCategories.expenses,
};

export enum AccessLevels {
  noAccess = "no access",
  readOnly = "read only",
  readAndCreateNoUpdate = "read & create no updated",
  fullAccess = "full access",
}

export const AccessLevelsMapping = {
  "no access": AccessLevels.noAccess,
  "read only": AccessLevels.readOnly,
  "read & create no updated": AccessLevels.readAndCreateNoUpdate,
  "full access": AccessLevels.fullAccess,
};

export enum JobTitles {
  admin = "admin",
  manager = "manger",
  supervisor = "supervisor",
  reception = "reception",
  cashier = "cashier",
  storekeeper = "storekeeper",
  waiter = "waiter",
}

export const JobTitlesMapping: Record<string, JobTitles> = {
  admin: JobTitles.admin,
  manger: JobTitles.manager,
  supervisor: JobTitles.supervisor,
  reception: JobTitles.reception,
  cashier: JobTitles.cashier,
  storekeeper: JobTitles.storekeeper,
  waiter: JobTitles.waiter,
};

export enum RoomTypes {
  single = "single",
  double = "double",
  deluxe = "deluxe",
  twin = "twin",
  triplet = "triplet",
}

export const RoomTypesMapping = {
  single: RoomTypes.single,
  double: RoomTypes.double,
  deluxe: RoomTypes.deluxe,
  twin: RoomTypes.twin,
  triplet: RoomTypes.triplet,
};

export enum RoomStatuses {
  available = "available",
  reserved = "reserved",
  occupied = "occupied",
  stayover = "stayover",
  checkout = "check-out",
  dirty = "dirty",
  outOfOrder = "out of order",
}

export const RoomStatusesMapping = {
  available: RoomStatuses.available,
  reserved: RoomStatuses.reserved,
  occupied: RoomStatuses.occupied,
  stayover: RoomStatuses.stayover,
  "check-out": RoomStatuses.checkout,
  dirty: RoomStatuses.dirty,
  "out of order": RoomStatuses.outOfOrder,
};

export enum MealPlans {
  bedOnly = "bed only",
  bedAndBreakfast = "bed & breakfast",
  halfBoard = "half board",
  fullBoard = "full board",
  allInclusive = "all inclusive",
}

export const MealPlansMapping = {
  "bed only": MealPlans.bedOnly,
  "bed & breakfast": MealPlans.bedAndBreakfast,
  "half board": MealPlans.halfBoard,
  "full board": MealPlans.fullBoard,
  "all inclusive": MealPlans.allInclusive,
};

export enum MarketerCategories {
  online = "online",
  agent = "agent",
  walkIn = "walkIn",
}

export const MarketerCategoriesMapping = {
  online: MarketerCategories.online,
  agent: MarketerCategories.agent,
  walkIn: MarketerCategories.walkIn,
};

export enum PaymentMethods {
  cash = "cash",
  mobileMoney = "mobileMoney",
  visa = "visa",
  others = "others",
}

export const PaymentMethodsMapping = {
  cash: PaymentMethods.cash,
  mobileMoney: PaymentMethods.mobileMoney,
  visa: PaymentMethods.visa,
  others: PaymentMethods.others,
};
