import Link from "next/link";

export function HowToGetContent() {
  return (
    <>
      <p className="text-xl text-gray-700 leading-relaxed">
        Getting a medical window tint exemption used to require multiple in-person visits — first to your doctor, then to the DMV. Today, telehealth makes it possible to complete the entire process online in about 15 minutes. Here&apos;s exactly how to do it.
      </p>

      <h2>Who Qualifies for an Online Tint Exemption?</h2>
      <p>
        You may qualify for a medical window tint exemption if you have a documented medical condition that causes sensitivity to sunlight or UV radiation. Common qualifying conditions include:
      </p>
      <ul>
        <li>Photosensitivity disorders</li>
        <li>Lupus (SLE)</li>
        <li>Chronic migraines with photophobia</li>
        <li>Melanoma or skin cancer history</li>
        <li>Post-LASIK or post-surgical light sensitivity</li>
        <li>Xeroderma Pigmentosum, Porphyria, or Albinism</li>
        <li>Dry eye syndrome</li>
        <li>Cataracts and uveitis</li>
        <li>Traumatic brain injury / concussion</li>
        <li>Medication-induced photosensitivity</li>
        <li>Rosacea with sun sensitivity</li>
      </ul>
      <p>
        <Link href="/conditions" className="text-amber-600 font-semibold hover:underline">See all qualifying conditions →</Link>
      </p>

      <h2>Step 1: Check Your State&apos;s Requirements</h2>
      <p>
        Before starting, check whether your state allows medical tint exemptions and what specific documentation is required. Most states have their own forms or documentation requirements. At MyEyeRx, we handle the state-specific paperwork for you — just select your state and we take care of the rest.
      </p>
      <p>
        <Link href="/window-tint-laws-by-state" className="text-amber-600 font-semibold hover:underline">Check your state&apos;s tint laws →</Link>
      </p>

      <h2>Step 2: Start Your Online Evaluation</h2>
      <p>
        Visit <Link href="/">myeyerx.net</Link> and select your state. You&apos;ll be guided through a brief medical questionnaire that covers:
      </p>
      <ul>
        <li>Your medical condition and diagnosis</li>
        <li>How long you&apos;ve had the condition</li>
        <li>How sunlight or UV exposure affects your symptoms</li>
        <li>Current treatments and medications</li>
        <li>How the condition impacts your ability to drive safely</li>
      </ul>
      <p>
        This questionnaire takes about 10-15 minutes to complete. Be thorough and honest — the physician needs accurate information to make a proper evaluation.
      </p>

      <h2>Step 3: Physician Review</h2>
      <p>
        Once you submit your questionnaire, a licensed physician reviews your case. At MyEyeRx, every evaluation is conducted by Dr. Elizabeth Rose Borowiec, OD — a licensed optometrist and our Medical Director. This is a real medical evaluation, not an automated approval system.
      </p>
      <p>
        The physician may follow up with additional questions if your case requires clarification. The review typically takes 24-48 hours.
      </p>

      <h2>Step 4: Receive Your Certificate</h2>
      <p>
        If your evaluation is approved, your signed medical exemption certificate is delivered to you by email. The certificate includes:
      </p>
      <ul>
        <li>Your name and identifying information</li>
        <li>The physician&apos;s signature and credentials</li>
        <li>Your qualifying medical condition</li>
        <li>The state-specific form or documentation your state requires</li>
        <li>The validity period of the exemption</li>
      </ul>

      <h2>Step 5: What to Do Next</h2>
      <ol>
        <li><strong>Print your certificate</strong> and keep it in your vehicle at all times</li>
        <li><strong>Register with your DMV</strong> if your state requires it (check your state&apos;s specific requirements)</li>
        <li><strong>Get your windows tinted</strong> by a professional installer</li>
        <li><strong>Set a renewal reminder</strong> if your exemption has an expiration date</li>
      </ol>

      <h2>What If I&apos;m Not Approved?</h2>
      <p>
        You are informed before purchasing that legitimate medical documentation is required. Our physician reviews your existing medical paperwork to determine if your state will accept it for an exemption. If you proceed without valid medical documentation supporting a qualifying condition, your evaluation will be declined and the fee is non-refundable. Please ensure you have appropriate medical records ready before starting your application.
      </p>

      <h2>How Long Does the Process Take?</h2>
      <p>
        The entire process — from starting your questionnaire to receiving your certificate — typically takes <strong>24-48 hours</strong>. The questionnaire itself takes about 15 minutes, and the physician review is completed within 1-2 business days.
      </p>

      <h2>Is It Legitimate?</h2>
      <p>
        Yes. MyEyeRx is a HIPAA-compliant telehealth service. All evaluations are conducted by a licensed physician (Dr. Elizabeth Rose Borowiec, OD, NPI: 1558578559). The exemption certificates we provide are physician-signed medical documents that are recognized by state DMVs and law enforcement.
      </p>

      <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 not-prose my-8">
        <p className="text-sm text-gray-500 italic">
          <strong>Medical Disclaimer:</strong> This article is for informational purposes only and does not constitute medical advice. A licensed physician will evaluate your specific condition to determine if you qualify for a medical window tint exemption.
        </p>
      </div>
    </>
  );
}
