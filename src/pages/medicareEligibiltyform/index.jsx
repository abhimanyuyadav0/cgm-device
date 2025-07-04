import React from "react";

const EligibilityVerification = () => {
  return (
    <div className="p-2 bg-white shadow-md rounded-lg">
      <div className="bg-blue-100 p-4 mb-4 rounded-md">
        <h2 className="text-lg font-semibold text-blue-800">
          Medicare Eligibility Verification
        </h2>
        <p className="text-sm text-blue-700">
          <strong>Required Check</strong>
          <br />
          Before creating a Continuous Glucose Monitoring Certificate of Medical Necessity, we must verify that Ronald Robinson is eligible for Medicare coverage.
        </p>
      </div>

      <div className="bg-gray-100 p-4 mb-4 rounded-md">
        <h3 className="text-md font-medium text-gray-700">Patient Information</h3>
        <div className="grid grid-cols-2 gap-4 mt-2">
          <div>
            <p className="text-sm text-gray-600">Name: Ronald Robinson</p>
            <p className="text-sm text-gray-600">Age: 72 years old</p>
            <p className="text-sm text-gray-600">DOB: 12/17/1952</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Medicare ID: M922784</p>
            <p className="text-sm text-gray-600">Gender: male</p>
          </div>
        </div>
      </div>

      <div className="bg-green-100 p-4 mb-4 rounded-md">
        <div className="flex items-center">
          <span className="text-green-700 mr-2">✔</span>
          <p className="text-sm text-green-700">Medicare Eligible</p>
        </div>
        <p className="text-sm text-green-700 mt-2 bg-green-50 p-2 rounded">
          Reason: Patient already has Medicare ID
        </p>
      </div>

      <div className="bg-blue-100 p-4 rounded-md">
        <p className="text-sm text-blue-700">
          <strong>Next Steps:</strong> This patient is eligible for Medicare coverage. You may proceed with creating the Continuous Glucose Monitoring Certificate of Medical Necessity.
        </p>
      </div>

      <div className="mt-4 flex justify-end space-x-4">
        <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400">
          Cancel
        </button>
        <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
          Proceed with CGM Form
        </button>
      </div>
    </div>
  );
};

export default EligibilityVerification;