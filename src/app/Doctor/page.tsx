import doctors from "../doctor.json"; // Adjust path if needed

export default function DoctorsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Doctors</h1>
      <ul className="space-y-4">
        {doctors.map((doctor) => (
          <li key={doctor.id} className="border p-4 rounded">
            <h2 className="text-xl font-semibold">{doctor.name}</h2>
            <p>{doctor.specialty}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
