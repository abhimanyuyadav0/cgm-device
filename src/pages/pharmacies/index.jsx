import React from "react";
import { DataTable } from "../../components/dataTable";

const pharmaciesData = [
  {
    id: 1,
    name: "HealthFirst Pharmacy",
    license: "PHX-00123",
    owner: "Alice Brown",
    address: "321 Maple Street, Springfield",
    phone: "555-4444",
    email: "contact@healthfirst.com",
    status: "Active",
    lastInspection: "2025-06-10",
  },
  {
    id: 2,
    name: "CityCare Pharmacy",
    license: "PHX-00456",
    owner: "Bob Smith",
    address: "654 Walnut Avenue, Metropolis",
    phone: "555-5555",
    email: "info@citycarepharmacy.com",
    status: "Suspended",
    lastInspection: "2025-05-18",
  },
  {
    id: 3,
    name: "Wellness Drugs",
    license: "PHX-00789",
    owner: "Carol Johnson",
    address: "987 Cedar Road, Lakeside",
    phone: "555-6666",
    email: "contact@wellnessdrugs.com",
    status: "Active",
    lastInspection: "2025-07-01",
  },
];

const columns = [
  { key: "id", label: "ID" },
  { key: "name", label: "Pharmacy Name" },
  { key: "license", label: "License No." },
  { key: "owner", label: "Owner" },
  { key: "address", label: "Address" },
  { key: "phone", label: "Phone" },
  { key: "email", label: "Email" },
  { key: "status", label: "Status" },
  { key: "lastInspection", label: "Last Inspection" },
];

export default function PharmaciesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
      <DataTable
        title={"Pharmacies Management"}
        subTitle={"Last Updated: July 04, 2025, 03:05 AM IST"}
        columns={columns}
        data={pharmaciesData}
      />
    </div>
  );
}
