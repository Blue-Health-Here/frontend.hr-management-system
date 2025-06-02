"use client";
import React, { useState } from "react";
import {
  Plus,
  Edit2,
  MessageSquare,
  User,
  IdCard,
  Users,
  Calendar,
  MapPin,
  Phone,
  Mail,
  VenusAndMars,
  Cake,
  Home,
  Globe,
  Church,
  Heart,
  Briefcase,
  Baby,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

function EmployeeDetailsView() {
  const [isAboutExpanded, setIsAboutExpanded] = useState(false);
  const [isBankExpanded, setIsBankExpanded] = useState(false);
  const [isFamilyExpanded, setIsFamilyExpanded] = useState(false);
  const [isEducationExpanded, setIsEducationExpanded] = useState(false);
  const [isExperienceExpanded, setIsExperienceExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState<"projects" | "assets">("projects");

  return (
    <div className="w-full">
      {/* Header row */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold">Employee Details</h1>
        <div className="flex flex-col sm:flex-row items-stretch gap-3 w-full sm:w-auto">
          {/* Add Employee Button */}
          <button className="flex items-center justify-center text-nowrap xs:justify-start gap-1 px-4 py-2 bg-[#f26522] text-white rounded-md text-sm font-semibold hover:bg-[#e05b1a] transition-colors w-full xs:w-auto">
            <Plus className="h-3 w-3" />
            <span>Bank & Statutory</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left sections column */}
        <div className="w-full lg:w-[30%] space-y-6">
          {/* Employee details section */}
          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
            {/* Profile header */}
            <div className="relative flex flex-col items-center mb-6">
              <div
                className={`absolute top-0 left-0 right-0 h-24 rounded-t-lg z-0 ${
                  Math.random() > 0.5
                    ? "bg-gradient-to-r from-[#fd7e14] to-[#ffc107]"
                    : "bg-gradient-to-r from-[#ffc107] to-[#fd7e14]"
                }`}
              ></div>

              <div className="relative z-10 w-16 h-16 rounded-full bg-gray-200 mb-3 flex items-center justify-center border-2 border-white mt-12">
                <User size={24} className="text-gray-400" />
              </div>

              <div className="relative z-10 text-center">
                <h2 className="text-lg font-bold mb-1">Stephan Peralt</h2>
                <div className="flex gap-3 text-xs text-gray-600 justify-center">
                  <span>Software Developer</span>
                  <span>•</span>
                  <span>10+ years</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 mb-5">
              <DetailRow
                label="Client ID"
                value="CLT-0024"
                icon={<IdCard size={14} />}
              />
              <DetailRow
                label="Team"
                value="UI/UX Design"
                icon={<Users size={14} />}
              />
              <DetailRow
                label="Date Of Join"
                value="1st Jan 2023"
                icon={<Calendar size={14} />}
              />
              <DetailRow
                label="Report Office"
                value="Doglas Martini"
                icon={<MapPin size={14} />}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <button className="flex-1 flex items-center justify-center gap-1 px-4 py-2.5 bg-[#111827] rounded-md text-xs font-medium text-white transition-colors">
                <Edit2 size={14} className="text-white" />
                Edit Info
              </button>
              <button className="flex-1 flex items-center justify-center gap-1 px-4 py-2.5 border border-gray-300 rounded-md bg-[#f26522] text-xs font-medium text-white">
                <MessageSquare size={14} className="text-white" />
                Message
              </button>
            </div>

            <div className="border-t border-gray-200 my-6"></div>

            <h3 className="font-semibold text-sm mb-3">Basic information</h3>
            <div className="space-y-3 mb-5">
              <DetailRow
                label="Phone"
                value="(163) 2459 315"
                icon={<Phone size={14} />}
              />
              <DetailRow
                label="Email"
                value="perralt12@example.com"
                icon={<Mail size={14} />}
              />
              <DetailRow
                label="Gender"
                value="Male"
                icon={<VenusAndMars size={14} />}
              />
              <DetailRow
                label="Birthday"
                value="24th July 2000"
                icon={<Cake size={14} />}
              />
              <DetailRow
                label="Address"
                value="1861 Bayonne Ave, Manchester, NJ, 08759"
                icon={<Home size={14} />}
              />
            </div>

            <div className="border-t border-gray-200 my-6"></div>

            <h3 className="font-semibold text-sm mb-3">Personal Information</h3>
            <div className="space-y-3">
              <DetailRow
                label="Passport No"
                value="QRET4566FGRT"
                icon={<IdCard size={14} />}
              />
              <DetailRow
                label="Passport Exp Date"
                value="15 May 2029"
                icon={<Calendar size={14} />}
              />
              <DetailRow
                label="Nationality"
                value="Indian"
                icon={<Globe size={14} />}
              />
              <DetailRow
                label="Religion"
                value="Christianity"
                icon={<Church size={14} />}
              />
              <DetailRow
                label="Marital status"
                value="Yes"
                icon={<Heart size={14} />}
              />
              <DetailRow
                label="Employment of spouse"
                value="No"
                icon={<Briefcase size={14} />}
              />
              <DetailRow
                label="No. of children"
                value="2"
                icon={<Baby size={14} />}
              />
            </div>
          </div>

          <h3 className="font-semibold text-sm mb-4">
            Emergency Contact Number
          </h3>
          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
            <div className="mb-4">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-1 gap-1 sm:gap-0">
                <span className="text-xs font-medium text-gray-500">
                  Primary
                </span>
                <span className="text-sm font-medium">+1 127 2685 598</span>
              </div>
              <p className="text-xs text-gray-500">Adrian Peralt • Father</p>
            </div>
            <div className="border-t border-gray-200 my-6"></div>
            <div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-1 gap-1 sm:gap-0">
                <span className="text-xs font-medium text-gray-500">
                  Secondary
                </span>
                <span className="text-sm font-medium">+1 989 7774 787</span>
              </div>
              <p className="text-xs text-gray-500">Karen Wills • Mother</p>
            </div>
          </div>
        </div>

        {/* Right section - Accordions */}
        <div className="flex-1 space-y-6">
          {/* About Employee Accordion */}
          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
            <div
              className="flex justify-between items-center cursor-pointer hover:bg-gray-50 p-2 rounded"
              onClick={() => setIsAboutExpanded(!isAboutExpanded)}
            >
              <h3 className="font-semibold text-sm text-gray-700">
                About Employee
              </h3>
              {isAboutExpanded ? (
                <ChevronUp size={16} className="text-gray-500" />
              ) : (
                <ChevronDown size={16} className="text-gray-500" />
              )}
            </div>

            {isAboutExpanded && (
              <>
                <div className="border-t border-gray-200 my-2"></div>
                <div className="mt-2 text-xs text-gray-600 p-2">
                  <p className="mb-4">
                    As an award winning designer, I deliver exceptional quality
                    work and bring value to your brand! With 10 years of
                    experience and 350+ projects completed worldwide with
                    satisfied customers, I developed the 360° brand approach,
                    which helped me to create numerous brands that are relevant,
                    meaningful and loved.
                  </p>
                </div>
              </>
            )}
          </div>

          {/* Bank Information Accordion */}
          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
            <div
              className="flex justify-between items-center cursor-pointer hover:bg-gray-50 p-2 rounded"
              onClick={() => setIsBankExpanded(!isBankExpanded)}
            >
              <h3 className="font-semibold text-sm text-gray-700">
                Bank Information
              </h3>
              {isBankExpanded ? (
                <ChevronUp size={16} className="text-gray-500" />
              ) : (
                <ChevronDown size={16} className="text-gray-500" />
              )}
            </div>

            {isBankExpanded && (
              <>
                <div className="border-t border-gray-200 my-2"></div>
                <div className="mt-2 text-xs text-gray-600 p-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div>
                      <p className="text-gray-500 mb-1">Bank Name</p>
                      <p className="font-medium">Swiz International Bank</p>
                    </div>
                    <div>
                      <p className="text-gray-500 mb-1">Bank account no</p>
                      <p className="font-medium">159843014641</p>
                    </div>
                    <div>
                      <p className="text-gray-500 mb-1">IFSC Code</p>
                      <p className="font-medium">ICI24504</p>
                    </div>
                    <div>
                      <p className="text-gray-500 mb-1">Branch</p>
                      <p className="font-medium">Alabama USA</p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Family Information Accordion */}
          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
            <div
              className="flex justify-between items-center cursor-pointer hover:bg-gray-50 p-2 rounded"
              onClick={() => setIsFamilyExpanded(!isFamilyExpanded)}
            >
              <h3 className="font-semibold text-sm text-gray-700">
                Family Information
              </h3>
              {isFamilyExpanded ? (
                <ChevronUp size={16} className="text-gray-500" />
              ) : (
                <ChevronDown size={16} className="text-gray-500" />
              )}
            </div>

            {isFamilyExpanded && (
              <>
                <div className="border-t border-gray-200 my-2"></div>
                <div className="mt-2 text-xs text-gray-600 p-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div>
                      <p className="text-gray-500 mb-1">Name</p>
                      <p className="font-medium">Hendry Peralt</p>
                    </div>
                    <div>
                      <p className="text-gray-500 mb-1">Relationship</p>
                      <p className="font-medium">Brother</p>
                    </div>
                    <div>
                      <p className="text-gray-500 mb-1">Date of birth</p>
                      <p className="font-medium">25 May 2014</p>
                    </div>
                    <div>
                      <p className="text-gray-500 mb-1">Phone</p>
                      <p className="font-medium">+1 265 6956 961</p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Educational Details Accordion */}
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
              <div
                className="flex justify-between items-center cursor-pointer hover:bg-gray-50 p-2 rounded"
                onClick={() => setIsEducationExpanded(!isEducationExpanded)}
              >
                <h3 className="font-semibold text-sm text-gray-700">
                  Educational Details
                </h3>
                {isEducationExpanded ? (
                  <ChevronUp size={16} className="text-gray-500" />
                ) : (
                  <ChevronDown size={16} className="text-gray-500" />
                )}
              </div>

              {isEducationExpanded && (
                <>
                  <div className="border-t border-gray-200 my-2"></div>
                  <div className="mt-2 text-xs text-gray-600 p-2 space-y-4">
                    <div>
                      <div className="flex flex-col sm:flex-row justify-between">
                        <p className="font-medium">Oxford University</p>
                        <p className="text-gray-500">2020 - 2022</p>
                      </div>
                      <p className="text-gray-500">Computer Science</p>
                    </div>
                    <div>
                      <div className="flex flex-col sm:flex-row justify-between">
                        <p className="font-medium">Cambridge University</p>
                        <p className="text-gray-500">2016 - 2019</p>
                      </div>
                      <p className="text-gray-500">
                        Computer Network & Systems
                      </p>
                    </div>
                    <div>
                      <div className="flex flex-col sm:flex-row justify-between">
                        <p className="font-medium">Oxford School</p>
                        <p className="text-gray-500">2012 - 2016</p>
                      </div>
                      <p className="text-gray-500">Grade X</p>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Experience Accordion */}
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
              <div
                className="flex justify-between items-center cursor-pointer hover:bg-gray-50 p-2 rounded"
                onClick={() => setIsExperienceExpanded(!isExperienceExpanded)}
              >
                <h3 className="font-semibold text-sm text-gray-700">
                  Experience
                </h3>
                {isExperienceExpanded ? (
                  <ChevronUp size={16} className="text-gray-500" />
                ) : (
                  <ChevronDown size={16} className="text-gray-500" />
                )}
              </div>

              {isExperienceExpanded && (
                <>
                  <div className="border-t border-gray-200 my-2"></div>
                  <div className="mt-2 text-xs text-gray-600 p-2 space-y-4">
                    <div>
                      <div className="flex flex-col sm:flex-row justify-between">
                        <p className="font-medium">Google</p>
                        <p className="text-gray-500">Jan 2013 - Present</p>
                      </div>
                      <p className="text-gray-500">UI/UX Developer</p>
                    </div>
                    <div>
                      <div className="flex flex-col sm:flex-row justify-between">
                        <p className="font-medium">Salesforce</p>
                        <p className="text-gray-500">Dec 2012 - Jan 2015</p>
                      </div>
                      <p className="text-gray-500">Web Developer</p>
                    </div>
                    <div>
                      <div className="flex flex-col sm:flex-row justify-between">
                        <p className="font-medium">HubSpot</p>
                        <p className="text-gray-500">Dec 2011 - Jan 2012</p>
                      </div>
                      <p className="text-gray-500">Software Developer</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Projects and Assets Section */}
          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
            {/* Tabs */}
            <div className="flex border-b border-gray-200">
              <button
                className={`py-2 px-4 font-medium text-sm ${
                  activeTab === "projects"
                    ? "text-[#f26522] border-b-2 border-[#f26522]"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab("projects")}
              >
                Projects
              </button>
              <button
                className={`py-2 px-4 font-medium text-sm ${
                  activeTab === "assets"
                    ? "text-[#f26522] border-b-2 border-[#f26522]"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab("assets")}
              >
                Assets
              </button>
            </div>

            <div className="mt-4">
              {activeTab === "projects" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Project 1 */}
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                        <span className="text-blue-600 text-xs font-bold">
                          WH
                        </span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">World Health</h4>
                        <p className="text-xs text-gray-500 mt-1">
                          8 tasks • 15 Completed
                        </p>
                      </div>
                    </div>
                    <div className="border-t border-gray-200 my-3"></div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      <div>
                        <p className="text-gray-500">Deadline</p>
                        <p className="font-medium">31 July 2025</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Project Lead</p>
                        <div className="flex items-center">
                          <div className="w-6 h-6 rounded-full bg-gray-200 mr-2 flex items-center justify-center">
                            <User size={12} className="text-gray-500" />
                          </div>
                          <span className="font-medium">Leona</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project 2 */}
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                        <span className="text-primary-green text-xs font-bold">
                          ED
                        </span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">Education Portal</h4>
                        <p className="text-xs text-gray-500 mt-1">
                          12 tasks • 8 Completed
                        </p>
                      </div>
                    </div>
                    <div className="border-t border-gray-200 my-3"></div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      <div>
                        <p className="text-gray-500">Deadline</p>
                        <p className="font-medium">15 Dec 2024</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Project Lead</p>
                        <div className="flex items-center">
                          <div className="w-6 h-6 rounded-full bg-gray-200 mr-2 flex items-center justify-center">
                            <User size={12} className="text-gray-500" />
                          </div>
                          <span className="font-medium">Mark</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Asset 1 */}
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex flex-col sm:flex-row justify-between gap-4">
                      <div className="flex items-start">
                        <div className="w-10 h-10 rounded bg-gray-100 flex items-center justify-center mr-3">
                          <Briefcase size={16} className="text-gray-500" />
                        </div>
                        <div>
                          <h4 className="font-medium text-sm">
                            Dell Laptop - #343556656
                          </h4>
                          <div className="flex flex-col sm:flex-row items-start sm:items-center mt-1 gap-1 sm:gap-2">
                            <span className="text-xs bg-gray-100 px-2 py-0.5 rounded">
                              AST-001
                            </span>
                            <span className="text-xs text-gray-500">
                              Assigned on 22 Nov, 2022 10:32AM
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-left sm:text-right">
                        <p className="text-xs text-gray-500">Assigned by</p>
                        <div className="flex items-center sm:justify-end mt-1">
                          <span className="text-sm font-medium mr-2">
                            Andrew Symon
                          </span>
                          <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                            <User size={12} className="text-gray-500" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Asset 2 */}
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex flex-col sm:flex-row justify-between gap-4">
                      <div className="flex items-start">
                        <div className="w-10 h-10 rounded bg-gray-100 flex items-center justify-center mr-3">
                          <Briefcase size={16} className="text-gray-500" />
                        </div>
                        <div>
                          <h4 className="font-medium text-sm">
                            Bluetooth Mouse - #478878
                          </h4>
                          <div className="flex flex-col sm:flex-row items-start sm:items-center mt-1 gap-1 sm:gap-2">
                            <span className="text-xs bg-gray-100 px-2 py-0.5 rounded">
                              AST-002
                            </span>
                            <span className="text-xs text-gray-500">
                              Assigned on 22 Nov, 2022 10:32AM
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-left sm:text-right">
                        <p className="text-xs text-gray-500">Assigned by</p>
                        <div className="flex items-center sm:justify-end mt-1">
                          <span className="text-sm font-medium mr-2">
                            Andrew Symon
                          </span>
                          <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                            <User size={12} className="text-gray-500" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// DetailRow component with icon support
function DetailRow({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="flex justify-between items-center text-xs">
      <div className="flex items-center text-gray-500">
        {icon && <span className="mr-2">{icon}</span>}
        {label}
      </div>
      <div className="font-medium text-right">{value}</div>
    </div>
  );
}

export default EmployeeDetailsView;