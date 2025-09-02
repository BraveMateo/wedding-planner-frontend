import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Heart, Users, Gift, Mail } from "lucide-react";
import { motion } from "framer-motion";
import axios from "axios";

export default function WeddingPlannerApp() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [aiPlan, setAiPlan] = useState("");

  const [formData, setFormData] = useState({
    coupleNames: "",
    weddingDate: "",
    location: "",
    budget: "",
    notes: "",
    guests: "",
    vendors: "",
    invitations: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const applySuggestion = (field, suggestion) => {
    setFormData({ ...formData, [field]: suggestion });
  };

  const steps = ["Basic Info", "Guests", "Vendors", "Invitations", "AI Plan"];

  // --- Call backend to generate AI plan ---
  const fetchAIPlan = async () => {
    try {
      setLoading(true);
      setAiPlan("");
      const res = await axios.post("http://localhost:5000/api/plans", formData);
      setAiPlan(res.data.aiPlan);
    } catch (err) {
      console.error(err);
      setAiPlan("⚠️ Could not generate the AI plan. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 p-6 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl w-full"
      >
        <Card className="rounded-2xl shadow-lg p-6 bg-white">
          <CardContent>
            <h1 className="text-2xl font-bold text-center mb-4 flex items-center justify-center gap-2">
              <Heart className="text-pink-500" /> AI Wedding Planner
            </h1>

            {/* Progress Bar */}
            <div className="flex justify-between items-center mb-6">
              {steps.map((label, index) => (
                <div key={index} className="flex-1 text-center">
                  <div
                    className={`h-2 rounded-full mb-1 ${
                      index + 1 <= step ? "bg-pink-500" : "bg-gray-200"
                    }`}
                  ></div>
                  <span
                    className={`text-xs ${
                      index + 1 === step
                        ? "font-bold text-pink-600"
                        : "text-gray-500"
                    }`}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* Step 1: Basic Info */}
            {step === 1 && (
              <div className="space-y-4">
                <Input
                  name="coupleNames"
                  placeholder="Couple's Names"
                  value={formData.coupleNames}
                  onChange={handleChange}
                />
                <Input
                  type="date"
                  name="weddingDate"
                  value={formData.weddingDate}
                  onChange={handleChange}
                />
                <Input
                  name="location"
                  placeholder="Preferred Location"
                  value={formData.location}
                  onChange={handleChange}
                />
                <Input
                  name="budget"
                  placeholder="Estimated Budget ($)"
                  value={formData.budget}
                  onChange={handleChange}
                />
                <Textarea
                  name="notes"
                  placeholder="Additional Notes (style, guest count, etc.)"
                  value={formData.notes}
                  onChange={handleChange}
                />
                <Button
                  className="w-full bg-pink-500 hover:bg-pink-600"
                  onClick={() => setStep(2)}
                >
                  Next: Guest Management
                </Button>
              </div>
            )}

            {/* Step 2: Guests */}
            {step === 2 && (
              <div className="space-y-4">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  <Users /> Guest Management
                </h2>
                <Textarea
                  name="guests"
                  placeholder="List guest names or guest count"
                  value={formData.guests}
                  onChange={handleChange}
                />
                <Button
                  className="w-full bg-pink-500 hover:bg-pink-600"
                  onClick={() => setStep(3)}
                >
                  Next: Vendors
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setStep(1)}
                >
                  Back
                </Button>
              </div>
            )}

            {/* Step 3: Vendors */}
            {step === 3 && (
              <div className="space-y-4">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  <Gift /> Vendor Selection
                </h2>
                <Textarea
                  name="vendors"
                  placeholder="Preferred vendors (photographer, caterer, DJ, etc.)"
                  value={formData.vendors}
                  onChange={handleChange}
                />
                <Button
                  className="w-full bg-pink-500 hover:bg-pink-600"
                  onClick={() => setStep(4)}
                >
                  Next: Invitations
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setStep(2)}
                >
                  Back
                </Button>
              </div>
            )}

            {/* Step 4: Invitations */}
            {step === 4 && (
              <div className="space-y-4">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  <Mail /> Invitations
                </h2>
                <Textarea
                  name="invitations"
                  placeholder="Invitation message or design notes"
                  value={formData.invitations}
                  onChange={handleChange}
                />
                <Button
                  className="w-full bg-pink-500 hover:bg-pink-600"
                  onClick={async () => {
                    setStep(5);
                    await fetchAIPlan();
                  }}
                >
                  Generate AI Plan
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setStep(3)}
                >
                  Back
                </Button>
              </div>
            )}

            {/* Step 5: AI Wedding Plan */}
            {step === 5 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                <h2 className="text-xl font-semibold">
                  Your Personalized Wedding Plan
                </h2>
                <div className="p-4 bg-pink-50 rounded-lg shadow-sm space-y-2 whitespace-pre-line">
                  {loading ? "✨ Generating your plan..." : aiPlan}
                </div>
                <Button
                  className="w-full bg-purple-500 hover:bg-purple-600"
                  onClick={() => {
                    setStep(1);
                    setAiPlan("");
                  }}
                >
                  Start Over
                </Button>
              </motion.div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
