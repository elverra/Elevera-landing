import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAuth } from "@/hooks/useAuth";
import { ChevronDown, Globe, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoUrl, setLogoUrl] = useState<string>("/lovable-uploads/logo.png");
  const { user, signOut } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLogo = async () => {
      try {
        // Try to get the uploaded logo from API
        const response = await fetch("/api/files/logo");
        if (response.ok) {
          const data = await response.json();
          if (data.url) {
            setLogoUrl(data.url);
          }
        } else {
          console.log("Logo API not accessible, using default logo");
        }
      } catch (error) {
        console.log("Error fetching logo, using default:", error);
      }
    };

    fetchLogo();
  }, []);

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logoUrl}
              alt="Elverra Global"
              className="h-10 w-auto object-contain"
              onError={() =>
                setLogoUrl("/lovable-uploads/elverra-global-logo-new.jpeg")
              }
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              style={{ fontSize: "15px" }}
            >
              {t("nav.home")}
            </Link>

            {/* About Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-gray-600 hover:text-blue-600 font-medium"
                  style={{ fontSize: "15px" }}
                >
                  {t("nav.about")}
                  <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="w-56 bg-white border shadow-lg"
              >
                <DropdownMenuItem asChild>
                  <Link to="/about" className="flex items-center">
                    {t("nav.about.us")}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />

                <DropdownMenuItem asChild>
                  <Link to="/about/contact">{t("nav.about.contact")}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/about/projects">{t("nav.about.projects")}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/about/partners">{t("nav.about.partners")}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/about/news">{t("nav.about.news")}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/team">{t("nav.about.team")}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/about/changing-lives">
                    {t("nav.about.empowerment")}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/terms">{t("nav.terms")}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/privacy">Privacy Policy</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-gray-600 hover:text-blue-600 font-medium"
                  style={{ fontSize: "15px" }}
                >
                  Services
                  <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="w-56 bg-white border shadow-lg"
              >
                <DropdownMenuItem asChild>
                  <Link to="/services">All Services</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/services/o-secours">Ô Secours</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/credit-system">Credit System</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/hire-purchase">Hire Purchase</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/payday-advance">Payday Advance</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/online-store">Online Store</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/ebooks" className="flex items-center">
                    {t("nav.services.ebooks")}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/job-center" className="flex items-center">
                    Job Center
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Shop Menu Item */}
            <Link
              to="/shop"
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              style={{ fontSize: "15px" }}
            >
              {/* Shop */}
            </Link>

            {/* Jobs Dropdown */}
            <Link
              to="/careers"
              className="text-gray-600 hover:text-purple-600 transition-colors font-medium"
            >
              Career
            </Link>

            {/* Our Affiliates Dropdown */}
            <Link
              to="/jobs"
              className="text-gray-600 hover:text-purple-600 transition-colors font-medium"
            >
              Affiliate Program
            </Link>

            <Link
              to="/discounts"
              className="text-gray-600 hover:text-purple-600 transition-colors font-medium"
              style={{ fontSize: "15px" }}
            >
              Discounts
            </Link>

            <Link
              to="/competitions"
              className="text-gray-600 hover:text-purple-600 transition-colors font-medium"
              style={{ fontSize: "15px" }}
            >
              Events
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3">
            <Link
              to="/selectCountry"
              className="text-gray-600 hover:text-purple-600 transition-colors font-medium"
            >
              <div className="flex items-center gap-1">
                <Globe className="h-4 w-4" />
                <span>Country</span>
              </div>
            </Link>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-white py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-600 hover:text-purple-600 transition-colors font-medium px-2"
                onClick={toggleMenu}
              >
                {t("nav.home")}
              </Link>
              <Link
                to="/about"
                className="text-gray-600 hover:text-purple-600 transition-colors font-medium px-2"
                onClick={toggleMenu}
              >
                {t("nav.about")}
              </Link>
              <Link
                to="/about/contact"
                className="text-gray-600 hover:text-purple-600 transition-colors font-medium px-2 pl-6"
                onClick={toggleMenu}
              >
                {t("nav.about.contact")}
              </Link>
              <Link
                to="/about/projects"
                className="text-gray-600 hover:text-purple-600 transition-colors font-medium px-2 pl-6"
                onClick={toggleMenu}
              >
                {t("nav.about.projects")}
              </Link>
              <Link
                to="/about/partners"
                className="text-gray-600 hover:text-purple-600 transition-colors font-medium px-2 pl-6"
                onClick={toggleMenu}
              >
                {t("nav.about.partners")}
              </Link>
              <Link
                to="/about/news"
                className="text-gray-600 hover:text-purple-600 transition-colors font-medium px-2 pl-6"
                onClick={toggleMenu}
              >
                {t("nav.about.news")}
              </Link>
              <Link
                to="/services"
                className="text-gray-600 hover:text-purple-600 transition-colors font-medium px-2"
                style={{ fontSize: "15px" }}
                onClick={toggleMenu}
              >
                {t("nav.services")}
              </Link>
              <Link
                to="/services/o-secours"
                className="text-gray-600 hover:text-purple-600 transition-colors font-medium px-2 pl-6"
                onClick={toggleMenu}
              >
                Ô Secours
              </Link>
              <Link
                to="/shop"
                className="text-gray-600 hover:text-purple-600 transition-colors font-medium px-2"
                style={{ fontSize: "15px" }}
                onClick={toggleMenu}
              >
                Shop
              </Link>
              <Link
                to="/ebook-library"
                className="text-gray-600 hover:text-purple-600 transition-colors font-medium px-2 pl-6"
                onClick={toggleMenu}
              >
                E-Book Library
              </Link>
              <Link
                to="/jobs"
                className="text-gray-600 hover:text-purple-600 transition-colors font-medium px-2"
                style={{ fontSize: "15px" }}
                onClick={toggleMenu}
              >
                Browse Jobs
              </Link>
              <Link
                to="/job-center"
                className="text-gray-600 hover:text-purple-600 transition-colors font-medium px-2"
                style={{ fontSize: "15px" }}
                onClick={toggleMenu}
              >
                Job Center
              </Link>
              <Link
                to="/post-job"
                className="text-gray-600 hover:text-purple-600 transition-colors font-medium px-2"
                style={{ fontSize: "15px" }}
                onClick={toggleMenu}
              >
                Post a Job
              </Link>
              <Link
                to="/affiliates/members"
                className="text-gray-600 hover:text-purple-600 transition-colors font-medium px-2"
                style={{ fontSize: "15px" }}
                onClick={toggleMenu}
              >
                Member Affiliates
              </Link>
              <Link
                to="/affiliates/merchants"
                className="text-gray-600 hover:text-purple-600 transition-colors font-medium px-2"
                style={{ fontSize: "15px" }}
                onClick={toggleMenu}
              >
                Merchant Partners
              </Link>
              <Link
                to="/affiliates/distributors"
                className="text-gray-600 hover:text-purple-600 transition-colors font-medium px-2"
                style={{ fontSize: "15px" }}
                onClick={toggleMenu}
              >
                Distributors
              </Link>
              <Link
                to="/affiliate-dashboard"
                className="text-gray-600 hover:text-purple-600 transition-colors font-medium px-2"
                style={{ fontSize: "15px" }}
                onClick={toggleMenu}
              >
                Affiliate Dashboard
              </Link>
              <Link
                to="/discounts"
                className="text-gray-600 hover:text-purple-600 transition-colors font-medium px-2"
                style={{ fontSize: "15px" }}
                onClick={toggleMenu}
              >
                Discounts
              </Link>
              <Link
                to="/competitions"
                className="text-gray-600 hover:text-purple-600 transition-colors font-medium px-2"
                style={{ fontSize: "15px" }}
                onClick={toggleMenu}
              >
                Competitions
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
