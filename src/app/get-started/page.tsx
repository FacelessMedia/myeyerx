"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  Eye,
  User,
  MapPin,
  FileText,
  CreditCard,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Shield,
  Clock,
} from "lucide-react";

const states = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado",
  "Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho",
  "Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana",
  "Maine","Maryland","Massachusetts","Michigan","Minnesota",
  "Mississippi","Missouri","Montana","Nebraska","Nevada",
  "New Hampshire","New Jersey","New Mexico","New York",
  "North Carolina","North Dakota","Ohio","Oklahoma","Oregon",
  "Pennsylvania","Rhode Island","South Carolina","South Dakota",
  "Tennessee","Texas","Utah","Vermont","Virginia","Washington",
  "West Virginia","Wisconsin","Wyoming",
];

const conditions = [
  "Photosensitivity / Chronic Light Sensitivity",
  "Lupus (Systemic Lupus Erythematosus)",
  "Melanoma / History of Skin Cancer",
  "Albinism",
  "Severe Migraines (Sunlight-Triggered)",
  "Post-Surgical Eye Condition (Cataract, LASIK, etc.)",
  "Xeroderma Pigmentosum",
  "Rosacea with Photosensitivity",
  "Porphyria",
  "Other Dermatological / Ophthalmological Condition",
];

function GetStartedContent() {
  const searchParams = useSearchParams();
  const preselectedState = searchParams.get("state")?.replace(/-/g, " ") || "";

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    state: preselectedState
      ? states.find(
          (s) => s.toLowerCase() === preselectedState.toLowerCase()
        ) || ""
      : "",
    condition: "",
    conditionDetails: "",
    agreeTerms: false,
  });

  const updateField = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.state !== "";
      case 2:
        return (
          formData.firstName.trim() !== "" &&
          formData.lastName.trim() !== "" &&
          formData.email.trim() !== "" &&
          formData.phone.trim() !== "" &&
          formData.dateOfBirth.trim() !== ""
        );
      case 3:
        return formData.condition !== "";
      case 4:
        return formData.agreeTerms;
      default:
        return false;
    }
  };

  const handleSubmit = () => {
    setStep(5);
  };

  const stepLabels = [
    { icon: MapPin, label: "State" },
    { icon: User, label: "Info" },
    { icon: FileText, label: "Condition" },
    { icon: CreditCard, label: "Review" },
  ];

  return (
    <div className="min-h-screen bg-surface">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Progress */}
        {step <= 4 && (
          <div className="mb-10">
            <div className="flex items-center justify-between mb-6">
              {stepLabels.map((s, i) => (
                <div key={i} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                      step > i + 1
                        ? "bg-green-500 text-white"
                        : step === i + 1
                        ? "bg-accent text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {step > i + 1 ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <s.icon className="w-5 h-5" />
                    )}
                  </div>
                  {i < stepLabels.length - 1 && (
                    <div
                      className={`hidden sm:block w-16 md:w-24 lg:w-32 h-1 mx-2 rounded-full transition-colors ${
                        step > i + 1 ? "bg-green-500" : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 text-center">
              Step {step} of 4 &mdash; {stepLabels[step - 1]?.label}
            </p>
          </div>
        )}

        {/* Step 1: State Selection */}
        {step === 1 && (
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-primary-dark mb-2">
              Select Your State
            </h2>
            <p className="text-gray-600 mb-6">
              Choose the state where your vehicle is registered.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-h-96 overflow-y-auto pr-2">
              {states.map((state) => (
                <button
                  key={state}
                  onClick={() => updateField("state", state)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-xl border text-sm font-medium transition-all ${
                    formData.state === state
                      ? "border-accent bg-accent/10 text-accent"
                      : "border-gray-200 text-gray-700 hover:border-accent/50 hover:bg-gray-50"
                  }`}
                >
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  {state}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Personal Info */}
        {step === 2 && (
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-primary-dark mb-2">
              Your Information
            </h2>
            <p className="text-gray-600 mb-6">
              Please provide your personal details for the physician evaluation.
            </p>
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    First Name
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => updateField("firstName", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => updateField("lastName", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => updateField("dateOfBirth", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Medical Condition */}
        {step === 3 && (
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-primary-dark mb-2">
              Medical Condition
            </h2>
            <p className="text-gray-600 mb-6">
              Select the condition that requires you to have darker window tint.
            </p>
            <div className="space-y-3 mb-6">
              {conditions.map((condition) => (
                <button
                  key={condition}
                  onClick={() => updateField("condition", condition)}
                  className={`w-full flex items-center gap-3 px-5 py-4 rounded-xl border text-left text-sm font-medium transition-all ${
                    formData.condition === condition
                      ? "border-accent bg-accent/10 text-accent"
                      : "border-gray-200 text-gray-700 hover:border-accent/50 hover:bg-gray-50"
                  }`}
                >
                  <Eye className="w-5 h-5 flex-shrink-0" />
                  {condition}
                </button>
              ))}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Additional Details (Optional)
              </label>
              <textarea
                value={formData.conditionDetails}
                onChange={(e) =>
                  updateField("conditionDetails", e.target.value)
                }
                rows={3}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none"
                placeholder="Describe any additional details about your condition..."
              />
            </div>
          </div>
        )}

        {/* Step 4: Review */}
        {step === 4 && (
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-primary-dark mb-2">
              Review & Submit
            </h2>
            <p className="text-gray-600 mb-6">
              Please review your information before submitting.
            </p>

            <div className="space-y-4 mb-8">
              <div className="bg-surface rounded-xl p-5 border border-gray-100">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                  Personal Information
                </h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-gray-500">Name:</span>{" "}
                    <span className="font-medium text-primary-dark">
                      {formData.firstName} {formData.lastName}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500">Email:</span>{" "}
                    <span className="font-medium text-primary-dark">
                      {formData.email}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500">Phone:</span>{" "}
                    <span className="font-medium text-primary-dark">
                      {formData.phone}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500">DOB:</span>{" "}
                    <span className="font-medium text-primary-dark">
                      {formData.dateOfBirth}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-surface rounded-xl p-5 border border-gray-100">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                  Evaluation Details
                </h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-gray-500">State:</span>{" "}
                    <span className="font-medium text-primary-dark">
                      {formData.state}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500">Condition:</span>{" "}
                    <span className="font-medium text-primary-dark">
                      {formData.condition}
                    </span>
                  </div>
                  {formData.conditionDetails && (
                    <div>
                      <span className="text-gray-500">Details:</span>{" "}
                      <span className="font-medium text-primary-dark">
                        {formData.conditionDetails}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-accent/5 rounded-xl p-5 border border-accent/20">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-primary-dark">
                      Physician Evaluation
                    </h3>
                    <p className="text-sm text-gray-600">
                      One-time evaluation fee
                    </p>
                  </div>
                  <span className="text-2xl font-extrabold text-accent">
                    $79
                  </span>
                </div>
                <div className="flex items-center gap-4 mt-3 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Shield className="w-3.5 h-3.5" /> HIPAA Compliant
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> 24-48hr turnaround
                  </span>
                </div>
              </div>
            </div>

            <label className="flex items-start gap-3 mb-6 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.agreeTerms}
                onChange={(e) => updateField("agreeTerms", e.target.checked)}
                className="mt-1 w-5 h-5 rounded border-gray-300 text-accent focus:ring-accent"
              />
              <span className="text-sm text-gray-600">
                I agree to the{" "}
                <a href="/terms" className="text-accent underline">
                  Terms &amp; Conditions
                </a>{" "}
                and{" "}
                <a href="/privacy-policy" className="text-accent underline">
                  Privacy Policy
                </a>
                . I understand this is a telemedicine evaluation and I consent
                to being evaluated by a licensed physician.
              </span>
            </label>
          </div>
        )}

        {/* Step 5: Confirmation */}
        {step === 5 && (
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold text-primary-dark mb-3">
              Application Submitted!
            </h2>
            <p className="text-gray-600 max-w-md mx-auto mb-8 leading-relaxed">
              Thank you, {formData.firstName}! Your evaluation request has been
              submitted. A licensed physician will review your case and you&apos;ll
              receive your signed medical exemption certificate within 24–48
              hours.
            </p>
            <div className="bg-surface rounded-xl p-5 border border-gray-100 max-w-sm mx-auto mb-8">
              <p className="text-sm text-gray-500 mb-1">Confirmation sent to:</p>
              <p className="font-semibold text-primary-dark">
                {formData.email}
              </p>
            </div>
            <a
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-accent hover:bg-accent-light rounded-full transition-all"
            >
              Return Home
            </a>
          </div>
        )}

        {/* Navigation Buttons */}
        {step <= 4 && (
          <div className="flex items-center justify-between mt-8">
            {step > 1 ? (
              <button
                onClick={() => setStep((s) => s - 1)}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-gray-600 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
            ) : (
              <div />
            )}
            {step < 4 ? (
              <button
                onClick={() => setStep((s) => s + 1)}
                disabled={!canProceed()}
                className="inline-flex items-center gap-2 px-8 py-3 text-sm font-bold text-white bg-accent hover:bg-accent-light rounded-full transition-all shadow-md hover:shadow-lg disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Continue
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!canProceed()}
                className="inline-flex items-center gap-2 px-8 py-3 text-sm font-bold text-white bg-green-500 hover:bg-green-600 rounded-full transition-all shadow-md hover:shadow-lg disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Submit &amp; Pay $79
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function GetStartedPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-surface flex items-center justify-center">
          <div className="animate-pulse text-gray-400">Loading...</div>
        </div>
      }
    >
      <GetStartedContent />
    </Suspense>
  );
}
