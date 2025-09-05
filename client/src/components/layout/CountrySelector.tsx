import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import { useState } from "react";

interface Country {
  name: string;
  flag: string;
  code: string;
}

const countries: Record<string, Country[]> = {
  Africa: [
    { name: "Algeria", flag: "🇩🇿", code: "DZ" },
    { name: "Egypt", flag: "🇪🇬", code: "EG" },
    { name: "Iran", flag: "🇮🇷", code: "IR" },
    { name: "Israel", flag: "🇮🇱", code: "IL" },
    { name: "Kenya", flag: "🇰🇪", code: "KE" },
    { name: "Kurdistan", flag: "🏴", code: "KU" },
    { name: "Kuwait", flag: "🇰🇼", code: "KW" },
    { name: "Lebanon", flag: "🇱🇧", code: "LB" },
    { name: "Morocco", flag: "🇲🇦", code: "MA" },
    { name: "Niger", flag: "🇳🇪", code: "NE" },
    { name: "Nigeria", flag: "🇳🇬", code: "NG" },
    { name: "Oman", flag: "🇴🇲", code: "OM" },
    { name: "Qatar", flag: "🇶🇦", code: "QA" },
    { name: "Saudi Arabia", flag: "🇸🇦", code: "SA" },
  ],
};

export default function CountrySelector() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

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

  return (
    <div className="min-h-screen bg-white relative">
      {/* Close Button */}
      <div className="absolute top-6 right-6 z-10">
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-600 hover:bg-gray-100"
        >
          <X className="h-6 w-6" />
        </Button>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-balance">
            Choose Local ISIC Website
          </h1>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search countries..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white border-gray-300"
            />
          </div>

          <div className="mb-8">
            <img
              src="/world-map-silhouette-light-gray.jpg"
              alt="World Map"
              className="mx-auto max-w-2xl w-full h-auto opacity-30"
            />
          </div>

          {/* Selected Country Display */}
          {selectedCountry && (
            <Card className="max-w-sm mx-auto mt-6 p-4 bg-blue-50 border-blue-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{selectedCountry.flag}</span>
                  <span className="font-semibold text-blue-900">
                    {selectedCountry.name}
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearSelection}
                  className="text-blue-700 hover:bg-blue-100"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          )}
        </div>

        <div className="max-w-2xl mx-auto">
          {Object.entries(filteredCountries).map(([region, countryList]) => (
            <Card
              key={region}
              className="p-6 bg-white border-gray-200 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                {region}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {countryList.map((country) => (
                  <button
                    key={country.code}
                    onClick={() => handleCountrySelect(country)}
                    className={`w-full flex items-center gap-3 p-3 rounded-md transition-colors hover:bg-gray-50 text-left ${
                      selectedCountry?.code === country.code
                        ? "bg-blue-50 text-blue-900 border border-blue-200"
                        : "text-gray-700"
                    }`}
                  >
                    <span className="text-lg">{country.flag}</span>
                    <span className="text-sm font-medium">{country.name}</span>
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
