import React from "react";

const Step4Invitations = ({ formData, setFormData }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Step 4: Invitations</h2>
      <textarea
        placeholder="Invitation Message"
        value={formData.invitationMessage || ""}
        onChange={(e) =>
          setFormData({ ...formData, invitationMessage: e.target.value })
        }
        className="border rounded p-2 w-full"
      ></textarea>
      <input
        type="date"
        value={formData.rsvpDate || ""}
        onChange={(e) => setFormData({ ...formData, rsvpDate: e.target.value })}
        className="border rounded p-2 w-full"
      />
    </div>
  );
};

export default Step4Invitations;
