import Globe from "@/components/globe";
import AboutSection from "@/components/home/AboutSection";
import AffiliateProgram from "@/components/home/AffiliateProgram";
import Benefits from "@/components/home/Benefits";
import CardShowcase from "@/components/home/CardShowcase";
import CTA from "@/components/home/CTA";
import DigitalCard from "@/components/home/DigitalCard";
import MembershipPlans from "@/components/home/MembershipPlans";
import SocialBenefits from "@/components/home/SocialBenefits";
import Layout from "@/components/layout/Layout";
import { useEffect, useState } from "react";

interface CMSPage {
  id: string;
  title: string;
  slug: string;
  content: string;
  meta_description?: string;
  meta_keywords?: string;
  status: string;
  page_type: string;
  is_featured?: boolean;
}

const Index = () => {
  const [cmsContent, setCmsContent] = useState<{ [key: string]: CMSPage }>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCMSContent();
  }, []);

  const fetchCMSContent = async () => {
    try {
      // TODO: Replace with API call to fetch CMS pages
      const mockResult = { data: [], error: null };
      const { data, error } = mockResult;

      if (error) {
        console.error("Error fetching CMS content:", error);
      } else if (data) {
        const contentMap = (data as CMSPage[]).reduce((acc, page) => {
          acc[page.slug] = page;
          return acc;
        }, {} as { [key: string]: CMSPage });
        setCmsContent(contentMap);
      }
    } catch (error) {
      console.error("Error fetching CMS content:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading Elverra Global...</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Slider Section */}
      {/* <HeroSlider cmsContent={cmsContent['home-hero-slider']} /> */}
      <div className="p-3 bg-gradient-to-br from-purple-50 to-blue-50">
        <Globe />
      </div>
      {/* About Section */}
      <AboutSection cmsContent={cmsContent["home-about-section"]} />

      {/* Benefits Section */}
      <Benefits cmsContent={cmsContent["home-benefits-section"]} />

      {/* Membership Plans Section */}
      <MembershipPlans cmsContent={cmsContent["home-membership-plans"]} />

      {/* Digital Card Section */}
      <DigitalCard cmsContent={cmsContent["home-digital-card"]} />

      {/* Card Showcase Section */}
      <CardShowcase />

      {/* Social Benefits Section */}
      <SocialBenefits cmsContent={cmsContent["home-social-benefits"]} />

      {/* Affiliate Program Section */}
      <AffiliateProgram cmsContent={cmsContent["home-affiliate-program"]} />

      {/* Call to Action Section */}
      <CTA cmsContent={cmsContent["home-cta-section"]} />
    </Layout>
  );
};

export default Index;
