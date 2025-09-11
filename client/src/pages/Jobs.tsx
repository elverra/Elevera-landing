"use client";

import Layout from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Building2,
  ChevronDown,
  ChevronUp,
  Clock,
  DollarSign,
  GraduationCap,
  MapPin,
  Search,
  Users,
} from "lucide-react";
import { useState } from "react";

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  salary: string;
  experience: string;
  postedDate: string;
}

const mockJobs: Job[] = [
  {
    id: "1",
    title: "Senior Software Engineer",
    department: "Engineering",
    location: "Paris, France",
    type: "Full-time",
    description:
      "Join our engineering team to build scalable web applications and contribute to our international platform serving millions of students worldwide.",
    requirements: [
      "5+ years React/Node.js experience",
      "Experience with microservices architecture",
      "Fluent in English and French",
      "Knowledge of cloud platforms (AWS/Azure)",
      "Experience with CI/CD pipelines",
    ],
    responsibilities: [
      "Design and develop scalable web applications",
      "Collaborate with cross-functional teams",
      "Mentor junior developers",
      "Participate in code reviews and technical discussions",
      "Optimize application performance and user experience",
    ],
    benefits: [
      "Competitive salary with annual reviews",
      "Health insurance and dental coverage",
      "25 days paid vacation + public holidays",
      "Remote work flexibility (3 days/week)",
      "Professional development budget (€2,000/year)",
      "Stock options program",
    ],
    salary: "€65,000 - €85,000",
    experience: "5+ years",
    postedDate: "2024-01-15",
  },
  {
    id: "2",
    title: "Marketing Manager",
    department: "Marketing",
    location: "London, UK",
    type: "Full-time",
    description:
      "Lead marketing campaigns across European markets and develop strategies for student engagement and brand awareness.",
    requirements: [
      "3+ years marketing experience",
      "Digital marketing expertise",
      "Experience in education sector",
      "Analytics and data-driven approach",
      "Social media marketing skills",
    ],
    responsibilities: [
      "Develop and execute marketing strategies",
      "Manage digital advertising campaigns",
      "Create content for social media and website",
      "Analyze campaign performance and ROI",
      "Coordinate with regional marketing teams",
    ],
    benefits: [
      "Competitive salary package",
      "Private healthcare",
      "28 days annual leave",
      "Hybrid working model",
      "Marketing conference attendance",
      "Performance bonuses",
    ],
    salary: "£45,000 - £60,000",
    experience: "3+ years",
    postedDate: "2024-01-12",
  },
  {
    id: "3",
    title: "UX Designer",
    department: "Design",
    location: "Berlin, Germany",
    type: "Full-time",
    description:
      "Design intuitive user experiences for our global student platform and mobile applications, focusing on accessibility and user-centered design.",
    requirements: [
      "Portfolio of UX/UI work",
      "Figma proficiency",
      "User research experience",
      "Prototyping skills",
      "Knowledge of accessibility standards",
    ],
    responsibilities: [
      "Conduct user research and usability testing",
      "Create wireframes, prototypes, and design systems",
      "Collaborate with developers and product managers",
      "Design for web and mobile platforms",
      "Ensure accessibility compliance",
    ],
    benefits: [
      "Creative environment with latest tools",
      "Health and wellness programs",
      "30 days vacation",
      "Design conference budget",
      "Flexible working hours",
      "Team building activities",
    ],
    salary: "€50,000 - €70,000",
    experience: "2+ years",
    postedDate: "2024-01-10",
  },
  {
    id: "4",
    title: "Customer Success Specialist",
    department: "Customer Success",
    location: "Barcelona, Spain",
    type: "Full-time",
    description:
      "Support our international student community and ensure exceptional customer experience across multiple channels and languages.",
    requirements: [
      "Customer service experience",
      "Multilingual abilities (Spanish, English, French)",
      "Problem-solving skills",
      "CRM software experience",
      "Empathy and patience",
    ],
    responsibilities: [
      "Provide customer support via chat, email, and phone",
      "Resolve student inquiries and issues",
      "Create help documentation and FAQs",
      "Train new customer success team members",
      "Analyze customer feedback and suggest improvements",
    ],
    benefits: [
      "Multicultural work environment",
      "Language learning support",
      "25 days paid leave",
      "Career progression opportunities",
      "Team lunch allowance",
      "Mental health support",
    ],
    salary: "€35,000 - €45,000",
    experience: "1+ years",
    postedDate: "2024-01-08",
  },
  {
    id: "5",
    title: "Data Analyst",
    department: "Analytics",
    location: "Amsterdam, Netherlands",
    type: "Full-time",
    description:
      "Analyze user behavior and business metrics to drive data-informed decisions across the organization and improve student outcomes.",
    requirements: [
      "SQL and Python skills",
      "Statistics background",
      "Business intelligence tools (Tableau, Power BI)",
      "Experience with A/B testing",
      "Strong analytical thinking",
    ],
    responsibilities: [
      "Create dashboards and reports for stakeholders",
      "Perform statistical analysis on user data",
      "Design and analyze A/B tests",
      "Identify trends and insights from data",
      "Present findings to leadership team",
    ],
    benefits: [
      "Data-driven culture",
      "Learning and development opportunities",
      "Bike-to-work scheme",
      "Flexible working arrangements",
      "Annual data science conference",
      "Pension purchase matching",
    ],
    salary: "€55,000 - €70,000",
    experience: "2+ years",
    postedDate: "2024-01-05",
  },
  {
    id: "6",
    title: "Partnership Manager",
    department: "Business Development",
    location: "Milan, Italy",
    type: "Full-time",
    description:
      "Develop strategic partnerships with universities and educational institutions across Europe to expand our network and student reach.",
    requirements: [
      "Partnership development experience",
      "Education sector knowledge",
      "Negotiation skills",
      "Relationship building abilities",
      "Business development background",
    ],
    responsibilities: [
      "Identify and engage potential university partners",
      "Negotiate partnership agreements",
      "Maintain relationships with existing partners",
      "Develop partnership strategies and goals",
      "Represent company at education conferences",
    ],
    benefits: [
      "Travel opportunities across Europe",
      "Networking events and conferences",
      "Commission-based bonuses",
      "Professional development support",
      "Italian language classes",
      "Comprehensive benefits package",
    ],
    salary: "€50,000 - €65,000 + commission",
    experience: "3+ years",
    postedDate: "2024-01-03",
  },
];

const departments = [
  "All Departments",
  "Engineering",
  "Marketing",
  "Design",
  "Customer Success",
  "Analytics",
  "Business Development",
];
const locations = [
  "All Locations",
  "Paris, France",
  "London, UK",
  "Berlin, Germany",
  "Barcelona, Spain",
  "Amsterdam, Netherlands",
  "Milan, Italy",
];

export default function Jobs() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] =
    useState("All Departments");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [expandedJobs, setExpandedJobs] = useState<Set<string>>(new Set());

  const filteredJobs = mockJobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment =
      selectedDepartment === "All Departments" ||
      job.department === selectedDepartment;
    const matchesLocation =
      selectedLocation === "All Locations" || job.location === selectedLocation;

    return matchesSearch && matchesDepartment && matchesLocation;
  });

  const toggleJobDetails = (jobId: string) => {
    const newExpandedJobs = new Set(expandedJobs);
    if (newExpandedJobs.has(jobId)) {
      newExpandedJobs.delete(jobId);
    } else {
      newExpandedJobs.add(jobId);
    }
    setExpandedJobs(newExpandedJobs);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Header Section */}
        <div className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Join Our Global Team</h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Build the future of international student services with us.
              Discover opportunities across Europe and make an impact on
              millions of students worldwide.
            </p>
          </div>
        </div>
        <div className="container mx-auto px-4 py-12">
          {/* Search and Filters */}
          <div className="mb-8 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search jobs by title or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Select
                value={selectedDepartment}
                onValueChange={setSelectedDepartment}
              >
                <SelectTrigger className="w-full sm:w-[200px]">
                  <Building2 className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Department" />
                </SelectTrigger>
                <SelectContent>
                  {departments.map((dept) => (
                    <SelectItem key={dept} value={dept}>
                      {dept}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select
                value={selectedLocation}
                onValueChange={setSelectedLocation}
              >
                <SelectTrigger className="w-full sm:w-[200px]">
                  <MapPin className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((location) => (
                    <SelectItem key={location} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          {/* Results Count */}
          <div className="mb-6">
            <p className="text-muted-foreground">
              {filteredJobs.length}{" "}
              {filteredJobs.length === 1 ? "position" : "positions"} found
            </p>
          </div>
          {/* Job Listings */}
          <div className="grid gap-6">
            {filteredJobs.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="space-y-2">
                      <CardTitle className="text-xl">{job.title}</CardTitle>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Building2 className="h-4 w-4" />
                          {job.department}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {job.type}
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign className="h-4 w-4" />
                          {job.salary}
                        </div>
                        <div className="flex items-center gap-1">
                          <GraduationCap className="h-4 w-4" />
                          {job.experience}
                        </div>
                      </div>
                    </div>
                    <Badge variant="secondary" className="shrink-0">
                      {new Date(job.postedDate).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {job.description}
                  </CardDescription>
                  {expandedJobs.has(job.id) && (
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-semibold mb-2 text-sm flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          Key Responsibilities:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                          {job.responsibilities.map((resp, index) => (
                            <li key={index}>{resp}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-sm">
                          Requirements:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                          {job.requirements.map((req, index) => (
                            <li key={index}>{req}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-sm">
                          Benefits & Perks:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {job.benefits.map((benefit, index) => (
                            <Badge
                              key={index}
                              variant="outline"
                              className="text-xs"
                            >
                              {benefit}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="flex flex-col sm:flex-row gap-3 mt-6">
                    <Button
                      className="flex-1 sm:flex-none"
                      onClick={() =>
                        (window.location.href = `/careers/apply/${job.id}`)
                      }
                    >
                      Apply Now
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 sm:flex-none bg-transparent"
                      onClick={() => toggleJobDetails(job.id)}
                    >
                      {expandedJobs.has(job.id) ? (
                        <>
                          Hide Details
                          <ChevronUp className="ml-2 h-4 w-4" />
                        </>
                      ) : (
                        <>
                          View Details
                          <ChevronDown className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No positions found matching your criteria. Try adjusting your
                filters.
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
