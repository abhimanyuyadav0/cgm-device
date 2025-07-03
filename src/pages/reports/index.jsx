import React from "react";
import { DataTable } from "../../components/dataTable";

const detailedData = [
  {
    date: "07/01/2025",
    product: "Widget A",
    sales: "$12,500",
    customers: 35,
    status: "Completed",
  },
  {
    date: "07/02/2025",
    product: "Widget B",
    sales: "$9,800",
    customers: 22,
    status: "In Progress",
  },
  {
    date: "07/03/2025",
    product: "Widget C",
    sales: "$22,930",
    customers: 71,
    status: "Completed",
  },
];

const tableColumns = [
  { key: "date", label: "Date" },
  { key: "product", label: "Product" },
  { key: "sales", label: "Sales" },
  { key: "customers", label: "Customers" },
  { key: "status", label: "Status" },
];

const ReportPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6">
      {/* Header */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center">Monthly Performance Report</h1>
        <p className="text-gray-600 text-center mt-2">
          Generated on July 04, 2025, 02:23 AM IST
        </p>
      </div>

      {/* Summary Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-100 p-4 rounded-lg text-center">
            <h3 className="text-lg font-medium text-blue-800">Total Sales</h3>
            <p className="text-2xl font-bold text-blue-600">$45,230</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg text-center">
            <h3 className="text-lg font-medium text-green-800">New Customers</h3>
            <p className="text-2xl font-bold text-green-600">128</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg text-center">
            <h3 className="text-lg font-medium text-yellow-800">Pending Orders</h3>
            <p className="text-2xl font-bold text-yellow-600">15</p>
          </div>
        </div>
      </div>

      {/* Detailed Table */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Detailed Statistics</h2>
        <DataTable columns={tableColumns} data={detailedData} />
      </div>

      {/* Footer */}
      <div className="mt-6 text-center text-gray-500 text-sm">
        <p>&copy; 2025 Your Company. All rights reserved.</p>
      </div>
    </div>
  );
};

export default ReportPage;
