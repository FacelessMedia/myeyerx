import Link from "next/link";
import { Home, Smartphone, Briefcase, Brain, Car, Sun, Users, CheckCircle } from "lucide-react";
import { BlogTLDR } from "@/components/blog/BlogTLDR";
import { BlogStat, BlogStatRow } from "@/components/blog/BlogStat";
import { BlogCallout } from "@/components/blog/BlogCallout";
import { BlogCTA } from "@/components/blog/BlogCTA";
import { BlogToolPlaceholder } from "@/components/blog/BlogToolPlaceholder";

export function LivingWithLightSensitivityContent() {
  return (
    <>
      <p className="text-xl text-gray-700 leading-relaxed">
        Light sensitivity is incredibly common — and incredibly misunderstood. Millions of Americans deal with it in some form, and a huge number of them have no idea that what they&apos;re experiencing has a name, a cause, and most importantly, solutions. This guide is everything you need to start living better when light is your enemy.
      </p>

      <BlogTLDR items={[
        "Light sensitivity affects tens of millions of Americans — you're far from alone",
        "Small changes at home, work, and on your devices can make a huge difference immediately",
        "FL-41 glasses, warm LED bulbs, and screen settings cost little but help a lot",
        "Medical window tint is one of the most impactful long-term changes for driving comfort",
        "Even one change today can make tomorrow more comfortable",
      ]} />

      <h2>You Are Not Alone</h2>
      <p>
        Maybe you&apos;ve always been &quot;the person who wears sunglasses everywhere.&quot; Maybe your friends joke about how you&apos;re a vampire. Maybe you&apos;ve just accepted that headaches after being outside are a normal part of your life.
      </p>
      <p>
        They&apos;re not. And you&apos;re not being dramatic.
      </p>

      <BlogStatRow>
        <BlogStat icon={Users} value="16M+" label="Americans with Dry Eye" />
        <BlogStat icon={Brain} value="39M" label="Migraine Sufferers in U.S." />
        <BlogStat icon={Sun} value="90%" label="Of Migraine Patients Have Photophobia" />
      </BlogStatRow>

      <p>
        Add in autoimmune conditions like lupus, skin conditions that react to UV exposure, medications that make you sun-sensitive, and eye conditions like cataracts and uveitis, and you start to see just how many people are walking around struggling with this.
      </p>

      <h2>Why Nobody Talks About It</h2>
      <p>
        Light sensitivity isn&apos;t always visible to other people. You&apos;re not in a cast. You don&apos;t have a rash that everyone can see. It&apos;s this invisible thing that makes your daily life harder, and when you try to explain it, people kind of shrug it off.
      </p>

      <BlogCallout variant="info" title="Sound familiar?">
        <p>&quot;Just wear sunglasses.&quot; &quot;Stay inside.&quot; &quot;It&apos;s not that bright.&quot; — If you&apos;ve heard all of those, this guide is for you.</p>
      </BlogCallout>

      <h2>Practical Changes That Actually Help</h2>
      <p>
        The rest of this guide walks through real, actionable things you can do in every area of your life. Small changes that make a real difference.
      </p>

      <div className="not-prose my-6 bg-gradient-to-br from-green-50 to-green-100/50 rounded-2xl p-6 border border-green-200">
        <h3 className="font-extrabold text-heading text-base mb-3 flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-green-500" /> Quick Wins (Under 5 Minutes)
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { action: "Turn on Dark Mode", detail: "Phone + computer — free, instant" },
            { action: "Enable Night Shift / Eye Comfort", detail: "Reduces blue light from screens" },
            { action: "Lower screen brightness to 40-50%", detail: "Most people run way too bright" },
          ].map((item) => (
            <div key={item.action} className="bg-white rounded-xl p-4 border border-green-100">
              <p className="font-bold text-heading text-sm">{item.action}</p>
              <p className="text-gray-500 text-xs mt-1">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="not-prose my-8 space-y-4">
        {[
          {
            icon: Home,
            title: "Your Home",
            color: "bg-amber-50 border-amber-200",
            iconColor: "text-amber-500",
            content: "Your home should be the one place where your eyes can relax. Start with your bulbs — swap to warm white LEDs rated at 2700K or lower. Install dimmer switches so you can dial brightness to exactly where you need it. Get blackout curtains for the bedroom and consider residential window film that blocks up to 99% of UV rays.",
            link: "/resources/light-proof-your-home",
            linkText: "Read our complete home guide →",
          },
          {
            icon: Smartphone,
            title: "Your Phone and Devices",
            color: "bg-blue-50 border-blue-200",
            iconColor: "text-blue-500",
            content: "You probably spend seven-plus hours a day looking at screens. Your phone, tablet, and computer all have built-in settings that can make a massive difference — Dark Mode, Reduce White Point (iPhone) or Extra Dim (Android), Night Shift, and color filters can transform your screen from a flashlight in your face to something actually comfortable.",
            link: "/resources/iphone-settings-light-sensitivity",
            linkText: "iPhone settings →",
            link2: "/resources/android-settings-light-sensitivity",
            linkText2: "Android settings →",
          },
          {
            icon: Briefcase,
            title: "Your Workspace",
            color: "bg-purple-50 border-purple-200",
            iconColor: "text-purple-500",
            content: "For a lot of people, the workplace is the worst environment for light sensitivity. Fluorescent lights flicker at rates your brain picks up on. Your monitor is too bright. But there are solutions: FL-41 glasses filter the specific wavelengths that cause problems, fluorescent light covers reduce flicker and harsh output, and the ADA may entitle you to reasonable accommodations.",
            link: "/resources/workplace-accommodations-light-sensitivity",
            linkText: "Workplace accommodations guide →",
          },
          {
            icon: Brain,
            title: "Migraines and Light",
            color: "bg-red-50 border-red-200",
            iconColor: "text-red-500",
            content: "About 80-90% of people who get migraines experience photophobia during their attacks, and many are sensitive to light even between attacks. The specific wavelengths that cause the most trouble are in the blue-green range, between 480 and 520 nanometers. Tracking your triggers, managing the \"trigger stack,\" and using the right tools can reduce how often migraines come and how bad they get.",
            link: "/resources/migraines-and-light-sensitivity",
            linkText: "Migraines and light guide →",
          },
          {
            icon: Car,
            title: "Driving",
            color: "bg-green-50 border-green-200",
            iconColor: "text-green-600",
            content: "Driving might be the single most challenging daily activity for someone with light sensitivity. Direct sunlight, reflected glare, oncoming headlights, and the constant shifting between light and shadow. Polarized sunglasses, visor extenders, keeping your windshield clean, and quality window tint all make a meaningful difference.",
            link: "/resources/best-sunglasses-driving-light-sensitivity",
            linkText: "Driving sunglasses guide →",
            link2: "/resources/complete-guide-to-window-tint-medical-exemptions",
            linkText2: "Tint exemption guide →",
          },
        ].map((section) => (
          <div key={section.title} className={`rounded-2xl p-6 border ${section.color}`}>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center flex-shrink-0 border border-gray-100">
                <section.icon className={`w-5 h-5 ${section.iconColor}`} />
              </div>
              <div className="flex-1">
                <h3 className="font-extrabold text-heading text-base mb-2">{section.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">{section.content}</p>
                <div className="flex flex-wrap gap-3">
                  <Link href={section.link} className="text-amber-600 font-semibold text-sm hover:underline">{section.linkText}</Link>
                  {section.link2 && (
                    <Link href={section.link2} className="text-amber-600 font-semibold text-sm hover:underline">{section.linkText2}</Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <BlogToolPlaceholder
        title="Light Sensitivity Self-Assessment"
        description="Answer a few quick questions about your symptoms to get personalized recommendations for which guides and tools will help you most."
      />

      <h2>Window Tint — The Bigger Picture</h2>
      <p>
        Everything mentioned above — sunglasses, visors, screen settings — they help. But they&apos;re individual tools for individual moments. Quality window tint on your vehicle changes the equation at a fundamental level:
      </p>

      <div className="not-prose my-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {[
          { label: "Cuts Glare at the Source", desc: "Reduces visible light entering through the glass before it reaches your eyes" },
          { label: "Blocks 99% of UV Rays", desc: "Both UVA and UVB radiation blocked with quality ceramic tint" },
          { label: "Reduces Heat Buildup", desc: "Cooler car interior means less reliance on AC that dries your eyes" },
          { label: "Passive, Constant Protection", desc: "Works every time you drive without requiring you to do anything" },
        ].map((item) => (
          <div key={item.label} className="flex items-start gap-3 bg-surface rounded-xl p-4 border border-gray-100">
            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-heading text-sm">{item.label}</p>
              <p className="text-gray-500 text-xs mt-1">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <p>
        For people with qualifying medical conditions, a <Link href="/resources/complete-guide-to-window-tint-medical-exemptions" className="text-amber-600 font-semibold hover:underline">medical exemption</Link> allows you to go darker than standard legal limits — legally, with proper documentation.
      </p>

      <h2>Start Somewhere</h2>
      <p>
        Even one change can make tomorrow a little better than today. Change a light bulb. Turn on Dark Mode. Clean the inside of your windshield. Some of this costs nothing. Some takes a small investment. And some — like getting a legal medical exemption for window tint — takes a bigger step that can genuinely transform your daily comfort.
      </p>

      <BlogCTA
        heading="Light Sensitivity Affecting Your Driving?"
        description="If your condition qualifies, a medical window tint exemption provides passive UV and glare protection every time you drive. 100% online — no office visit required."
        buttonText="Start Your Evaluation — Starting at $225"
      />

      <BlogCallout variant="warning" title="Medical Disclaimer">
        <p>This article is for informational purposes only and does not constitute medical advice. Always consult with a licensed healthcare provider regarding your specific medical condition and treatment options.</p>
      </BlogCallout>
    </>
  );
}
