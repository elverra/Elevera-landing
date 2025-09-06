"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, FileText, Upload } from "lucide-react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function JobApplicationPage() {
  const params = useParams();
  const router = useNavigate();
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [coverLetterFile, setCoverLetterFile] = useState<File | null>(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    experience: "",
    motivation: "",
    availability: "",
    salary: "",
    linkedIn: "",
    portfolio: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileUpload =
    (type: "cv" | "coverLetter") =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        if (type === "cv") {
          setCvFile(file);
        } else {
          setCoverLetterFile(file);
        }
      }
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("[v0] Application submitted:", {
      formData,
      cvFile,
      coverLetterFile,
    });
    alert("Application submitted successfully!");
    router("/careers");
  };
  const handleBack = () => router(-1);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button variant="ghost" onClick={handleBack} className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Jobs
          </Button>

          <h1 className="text-3xl font-bold mb-2">Apply for Position</h1>
          <p className="text-muted-foreground">
            Fill out the form below to apply for this position. All fields
            marked with * are required.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Application Form</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">
                    Personal Information
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) =>
                          handleInputChange("firstName", e.target.value)
                        }
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) =>
                          handleInputChange("lastName", e.target.value)
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Current Location *</Label>
                    <Input
                      id="location"
                      placeholder="City, Country"
                      value={formData.location}
                      onChange={(e) =>
                        handleInputChange("location", e.target.value)
                      }
                      required
                    />
                  </div>
                </div>

                {/* Professional Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">
                    Professional Information
                  </h3>

                  <div className="space-y-2">
                    <Label htmlFor="experience">Years of Experience *</Label>
                    <Select
                      value={formData.experience}
                      onValueChange={(value) =>
                        handleInputChange("experience", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-1">0-1 years</SelectItem>
                        <SelectItem value="2-3">2-3 years</SelectItem>
                        <SelectItem value="4-5">4-5 years</SelectItem>
                        <SelectItem value="6-10">6-10 years</SelectItem>
                        <SelectItem value="10+">10+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="availability">Availability *</Label>
                    <Select
                      value={formData.availability}
                      onValueChange={(value) =>
                        handleInputChange("availability", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="When can you start?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediately">Immediately</SelectItem>
                        <SelectItem value="2weeks">2 weeks notice</SelectItem>
                        <SelectItem value="1month">1 month notice</SelectItem>
                        <SelectItem value="2months">2 months notice</SelectItem>
                        <SelectItem value="3months">3+ months</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="salary">Expected Salary (Optional)</Label>
                    <Input
                      id="salary"
                      placeholder="e.g., €50,000 - €60,000"
                      value={formData.salary}
                      onChange={(e) =>
                        handleInputChange("salary", e.target.value)
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="linkedIn">
                      LinkedIn Profile (Optional)
                    </Label>
                    <Input
                      id="linkedIn"
                      placeholder="https://linkedin.com/in/yourprofile"
                      value={formData.linkedIn}
                      onChange={(e) =>
                        handleInputChange("linkedIn", e.target.value)
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="portfolio">
                      Portfolio/Website (Optional)
                    </Label>
                    <Input
                      id="portfolio"
                      placeholder="https://yourportfolio.com"
                      value={formData.portfolio}
                      onChange={(e) =>
                        handleInputChange("portfolio", e.target.value)
                      }
                    />
                  </div>
                </div>

                {/* Documents */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Documents</h3>

                  <div className="space-y-2">
                    <Label htmlFor="cv">CV/Resume *</Label>
                    <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                      <input
                        id="cv"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileUpload("cv")}
                        className="hidden"
                        required
                      />
                      <label htmlFor="cv" className="cursor-pointer">
                        <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                        {cvFile ? (
                          <div className="flex items-center justify-center gap-2">
                            <FileText className="h-4 w-4" />
                            <span className="text-sm font-medium">
                              {cvFile.name}
                            </span>
                          </div>
                        ) : (
                          <div>
                            <p className="text-sm font-medium">
                              Upload your CV/Resume
                            </p>
                            <p className="text-xs text-muted-foreground">
                              PDF, DOC, or DOCX (max 5MB)
                            </p>
                          </div>
                        )}
                      </label>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="coverLetter">Cover Letter (Optional)</Label>
                    <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                      <input
                        id="coverLetter"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileUpload("coverLetter")}
                        className="hidden"
                      />
                      <label htmlFor="coverLetter" className="cursor-pointer">
                        <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                        {coverLetterFile ? (
                          <div className="flex items-center justify-center gap-2">
                            <FileText className="h-4 w-4" />
                            <span className="text-sm font-medium">
                              {coverLetterFile.name}
                            </span>
                          </div>
                        ) : (
                          <div>
                            <p className="text-sm font-medium">
                              Upload Cover Letter
                            </p>
                            <p className="text-xs text-muted-foreground">
                              PDF, DOC, or DOCX (max 5MB)
                            </p>
                          </div>
                        )}
                      </label>
                    </div>
                  </div>
                </div>

                {/* Motivation */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Motivation</h3>

                  <div className="space-y-2">
                    <Label htmlFor="motivation">
                      Why do you want to join our team? *
                    </Label>
                    <Textarea
                      id="motivation"
                      placeholder="Tell us about your motivation, what interests you about this role, and how you can contribute to our team..."
                      value={formData.motivation}
                      onChange={(e) =>
                        handleInputChange("motivation", e.target.value)
                      }
                      className="min-h-[120px]"
                      required
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <Button type="submit" className="w-full" size="lg">
                    Submit Application
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
