import React, { useState } from 'react';

const DiabetesForm = () => {
  const [hasDiagnosis, setHasDiagnosis] = useState(false);
  const [monitoringMethod, setMonitoringMethod] = useState('Fingerstick Blood Glucose');
  const [glucoseChecks, setGlucoseChecks] = useState('');

  return (
    <div className="p-2 mb-2 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Diabetes Information & Current Management</h2>
      <div className="mb-4">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={hasDiagnosis}
            onChange={(e) => setHasDiagnosis(e.target.checked)}
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <span>Patient has documented diabetes diagnosis</span>
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Current Glucose Monitoring Method</label>
        <select
          value={monitoringMethod}
          onChange={(e) => setMonitoringMethod(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        >
          <option>Fingerstick Blood Glucose</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Average Glucose Checks Per Day</label>
        <input
          type="text"
          value={glucoseChecks}
          onChange={(e) => setGlucoseChecks(e.target.value)}
          placeholder="Include all glucose measurements (fingersticks, flash readings, etc.)"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <p className="text-sm text-blue-600 bg-blue-100 p-2 rounded">
        Medicare Requirement: Patient must have documented diabetes mellitus diagnosis with appropriate ICD-10 codes to qualify for CGM coverage.
      </p>
    </div>
  );
};

export default DiabetesForm;