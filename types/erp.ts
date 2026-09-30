/**
 * LPGFlow ERP - Enterprise LPG Plant & Distribution System
 * Core Data Models & Types for Frontend and Future Backend Integration
 */

export type UserRole = "ADMIN" | "STAFF" | "AGENCY" | "CUSTOMER";

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: UserRole;
  avatarUrl?: string;
  department?: string;
  status: "ACTIVE" | "INACTIVE" | "SUSPENDED";
  createdAt: string;
}

export type CylinderCapacity = "14.2kg" | "19kg" | "47.5kg" | "5kg";

export type CylinderCategory = "DOMESTIC" | "COMMERCIAL" | "INDUSTRIAL";

export interface CylinderType {
  id: string;
  code: CylinderCapacity;
  name: string;
  category: CylinderCategory;
  tareWeightKg: number;
  gasWeightKg: number;
  grossWeightKg: number;
  basePrice: number;
  gstRate: number; // e.g. 5 for domestic, 18 for commercial
  depositAmount: number;
}

export type CylinderStatus =
  | "FILLED"
  | "DISPATCHED"
  | "OUT_FOR_DELIVERY"
  | "DELIVERED"
  | "EMPTY_AT_AGENCY"
  | "RETURNED_TO_PLANT"
  | "UNDER_INSPECTION"
  | "HYDRO_TESTING"
  | "REJECTED";

export interface Cylinder {
  serialNumber: string;
  barcode: string;
  typeId: string;
  cylinderType: CylinderCapacity;
  status: CylinderStatus;
  manufacturingDate: string;
  lastTestedDate: string;
  nextTestDueDate: string;
  currentGodownId?: string;
  assignedAgencyId?: string;
  currentVehicleId?: string;
  tareWeightActual: number;
  grossWeightActual?: number;
  qrPayload: string;
}

export interface Godown {
  id: string;
  name: string;
  code: string;
  location: string;
  capacityMax: number;
  currentFilledStock: Record<CylinderCapacity, number>;
  currentEmptyStock: Record<CylinderCapacity, number>;
  supervisorName: string;
  supervisorPhone: string;
}

export interface Agency {
  id: string;
  code: string;
  name: string;
  proprietor: string;
  gstin: string;
  phone: string;
  email: string;
  address: string;
  territory: string;
  securityDeposit: number;
  creditLimit: number;
  currentOutstanding: number;
  cylindersInCirculation: Record<CylinderCapacity, number>;
  status: "ACTIVE" | "SUSPENDED" | "PENDING_VERIFICATION";
  joinedDate: string;
}

export interface Customer {
  id: string;
  consumerNumber: string;
  name: string;
  type: "DOMESTIC" | "COMMERCIAL";
  phone: string;
  email?: string;
  address: string;
  agencyId: string;
  agencyName: string;
  cylinderType: CylinderCapacity;
  connectionCount: number;
  lastRefillDate?: string;
  status: "ACTIVE" | "INACTIVE";
}

export type OrderStatus =
  | "PLACED"
  | "CONFIRMED"
  | "ALLOCATED"
  | "IN_TRANSIT"
  | "DELIVERED"
  | "CANCELLED";

export interface OrderItem {
  cylinderType: CylinderCapacity;
  quantity: number;
  unitPrice: number;
  taxableAmount: number;
  gstAmount: number;
  totalAmount: number;
  emptiesReturnedExpected: number;
  emptiesReceivedActual?: number;
}

export interface Order {
  id: string;
  orderNumber: string;
  orderDate: string;
  customerType: "AGENCY" | "COMMERCIAL" | "RETAIL";
  entityId: string;
  entityName: string;
  status: OrderStatus;
  items: OrderItem[];
  totalQuantity: number;
  totalTaxable: number;
  totalGst: number;
  grandTotal: number;
  paymentStatus: "PENDING" | "PARTIAL" | "PAID";
  deliveryVehicle?: string;
  driverName?: string;
  scheduledDeliveryDate: string;
}

export interface Delivery {
  id: string;
  tripNumber: string;
  vehicleNumber: string;
  driverName: string;
  driverPhone: string;
  status: "SCHEDULED" | "LOADING" | "DISPATCHED" | "COMPLETED";
  startTime?: string;
  endTime?: string;
  cylindersLoaded: {
    filled: Record<CylinderCapacity, number>;
    emptyReturned: Record<CylinderCapacity, number>;
  };
  destinationAgencies: string[];
  stopsCount: number;
  completedStops: number;
  routeTitle: string;
}

export interface Invoice {
  id: string;
  invoiceNumber: string;
  invoiceDate: string;
  dueDate: string;
  orderNumber: string;
  recipientName: string;
  recipientGstin?: string;
  recipientAddress: string;
  placeOfSupply: string;
  hsnCode: string;
  cylinderType: CylinderCapacity;
  quantity: number;
  unitPrice: number;
  taxableAmount: number;
  cgstRate: number;
  cgstAmount: number;
  sgstRate: number;
  sgstAmount: number;
  totalGstAmount: number;
  grandTotal: number;
  status: "PAID" | "UNPAID" | "OVERDUE";
  irnNumber?: string;
  qrCodeMock?: string;
}

export interface PlantDashboardStats {
  todayOrdersCount: number;
  todayOrdersChangePct: number;
  pendingDeliveriesCount: number;
  filledStockTotal: number;
  emptyStockTotal: number;
  underTestingCount: number;
  outstandingDuesFormatted: string;
  monthlySalesFormatted: string;
  cylindersInTransit: number;
  activeAgenciesCount: number;
}
