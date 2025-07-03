import React from "react";

const InfoCard = ({
  title = "Clinic Information",
  data = {
    name: "AllinaHealthPartners Birmingham Medical Group",
    locationCode: "ABM-458B",
    address: "241 Efferetz Lakes, Marielaport, WY 03376",
    phone: "377-697-4873",
    fax: "N/A, 890-637-7894",
    npi: "7777134245",
    dea: "UP2359428",
  },
}) => {
  const { name, locationCode, address, phone, fax, npi, dea } = data;

  return (
    <div className="bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden">
      <div className="bg-blue-700 text-white px-4 py-2 text-lg font-semibold">
        {title}
      </div>
      <div className="p-4 grid grid-cols-1 lg:grid-cols-6 gap-4">
        <div className="space-y-2 col-span-3">
          <p className="text-sm text-gray-700">
            <span className="font-medium text-gray-900">Name:</span> {name}
          </p>
          <p className="text-sm text-gray-700">
            <span className="font-medium text-gray-900">Location Code:</span> {locationCode}
          </p>
          <p className="text-sm text-gray-700">
            <span className="font-medium text-gray-900">Address:</span> {address}
          </p>
          <p className="text-sm text-gray-700">
            <span className="font-medium text-gray-900">Phone:</span> {phone}
          </p>
        </div>

        <div className="space-y-2 col-span-3">
          <p className="text-sm text-gray-700">
            <span className="font-medium text-gray-900">Fax:</span> {fax}
          </p>
          <p className="text-sm text-gray-700">
            <span className="font-medium text-gray-900">NPI #:</span> {npi}
          </p>
          <p className="text-sm text-gray-700">
            <span className="font-medium text-gray-900">DEA #:</span> {dea}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
