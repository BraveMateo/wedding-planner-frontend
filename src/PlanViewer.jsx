import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PlanViewer() {
  const { shareId } = useParams();
  const [plan, setPlan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPlan = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/plans/${shareId}`
        );
        setPlan(res.data);
      } catch (err) {
        setError("Plan not found or server error.");
      } finally {
        setLoading(false);
      }
    };
    fetchPlan();
  }, [shareId]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center text-red-600 mt-10">{error}</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 p-6 flex items-center justify-center">
      <Card className="max-w-xl w-full rounded-2xl shadow-lg p-6 bg-white">
        <CardContent>
          <h1 className="text-2xl font-bold text-center mb-6">
            🎉 {plan.coupleNames}'s Wedding Plan
          </h1>

          <div className="space-y-3 text-gray-700">
            <p>
              <strong>Date:</strong> {plan.weddingDate || "TBD"}
            </p>
            <p>
              <strong>Venue:</strong> {plan.location || "Romantic Beach Resort"}
            </p>
            <p>
              <strong>Budget:</strong> ${plan.budget || "20,000"}
            </p>
            <p>
              <strong>Guests:</strong> {plan.guests || "Approx. 100"}
            </p>
            <p>
              <strong>Vendors:</strong>{" "}
              {plan.vendors || "Photographer, Caterer, DJ"}
            </p>
            <p>
              <strong>Invitation:</strong>{" "}
              {plan.invitations || "You are cordially invited..."}
            </p>
            <p>
              <strong>Notes:</strong> {plan.notes || "No additional notes."}
            </p>
          </div>

          <div className="mt-6">
            <Button
              className="w-full bg-purple-500 hover:bg-purple-600"
              onClick={() => (window.location.href = "/")}
            >
              Plan Your Own Wedding
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
