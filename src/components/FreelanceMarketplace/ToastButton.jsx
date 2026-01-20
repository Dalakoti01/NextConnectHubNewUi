"use client";
import { toast } from "react-hot-toast";

export default function ToastButton({
  label = "Explore the Marketplace",
  className = "",
}) {
  const defaultClass =
    "bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition cursor-pointer";

  return (
    <button
      onClick={() => toast.success("Coming Soon")}
      className={className || defaultClass}
    >
      {label}
    </button>
  );
}
