"use client";
import { useState } from "react";
import SearchBar from "../../components/SearchBar";
import CountryCard from "../../components/CountriesCard";

export default function CountriesList() {
  const countries = [
    { name: "India", code: "india", color: "bg-orange-400" },
    { name: "France", code: "france", color: "bg-blue-400" },
    { name: "America", code: "america", color: "bg-red-500" },
    { name: "Greece", code: "greece",  color: "bg-sky-400" },
  ];

  const [filteredCountries, setFilteredCountries] = useState(countries);

  
  const handleSearch = (value: string) => {
    const filtered = countries.filter((country) =>
      country.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCountries(filtered);
  };

  return (
    <div className="p-8">
      <h1 className="font-extrabold text-[#8b5d23] text-4xl mb-6">
      Countries List to Explore
      </h1>

      
      <SearchBar onSearch={handleSearch} />

    
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCountries.length > 0 ? (
          filteredCountries.map((country) => (
            <CountryCard key={country.code} {...country} />
          ))
        ) : (
          <p className="text-gray-600 text-lg">No countries found.</p>
        )}
      </ul>
    </div>
  );
}
