import doctors from "../../doctor.json"; // Adjust path if needed
import { notFound } from "next/navigation";

export default function DoctorDetail({ params }: { params: { id: string } }) {
  const doctor = doctors.find((doc) => doc.id === params.id);

  if (!doctor) return notFound();

  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">{doctor.name}</h1>
      <p className="text-lg mb-2">{doctor.specialty}</p>
      <p className="text-gray-700 mb-4">{doctor.bio}</p>
      <p>
        <strong>Phone:</strong> {doctor.phone}
      </p>
    </main>
  );
}
