"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors: any = {};
    if (!form.email.includes("@")) {
      newErrors.email = "Invalid email address";
    }
    if (form.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    try {
      await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(form),
        headers: { "Content-Type": "application/json" },
      });
      setSubmitted(true);
    } catch (error) {
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold">Contact Us</h1>

      {submitted ? (
        <div className="mt-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded animate-bounce">
          ✅ Message sent successfully!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div>
            <input
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full border p-2 rounded"
            />
          </div>

          <div>
            <input
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              type="email"
              className={`w-full border p-2 rounded ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <textarea
              name="message"
              required
              value={form.message}
              onChange={handleChange}
              placeholder="Your message..."
              className={`w-full border p-2 rounded ${
                errors.message ? "border-red-500" : ""
              }`}
              rows={5}
            />
            {errors.message && (
              <p className="text-sm text-red-500 mt-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}>
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      )}
    </div>
  );
}
