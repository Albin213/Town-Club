import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="pt-32 px-6 max-w-xl mx-auto">
      <h1 className="text-4xl font-bold text-violet-400 text-center">
        Contact Us
      </h1>

      <div className="mt-10 space-y-4">
        <p className="flex items-center gap-3">
          <FaPhone /> +91 9876543210
        </p>
        <p className="flex items-center gap-3">
          <FaEnvelope /> townclub@email.com
        </p>
        <p className="flex items-center gap-3">
          <FaMapMarkerAlt /> Edathua, Kerala
        </p>
      </div>
    </div>
  );
}