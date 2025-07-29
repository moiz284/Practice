"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
// Doctor type
interface Doctor {
  id: string;
  name: string;
  specialty: string;
  bio: string;
  phone: string;
}

export default function DoctorsPage() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([]);

  useEffect(() => {
    // Simulate fetch from local JSON
    import("../doctor.json").then((mod) => setDoctors(mod.default));
  }, []);

  // Get unique specialties
  const specialties = Array.from(new Set(doctors.map((d) => d.specialty)));

  // Handle checkbox change
  const handleSpecialtyChange = (specialty: string) => {
    setSelectedSpecialties((prev) =>
      prev.includes(specialty)
        ? prev.filter((s) => s !== specialty)
        : [...prev, specialty]
    );
  };

  // Filter doctors by selected specialties
  const filteredDoctors =
    selectedSpecialties.length === 0
      ? doctors
      : doctors.filter((d) => selectedSpecialties.includes(d.specialty));

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Doctors</h1>
      {/* Specialty checkboxes */}
      <div className="mb-6 flex flex-wrap gap-4">
        {specialties.map((specialty) => (
          <label key={specialty} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={selectedSpecialties.includes(specialty)}
              onChange={() => handleSpecialtyChange(specialty)}
            />
            {specialty}
          </label>
        ))}
      </div>
      <ul className="space-y-4">
        {filteredDoctors.map((doctor) => (
          <li key={doctor.id} className="border p-4 rounded">
            <h2 className="text-xl font-semibold">{doctor.name}</h2>
            <p>{doctor.specialty}</p>
          </li>
        ))}
      </ul>
      <Link href="/"> Go back</Link>
    </main>
  );
}
