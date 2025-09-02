import React from "react";

const Step3Vendors = ({ formData, setFormData }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Step 3: Vendors</h2>
      <input
        type="text"
        placeholder="Caterer"
        value={formData.caterer || ""}
        onChange={(e) => setFormData({ ...formData, caterer: e.target.value })}
        className="border rounded p-2 w-full"
      />
      <input
        type="text"
        placeholder="Photographer"
        value={formData.photographer || ""}
        onChange={(e) =>
          setFormData({ ...formData, photographer: e.target.value })
        }
        className="border rounded p-2 w-full"
      />
      <input
        type="text"
        placeholder="Florist"
        value={formData.florist || ""}
        onChange={(e) => setFormData({ ...formData, florist: e.target.value })}
        className="border rounded p-2 w-full"
      />
    </div>
  );
};

export default Step3Vendors;
