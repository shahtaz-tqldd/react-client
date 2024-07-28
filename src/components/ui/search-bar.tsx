import { SearchIcon, XIcon } from "lucide-react";
import React from "react";

interface AlgoSearchProps {
  placeholder?: string;
  setValue: (value: string) => void;
  value: string;
  className?: string
}

const AlgoSearch: React.FC<AlgoSearchProps> = ({
  placeholder = "Search...",
  setValue,
  value,
  className
}) => {
  return (
    <div className={`relative min-w-[280px] group ${className}`}>
      <input
        type="text"
        placeholder={placeholder}
        className="py-2 pr-3 pl-8 border border-secondary rounded-md w-full "
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <SearchIcon className="absolute top-1/2 left-2 -translate-y-1/2 h-4 opacity-50 group-hover:opacity-100 tr" />
      {value?.length > 0 && (
        <XIcon
          onClick={() => setValue("")}
          className="absolute top-1/2 right-2 -translate-y-1/2 h-4 opacity-50 hover:opacity-100 cursor-pointer"
        />
      )}
    </div>
  );
};

export default AlgoSearch;
