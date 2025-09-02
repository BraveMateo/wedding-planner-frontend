import React from "react";

const Step1BasicInfo = ({ formData, setFormData }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Step 1: Basic Information</h2>
      <input
        type="text"
        placeholder="Couple's Names"
        value={formData.names || ""}
        onChange={(e) => setFormData({ ...formData, names: e.target.value })}
        className="border rounded p-2 w-full"
      />
      <input
        type="date"
        value={formData.date || ""}
        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        className="border rounded p-2 w-full"
      />
      <input
        type="text"
        placeholder="Wedding Location"
        value={formData.location || ""}
        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
        className="border rounded p-2 w-full"
      />
    </div>
  );
};

export default Step1BasicInfo;
