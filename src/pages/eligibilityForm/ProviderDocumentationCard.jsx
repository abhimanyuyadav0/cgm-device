import React from 'react';

const ProviderDocumentationCard = ({
  title = "Provider Documentation & Clinical Justification",
  data = {
    notes: `Example: Patient has frequent nocturnal hypoglycemia despite careful monitoring and multiple medication adjustments...`,
    tip: `Tips: Include specific examples of hypoglycemic events, failed interventions, and how CGM will improve patient safety and diabetes management.`,
    recommendedDocs: `Recommended: Glucose logs, lab results, hypoglycemia event documentation`
  },
  handleChange, // <-- parent-controlled change handler
  form = {},    // <-- parent form data object for controlled inputs
}) => {
  const { notes, tip, recommendedDocs } = data;

  return (
    <div className="border border-gray-200 shadow-md rounded-lg overflow-hidden">
      <div className="bg-blue-500 text-white px-4 py-2 text-lg font-semibold">
        {title}
      </div>
      <div className="p-4 space-y-4">
        <p className="text-sm text-gray-700 italic">
          Complete this section to strengthen the medical necessity case
        </p>

        {/* Additional Provider Notes */}
        <div className="bg-blue-50 p-3 rounded-md">
          <div className="flex items-center space-x-2 mb-2">
            <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
            <h4 className="text-sm font-medium text-gray-900">
              Additional Provider Notes <span className="text-yellow-600">(Important)</span>
            </h4>
          </div>
          <p className="text-sm text-gray-700">
            Provide detailed clinical justification, patient-specific factors, and supporting information that strengthens the medical necessity for CGM coverage
          </p>
          <textarea
            className="w-full p-2 text-sm text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 mt-2"
            rows="4"
            placeholder={notes}
            name="notes"
            value={form.notes || ""}
            onChange={(e) =>
              handleChange && handleChange(e)
            }
          />
          <p className="text-xs text-gray-600 mt-1">{tip}</p>
        </div>

        {/* Supporting Documentation */}
        <div className="bg-blue-50 p-3 rounded-md">
          <div className="flex items-center space-x-2 mb-2">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            <h4 className="text-sm font-medium text-gray-900">
              Supporting Documentation <span className="text-green-600">(Recommended)</span>
            </h4>
          </div>
          <p className="text-sm text-gray-700">
            Upload files that support CGM medical necessity (glucose logs, lab results, hypoglycemia documentation, etc.)
          </p>
          <div className="mt-2">
            <label className="block text-sm text-gray-700">
              <span className="sr-only">Choose files</span>
              <input
                name="supportingDocument"
                type="file"
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-1 file:px-2 file:rounded file:border-0 file:text-sm file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
                onChange={(e) => {
                  handleChange && handleChange(e)
                }}
              />
              <span className="text-xs text-gray-500">
                {form.supportingDocument ? form.supportingDocument.name : "No file chosen"}
              </span>
            </label>
            <p className="text-xs text-gray-600 mt-1">{recommendedDocs}</p>
            <p className="text-xs text-gray-500 mt-1">Accepted formats: PDF, images, Word documents</p>
            <p className="text-xs text-gray-500 mt-1">File limits: Max 5 files, 10MB each</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderDocumentationCard;
