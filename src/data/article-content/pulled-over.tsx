import Link from "next/link";
import { Shield, FileText, MessageSquare, Search, AlertTriangle, CheckCircle, Car } from "lucide-react";
import { BlogTLDR } from "@/components/blog/BlogTLDR";
import { BlogStepCards } from "@/components/blog/BlogStepCards";
import { BlogCallout } from "@/components/blog/BlogCallout";
import { BlogCTA } from "@/components/blog/BlogCTA";

export function PulledOverContent() {
  return (
    <>
      <p className="text-xl text-gray-600 leading-relaxed">
        Getting pulled over for window tint can be stressful — especially when you have a legitimate medical reason for it. Here&apos;s exactly what to do, what to say, and how to handle the situation if you have a medical exemption.
      </p>

      <BlogTLDR items={[
        "Keep exemption certificate in the vehicle at all times + photo on phone as backup",
        "Tell the officer immediately: \"I have a medical window tint exemption\"",
        "Be patient — officers may not be familiar with medical exemptions",
        "If cited anyway: don't argue, contest later by presenting certificate to the court",
        "No exemption yet? Fines range $25-$500+ per stop. Getting one protects you legally.",
      ]} />

      <h2>Before It Happens: Be Prepared</h2>
      <div className="not-prose my-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { icon: FileText, label: "Certificate in Vehicle", desc: "Glove box, console, or visor clip", color: "text-amber-500" },
          { icon: FileText, label: "Print Two Copies", desc: "One in car, one at home as backup", color: "text-green-400" },
          { icon: Car, label: "Photo on Phone", desc: "Backup if paper copy is misplaced", color: "text-amber-500" },
          { icon: Search, label: "Know State Rules", desc: "DMV registration, required forms", color: "text-amber-500" },
        ].map((item) => (
          <div key={item.label} className="bg-surface rounded-xl p-3 border border-gray-100 text-center">
            <item.icon className={`w-4 h-4 ${item.color} mx-auto mb-1`} />
            <p className="font-bold text-heading text-xs">{item.label}</p>
            <p className="text-gray-500 text-[10px] mt-0.5">{item.desc}</p>
          </div>
        ))}
      </div>

      <h2>During the Stop</h2>
      <BlogStepCards steps={[
        { icon: Shield, title: "Stay Calm & Cooperative", description: "The officer is doing their job. Tint violations are one of the most common traffic stops." },
        { icon: Car, title: "Roll Down Your Window", description: "Shows cooperation and lets the officer see you clearly." },
        { icon: MessageSquare, title: "Inform Immediately", description: "\"Officer, I have a medical window tint exemption. The certificate is in my glove compartment. May I get it for you?\"" },
        { icon: FileText, title: "Present the Certificate", description: "Hand it to the officer with your license and registration." },
        { icon: Shield, title: "Be Patient", description: "Officer may not be familiar with medical exemptions. Give them time to review and verify." },
      ]} />

      <h2>What the Officer Will Check</h2>
      <div className="not-prose my-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {[
          { label: "Your name matches the certificate", check: true },
          { label: "Certificate is current (not expired)", check: true },
          { label: "Physician's signature is present", check: true },
          { label: "State matches (or reciprocity applies)", check: true },
          { label: "VLT within exemption's allowance (tint meter)", check: true },
        ].map((item) => (
          <div key={item.label} className="flex items-start gap-2 bg-gray-100 rounded-lg p-3 border border-gray-200">
            <Search className="w-3.5 h-3.5 text-amber-500 flex-shrink-0 mt-0.5" />
            <p className="text-gray-600 text-xs font-semibold">{item.label}</p>
          </div>
        ))}
      </div>

      <h2>If You Get a Citation Anyway</h2>
      <BlogCallout variant="tip" title="Don't argue at the scene — contest later">
        <div className="space-y-1.5">
          {[
            "Accept the citation respectfully. You can contest it in court.",
            "Note the officer's name and badge number.",
            "Contact the court — present your valid exemption to get the citation dismissed.",
            "Bring: exemption certificate, copy of your state's exemption law, DMV registration.",
          ].map((item) => (
            <div key={item} className="flex items-start gap-2">
              <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-gray-600">{item}</p>
            </div>
          ))}
        </div>
      </BlogCallout>

      <h2>Without an Exemption</h2>
      <div className="not-prose my-8 rounded-2xl border-2 border-gray-200 bg-gray-100 p-6">
        <div className="flex items-start gap-4">
          <AlertTriangle className="w-8 h-8 text-red-400 flex-shrink-0" />
          <div>
            <h3 className="font-extrabold text-heading text-base mb-2">Getting Pulled Over Without One?</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-2">
              Fines range from <strong>$25 to $500+</strong> per stop. Repeat offenses = higher fines, points on license, or forced tint removal. If you have a qualifying medical condition, getting a <Link href="/resources/complete-guide-to-window-tint-medical-exemptions" className="text-amber-600 font-semibold hover:underline">medical exemption</Link> protects you legally.
            </p>
          </div>
        </div>
      </div>

      <h2>Interstate Travel</h2>
      <p>
        If you&apos;re pulled over in a different state, some honor out-of-state exemptions, others don&apos;t. <Link href="/resources/traveling-between-states-tint-exemption" className="text-amber-600 font-semibold hover:underline">Read our guide on traveling between states with a tint exemption →</Link>
      </p>

      <BlogCTA
        heading="Don't Wait for a Ticket — Get Protected Now"
        description="A medical tint exemption is your legal shield. One-time evaluation, 100% online, certificate delivered in 24-48 hours."
        buttonText="Start Your Evaluation — Starting at $225"
      />

      <BlogCallout variant="warning" title="Legal Disclaimer">
        <p>This article provides general information and is not legal advice. Traffic laws and enforcement vary by jurisdiction. Consult a traffic attorney for specific legal questions.</p>
      </BlogCallout>
    </>
  );
}
