import Link from "next/link";
export default function HomePage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Clinic</h1>
      <p className="text-lg text-gray-700 mb-6">
        Browse top doctors and book appointments easily.
      </p>
      <Link href="/Doctor" className="text-blue-600 underline">
        View Doctors
      </Link>
      <Link href="/Contact">Contact us</Link>
    </main>
  );
}
