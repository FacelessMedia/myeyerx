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
  Phone,
  AlertTriangle,
  Video,
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
    conditions: [] as string[],
    conditionDetails: "",
    agreeDocumentation: false,
    agreeVideoRecording: false,
    agreeTerms: false,
  });

  const updateField = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleCondition = (condition: string) => {
    setFormData((prev) => ({
      ...prev,
      conditions: prev.conditions.includes(condition)
        ? prev.conditions.filter((c) => c !== condition)
        : [...prev.conditions, condition],
    }));
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
        return formData.conditions.length > 0;
      case 3:
        return formData.agreeDocumentation && formData.agreeVideoRecording && formData.agreeTerms;
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
              Medical Condition(s)
            </h3>
            <p className="text-gray-600 text-sm mb-6">
              Select <strong>all conditions that apply</strong> to you. You will also need to provide supporting medical documentation (diagnosis records, medication list, or doctor&apos;s notes) from your physician.
            </p>
            <div className="space-y-2.5 mb-6">
              {conditions.map((condition) => {
                const isSelected = formData.conditions.includes(condition);
                return (
                  <button
                    key={condition}
                    onClick={() => toggleCondition(condition)}
                    className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl border text-left text-sm font-medium transition-all ${
                      isSelected
                        ? "border-amber-400 bg-amber-50 text-amber-700"
                        : "border-gray-200 text-gray-700 hover:border-amber-300 hover:bg-gray-50"
                    }`}
                  >
                    <div className={`w-5 h-5 rounded flex-shrink-0 flex items-center justify-center border-2 transition-colors ${
                      isSelected ? "bg-amber-500 border-amber-500" : "border-gray-300"
                    }`}>
                      {isSelected && <CheckCircle className="w-3.5 h-3.5 text-white" />}
                    </div>
                    {condition}
                  </button>
                );
              })}
            </div>
            {formData.conditions.length > 0 && (
              <p className="text-xs text-amber-600 font-medium mb-4">
                {formData.conditions.length} condition{formData.conditions.length > 1 ? "s" : ""} selected
              </p>
            )}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Additional Details (Optional)
              </label>
              <textarea
                value={formData.conditionDetails}
                onChange={(e) => updateField("conditionDetails", e.target.value)}
                rows={3}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition-all resize-none text-sm"
                placeholder="Describe your condition(s), how long you've had them, and how light sensitivity affects your daily life..."
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
                    <span className="text-gray-500">Condition(s):</span>{" "}
                    <span className="font-medium text-heading">
                      {formData.conditions.join(", ")}
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

            {/* === CONCISE DISCLAIMER BLOCK === */}
            <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-6 mb-6">
              <div className="flex items-start gap-3 mb-3">
                <AlertTriangle className="w-7 h-7 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-red-800 font-extrabold text-lg">STOP — Read Before You Pay</h4>
                  <p className="text-red-600 text-xs font-semibold mt-1">This service is for legitimate medical needs ONLY.</p>
                </div>
              </div>

              <ul className="space-y-2 text-sm text-red-800 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold mt-0.5">&bull;</span>
                  <span><strong>Medical documentation required.</strong> You must have existing records (diagnosis, medication list, doctor&apos;s notes). Our doctors review records — they do not diagnose.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold mt-0.5">&bull;</span>
                  <span><strong>No docs = no refund.</strong> Once you pay and a consultation is scheduled on the doctor&apos;s calendar, the fee is non-refundable — even if you lack proper documentation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Video className="w-3.5 h-3.5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Consultations are video recorded</strong> for state compliance and mutual protection.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="w-3.5 h-3.5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span><strong>We take our reputation seriously.</strong> These disclosures are provided before any transaction. False or defamatory public statements about MyEyeRx may result in legal action. See our full <a href="/terms" className="text-red-600 underline font-semibold">Terms &amp; Conditions</a>.</span>
                </li>
              </ul>

              <p className="text-xs text-red-700 leading-relaxed mb-4">
                Full details are outlined in our <a href="/terms" className="underline font-semibold">Terms &amp; Conditions</a> and <a href="/refund-policy" className="underline font-semibold">Refund Policy</a>. We encourage you to review them before proceeding.
              </p>

              <div className="bg-white border-2 border-red-200 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-red-800 font-bold text-sm">Unsure about your documentation? Call first — don&apos;t pay.</p>
                    <p className="text-red-700 text-xs mt-1">A 2-minute call can save you money and ensure you&apos;re prepared.</p>
                    <a
                      href="tel:+17346441804"
                      className="inline-flex items-center gap-2 mt-2 px-4 py-2 bg-red-600 text-white font-bold text-sm rounded-full hover:bg-red-700 transition-colors"
                    >
                      <Phone className="w-4 h-4" /> Call (734) 644-1804
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* === REQUIRED CHECKBOXES === */}
            <div className="space-y-4">
              <label className="flex items-start gap-3 cursor-pointer p-4 rounded-xl border-2 border-red-200 bg-red-50 hover:bg-red-100 transition-colors">
                <input
                  type="checkbox"
                  checked={formData.agreeDocumentation}
                  onChange={(e) => updateField("agreeDocumentation", e.target.checked)}
                  className="mt-0.5 w-5 h-5 rounded border-red-400 text-red-600 focus:ring-red-500"
                />
                <span className="text-sm text-red-800 font-medium leading-relaxed">
                  I confirm that I have legitimate medical documentation supporting a qualifying condition. I understand that <strong>once a consultation is scheduled, the fee is non-refundable</strong> — including if my documentation is insufficient. If unsure, I will call <strong>(734) 644-1804</strong> before paying.
                </span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer p-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors">
                <input
                  type="checkbox"
                  checked={formData.agreeVideoRecording}
                  onChange={(e) => updateField("agreeVideoRecording", e.target.checked)}
                  className="mt-0.5 w-5 h-5 rounded border-gray-300 text-amber-500 focus:ring-amber-400"
                />
                <span className="text-sm text-gray-700 leading-relaxed">
                  I consent to my consultation being <strong>video recorded</strong> for state compliance and mutual protection.
                </span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer p-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors">
                <input
                  type="checkbox"
                  checked={formData.agreeTerms}
                  onChange={(e) => updateField("agreeTerms", e.target.checked)}
                  className="mt-0.5 w-5 h-5 rounded border-gray-300 text-amber-500 focus:ring-amber-400"
                />
                <span className="text-sm text-gray-700 leading-relaxed">
                  I have read and agree to the{" "}
                  <a href="/terms" className="text-amber-600 underline font-semibold">Terms &amp; Conditions</a>,{" "}
                  <a href="/privacy-policy" className="text-amber-600 underline font-semibold">Privacy Policy</a>, and{" "}
                  <a href="/refund-policy" className="text-amber-600 underline font-semibold">Refund Policy</a>{" "}
                  — including the no-refund and review integrity policies.
                </span>
              </label>
            </div>
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
              submitted. A licensed physician will review your case and your scheduled
              video consultation details will be sent to your email.
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
