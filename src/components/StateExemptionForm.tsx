"use client";

import { useState } from "react";
import {
  User,
  FileText,
  CreditCard,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Shield,
  Clock,
  Eye,
} from "lucide-react";

interface StateExemptionFormProps {
  stateName: string;
  stateAbbreviation: string;
  stateSlug: string;
  formName: string;
  price: number;
}

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

export function StateExemptionForm({
  stateName,
  stateAbbreviation,
  stateSlug,
  formName,
  price,
}: StateExemptionFormProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
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
        return (
          formData.firstName.trim() !== "" &&
          formData.lastName.trim() !== "" &&
          formData.email.trim() !== "" &&
          formData.phone.trim() !== "" &&
          formData.dateOfBirth.trim() !== ""
        );
      case 2:
        return formData.condition !== "";
      case 3:
        return formData.agreeTerms;
      default:
        return false;
    }
  };

  const handleSubmit = () => {
    setStep(4);
  };

  const stepLabels = [
    { icon: User, label: "Your Info" },
    { icon: FileText, label: "Condition" },
    { icon: CreditCard, label: "Review" },
  ];

  return (
    <div id="apply" className="scroll-mt-24">
      <div className="max-w-3xl mx-auto">
        {/* Progress */}
        {step <= 3 && (
          <div className="mb-8">
            <div className="flex items-center justify-center mb-4">
              {stepLabels.map((s, i) => (
                <div key={i} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                      step > i + 1
                        ? "bg-green-500 text-white"
                        : step === i + 1
                        ? "bg-amber-500 text-white"
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
                      className={`w-12 sm:w-20 md:w-28 h-1 mx-2 rounded-full transition-colors ${
                        step > i + 1 ? "bg-green-500" : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 text-center">
              Step {step} of 3 &mdash; {stepLabels[step - 1]?.label}
            </p>
          </div>
        )}

        {/* Step 1: Personal Info */}
        {step === 1 && (
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold text-amber-500 uppercase tracking-wider">
                {stateAbbreviation} Exemption Application
              </span>
            </div>
            <h3 className="text-xl font-bold text-heading mb-2">
              Your Information
            </h3>
            <p className="text-gray-600 text-sm mb-6">
              Provide your details for the {stateName} physician evaluation.
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
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition-all text-sm"
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
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition-all text-sm"
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
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition-all text-sm"
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
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition-all text-sm"
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
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition-all text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Medical Condition */}
        {step === 2 && (
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold text-amber-500 uppercase tracking-wider">
                {stateAbbreviation} Exemption Application
              </span>
            </div>
            <h3 className="text-xl font-bold text-heading mb-2">
              Medical Condition
            </h3>
            <p className="text-gray-600 text-sm mb-6">
              Select the condition that requires you to have darker window tint in {stateName}. You will also need to upload supporting medical documentation (diagnosis records, medication list, or doctor&apos;s notes) from your physician.
            </p>
            <div className="space-y-2.5 mb-6">
              {conditions.map((condition) => (
                <button
                  key={condition}
                  onClick={() => updateField("condition", condition)}
                  className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl border text-left text-sm font-medium transition-all ${
                    formData.condition === condition
                      ? "border-amber-400 bg-amber-50 text-amber-700"
                      : "border-gray-200 text-gray-700 hover:border-amber-300 hover:bg-gray-50"
                  }`}
                >
                  <Eye className="w-4 h-4 flex-shrink-0" />
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
                onChange={(e) => updateField("conditionDetails", e.target.value)}
                rows={3}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition-all resize-none text-sm"
                placeholder="Describe your condition, how long you've had it, and how light sensitivity affects your daily life..."
              />
            </div>
          </div>
        )}

        {/* Step 3: Review & Submit */}
        {step === 3 && (
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold text-amber-500 uppercase tracking-wider">
                {stateAbbreviation} Exemption Application
              </span>
            </div>
            <h3 className="text-xl font-bold text-heading mb-2">
              Review &amp; Submit
            </h3>
            <p className="text-gray-600 text-sm mb-6">
              Please review your {stateName} exemption application before submitting.
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                  Personal Information
                </h4>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-gray-500">Name:</span>{" "}
                    <span className="font-medium text-heading">
                      {formData.firstName} {formData.lastName}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500">Email:</span>{" "}
                    <span className="font-medium text-heading">
                      {formData.email}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500">Phone:</span>{" "}
                    <span className="font-medium text-heading">
                      {formData.phone}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500">DOB:</span>{" "}
                    <span className="font-medium text-heading">
                      {formData.dateOfBirth}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                  Evaluation Details
                </h4>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-gray-500">State:</span>{" "}
                    <span className="font-medium text-heading">{stateName}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Form:</span>{" "}
                    <span className="font-medium text-heading">{formName}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Condition:</span>{" "}
                    <span className="font-medium text-heading">
                      {formData.condition}
                    </span>
                  </div>
                  {formData.conditionDetails && (
                    <div>
                      <span className="text-gray-500">Details:</span>{" "}
                      <span className="font-medium text-heading">
                        {formData.conditionDetails}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-amber-50 rounded-xl p-5 border border-amber-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-heading">
                      {stateName} Physician Evaluation
                    </h4>
                    <p className="text-sm text-gray-600">
                      One-time evaluation fee &mdash; includes signed {formName}
                    </p>
                  </div>
                  <span className="text-2xl font-extrabold text-amber-600">
                    ${price}
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

            <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
              <p className="text-red-800 font-semibold text-sm mb-2">Important: Medical Documentation Required</p>
              <p className="text-red-700 text-xs leading-relaxed">
                You must provide legitimate medical documentation (doctor&apos;s notes, diagnosis records, prescriptions, or other medical paperwork) supporting a qualifying condition. Our physician reviews your existing medical paperwork to determine if your state will accept it for an exemption. <strong>If you proceed without valid medical documentation, your evaluation will be declined and the fee is non-refundable.</strong>
              </p>
            </div>

            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.agreeTerms}
                onChange={(e) => updateField("agreeTerms", e.target.checked)}
                className="mt-1 w-5 h-5 rounded border-gray-300 text-amber-500 focus:ring-amber-400"
              />
              <span className="text-sm text-gray-600">
                I agree to the{" "}
                <a href="/terms" className="text-amber-600 underline">
                  Terms &amp; Conditions
                </a>{" "}
                and{" "}
                <a href="/privacy-policy" className="text-amber-600 underline">
                  Privacy Policy
                </a>
                . I understand this is a telemedicine evaluation, I consent
                to being evaluated by a licensed physician, and I acknowledge
                that medical documentation is required and fees are non-refundable
                if I do not provide valid paperwork.
              </span>
            </label>
          </div>
        )}

        {/* Step 4: Confirmation */}
        {step === 4 && (
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-heading mb-3">
              Application Submitted!
            </h3>
            <p className="text-gray-600 max-w-md mx-auto mb-8 leading-relaxed">
              Thank you, {formData.firstName}! Your {stateName} exemption evaluation request has been
              submitted. A licensed physician will review your case and you&apos;ll
              receive your signed {formName} within 24&ndash;48 hours.
            </p>
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100 max-w-sm mx-auto mb-6">
              <p className="text-sm text-gray-500 mb-1">Confirmation sent to:</p>
              <p className="font-semibold text-heading">
                {formData.email}
              </p>
            </div>
            <p className="text-xs text-gray-400">
              Next step: Upload your medical documentation (diagnosis records, medication list, or doctor&apos;s notes) via the link in your confirmation email.
            </p>
          </div>
        )}

        {/* Navigation Buttons */}
        {step <= 3 && (
          <div className="flex items-center justify-between mt-6">
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
            {step < 3 ? (
              <button
                onClick={() => setStep((s) => s + 1)}
                disabled={!canProceed()}
                className="inline-flex items-center gap-2 px-8 py-3 text-sm font-bold text-heading bg-cta hover:bg-amber-300 rounded-full transition-all shadow-md hover:shadow-lg disabled:opacity-40 disabled:cursor-not-allowed"
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
                Submit &amp; Pay ${price}
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
