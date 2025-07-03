import { DataTable } from "../../components/dataTable";

const patientsData = [
  {
    id: 1,
    name: "John Doe",
    age: 35,
    gender: "Male",
    condition: "Diabetes",
    phone: "555-1234",
    email: "johndoe@example.com",
    lastVisit: "2025-06-15",
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 42,
    gender: "Female",
    condition: "Hypertension",
    phone: "555-5678",
    email: "janesmith@example.com",
    lastVisit: "2025-07-01",
  },
  {
    id: 3,
    name: "Michael Johnson",
    age: 29,
    gender: "Male",
    condition: "Asthma",
    phone: "555-9101",
    email: "mjohnson@example.com",
    lastVisit: "2025-05-20",
  },
];

export default function PatientsPage() {
  const columns = [
    { key: "id", label: "ID" },
    { key: "name", label: "Name" },
    { key: "age", label: "Age" },
    { key: "gender", label: "Gender" },
    { key: "condition", label: "Condition" },
    { key: "phone", label: "Phone" },
    { key: "email", label: "Email" },
    { key: "lastVisit", label: "Last Visit" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-100">
      <DataTable
        title={"Patients Management"}
        subTitle={"Last Updated: July 04, 2025, 02:42 AM IST"}
        columns={columns}
        data={patientsData}
      />
    </div>
  );
}
