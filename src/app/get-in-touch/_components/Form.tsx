"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface FormData {
  name: string;
  phone: string;
  email: string;
  company: string;
  project: string;
}

const inputVariant = {
  focus: { scale: 1.02, boxShadow: "0 0 8px rgba(255, 255, 255, 0.6)" },
};

export default function Form() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    company: "",
    project: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  }

  function validate() {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.project.trim())
      newErrors.project = "Project details are required";
    return newErrors;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }
    alert("Form submitted successfully!");
    setFormData({
      name: "",
      phone: "",
      email: "",
      company: "",
      project: "",
    });
  }

  return (
    <div
      className="bg-black text-white px-5 lg:px-20"
    >
      <form onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div variants={inputVariant} whileFocus="focus">
            <input
              type="text"
              name="name"
              placeholder="Your Name*"
              aria-label="Your Name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full py-4 px-6 bg-transparent border border-white rounded-full placeholder-white placeholder-opacity-70 focus:outline-none focus:ring focus:ring-[yellow] transition ${
                errors.name ? "border-red-500" : ""
              }`}
              required
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </motion.div>

          <motion.div variants={inputVariant} whileFocus="focus">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              aria-label="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full py-4 px-6 bg-transparent border border-white rounded-full placeholder-white placeholder-opacity-70 focus:outline-none ocus:ring focus:ring-[yellow] transition"
            />
          </motion.div>

          <motion.div variants={inputVariant} whileFocus="focus">
            <input
              type="email"
              name="email"
              placeholder="Email Address*"
              aria-label="Email Address"
              value={formData.email}
              onChange={handleChange}
              className={`w-full py-4 px-6 bg-transparent border border-white rounded-full placeholder-white placeholder-opacity-70 focus:outline-none ocus:ring focus:ring-[yellow] transition ${
                errors.email ? "border-red-500" : ""
              }`}
              required
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </motion.div>

          <motion.div variants={inputVariant} whileFocus="focus">
            <input
              type="text"
              name="company"
              placeholder="Organisation/Company Name"
              aria-label="Company Name"
              value={formData.company}
              onChange={handleChange}
              className="w-full py-4 px-6 bg-transparent border border-white rounded-full placeholder-white placeholder-opacity-70 ocus:ring focus:ring-[yellow] transition"
            />
          </motion.div>

          <motion.div
            className="md:col-span-2"
            variants={inputVariant}
            whileFocus="focus"
          >
            <textarea
              name="project"
              placeholder="Tell us more about your project*"
              aria-label="Project Details"
              value={formData.project}
              onChange={handleChange}
              rows={5}
              className={`w-full py-4 px-6 bg-transparent border border-white rounded-3xl placeholder-white placeholder-opacity-70 ocus:ring focus:ring-[yellow] transition resize-none ${
                errors.project ? "border-red-500" : ""
              }`}
              required
            ></textarea>
            {errors.project && (
              <p className="text-red-500 text-sm mt-1">{errors.project}</p>
            )}
          </motion.div>
        </div>

        <div className="policy py-10">
          <p className="text-[12px]">By submitting the above information you agree to our <Link className="underline hover:underline-offset-0" href="">Privacy Policy</Link> & <Link className="underline hover:underline-offset-0" href="">Terms & Conditions</Link></p>
        </div>
      </form>
    </div>
  );
}
