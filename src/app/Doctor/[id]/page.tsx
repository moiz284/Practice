"use client";
import { useEffect, useState } from "react";
// import doctor from "../../doctor.json";

export default function DoctorsPage() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [specialty, setSpecialty] = useState("");

  const filtered = specialty
    ? doctors.filter((doc) => doc.specialty === specialty)
    : doctors;

  {
    /* <select
  className="border p-2 rounded mt-4"
  value={specialty}
  onChange={(e) => setSpecialty(e.target.value)}
>
  <option value="">All Specialties</option>
  <option value="Cardiology">Cardiology</option>
  <option value="Dermatology">Dermatology</option>
  <option value="Pediatrics">Pediatrics</option>
</select> */
  }

  useEffect(() => {
    async function fetchDoctors() {
      const res = await fetch("../../doctor.json"); // or static JSON
      const data = await res.json();
      setDoctors(data);
      setLoading(false);
    }
    fetchDoctors();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Doctor List</h1>
      <ul className="mt-4 space-y-2">
        {doctors.map((doc: any) => (
          <li key={doc.id} className="border p-4 rounded shadow">
            <p>
              <strong>{doc.name}</strong>
            </p>
            <p>{doc.specialty}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
