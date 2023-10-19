import { AccessLevels } from "../constants/app_constants";

export interface EmployeeResourcePermissions {
  employees: AccessLevels;
  rooms: AccessLevels;
  guests: AccessLevels;
  reservations: AccessLevels;
  bookings: AccessLevels;
  payments: AccessLevels;
  expenses: AccessLevels;
  commissions: AccessLevels;
}
