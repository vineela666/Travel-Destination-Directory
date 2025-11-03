"use client";
import { useState } from "react";

interface SearchBarProps {
  onSearch: (value: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [search, setSearch] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    onSearch(value);
  };

  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder=" Search country..."
        value={search}
        onChange={handleChange}
        className="w-full sm:w-1/2 p-3 rounded-xl border border-gray-300 
                   focus:outline-none focus:ring-2 focus:ring-[#8b5d23]"
      />
    </div>
  );
}
