import React from "react";
import { DataTable } from "../../components/dataTable";

const clinicsData = [
  {
    id: 1,
    name: "Sunrise Health Clinic",
    address: "123 Elm Street, Springfield",
    phone: "555-1111",
    email: "contact@sunriseclinic.com",
    status: "Active",
    lastAudit: "2025-06-15",
  },
  {
    id: 2,
    name: "Downtown Medical Center",
    address: "456 Oak Avenue, Metropolis",
    phone: "555-2222",
    email: "info@downtownmed.com",
    status: "Inactive",
    lastAudit: "2025-05-22",
  },
  {
    id: 3,
    name: "Lakeside Family Practice",
    address: "789 Pine Road, Lakeside",
    phone: "555-3333",
    email: "office@lakesidefp.com",
    status: "Active",
    lastAudit: "2025-07-02",
  },
];

const columns = [
  { key: "id", label: "ID" },
  { key: "name", label: "Clinic Name" },
  { key: "address", label: "Address" },
  { key: "phone", label: "Phone" },
  { key: "email", label: "Email" },
  { key: "status", label: "Status" },
  { key: "lastAudit", label: "Last Audit" },
];

export default function ClinicsPage() {
  return (
    <div className="max-h-screen bg-gradient-to-bl from-teal-50 to-blue-100">
      <DataTable
        title={"Clinics Management"}
        subTitle={"Last Updated: July 04, 2025, 02:42 AM IST"}
        columns={columns}
        data={clinicsData}
      />
    </div>
  );
}
