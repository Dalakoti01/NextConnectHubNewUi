import { Building, Clock, Mail, Phone } from "lucide-react";

const LeftMain = () => {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-black mb-8">
        Contact Information
      </h2>

      <div className="space-y-6">
        {/* Email */}
        <div className="flex items-start gap-4">
          <div className="bg-gray-100 p-3 rounded-lg">
            <Mail className="w-6 h-6 text-black" />
          </div>
          <div>
            <h3 className="font-semibold text-black mb-1">Email</h3>
            <a
              href="mailto:contactatsamarth@gmail.com"
              className="text-black hover:underline"
            >
              contactatsamarth@gmail.com
            </a>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-4">
          <div className="bg-gray-100 p-3 rounded-lg">
            <Phone className="w-6 h-6 text-black" />
          </div>
          <div>
            <h3 className="font-semibold text-black mb-1">WhatsApp</h3>
            <a href="tel:+917898533851" className="text-black hover:underline">
              +91 78985 33851
            </a>
          </div>
        </div>

        {/* Company */}
        <div className="flex items-start gap-4">
          <div className="bg-gray-100 p-3 rounded-lg">
            <Building className="w-6 h-6 text-black" />
          </div>
          <div>
            <h3 className="font-semibold text-black mb-1">Company</h3>
            <p className="text-gray-600">
              KHATRI & DALAKOTI SOLUTIONS PRIVATE LIMITED
            </p>
          </div>
        </div>

        {/* Response Time */}
        <div className="flex items-start gap-4">
          <div className="bg-gray-100 p-3 rounded-lg">
            <Clock className="w-6 h-6 text-black" />
          </div>
          <div>
            <h3 className="font-semibold text-black mb-1">Response Time</h3>
            <p className="text-gray-600">
              We usually respond within 24 hours on business days.
            </p>
          </div>
        </div>
      </div>

      {/* Working Hours */}
      <div className="mt-10 bg-gray-50 border border-black/10 rounded-lg p-6">
        <h3 className="font-semibold text-black mb-4">Working Hours</h3>
        <div className="space-y-2 text-gray-700">
          <div className="flex justify-between">
            <span>Monday – Friday</span>
            <span>9:00 AM – 6:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span>Saturday</span>
            <span>10:00 AM – 4:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span>Sunday</span>
            <span>Closed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftMain;
