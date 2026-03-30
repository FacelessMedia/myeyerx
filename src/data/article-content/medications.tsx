import Link from "next/link";
import { Pill, Sun, Zap, Shield, Eye, Glasses, Car, Home, Stethoscope, AlertTriangle } from "lucide-react";
import { BlogTLDR } from "@/components/blog/BlogTLDR";
import { BlogStepCards } from "@/components/blog/BlogStepCards";
import { BlogCallout } from "@/components/blog/BlogCallout";
import { BlogCTA } from "@/components/blog/BlogCTA";

export function MedicationsContent() {
  return (
    <>
      <p className="text-xl text-gray-700 leading-relaxed">
        Many common medications list &quot;photosensitivity&quot; as a side effect — but most people don&apos;t realize how significant that sensitivity can be until they&apos;re squinting through a sunny drive or getting headaches under office lights. Here&apos;s what you need to know about medication-induced light sensitivity.
      </p>

      <BlogTLDR items={[
        "Two mechanisms: phototoxic (sunburn-like) and photoallergic (eczema-like immune response)",
        "Common culprits: doxycycline, ibuprofen, HCTZ, Accutane, amiodarone, SSRIs",
        "Don't stop medication — instead protect skin, eyes, and driving environment",
        "Medication-induced photosensitivity DOES qualify for a tint exemption in most states",
        "Key: have your healthcare provider document the photosensitivity",
      ]} />

      <h2>How Medications Cause Photosensitivity</h2>
      <div className="not-prose my-8 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="rounded-2xl border-2 border-orange-200 bg-orange-50 p-6">
          <Sun className="w-6 h-6 text-orange-500 mb-3" />
          <p className="font-extrabold text-heading text-sm mb-2">Phototoxic Reactions</p>
          <p className="text-gray-700 text-xs leading-relaxed">The drug absorbs UV light and releases it as energy that damages skin cells. <strong>More common.</strong> Causes sunburn-like reaction on exposed skin.</p>
        </div>
        <div className="rounded-2xl border-2 border-red-200 bg-red-50 p-6">
          <Zap className="w-6 h-6 text-red-500 mb-3" />
          <p className="font-extrabold text-heading text-sm mb-2">Photoallergic Reactions</p>
          <p className="text-gray-700 text-xs leading-relaxed">UV light changes the drug&apos;s chemical structure on skin, causing an immune response. Leads to eczema-like rashes that can spread beyond sun-exposed areas.</p>
        </div>
      </div>
      <p>
        Some medications also directly affect the eyes — dilating pupils, altering tear production, or affecting the retina — increasing visual light sensitivity independent of skin reactions.
      </p>

      <h2>Common Photosensitizing Medications</h2>
      <div className="not-prose my-8 space-y-3">
        {[
          {
            category: "Antibiotics",
            color: "bg-blue-50 border-blue-200",
            meds: [
              { name: "Tetracyclines", detail: "Doxycycline, minocycline. Among the most photosensitizing. Used for acne, Lyme, respiratory infections." },
              { name: "Fluoroquinolones", detail: "Ciprofloxacin (Cipro), levofloxacin. UTIs and respiratory infections." },
              { name: "Sulfonamides", detail: "Sulfamethoxazole/trimethoprim (Bactrim). UTIs and other infections." },
            ],
          },
          {
            category: "NSAIDs (Pain Relievers)",
            color: "bg-green-50 border-green-200",
            meds: [
              { name: "Ibuprofen", detail: "Advil, Motrin" },
              { name: "Naproxen", detail: "Aleve" },
              { name: "Piroxicam", detail: "Feldene — one of the most photosensitizing NSAIDs" },
            ],
          },
          {
            category: "Diuretics",
            color: "bg-purple-50 border-purple-200",
            meds: [
              { name: "HCTZ", detail: "One of the most commonly prescribed meds in the US — and most photosensitizing. High blood pressure." },
              { name: "Furosemide", detail: "Lasix" },
            ],
          },
          {
            category: "Psychiatric / Heart / Diabetes / Retinoids",
            color: "bg-amber-50 border-amber-200",
            meds: [
              { name: "Phenothiazines / TCAs", detail: "Chlorpromazine, amitriptyline, nortriptyline" },
              { name: "SSRIs", detail: "Some patients report increased sensitivity with sertraline, fluoxetine" },
              { name: "Amiodarone", detail: "Skin photosensitivity + corneal deposits increasing light sensitivity" },
              { name: "Isotretinoin (Accutane)", detail: "Extreme photosensitivity — well-known side effect" },
            ],
          },
        ].map((group) => (
          <div key={group.category} className={`rounded-xl p-4 border ${group.color}`}>
            <p className="font-extrabold text-heading text-sm mb-2">{group.category}</p>
            <div className="space-y-1.5">
              {group.meds.map((med) => (
                <div key={med.name} className="flex items-start gap-2">
                  <Pill className="w-3 h-3 text-gray-400 flex-shrink-0 mt-1" />
                  <p className="text-xs text-gray-700"><strong>{med.name}</strong> — {med.detail}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <h2>What to Do If Your Medication Causes Photosensitivity</h2>
      <BlogStepCards steps={[
        { icon: AlertTriangle, title: "Don't Stop Medication", description: "Talk to your doctor first. Many of these drugs are essential." },
        { icon: Shield, title: "Protect Your Skin", description: "Broad-spectrum SPF 50+ sunscreen, protective clothing, wide-brimmed hats." },
        { icon: Glasses, title: "Protect Your Eyes", description: "Polarized sunglasses outdoors, FL-41 glasses indoors." },
        { icon: Car, title: "Protect While Driving", description: "Medical window tint exemption provides passive UV protection every drive." },
        { icon: Home, title: "Optimize Environment", description: "Home lighting, screen settings, workplace accommodations." },
        { icon: Stethoscope, title: "Talk to Your Doctor", description: "Ask about alternative medications with less photosensitivity risk." },
      ]} />

      <h2>Does This Qualify for a Tint Exemption?</h2>
      <div className="not-prose my-8 rounded-2xl border-2 border-green-200 bg-green-50 p-6">
        <div className="flex items-start gap-4">
          <Shield className="w-8 h-8 text-green-600 flex-shrink-0" />
          <div>
            <h3 className="font-extrabold text-heading text-base mb-2">Yes, in most states.</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Medical tint exemptions cover any condition causing medically documented light or UV sensitivity. If your medication causes photosensitivity that impacts driving comfort, you may qualify. The key: have a healthcare provider document the condition.
            </p>
            <p className="mt-3">
              <Link href="/resources/how-to-get-tint-exemption-online" className="text-amber-600 font-semibold text-sm hover:underline">Learn how to get a medical tint exemption online →</Link>
            </p>
          </div>
        </div>
      </div>

      <BlogCTA
        heading="Your Medication Causes Light Sensitivity — Get Protected"
        description="If your medication makes you photosensitive, a medical window tint exemption provides legal, passive protection every time you drive. 100% online evaluation."
        buttonText="Start Your Evaluation — Starting at $225"
      />

      <BlogCallout variant="warning" title="Medical Disclaimer">
        <p>Never change or stop medication without consulting your prescribing physician. Discuss photosensitivity concerns with your healthcare provider.</p>
      </BlogCallout>
    </>
  );
}
