import { EyeIcon, EyeOff } from "lucide-react";
import { useState } from "react";

export default function Input({
  id = undefined,
  type = "text",
  placeholder = "",
  className = "",
  label = "",
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-1 relative">
      <span className="text-sm font-semibold text-black/60">{label}</span>
      <input
        id={id}
        className={`border rounded-md py-2.5 px-3 outline-none focus:border-primary tr w-full bg-white ${className}`}
        type={showPassword ? "text" : type}
        placeholder={placeholder}
      />
      {type === "password" &&
        (showPassword ? (
          <EyeOff
            onClick={() => setShowPassword(false)}
            className="absolute bottom-3 right-2 cursor-pointer h-5 text-black/60 hover:text-black tr"
          />
        ) : (
          <EyeIcon
            onClick={() => setShowPassword(true)}
            className="absolute bottom-3 right-2 cursor-pointer h-5 text-black/60 hover:text-black tr"
          />
        ))}
    </div>
  );
}
