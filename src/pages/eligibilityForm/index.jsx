import { useState } from "react";
import { DynamicStepper } from "../../components/form";
import {
  FaFileMedical,
  FaMicrochip,
  FaNotesMedical,
  FaPerson,
  FaVials,
} from "react-icons/fa6";
import InfoCard from "./InfoCard";
import { IoIosPulse } from "react-icons/io";
import PatientProfileCard from "./patientProfileCard";
import ProviderDocumentationCard from "./ProviderDocumentationCard";
import EligibilityVerification from "../medicareEligibiltyform";
import DiabetesForm from "./diabetesForm";
import Modal from "../../components/modal";

const EligibilityFormProgress = () => {
  // Store all form data in real-time
  const [allFormData, setAllFormData] = useState({});
  const [currentStep, setCurrentStep] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const steps = [
    {
      title: "Patient Information",
      description: "Gather patient and Medicare info",
      icon: <FaPerson />,
      formConfig: [
        {
          name: "firstName",
          placeholder: "enter",
          label: "First Name",
          type: "text",
          required: true,
        },
        { name: "lastName", label: "Last Name", type: "text", required: true },
        {
          name: "dateOfBirth",
          label: "Date of Birth",
          type: "date",
          required: true,
        },
        {
          name: "medicareNumber",
          label: "Medicare Number",
          type: "text",
          required: true,
        },
      ],
    },
    {
      title: "Diabetes Information",
      description: "Diabetes diagnosis and current management",
      icon: <IoIosPulse />,
      formConfig: [
        {
          name: "diabetesType",
          label: "Type of Diabetes",
          type: "select",
          options: ["Type 1", "Type 2", "Gestational"],
          required: true,
        },
        {
          name: "diagnosisYear",
          label: "Diagnosis Year",
          type: "number",
          required: true,
        },
        {
          name: "currentMedication",
          label: "Current Medication",
          type: "text",
          required: false,
        },
        {
          name: "bloodSugarControl",
          label: "Blood Sugar Control",
          type: "select",
          options: ["Good", "Fair", "Poor"],
          required: true,
        },
      ],
    },
    {
      title: "Eligibility Assessment",
      description: "Medicare CCM eligibility criteria",
      icon: <FaVials />,
      formConfig: [],
    },
    {
      title: "CGM Device Selection",
      description: "Device selection and training confirmation",
      icon: <FaMicrochip />,
      formConfig: [
        {
          name: "selectedDevice",
          label: "Selected Device",
          type: "select",
          options: ["Dexcom G6", "Freestyle Libre", "Medtronic"],
          required: true,
        },
        {
          name: "trainingCompleted",
          label: "Training Completed",
          type: "checkbox",
          required: true,
        },
      ],
    },
    {
      title: "Visit Documentation",
      description: "Recent visit and clinical assessment",
      icon: <FaFileMedical />,
      formConfig: [
        {
          name: "lastVisitDate",
          label: "Last Visit Date",
          type: "date",
          required: true,
        },
        {
          name: "clinicalNotes",
          label: "Clinical Notes",
          type: "textarea",
          required: true,
        },
      ],
    },
    {
      title: "Diagnosis Codes",
      description: "ICD-10 diagnosis codes",
      icon: <FaNotesMedical />,
      formConfig: [
        {
          name: "diagnosisCodes",
          label: "Diagnosis Codes",
          type: "text",
          required: true,
        },
        {
          name: "additionalCodes",
          label: "Additional Codes",
          type: "text",
          required: false,
        },
      ],
    },
  ];

  // Handle real-time form data changes
  const handleFormChange = (updatedFormData) => {
    setAllFormData((prev) => {
      const merged = { ...prev, ...updatedFormData };
      return merged;
    });
  };

  // Handle step completion
  const handleComplete = (finalData) => {
    setAllFormData(finalData);
    setIsModalOpen(true);
  };

  // Handle step navigation
  const handleStepChange = (stepIndex) => {
    setCurrentStep(stepIndex);
    console.log(`Moved to step ${stepIndex + 1}`);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAllFormData({ ...allFormData, [name]: value });
  };
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {currentStep === 0 && (
          <>
            <div className="mb-2">
              <InfoCard
                title="Clinic Information"
                data={{
                  name: "AllinaHealthPartners Birmingham Medical Group",
                  locationCode: "ABM-458B",
                  address: "241 Efferetz Lakes, Marielaport, WY 03376",
                  phone: "377-697-4873",
                  fax: "N/A, 890-637-7894",
                  npi: "7777134245",
                  dea: "UP2359428",
                }}
              />
            </div>
            <div className="mb-2">
              <PatientProfileCard
                title="Patient Profile"
                data={{
                  name: "Ronald Robinson",
                  birthDate: "12/17/1952",
                  age: 72,
                  gender: "male",
                  medicareId: "M922784",
                  partAStatus: "Active",
                  partBStatus: "Active",
                  partDPlan: "SilverScript Choice",
                  partDEffectiveDate: "1/21/2025",
                }}
              />
            </div>
          </>
        )}

        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          New Continuous Glucose Monitor (CGM) Certificate of Medical Necessity
        </h1>

        <DynamicStepper
          steps={steps}
          onComplete={handleComplete}
          onChange={handleFormChange}
          onStepChange={handleStepChange}
          initialData={allFormData}
          title={"CGM Eligibility Assessment Form"}
        />
        {currentStep === 2 && (
          <div className="mt-3">
            <EligibilityVerification />
          </div>
        )}
        {currentStep === 1 && (
          <div className="mt-4 mb-2">
            <DiabetesForm />
            <ProviderDocumentationCard
              handleChange={handleChange}
              form={allFormData}
              title="Provider Documentation & Clinical Justification"
              data={{
                notes: `Example: Patient has frequent nocturnal hypoglycemia despite careful monitoring and multiple medication adjustments. Family reports patient has hypoglycemia unawareness with episodes occurring 2-3 times per week. Current fingerstick monitoring is insufficient to detect trends and prevent dangerous episodes. CGM would provide essential safety alerts and trend data to optimize diabetes management and prevent severe hypoglycemic events...`,
                tip: `Tips: Include specific examples of hypoglycemic events, failed interventions, and how CGM will improve patient safety and diabetes management.`,
                recommendedDocs: `Recommended: Glucose logs, lab results, hypoglycemia event documentation`,
              }}
            />
          </div>
        )}
      </div>
      {isModalOpen && (
        <Modal size="lg" isOpen={isModalOpen} onClose={()=>setIsModalOpen(!isModalOpen)}>
          <div className=" rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Form Data</h3>
            <pre className="text-xs bg-gray-700 p-2 rounded overflow-auto max-h-40">
              {JSON.stringify(allFormData, null, 2)}
            </pre>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default EligibilityFormProgress;
