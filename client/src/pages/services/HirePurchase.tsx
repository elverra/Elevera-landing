import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Check, Clock, Percent, ShoppingBag, Smartphone } from "lucide-react";

const HirePurchase = () => {
  const features = [
    {
      icon: ShoppingBag,
      title: "Wide Range of Products",
      description:
        "Access everything from electronics and furniture to vehicles and equipment.",
    },
    {
      icon: Clock,
      title: "Flexible Payment Plans",
      description:
        "Choose payment terms ranging from 3 to 24 months based on your needs.",
    },
    {
      icon: Percent,
      title: "Competitive Rates",
      description:
        "Enjoy client tier-based interest rates starting from 5% monthly.",
    },
    {
      icon: Check,
      title: "Simple Approval Process",
      description:
        "Quick decision-making with minimal documentation requirements.",
    },
  ];

  const categories = [
    {
      name: "Electronics",
      examples: "Smartphones, Laptops, TVs, Appliances",
      terms: "3-12 months",
      downPayment: "20%",
      icon: Smartphone,
    },
    {
      name: "Furniture",
      examples: "Sofas, Beds, Dining Sets",
      terms: "6-18 months",
      downPayment: "25%",
      icon: ShoppingBag,
    },
    {
      name: "Vehicles",
      examples: "Cars, Motorcycles, Commercial Vehicles",
      terms: "12-24 months",
      downPayment: "30%",
      icon: ShoppingBag,
    },
    {
      name: "Equipment",
      examples: "Agricultural, Construction, Business",
      terms: "6-24 months",
      downPayment: "25%",
      icon: ShoppingBag,
    },
  ];

  const membershipTiers = [
    {
      tier: "Essential",
      rate: "7% monthly",
      maxAmount: "Up to CFA 1,000,000",
      processingTime: "3-5 days",
    },
    {
      tier: "Premium",
      rate: "6% monthly",
      maxAmount: "Up to CFA 3,000,000",
      processingTime: "2-3 days",
    },
    {
      tier: "Elite",
      rate: "5% monthly",
      maxAmount: "Up to CFA 5,000,000",
      processingTime: "1-2 days",
    },
  ];

  return (
    <Layout>
      <div className="py-16 bg-gradient-to-br from-purple-50 to-purple-100">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-center">Hire Purchase</h1>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Acquire equipment, electronics, furniture, and vehicles with our
            flexible Hire Purchase program. Pay in installments while enjoying
            immediate use of your purchases.
          </p>

          <div className="max-w-5xl mx-auto mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-6">
                  Own What You Need Today, Pay Over Time
                </h2>
                <p className="text-gray-600 mb-6">
                  Our Hire Purchase program allows Elverra Global clients to
                  acquire valuable assets without paying the full amount
                  upfront. Make a down payment, take possession of the item
                  immediately, and pay the remainder in convenient monthly
                  installments while you use and enjoy your purchase.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-club66-purple/10 p-2 rounded-full mr-4 shrink-0">
                        <feature.icon className="h-5 w-5 text-club66-purple" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">{feature.title}</h3>
                        <p className="text-sm text-gray-600">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-4 ">
                  <Button
                    onClick={() => {
                      const hotline = "/selectCountry";
                      window.location.href = hotline;
                    }}
                    className="bg-purple-600 hover:bg-purple-700"
                  >
                    Apply for Hire Purchase
                  </Button>
                  <Button
                    onClick={() => {
                      const hotline = "/selectCountry";
                      window.location.href = hotline;
                    }}
                    className="bg-white-600 hover:bg-purple-200 text-purple-600"
                  >
                    View details
                  </Button>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">
                    Hire Purchase Terms by Client Tier
                  </h3>
                  <div className="space-y-6">
                    {membershipTiers.map((tier, index) => (
                      <div
                        key={index}
                        className="border-b pb-4 last:border-b-0 last:pb-0"
                      >
                        <div className="flex items-center mb-3">
                          <div
                            className={`w-3 h-3 rounded-full mr-2 ${
                              tier.tier === "Elite"
                                ? "bg-club66-purple"
                                : tier.tier === "Premium"
                                ? "bg-amber-500"
                                : "bg-gray-500"
                            }`}
                          ></div>
                          <h4 className="font-bold">{tier.tier} Client</h4>
                        </div>
                        <div className="grid grid-cols-2 gap-y-2 text-sm">
                          <span className="text-gray-600">Interest Rate:</span>
                          <span className="font-medium">{tier.rate}</span>
                          <span className="text-gray-600">Maximum Amount:</span>
                          <span className="font-medium">{tier.maxAmount}</span>
                          <span className="text-gray-600">
                            Processing Time:
                          </span>
                          <span className="font-medium">
                            {tier.processingTime}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gray-50 p-6 border-t">
                  <p className="text-sm text-gray-600">
                    Elite clients enjoy the lowest interest rates and highest
                    purchase limits, along with priority processing of
                    applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HirePurchase;
