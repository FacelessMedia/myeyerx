import Link from "next/link";
import { MapPin, CheckCircle, HelpCircle, X, FileText, Search, Shield, Car, Glasses } from "lucide-react";
import { BlogTLDR } from "@/components/blog/BlogTLDR";
import { BlogStepCards } from "@/components/blog/BlogStepCards";
import { BlogCallout } from "@/components/blog/BlogCallout";
import { BlogCTA } from "@/components/blog/BlogCTA";

export function TravelingStatesContent() {
  return (
    <>
      <p className="text-xl text-gray-700 leading-relaxed">
        Your medical tint exemption protects you in your home state. But what happens when you cross state lines? Tint laws and exemption recognition vary by state, and driving through a state that doesn&apos;t recognize your exemption can lead to an unwanted traffic stop. Here&apos;s what you need to know.
      </p>

      <BlogTLDR items={[
        "No federal tint exemption or national reciprocity agreement exists",
        "Three categories: states that accept, unclear policy, and states that reject out-of-state exemptions",
        "Always carry your certificate — even on short trips across state lines",
        "For regular multi-state driving, get an exemption in each state you frequent",
        "Rental cars: bring polarized sunglasses and visor extender as portable alternatives",
      ]} />

      <h2>The Core Problem</h2>
      <BlogCallout variant="warning" title="No national reciprocity">
        <p>Medical tint exemptions are issued by individual states. There is no federal exemption or national reciprocity agreement. Each state has its own rules about recognizing exemptions from other states.</p>
      </BlogCallout>

      <h2>Three Categories of States</h2>
      <div className="not-prose my-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-2xl border-2 border-green-200 bg-green-50 p-5">
          <CheckCircle className="w-6 h-6 text-green-500 mb-3" />
          <p className="font-extrabold text-heading text-sm mb-2">Accept Out-of-State</p>
          <p className="text-gray-700 text-xs leading-relaxed">Explicitly recognize exemptions from other states. Your home state certificate should protect you. Always have it readily accessible.</p>
        </div>
        <div className="rounded-2xl border-2 border-amber-200 bg-amber-50 p-5">
          <HelpCircle className="w-6 h-6 text-amber-500 mb-3" />
          <p className="font-extrabold text-heading text-sm mb-2">No Clear Policy</p>
          <p className="text-gray-700 text-xs leading-relaxed">Many states don&apos;t explicitly address it. Often comes down to officer discretion. Having your certificate and explaining politely usually resolves the issue.</p>
        </div>
        <div className="rounded-2xl border-2 border-red-200 bg-red-50 p-5">
          <X className="w-6 h-6 text-red-500 mb-3" />
          <p className="font-extrabold text-heading text-sm mb-2">Don&apos;t Recognize</p>
          <p className="text-gray-700 text-xs leading-relaxed">Strictly enforce their own tint laws. Consider getting an exemption in each state you regularly visit.</p>
        </div>
      </div>

      <h2>Best Practices for Interstate Travel</h2>
      <BlogStepCards steps={[
        { icon: FileText, title: "Carry Your Certificate", description: "Always in the vehicle, even on short trips across state lines." },
        { icon: Search, title: "Research Destination States", description: "Check tint laws for every state you'll drive through before a road trip." },
        { icon: MapPin, title: "Get Multi-State Exemptions", description: "If you regularly drive in 2-3 states, get an exemption in each. MyEyeRx serves 40+ states." },
        { icon: FileText, title: "Print Your State's Exemption Law", description: "The relevant statute helps if an officer is unfamiliar with medical exemptions." },
        { icon: Shield, title: "Know What to Do If Stopped", description: "Stay calm, present certificate immediately, be patient." },
      ]} />

      <h2>Road Trip Planning</h2>
      <div className="not-prose my-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {[
          "Map out which states you'll pass through",
          "Note each state's front side window VLT requirement",
          "Plan for stricter states that don't recognize out-of-state exemptions",
          "Keep all docs accessible: certificate, registration, license",
        ].map((item) => (
          <div key={item} className="flex items-start gap-2 bg-blue-50 rounded-lg p-3 border border-blue-200">
            <CheckCircle className="w-3.5 h-3.5 text-blue-500 flex-shrink-0 mt-0.5" />
            <p className="text-gray-700 text-xs">{item}</p>
          </div>
        ))}
      </div>

      <h2>What About Rental Cars?</h2>
      <div className="not-prose my-8 rounded-xl border border-gray-200 bg-white p-5">
        <div className="flex items-start gap-3">
          <Car className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-heading text-sm">Rental fleets use factory glass — no tint.</p>
            <p className="text-gray-600 text-xs mt-1 leading-relaxed">
              For short trips, bring <Link href="/resources/best-sunglasses-driving-light-sensitivity" className="text-amber-600 font-semibold hover:underline">driving sunglasses</Link> and a <Link href="/resources/vehicle-accessories-photosensitive-drivers" className="text-amber-600 font-semibold hover:underline">visor extender</Link> as portable alternatives.
            </p>
          </div>
        </div>
      </div>

      <BlogCTA
        heading="Drive in Multiple States? Get Covered in Each One."
        description="MyEyeRx serves 40+ states. The process is the same for each — 100% online, 15 minutes, certificate delivered in 24-48 hours."
        buttonText="Start Your Evaluation — Starting at $225"
      />

      <BlogCallout variant="warning" title="Legal Disclaimer">
        <p>Interstate tint law recognition is complex and subject to change. This article provides general guidance and is not legal advice. Check current regulations for each state before traveling.</p>
      </BlogCallout>
    </>
  );
}
