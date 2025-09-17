import Layout from "@/components/layout/Layout";
import PremiumBanner from "@/components/layout/PremiumBanner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
import { useMembership } from "@/hooks/useMembership";
import {
  Award,
  Briefcase,
  Building,
  Clock,
  DollarSign,
  MapPin,
  TrendingUp,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const JobCenter = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { getMembershipAccess } = useMembership();
  const [featuredJobs, setFeaturedJobs] = useState<any[]>([]);
  const topCompanies = [
    { name: "Elverra Global", jobs: 12, logo: "/placeholder.svg" },
    { name: "TechCorp across the world", jobs: 8, logo: "/placeholder.svg" },
    { name: "Innovation Hub", jobs: 6, logo: "/placeholder.svg" },
    { name: "Digital Solutions", jobs: 5, logo: "/placeholder.svg" },
  ];

  const jobStats = [
    { label: "Active Jobs", value: "250+", icon: Briefcase, color: "blue" },
    { label: "Companies", value: "100+", icon: Building, color: "green" },
    { label: "Job Seekers", value: "5K+", icon: Users, color: "purple" },
    { label: "Placements", value: "500+", icon: Award, color: "orange" },
  ];

  useEffect(() => {
    const fetchFeaturedJobs = async () => {
      try {
        const response = await fetch("/api/jobs");

        if (response.ok) {
          const data = await response.json();
          // For featured jobs, limit to 6 and prioritize featured ones
          const featuredJobs = data
            .filter((job: any) => job.featured)
            .slice(0, 6);
          const regularJobs = data
            .filter((job: any) => !job.featured)
            .slice(0, 6 - featuredJobs.length);
          setFeaturedJobs([...featuredJobs, ...regularJobs]);
        } else {
          throw new Error("Failed to fetch featured jobs");
        }
      } catch (err) {
        console.error("Error fetching featured jobs:", err);
        setFeaturedJobs([]);
      }
    };

    fetchFeaturedJobs();
  }, []);

  // Handle protected navigation
  const handleProtectedNavigation = (path: string) => {
    const access = getMembershipAccess();
    if (!access.hasActiveMembership) {
      toast.error("Membership required to access this feature");
      navigate("/membership-payment");
      return;
    }

    navigate(path);
  };

  // Handle job detail view
  const handleJobDetailView = (jobId: string) => {
    const access = getMembershipAccess();
    if (!access.hasActiveMembership) {
      toast.error("Membership required to view job details");
      navigate("/membership-payment");
      return;
    }

    navigate(`/jobs/${jobId}`);
  };

  return (
    <Layout>
      <PremiumBanner
        title="Job Center"
        description="Your gateway to career opportunities across the world. Connect with top employers and advance your professional journey."
      ></PremiumBanner>

      <div className="py-16 bg-gradient-to-br from-purple-50 to-purple-100">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            

            <div className="mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredJobs.map((job) => (
                  <Card
                    key={job.id}
                    className="hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => handleJobDetailView(job.id)}
                  >
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <Badge
                          variant={
                            job.employment_type === "Full-time"
                              ? "default"
                              : "secondary"
                          }
                        >
                          {job.employment_type}
                        </Badge>
                        {job.featured && (
                          <Badge className="bg-orange-500">Featured</Badge>
                        )}
                      </div>
                      <CardTitle className="text-lg">{job.title}</CardTitle>
                      <div className="text-sm text-gray-600">
                        {user && getMembershipAccess().hasActiveMembership
                          ? job.company
                          : "Membership required to view company"}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm text-gray-600 mb-4">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 mr-2" />
                          {job.salary_min && job.salary_max
                            ? `${job.salary_min}-${job.salary_max} ${
                                job.currency || "CFA"
                              }`
                            : "Salary Negotiable"}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2" />
                          Posted {new Date(job.created_at).toLocaleDateString()}
                        </div>
                      </div>
                      <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                        {job.description}
                      </p>
                      <Button
                        className="w-full"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleJobDetailView(job.id);
                        }}
                      >
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

           

            <div className="text-center">
              <Card className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                <CardContent className="p-12">
                  <TrendingUp className="h-16 w-16 mx-auto mb-6 opacity-90" />
                  <h2 className="text-3xl font-bold mb-4">
                    Ready to Take the Next Step?
                  </h2>
                  <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                    Join millions of professionals who have found their dream
                    jobs through Elverra Global's Job Center.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white text-purple-600 hover:bg-gray-100"
                      onClick={() => navigate("/selectCountry")}
                    >
                      Browse Jobs Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default JobCenter;
