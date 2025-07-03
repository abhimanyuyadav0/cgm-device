import React from 'react';

const PatientProfileCard = ({
  title = "Patient Profile",
  data = {
    name: "Ronald Robinson",
    birthDate: "12/17/1952",
    age: 72,
    gender: "male",
    medicareId: "M922784",
    partAStatus: "Active",
    partBStatus: "Active",
    partDPlan: "SilverScript Choice",
    partDEffectiveDate: "1/21/2025"
  }
}) => {
  const {
    name,
    birthDate,
    age,
    gender,
    medicareId,
    partAStatus,
    partBStatus,
    partDPlan,
    partDEffectiveDate
  } = data;

  return (
    <div className="border border-gray-200 shadow-md rounded-lg overflow-hidden flex">
      <div className="w-3/4 p-4 space-y-2">
        <h4 className=" font-semibold text-gray-800 mb-2">{title}</h4>
        <p className="text-sm text-gray-700">
          {name}{" "}
          <span className="text-gray-500">
            Birth Date: {birthDate} | Age: {age} | Gender: {gender}
          </span>
        </p>
        <p className="text-sm text-gray-700">
          Medicare ID: {medicareId} | Part A (Hospital Insurance): {partAStatus} | Part B (Medical Insurance): {partBStatus}
        </p>
        <p className="text-sm text-gray-700">
          Medicare Part D (Drug Coverage): {partDPlan} | Effective: {partDEffectiveDate}
        </p>
      </div>
      <div className="w-1/4 bg-gray-50 border-l border-gray-200 p-2 space-y-1">
        <h3 className="text-xs font-medium text-gray-600">Navigate</h3>
        <a href="#" className="block text-xs text-green-600 hover:text-green-800">Update Patient Profile</a>
        <a href="#" className="block text-xs text-green-600 hover:text-green-800">View CMN Forms</a>
        <a href="#" className="block text-xs text-green-600 hover:text-green-800">Generate CMN Forms</a>
      </div>
    </div>
  );
};

export default PatientProfileCard;
