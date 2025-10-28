"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "../Uiux/Button";

export default function MainContactFormDark({
  fields = [],
  submitUrl = "/api/send-email",
  // thankYouRoute = "/",
}) {
  const initial = fields.reduce((acc, f) => ({ ...acc, [f.name]: "" }), {});
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("success"); // 'success' | 'error'
  const [modalMessage, setModalMessage] = useState("");
  const router = useRouter();

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
    setErrors((s) => ({ ...s, [name]: "" }));
  };

  const validate = () => {
    const e = {};
    fields.forEach((f) => {
      const v = (form[f.name] || "").trim();
      if (!v) e[f.name] = `Enter your ${f.label.toLowerCase()}`;
      if (f.name === "email" && v) {
        const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
        if (!ok) e[f.name] = "Enter a valid email (e.g. name@domain.com)";
      }
    });
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async () => {
    if (!validate()) return;
    setSubmitting(true);
    try {
      const payload = { ...form };
      const res = await fetch(submitUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data?.ok) {
        console.log(data,"data")
        // router.push(thankYouRoute);
        setForm(initial);
        setErrors((s) => ({ ...s, _server: "" }));
        setModalType("success");
        setModalMessage("Thank you! Your message has been submitted successfully.");
        setShowModal(true);
      } else {
        const msg = data?.error || "Something went wrong";
        setErrors((s) => ({ ...s, _server: msg }));
        setModalType("error");
        setModalMessage("Submission failed. Please try again later.");
        setShowModal(true);
      }
    } catch (err) {
      setErrors((s) => ({ ...s, _server: "Network error. Try again." }));
      setModalType("error");
      setModalMessage("Network error. Please check your connection and try again.");
      setShowModal(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {fields.map((f) => {
          const common =
            "w-full h-11 rounded-xl bg-white/10 border border-white/10 px-3 outline-none text-white placeholder:text-white/50 focus:ring-2 focus:ring-white/30";
          const fullCol = f.col === 2 ? "md:col-span-2" : "";
        return (
          <div key={f.name} className={fullCol}>
            <label className="block text-sm text-white/80 mb-1">{f.label}</label>
            {f.type === "textarea" ? (
              <textarea
                rows={4}
                name={f.name}
                value={form[f.name]}
                onChange={onChange}
                placeholder={f.placeholder || f.label}
                className={`w-full rounded-xl bg-white/10 border border-white/10 px-3 py-2 outline-none text-white placeholder:text-white/50 focus:ring-2 focus:ring-white/30`}
              />
            ) : (
              <input
                type={f.type || "text"}
                name={f.name}
                value={form[f.name]}
                onChange={onChange}
                placeholder={f.placeholder || f.label}
                className={common}
              />
            )}
            {errors[f.name] && (
              <p className="text-red-400 text-xs mt-1">{errors[f.name]}</p>
            )}
          </div>
        )})}
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 text-center shadow-xl">
            <div className={modalType === "success" ? "text-green-600" : "text-red-600"}>
              <h3 className="text-xl font-semibold">
                {modalType === "success" ? "Success" : "Failed"}
              </h3>
            </div>
            <p className="mt-2 text-gray-700">{modalMessage}</p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-5 inline-flex items-center justify-center rounded-xl bg-black px-4 py-2 text-white hover:bg-black/90"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {errors._server && (
        <p className="text-red-400 text-sm mt-3">{errors._server}</p>
      )}

      <div className="mt-6 w-max">
        <div onClick={onSubmit} className={submitting ? "opacity-70 pointer-events-none" : ""}>
          <Button
            btn_name={submitting ? "Submitting..." : "Send message"}
            border_color={"border-primary"}
            color="text-black" 
            btn_background="bg-primary" 
          />
        </div>
      </div>
    </div>
  );
}
