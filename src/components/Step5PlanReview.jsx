import React from "react";

const Step5PlanReview = ({ formData }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Step 5: Review Your Plan</h2>
      <div className="p-4 border rounded bg-gray-50">
        <p>
          <strong>Couple's Names:</strong> {formData.names}
        </p>
        <p>
          <strong>Date:</strong> {formData.date}
        </p>
        <p>
          <strong>Location:</strong> {formData.location}
        </p>
        <p>
          <strong>Guests:</strong> {formData.guests}
        </p>
        <p>
          <strong>Notes:</strong> {formData.guestNotes}
        </p>
        <p>
          <strong>Caterer:</strong> {formData.caterer}
        </p>
        <p>
          <strong>Photographer:</strong> {formData.photographer}
        </p>
        <p>
          <strong>Florist:</strong> {formData.florist}
        </p>
        <p>
          <strong>Invitation Message:</strong> {formData.invitationMessage}
        </p>
        <p>
          <strong>RSVP Date:</strong> {formData.rsvpDate}
        </p>
      </div>
    </div>
  );
};

export default Step5PlanReview;
