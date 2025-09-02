import React from "react";

const Step2Guests = ({ formData, setFormData }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Step 2: Guest Information</h2>
      <input
        type="number"
        placeholder="Number of Guests"
        value={formData.guests || ""}
        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
        className="border rounded p-2 w-full"
      />
      <textarea
        placeholder="Special Guest Notes"
        value={formData.guestNotes || ""}
        onChange={(e) =>
          setFormData({ ...formData, guestNotes: e.target.value })
        }
        className="border rounded p-2 w-full"
      ></textarea>
    </div>
  );
};

export default Step2Guests;
