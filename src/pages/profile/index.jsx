import React, { useState } from "react";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-100 p-6">
      <main className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6">
        {/* Profile Header */}
        <div className="flex items-center space-x-6 mb-6">
          <div className="w-24 h-24 bg-teal-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
            JD
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">John Doe</h1>
            <p className="text-sm text-gray-600">Patient ID: P12345</p>
            <p className="text-sm text-gray-500">Last Updated: July 04, 2025, 02:38 AM IST</p>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="border-b mb-6">
          <nav className="flex space-x-6">
            <button
              onClick={() => setActiveTab("Overview")}
              className={`text-sm font-medium pb-2 ${activeTab === "Overview" ? "text-teal-600 border-b-2 border-teal-500" : "text-gray-600 hover:text-gray-900"}`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("Medical History")}
              className={`text-sm font-medium pb-2 ${activeTab === "Medical History" ? "text-teal-600 border-b-2 border-teal-500" : "text-gray-600 hover:text-gray-900"}`}
            >
              Medical History
            </button>
            <button
              onClick={() => setActiveTab("Appointments")}
              className={`text-sm font-medium pb-2 ${activeTab === "Appointments" ? "text-teal-600 border-b-2 border-teal-500" : "text-gray-600 hover:text-gray-900"}`}
            >
              Appointments
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        <div className="space-y-6">
          {/* Overview Section */}
          <div className={`${activeTab === "Overview" ? "block" : "hidden"}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Personal Details */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">Personal Details</h2>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><strong>Age:</strong> 45 years</li>
                  <li><strong>Gender:</strong> Male</li>
                  <li><strong>DOB:</strong> 12/15/1979</li>
                  <li><strong>Blood Type:</strong> A+</li>
                </ul>
              </div>

              {/* Contact Information */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">Contact Information</h2>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><strong>Phone:</strong> +1-555-123-4567</li>
                  <li><strong>Email:</strong> john.doe@example.com</li>
                  <li><strong>Address:</strong> 123 Health St, City, Country</li>
                  <li><strong>Emergency Contact:</strong> Jane Doe, +1-555-987-6543</li>
                </ul>
              </div>

              {/* Medical Overview */}
              <div className="md:col-span-2 bg-gray-50 p-4 rounded-lg">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">Medical Overview</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600">
                  <div>
                    <p><strong>Primary Condition:</strong> Diabetes Type 2</p>
                    <p><strong>Allergies:</strong> Penicillin</p>
                  </div>
                  <div>
                    <p><strong>Last Visit:</strong> 06/20/2025</p>
                    <p><strong>Next Appointment:</strong> 07/10/2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Medical History Section */}
          <div className={`${activeTab === "Medical History" ? "block" : "hidden"}`}>
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">Medical History</h2>
                <ul className="space-y-4 text-sm text-gray-600">
                  <li className="border-b pb-2">
                    <p><strong>Date:</strong> 05/15/2023</p>
                    <p><strong>Diagnosis:</strong> Hypertension</p>
                    <p><strong>Treatment:</strong> Lisinopril 10mg daily</p>
                  </li>
                  <li className="border-b pb-2">
                    <p><strong>Date:</strong> 06/20/2025</p>
                    <p><strong>Diagnosis:</strong> Diabetes Type 2</p>
                    <p><strong>Treatment:</strong> Metformin 500mg twice daily</p>
                  </li>
                  <li>
                    <p><strong>Date:</strong> 07/01/2025</p>
                    <p><strong>Diagnosis:</strong> Routine Check-up</p>
                    <p><strong>Treatment:</strong> No new medications</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Appointments Section */}
          <div className={`${activeTab === "Appointments" ? "block" : "hidden"}`}>
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">Upcoming Appointments</h2>
                <ul className="space-y-4 text-sm text-gray-600">
                  <li className="border-b pb-2">
                    <p><strong>Date:</strong> 07/04/2025, 09:00 AM</p>
                    <p><strong>Doctor:</strong> Dr. Alice Smith</p>
                    <p><strong>Purpose:</strong> Check-up</p>
                  </li>
                  <li className="border-b pb-2">
                    <p><strong>Date:</strong> 07/10/2025, 10:30 AM</p>
                    <p><strong>Doctor:</strong> Dr. Michael Brown</p>
                    <p><strong>Purpose:</strong> Follow-up</p>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">Past Appointments</h2>
                <ul className="space-y-4 text-sm text-gray-600">
                  <li className="border-b pb-2">
                    <p><strong>Date:</strong> 06/20/2025, 02:00 PM</p>
                    <p><strong>Doctor:</strong> Dr. Jane Doe</p>
                    <p><strong>Purpose:</strong> Diabetes Review</p>
                  </li>
                  <li>
                    <p><strong>Date:</strong> 05/15/2023, 11:00 AM</p>
                    <p><strong>Doctor:</strong> Dr. Robert Lee</p>
                    <p><strong>Purpose:</strong> Hypertension Diagnosis</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="md:col-span-2 flex justify-end space-x-4 mt-6">
            <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
              Edit Profile
            </button>
            <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
              Discharge Patient
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;