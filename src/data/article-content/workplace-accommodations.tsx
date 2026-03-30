import Link from "next/link";
import { Lightbulb, Monitor, Clock, FileText, MessageSquare, Target, PenLine, Mail, CheckCircle, Shield } from "lucide-react";
import { BlogTLDR } from "@/components/blog/BlogTLDR";
import { BlogStepCards } from "@/components/blog/BlogStepCards";
import { BlogCallout } from "@/components/blog/BlogCallout";
import { BlogCTA } from "@/components/blog/BlogCTA";

export function WorkplaceAccommodationsContent() {
  return (
    <>
      <p className="text-xl text-gray-600 leading-relaxed">
        If fluorescent lights, bright monitors, and open-plan offices make your workday miserable, you have more options than you might think. The Americans with Disabilities Act (ADA) may entitle you to reasonable accommodations — and many changes don&apos;t require any formal process at all.
      </p>

      <BlogTLDR items={[
        "The ADA requires employers (15+ employees) to provide reasonable accommodations for light sensitivity",
        "You don't have to disclose your specific diagnosis — only that you need accommodation",
        "Most requests are free or cheap: removing overhead tubes, allowing Dark Mode, desk relocation",
        "Quick wins like FL-41 glasses and monitor adjustments don't require formal requests",
        "Job Accommodation Network (askjan.org) provides free help if your employer pushes back",
      ]} />

      <h2>Your Rights Under the ADA</h2>
      <div className="not-prose my-8 bg-gray-100 rounded-2xl p-6 border-2 border-gray-200">
        <div className="flex items-center gap-2 mb-3">
          <Shield className="w-5 h-5 text-blue-600" />
          <h3 className="font-extrabold text-heading text-base">You Are Protected</h3>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed mb-3">
          The ADA requires employers with 15+ employees to provide <strong>reasonable accommodations</strong> for qualifying disabilities. Light sensitivity caused by migraines, lupus, TBI, or chronic photophobia generally qualifies.
        </p>
        <div className="bg-white rounded-lg p-4 border border-blue-100">
          <p className="text-xs text-gray-600 leading-relaxed">
            <strong>Key:</strong> You don&apos;t have to disclose your specific diagnosis — only that you have a medical condition requiring accommodation. Your employer can request documentation from your healthcare provider.
          </p>
        </div>
      </div>

      <h2>Accommodations You Can Request</h2>
      <div className="not-prose my-8 space-y-4">
        {[
          {
            icon: Lightbulb,
            title: "Lighting Changes",
            color: "bg-gray-100 border-gray-200",
            iconColor: "text-amber-500",
            items: [
              "Remove or disconnect overhead fluorescent tubes above your desk",
              "Install fluorescent light covers/diffusers to reduce flicker",
              "Provide a desk lamp with warm-toned bulb as replacement",
              "Relocate desk away from windows or high-lighting areas",
              { text: "Allow FL-41 glasses at your desk", link: "/resources/fl-41-glasses-complete-guide" },
            ],
          },
          {
            icon: Monitor,
            title: "Workstation Changes",
            color: "bg-gray-100 border-gray-200",
            iconColor: "text-amber-500",
            items: [
              "Anti-glare screen or matte monitor",
              "Monitor hood to block overhead light reflections",
              "Adjustable monitor arm to minimize glare",
              "Permission to use Dark Mode, f.lux, or adjusted display settings",
            ],
          },
          {
            icon: Clock,
            title: "Schedule / Location Flexibility",
            color: "bg-gray-100 border-gray-200",
            iconColor: "text-amber-500",
            items: [
              { text: "Remote work days from your light-controlled home", link: "/resources/light-proof-your-home" },
              "Flexible hours to avoid peak sunlight during commute",
              "Private or semi-private workspace with individual lighting control",
            ],
          },
        ].map((section) => (
          <div key={section.title} className={`rounded-2xl p-5 border ${section.color}`}>
            <div className="flex items-center gap-3 mb-3">
              <section.icon className={`w-5 h-5 ${section.iconColor}`} />
              <h3 className="font-extrabold text-heading text-base">{section.title}</h3>
            </div>
            <div className="space-y-1.5">
              {section.items.map((item) => {
                const text = typeof item === "string" ? item : item.text;
                const link = typeof item === "string" ? undefined : item.link;
                return (
                  <div key={text} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-3.5 h-3.5 text-green-400 flex-shrink-0 mt-0.5" />
                    {link ? (
                      <span>{text.split("FL-41")[0]}<Link href={link} className="text-amber-600 font-semibold hover:underline">{text.includes("FL-41") ? "FL-41 glasses" : text}</Link>{text.includes("FL-41") ? " at your desk" : ""}</span>
                    ) : (
                      <span>{text}</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <h2>How to Request Accommodations</h2>
      <BlogStepCards steps={[
        { icon: FileText, title: "Document Your Needs", description: "Get a letter from your healthcare provider describing your condition and recommended accommodations" },
        { icon: MessageSquare, title: "Talk to HR / Manager", description: "Make the request verbally or in writing. Written is better for your records." },
        { icon: Target, title: "Be Specific", description: "\"I need the two fluorescent tubes above my desk disconnected and a warm-toned desk lamp provided\"" },
        { icon: PenLine, title: "Frame as Productivity", description: "\"These changes will help me work without headaches and maintain my productivity\"" },
        { icon: Mail, title: "Follow Up in Writing", description: "After any verbal conversation, send a follow-up email summarizing what was discussed" },
      ]} />

      <h2>Quick Wins (No Formal Request Needed)</h2>
      <div className="not-prose my-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
        {[
          { label: "FL-41 glasses at your desk", link: "/resources/fl-41-glasses-complete-guide" },
          { label: "Adjust monitor brightness + Dark Mode" },
          { label: "Install f.lux on your computer", link: "/resources/best-apps-light-sensitivity" },
          { label: "Position monitor to reduce glare" },
          { label: "Bring a small desk lamp from home" },
          { label: "Follow the 20-20-20 rule", link: "/resources/20-20-20-rule-light-sensitivity" },
        ].map((item) => (
          <div key={item.label} className="bg-gray-100 rounded-lg p-3 border border-gray-200 text-center">
            {item.link ? (
              <Link href={item.link} className="text-amber-600 font-semibold text-xs hover:underline">{item.label}</Link>
            ) : (
              <p className="text-gray-600 text-xs font-semibold">{item.label}</p>
            )}
          </div>
        ))}
      </div>

      <h2>What If Your Employer Pushes Back?</h2>
      <BlogCallout variant="tip" title="Most accommodations are free or nearly free">
        <p>An employer would have a very hard time arguing that disconnecting two fluorescent tubes or allowing Dark Mode creates &quot;undue hardship.&quot; If you encounter resistance, the <strong>Job Accommodation Network (JAN)</strong> at askjan.org provides free consultation to both employees and employers.</p>
      </BlogCallout>

      <BlogCTA
        heading="Need Documentation for Your Employer?"
        description="A medical evaluation for light sensitivity can support your accommodation request. Our licensed providers evaluate your condition 100% online."
        buttonText="Start Your Evaluation — Starting at $225"
      />

      <BlogCallout variant="warning" title="Legal Disclaimer">
        <p>This article provides general information about workplace accommodations and is not legal advice. Consult an employment attorney for specific legal questions about your situation.</p>
      </BlogCallout>
    </>
  );
}
