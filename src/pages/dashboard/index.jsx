import React from "react";
import { Chart } from "react-google-charts";

const Dashboard = () => {
  // Bar Chart Data for Weekly Admissions
  const barChartData = [
    ["Date", "Admissions"],
    ["Jun 04", 15],
    ["Jun 11", 20],
    ["Jun 18", 18],
    ["Jun 25", 22],
    ["Jul 02", 25],
  ];

  const barChartOptions = {
    title: "Weekly Admissions",
    chartArea: { width: "80%" },
    hAxis: { title: "Admissions", minValue: 0 },
    vAxis: { title: "Date" },
    bars: "vertical",
    colors: ["#3B82F6"],
  };

  // Pie Chart Data for Patient Status
  const pieChartData = [
    ["Status", "Count"],
    ["Inpatient", 12],
    ["Outpatient", 33],
    ["Critical", 2],
  ];

  const pieChartOptions = {
    title: "Patient Status",
    pieHole: 0,
    colors: ["#10B981", "#3B82F6", "#EF4444"],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-100 p-4">
      {/* Main Content Area */}
      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: Total Patients */}
        <div className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-sm font-semibold text-gray-800">Total Patients</h3>
          <p className="text-2xl font-bold text-teal-600 mt-1">1,245</p>
          <p className="text-xs text-gray-500">Registered to Date</p>
        </div>

        {/* Card 2: Appointments Today */}
        <div className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-sm font-semibold text-gray-800">Appointments Today</h3>
          <p className="text-2xl font-bold text-blue-600 mt-1">45</p>
          <p className="text-xs text-gray-500">July 04, 2025</p>
        </div>

        {/* Card 3: Bed Occupancy */}
        <div className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-sm font-semibold text-gray-800">Bed Occupancy</h3>
          <p className="text-2xl font-bold text-yellow-600 mt-1">18/25</p>
          <p className="text-xs text-gray-500">72% Occupied</p>
        </div>

        {/* Card 4: Active Admissions */}
        <div className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-sm font-semibold text-gray-800">Active Admissions</h3>
          <p className="text-2xl font-bold text-purple-600 mt-1">12</p>
          <p className="text-xs text-gray-500">In Progress</p>
        </div>

        {/* Card 5: Pending Follow-ups */}
        <div className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-sm font-semibold text-gray-800">Pending Follow-ups</h3>
          <p className="text-2xl font-bold text-red-600 mt-1">28</p>
          <p className="text-xs text-gray-500">Due This Week</p>
        </div>

        {/* Card 6: Staff on Duty */}
        <div className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-sm font-semibold text-gray-800">Staff on Duty</h3>
          <p className="text-2xl font-bold text-green-600 mt-1">15</p>
          <p className="text-xs text-gray-500">As of 02:34 AM IST</p>
        </div>

        {/* Card 7: Emergency Cases */}
        <div className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-sm font-semibold text-gray-800">Emergency Cases</h3>
          <p className="text-2xl font-bold text-red-600 mt-1">3</p>
          <p className="text-xs text-gray-500">Last 24 Hours</p>
        </div>

        {/* Card 8: Discharged Patients */}
        <div className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-sm font-semibold text-gray-800">Discharged Patients</h3>
          <p className="text-2xl font-bold text-green-600 mt-1">8</p>
          <p className="text-xs text-gray-500">Today</p>
        </div>

        {/* Chart 1: Weekly Admissions (Bar Chart) */}
        <div className="sm:col-span-2 lg:col-span-2 bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <Chart
            width="100%"
            height="200px"
            chartType="Bar"
            loader={<div>Loading Chart...</div>}
            data={barChartData}
            options={barChartOptions}
            rootProps={{ "data-testid": "1" }}
          />
        </div>

        {/* Chart 2: Patient Status (Pie Chart) */}
        <div className="sm:col-span-2 lg:col-span-2 bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <Chart
            width="100%"
            height="200px"
            chartType="PieChart"
            loader={<div>Loading Chart...</div>}
            data={pieChartData}
            options={pieChartOptions}
            rootProps={{ "data-testid": "2" }}
          />
        </div>

        {/* Patient Search Bar */}
        <div className="sm:col-span-2 lg:col-span-4 bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-sm font-semibold text-gray-800">Search Patients</h3>
          <input
            type="text"
            placeholder="Enter patient name or ID..."
            className="w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Patient Status Section */}
        <div className="sm:col-span-2 lg:col-span-2 bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-sm font-semibold text-gray-800">Patient Status</h3>
          <div className="mt-2 space-y-1">
            <p className="text-xs text-gray-600">Inpatient: 12 (Stable)</p>
            <p className="text-xs text-gray-600">Outpatient: 33 (Scheduled)</p>
            <p className="text-xs text-gray-600">Critical: 2 (Under Observation)</p>
          </div>
        </div>

        {/* Recent Admissions */}
        <div className="sm:col-span-2 lg:col-span-2 bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-sm font-semibold text-gray-800">Recent Admissions</h3>
          <div className="mt-2 space-y-1">
            <p className="text-xs text-gray-600">1. John Doe - 07/03/2025, 10:15 AM</p>
            <p className="text-xs text-gray-600">2. Jane Smith - 07/03/2025, 02:30 PM</p>
            <p className="text-xs text-gray-600">3. Robert Brown - 07/04/2025, 01:00 AM</p>
          </div>
        </div>

        {/* Upcoming Appointments */}
        <div className="sm:col-span-2 lg:col-span-2 bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-sm font-semibold text-gray-800">Upcoming Appointments</h3>
          <div className="mt-2 space-y-1">
            <p className="text-xs text-gray-600">1. Alice Johnson - 07/04/2025, 09:00 AM</p>
            <p className="text-xs text-gray-600">2. Michael Lee - 07/04/2025, 10:30 AM</p>
            <p className="text-xs text-gray-600">3. Sarah Davis - 07/04/2025, 11:00 AM</p>
          </div>
        </div>

        {/* Notification Panel */}
        <div className="sm:col-span-2 lg:col-span-4 bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-sm font-semibold text-gray-800">Notifications</h3>
          <div className="mt-2 space-y-1">
            <p className="text-xs text-gray-600">New admission: Robert Brown at 01:00 AM</p>
            <p className="text-xs text-gray-600">Follow-up due: Jane Smith, 07/05/2025</p>
            <p className="text-xs text-gray-600">Emergency case: Critical patient in Room 5</p>
          </div>
        </div>

        {/* Additional Stats */}
        <div className="sm:col-span-2 lg:col-span-2 bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-sm font-semibold text-gray-800">Additional Stats</h3>
          <div className="mt-2 space-y-1">
            <p className="text-xs text-gray-600">Average Stay: 3.5 Days</p>
            <p className="text-xs text-gray-600">Referral Patients: 45</p>
            <p className="text-xs text-gray-600">Surgery Count: 10</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;