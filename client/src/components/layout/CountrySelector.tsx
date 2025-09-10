"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ utiliser useNavigate
import { WorldMap } from "../world-map";

interface Country {
  name: string;
  flag: string;
  code: string;
}

interface Country {
  name: string;
  flag: string;
  code: string;
  active?: boolean;
  link?: string;
}

const countries: Record<string, Country[]> = {
  Africa: [
    { name: "Algeria", flag: "🇩🇿", code: "DZ", active: false, link: "/" },
    { name: "Angola", flag: "🇦🇴", code: "AO", active: false, link: "/" },
    { name: "Benin", flag: "🇧🇯", code: "BJ", active: false, link: "/" },
    { name: "Botswana", flag: "🇧🇼", code: "BW", active: false, link: "/" },
    { name: "Burkina Faso", flag: "🇧🇫", code: "BF", active: false, link: "/" },
    { name: "Burundi", flag: "🇧🇮", code: "BI", active: false, link: "/" },
    { name: "Cabo Verde", flag: "🇨🇻", code: "CV", active: false, link: "/" },
    { name: "Cameroon", flag: "🇨🇲", code: "CM", active: false, link: "/" },
    {
      name: "Central African Republic",
      flag: "🇨🇫",
      code: "CF",
      active: false,
      link: "/",
    },
    { name: "Chad", flag: "🇹🇩", code: "TD", active: false, link: "/" },
    { name: "Comoros", flag: "🇰🇲", code: "KM", active: false, link: "/" },
    {
      name: "Congo (Congo-Brazzaville)",
      flag: "🇨🇬",
      code: "CG",
      active: false,
      link: "/",
    },
    { name: "Congo (DRC)", flag: "🇨🇩", code: "CD", active: false, link: "/" },
    { name: "Djibouti", flag: "🇩🇯", code: "DJ", active: false, link: "/" },
    { name: "Egypt", flag: "🇪🇬", code: "EG", active: false, link: "/" },
    {
      name: "Equatorial Guinea",
      flag: "🇬🇶",
      code: "GQ",
      active: false,
      link: "/",
    },
    { name: "Eritrea", flag: "🇪🇷", code: "ER", active: false, link: "/" },
    { name: "Eswatini", flag: "🇸🇿", code: "SZ", active: false, link: "/" },
    { name: "Ethiopia", flag: "🇪🇹", code: "ET", active: false, link: "/" },
    { name: "Gabon", flag: "🇬🇦", code: "GA", active: false, link: "/" },
    { name: "Gambia", flag: "🇬🇲", code: "GM", active: false, link: "/" },
    { name: "Ghana", flag: "🇬🇭", code: "GH", active: false, link: "/" },
    { name: "Guinea", flag: "🇬🇳", code: "GN", active: false, link: "/" },
    { name: "Guinea-Bissau", flag: "🇬🇼", code: "GW", active: false, link: "/" },
    { name: "Ivory Coast", flag: "🇨🇮", code: "CI", active: false, link: "/" },
    { name: "Kenya", flag: "🇰🇪", code: "KE", active: false, link: "/" },
    { name: "Lesotho", flag: "🇱🇸", code: "LS", active: false, link: "/" },
    { name: "Liberia", flag: "🇱🇷", code: "LR", active: false, link: "/" },
    { name: "Libya", flag: "🇱🇾", code: "LY", active: false, link: "/" },
    { name: "Madagascar", flag: "🇲🇬", code: "MG", active: false, link: "/" },
    { name: "Malawi", flag: "🇲🇼", code: "MW", active: false, link: "/" },
    {
      name: "Mali",
      flag: "🇲🇱",
      code: "ML",
      active: true,
      link: "https://elverraglobalml.com",
    },
    { name: "Mauritania", flag: "🇲🇷", code: "MR", active: false, link: "/" },
    { name: "Mauritius", flag: "🇲🇺", code: "MU", active: false, link: "/" },
    { name: "Morocco", flag: "🇲🇦", code: "MA", active: false, link: "/" },
    { name: "Mozambique", flag: "🇲🇿", code: "MZ", active: false, link: "/" },
    { name: "Namibia", flag: "🇳🇦", code: "NA", active: false, link: "/" },
    { name: "Niger", flag: "🇳🇪", code: "NE", active: false, link: "/" },
    { name: "Nigeria", flag: "🇳🇬", code: "NG", active: false, link: "/" },
    { name: "Rwanda", flag: "🇷🇼", code: "RW", active: false, link: "/" },
    {
      name: "Sao Tome and Principe",
      flag: "🇸🇹",
      code: "ST",
      active: false,
      link: "/",
    },
    { name: "Senegal", flag: "🇸🇳", code: "SN", active: false, link: "/" },
    { name: "Seychelles", flag: "🇸🇨", code: "SC", active: false, link: "/" },
    { name: "Sierra Leone", flag: "🇸🇱", code: "SL", active: false, link: "/" },
    { name: "Somalia", flag: "🇸🇴", code: "SO", active: false, link: "/" },
    { name: "South Africa", flag: "🇿🇦", code: "ZA", active: false, link: "/" },
    { name: "South Sudan", flag: "🇸🇸", code: "SS", active: false, link: "/" },
    { name: "Sudan", flag: "🇸🇩", code: "SD", active: false, link: "/" },
    { name: "Tanzania", flag: "🇹🇿", code: "TZ", active: false, link: "/" },
    { name: "Togo", flag: "🇹🇬", code: "TG", active: false, link: "/" },
    { name: "Tunisia", flag: "🇹🇳", code: "TN", active: false, link: "/" },
    { name: "Uganda", flag: "🇺🇬", code: "UG", active: false, link: "/" },
    { name: "Zambia", flag: "🇿🇲", code: "ZM", active: false, link: "/" },
    { name: "Zimbabwe", flag: "🇿🇼", code: "ZW", active: false, link: "/" },
  ],
  Asia: [
    {
      name: "India",
      flag: "🇮🇳",
      code: "IN",
      active: false, // change à true si tu veux activer
      link: "/",
    },
  ],
};

export default function CountrySelector() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const navigate = useNavigate(); // ✅ hook pour revenir en arrière

  const filteredCountries = Object.entries(countries).reduce(
    (acc, [region, countryList]) => {
      const filtered = countryList.filter((country) =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      if (filtered.length > 0) {
        acc[region] = filtered;
      }
      return acc;
    },
    {} as Record<string, Country[]>
  );

  const handleCountrySelect = (country: Country) => {
    setSelectedCountry(country);
  };

  const clearSelection = () => {
    setSelectedCountry(null);
  };

  const handleGoBack = () => {
    navigate(-1); // Go back to previous page in history
  };

  return (
    <div className="min-h-screen bg-white relative">
      {/* Close Button */}
      <div className="absolute top-6 right-6 z-20">
        <button
          onClick={handleGoBack}
          className="text-gray-600 hover:bg-gray-100 rounded-full p-1 inline-flex"
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">
            Choose Local Elverra Global Website
          </h1>
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 " />
            <Input
              type="text"
              placeholder="Search countries..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white border-gray-300"
            />
          </div>
          <div className="mb-6 mt-8">
            <WorldMap
              dots={[
                {
                  start: { lat: 17.0608, lng: -61.7964 }, // Mali
                  end: { lat: 30.0444, lng: 31.2357 }, // Egypt (Cairo)
                },
                {
                  start: { lat: 17.0608, lng: -61.7964 }, // Mali
                  end: { lat: -26.2041, lng: 28.0473 }, // South Africa (Johannesburg)
                },
                {
                  start: { lat: 30.0444, lng: 31.2357 }, // Egypt
                  end: { lat: -1.2921, lng: 36.8219 }, // Kenya (Nairobi)
                },
                {
                  start: { lat: -1.2921, lng: 36.8219 }, // Kenya
                  end: { lat: 6.5244, lng: 3.3792 }, // Nigeria (Lagos)
                },
                {
                  start: { lat: 6.5244, lng: 3.3792 }, // Nigeria
                  end: { lat: 33.8869, lng: 9.5375 }, // Tunisia (Tunis)
                },
                {
                  start: { lat: -26.2041, lng: 28.0473 }, // South Africa
                  end: { lat: 17.0608, lng: -61.7964 }, // Back to Mali
                },
              ]}
            />
          </div>
        </div>

        {/* Countries List */}
        <div className="w-full px-4 ">
          {Object.entries(filteredCountries).map(([region, countryList]) => (
            <Card
              key={region}
              className="p-6 bg-white border-gray-200 shadow-sm mb-3"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                {region}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
                {countryList
                  .slice() // on clone le tableau pour ne pas muter l'original
                  .sort((a, b) => {
                    if (a.active && !b.active) return -1; // a actif → avant
                    if (!a.active && b.active) return 1; // b actif → avant
                    return 0; // sinon garder l'ordre original
                  })
                  .map((country) => (
                    <button
                      key={country.code}
                      onClick={() => {
                        if (country.active && country.link) {
                          window.location.href = country.link; // ouvre dans le même onglet
                        }
                      }}
                      disabled={!country.active}
                      className={`w-full flex items-center gap-3 p-3 rounded-md transition-colors text-left
                      ${
                        country.active
                          ? "bg-white text-gray-900 border border-gray-200 hover:bg-blue-50 hover:text-blue-900"
                          : "bg-gray-100 text-gray-400 cursor-not-allowed"
                      }`}
                    >
                      <span className="text-lg">{country.flag}</span>
                      <span className="text-sm font-medium">
                        {country.name}
                      </span>
                    </button>
                  ))}
              </div>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {Object.keys(filteredCountries).length === 0 && searchTerm && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No countries found matching "{searchTerm}"
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
