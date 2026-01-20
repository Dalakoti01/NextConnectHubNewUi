"use client";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Loader2, ChevronDown } from "lucide-react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const ContactForm = ({ className }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const res = await axios.post(
        `/api/users/createUser`,
        { ...formData },
        { withCredentials: true }
      );

      res.data.success
        ? toast.success(res.data.message)
        : toast.error(res.data.message);
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600">
            Have a project in mind? Fill out the form below and we’ll get back to
            you soon.
          </p>
        </div>

        <div className="bg-white border border-black/10 rounded-xl p-8">
          <div className="space-y-6">
            {/* Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                name="fullName"
                placeholder="Your Name"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-black/10 rounded-lg focus:ring-2 focus:ring-black outline-none"
              />

              <input
                name="email"
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-black/10 rounded-lg focus:ring-2 focus:ring-black outline-none"
              />
            </div>

            {/* Phone & Subject */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <PhoneInput
                defaultCountry="IN"
                international
                placeholder="+91 9876543210"
                value={formData.phoneNumber}
                onChange={(value) =>
                  setFormData((prev) => ({ ...prev, phoneNumber: value }))
                }
                className="w-full border border-black/10 rounded-lg px-4 py-3 focus:ring-2 focus:ring-black outline-none"
              />

              <div className="relative">
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-black/10 rounded-lg appearance-none focus:ring-2 focus:ring-black outline-none bg-white"
                >
                  <option value="">Select a service</option>
                  <option value="mern">MERN Stack Website</option>
                  <option value="wordpress">WordPress Development</option>
                  <option value="ui-ux">UI/UX Design</option>
                  <option value="ai-chatbot">AI Chatbot Integration</option>
                  <option value="database">Database Support</option>
                  <option value="payment">Payment Integration</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* Message */}
            <textarea
              rows={6}
              name="message"
              placeholder="Tell us about your project..."
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-black/10 rounded-lg focus:ring-2 focus:ring-black outline-none resize-none"
            />

            {/* Submit */}
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full flex justify-center items-center bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-900 transition cursor-pointer"
            >
              {loading && <Loader2 className="animate-spin mr-2 w-5 h-5" />}
              {loading ? "Please Wait" : "Send Message"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
