import React from "react";
import { designations, technicalOptions, status } from "@/utils/constants";
import Dropdown from "@/components/common/form/DropDown";

const AddPerformanceIndicator: React.FC = () => {
  return (
    <div className="">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Add New Indicator
      </h1>

      <Dropdown
        name="designation"
        id="designation"
        label="Designation"
        options={designations.map((d) => ({ value: d.id, label: d.name }))}
        className="mb-6 w-full md:w-1/2 lg:w-2/3"
      />

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Technical</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 ">
          <Dropdown
            name="customerExperience"
            id="customer-experience"
            label="Customer Experience"
            options={technicalOptions}
          />

          <Dropdown
            name="marketing"
            id="marketing"
            label="Marketing"
            options={technicalOptions}
          />

          <Dropdown
            name="management"
            id="management"
            label="Management"
            options={technicalOptions}
          />

          <Dropdown
            name="administration"
            id="administration"
            label="Administration"
            options={technicalOptions}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 pt-7 ">
          <Dropdown
            name="presentationSkills"
            id="presentation-skills"
            label="Presentation Skills"
            options={technicalOptions}
          />

          <Dropdown
            name="qualityOfWork"
            id="quality-of-work"
            label="Quality of Work"
            options={technicalOptions}
          />

          <Dropdown
            name="efficiency"
            id="efficiency"
            label="Efficiency"
            options={technicalOptions}
          />
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Organizational
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 ">
          <Dropdown
            name="integrity"
            id="integrity"
            label="Integrity"
            options={technicalOptions}
          />

          <Dropdown
            name="professionalism"
            id="professionalism"
            label="Professionalism"
            options={technicalOptions}
          />

          <Dropdown
            name="teamWork"
            id="team-work"
            label="Team Work"
            options={technicalOptions}
          />

          <Dropdown
            name="criticalThinking"
            id="critical-thinking"
            label="Critical Thinking"
            options={technicalOptions}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 pt-7 ">
          <Dropdown
            name="conflictManagement"
            id="conflict-management"
            label="Conflict Management"
            options={technicalOptions}
          />

          <Dropdown
            name="attendance"
            id="attendance"
            label="Attendance"
            options={technicalOptions}
          />

          <Dropdown
            name="abilityToMeetDeadline"
            id="ability-to-meet-deadline"
            label="Ability To Meet Deadline"
            options={technicalOptions}
          />
        </div>
      </div>

      <Dropdown
        name="status"
        id="status"
        label="Status"
        options={status.map((d) => ({ value: d.id, label: d.name }))}
        className="mb-6 w-full md:w-1/2 lg:w-2/3"
      />
      <div className="flex gap-4 items-center justify-center w-max">
        <button
          type="button"
          className="w-full px-6 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f26522] transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="w-max min-w-max px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-[#f26522] hover:bg-[#e05b1e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f26522] transition-colors"
        >
          Add Indicator
        </button>
      </div>
    </div>
  );
};

export default AddPerformanceIndicator;
