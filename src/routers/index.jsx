import ClinicsPage from "../pages/clinics";
import Dashboard from "../pages/dashboard";
import EligibilityFormProgress from "../pages/eligibilityForm";
import HomePage from "../pages/home";
import EligibilityVerification from "../pages/medicareEligibiltyform";
import Patients from "../pages/patients";
import PharmaciesPage from "../pages/pharmacies";
import Profile from "../pages/profile";
import ReportPage from "../pages/reports";
import Settings from "../pages/settings";
import {
  FaHome,
  FaUser,
  FaCog,
  FaChartBar,
  FaWpforms,
  FaClinicMedical,
  FaUserFriends,
  FaPrescriptionBottleAlt,
  FaClipboardCheck,
  FaFileMedical,
  FaFileInvoice,
  FaFileAlt,
} from "react-icons/fa";

export const appRoutes = [
  {
    id: 1,
    path: "/",
    title: "Dashboard",
    types: ["sidebar", "header"],
    icon: { sidebar: <FaHome size={14} />, header: <FaHome size={14} /> },
    element: <Dashboard />,
  },
  {
    id: 2,
    path: "/patients",
    title: "Patients",
    types: ["sidebar", "header"],
    icon: {
      sidebar: <FaUserFriends size={14} />,
      header: <FaUserFriends size={14} />,
    },
    element: <Patients />,
  },
  {
    id: 3,
    path: "/clinics",
    title: "Clinics",
    types: ["sidebar", "header"],
    icon: {
      sidebar: <FaClinicMedical size={14} />,
      header: <FaClinicMedical size={14} />,
    },
    element: <ClinicsPage />,
  },
  {
    id: 4,
    path: "/pharmacies",
    title: "Pharmacies",
    types: ["sidebar", "header"],
    icon: {
      sidebar: <FaPrescriptionBottleAlt size={14} />,
      header: <FaPrescriptionBottleAlt size={14} />,
    },
    element: <PharmaciesPage />,
  },
  {
    id: 5,
    path: "/audit-center",
    title: "Audit Center",
    types: ["sidebar", "header"],
    icon: {
      sidebar: <FaClipboardCheck size={14} />,
      header: <FaClipboardCheck size={14} />,
    },
    element: <HomePage />,
  },
  {
    id: 6,
    path: "",
    title: "Forms",
    types: ["sidebar", "header"],
    icon: { sidebar: <FaWpforms size={14} />, header: <FaWpforms size={14} /> },
    options: [
      {
        id: 61,
        path: "/forms-header/medicare-eligibility",
        title: "Medicare Eligibility",
        icon: {
          sidebar: <FaFileMedical size={14} />,
          header: <FaFileMedical size={14} />,
        },
        element: <EligibilityVerification />,
      },
      {
        id: 62,
        path: "",
        title: "Clinic Medicare Eligibility",
        types: [],
        icon: {
          sidebar: <FaFileInvoice size={14} />,
          header: <FaFileInvoice size={14} />,
        },
        options: [
          {
            id: 621,
            path: "/forms-header/clinic-eligibility/medicare",
            title: "Clinic Medicare Form",
            types: [],
            icon: {
              sidebar: <FaFileMedical size={14} />,
              header: <FaFileMedical size={14} />,
            },
            element: <HomePage />,
          },
          {
            id: 622,
            path: "/forms-header/clinic-eligibility/clinic",
            title: "Clinic Eligibility Form",
            types: [],
            icon: {
              sidebar: <FaFileInvoice size={14} />,
              header: <FaFileInvoice size={14} />,
            },
            element: <HomePage />,
          },
          {
            id: 623,
            path: "/forms-header/clinic-eligibility/cgm",
            title: "CGM Eligibility Form",
            types: [],
            icon: {
              sidebar: <FaFileAlt size={14} />,
              header: <FaFileAlt size={14} />,
            },
            element: <HomePage />,
          },
        ],
        element: null,
      },
      {
        id: 63,
        path: "/forms-header/cgm-eligibility",
        title: "CGM Eligibility",
        types: [],
        icon: {
          sidebar: <FaFileAlt size={14} />,
          header: <FaFileAlt size={14} />,
        },
        element: <HomePage />,
      },
    ],
    element: null,
  },
  {
    id: 8,
    path: "/profile",
    title: "Profile",
    types: ["sidebar"],
    icon: { sidebar: <FaUser size={14} /> },
    element: <Profile />,
  },
  {
    id: 9,
    path: "/settings",
    title: "Settings",
    types: ["sidebar"],
    icon: { sidebar: <FaCog size={14} /> },
    element: <Settings />,
  },
  {
    id: 10,
    path: "/reports",
    title: "Reports",
    types: ["sidebar", "header"],
    icon: {
      sidebar: <FaChartBar size={14} />,
      header: <FaChartBar size={14} />,
    },
    element: <ReportPage />,
  },
  {
    id: 11,
    path: "/form",
    title: "Form",
    types: ["sidebar"],
    icon: { sidebar: <FaWpforms size={14} /> },
    element: <EligibilityFormProgress />,
  },
];
