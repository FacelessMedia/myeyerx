import Link from "next/link";
import { Eye, Brain, Zap, AlertTriangle, Home, Glasses, Car, Activity, Stethoscope, Pill } from "lucide-react";
import { BlogTLDR } from "@/components/blog/BlogTLDR";
import { BlogCallout } from "@/components/blog/BlogCallout";
import { BlogCTA } from "@/components/blog/BlogCTA";
import { BlogComparisonTable } from "@/components/blog/BlogComparisonTable";

export function UnderstandingPhotophobiaContent() {
  return (
    <>
      <p className="text-xl text-gray-700 leading-relaxed">
        Photophobia isn&apos;t a fear of light — despite what the name suggests. It&apos;s an abnormal sensitivity to light that causes discomfort, pain, or other symptoms when you&apos;re exposed to brightness that most people handle just fine. Understanding what&apos;s happening inside your eyes and brain is the first step toward doing something about it.
      </p>

      <BlogTLDR items={[
        "Photophobia is a symptom (not a disease) that appears across dozens of conditions",
        "Two types exist: ocular (eye-based) and neurological (brain-based) — many people have both",
        "Blue-green light at 480-520nm causes the most trouble for photophobic patients",
        "FL-41 tinted glasses specifically filter the problematic wavelengths",
        "Many conditions causing photophobia qualify for medical window tint exemptions",
      ]} />

      <h2>What Photophobia Actually Is</h2>
      <p>
        Photophobia is a <strong>symptom</strong>, not a disease. It shows up across dozens of different conditions — from dry eye to migraines to traumatic brain injuries. When your eyes or brain respond abnormally to light, the result is the same: discomfort or pain that ranges from &quot;annoying&quot; to &quot;completely debilitating.&quot;
      </p>
      <p>
        The severity varies enormously. Some people just squint a bit more than average in bright sunlight. Others can&apos;t function under fluorescent office lighting. And during a migraine attack, some people need to lie in a pitch-dark room because even the light from a phone screen is excruciating.
      </p>

      <h2>The Two Types of Light Sensitivity</h2>
      <p>
        Not all photophobia works the same way. There are two distinct mechanisms:
      </p>

      <div className="not-prose my-8 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="rounded-2xl p-6 border-2 border-blue-200 bg-blue-50">
          <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-4 border border-blue-100">
            <Eye className="w-6 h-6 text-blue-500" />
          </div>
          <h3 className="font-extrabold text-heading text-base mb-2">Ocular Photophobia</h3>
          <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-3">Eye-Based</p>
          <p className="text-gray-700 text-sm leading-relaxed mb-3">
            Originates in the eye itself. When the cornea, iris, lens, or retina is damaged, inflamed, or compromised, light entering the eye causes direct discomfort or pain.
          </p>
          <p className="text-gray-500 text-xs font-semibold">Common causes:</p>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {[
              { name: "Dry Eye", slug: "dry-eye-syndrome" },
              { name: "Cataracts", slug: "cataracts" },
              { name: "Uveitis", slug: "uveitis" },
              { name: "Keratitis", slug: "keratitis" },
              { name: "Post-LASIK", slug: "lasik-post-surgical" },
            ].map((c) => (
              <Link key={c.slug} href={`/conditions/${c.slug}`} className="text-xs bg-white px-2.5 py-1 rounded-full border border-blue-200 text-blue-700 hover:bg-blue-100 transition-colors font-medium">
                {c.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="rounded-2xl p-6 border-2 border-purple-200 bg-purple-50">
          <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-4 border border-purple-100">
            <Brain className="w-6 h-6 text-purple-500" />
          </div>
          <h3 className="font-extrabold text-heading text-base mb-2">Neurological Photophobia</h3>
          <p className="text-xs font-bold text-purple-600 uppercase tracking-wider mb-3">Brain-Based</p>
          <p className="text-gray-700 text-sm leading-relaxed mb-3">
            Originates in how the brain processes light signals. Even when the eyes are perfectly healthy, the brain&apos;s visual processing centers overreact to normal light input.
          </p>
          <p className="text-gray-500 text-xs font-semibold">Common causes:</p>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {[
              { name: "Migraines", slug: "migraines" },
              { name: "TBI / Concussion", slug: "traumatic-brain-injury" },
              { name: "Blepharospasm", slug: "blepharospasm" },
            ].map((c) => (
              <Link key={c.slug} href={`/conditions/${c.slug}`} className="text-xs bg-white px-2.5 py-1 rounded-full border border-purple-200 text-purple-700 hover:bg-purple-100 transition-colors font-medium">
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <BlogCallout variant="info" title="Many people have both types">
        <p>Dry eye combined with migraines, for example, means you have both ocular and neurological photophobia. Understanding which type drives your sensitivity helps determine the most effective treatments.</p>
      </BlogCallout>

      <h2>Which Wavelengths Cause the Most Trouble?</h2>
      <p>
        Research has identified that <strong>blue-green light in the 480-520 nanometer range</strong> is the most problematic for people with photophobia. This wavelength range activates special light-sensitive cells in the retina called <strong>intrinsically photosensitive retinal ganglion cells (ipRGCs)</strong> that connect directly to the brain&apos;s pain and migraine centers.
      </p>

      <div className="not-prose my-8 rounded-2xl border border-gray-200 bg-gradient-to-r from-violet-50 via-blue-50 via-green-50 via-yellow-50 to-red-50 p-6">
        <h4 className="font-extrabold text-heading text-sm mb-4 text-center">Light Wavelength Spectrum &amp; Photophobia</h4>
        <div className="flex items-center gap-1 mb-3">
          <div className="h-8 flex-1 rounded-l-lg bg-gradient-to-r from-violet-400 to-blue-400 relative">
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 text-[10px] text-gray-500 mb-1">380-480nm</span>
          </div>
          <div className="h-8 flex-[1.2] bg-gradient-to-r from-blue-400 to-green-400 relative border-y-4 border-red-400">
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 text-[10px] font-bold text-red-600 mb-1">480-520nm</span>
            <span className="absolute top-full left-1/2 -translate-x-1/2 text-[10px] font-bold text-red-600 mt-1">PROBLEM ZONE</span>
          </div>
          <div className="h-8 flex-1 bg-gradient-to-r from-green-400 to-yellow-400 relative">
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 text-[10px] text-gray-500 mb-1">520-580nm</span>
          </div>
          <div className="h-8 flex-1 rounded-r-lg bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 relative">
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 text-[10px] text-gray-500 mb-1">580-700nm</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 mt-6">
          {[
            { label: "Fluorescent lights", detail: "Emit spikes in the 480-520nm range" },
            { label: "Cool white LEDs", detail: "Worse than warm-temperature bulbs" },
            { label: "FL-41 glasses", detail: "Filter this specific wavelength range" },
            { label: "Green light therapy", detail: "Narrow band that doesn't trigger ipRGCs" },
          ].map((item) => (
            <div key={item.label} className="bg-white/80 rounded-lg p-3 border border-gray-100">
              <p className="font-bold text-heading text-xs">{item.label}</p>
              <p className="text-gray-500 text-xs mt-0.5">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <h2>Common Conditions That Cause Photophobia</h2>

      <BlogComparisonTable
        columns={[
          { header: "Category" },
          { header: "Condition" },
          { header: "How It Causes Photophobia" },
          { header: "Type" },
        ]}
        rows={[
          ["Eye", "Dry Eye Syndrome", "#1 cause; 16M+ diagnosed Americans", "Ocular"],
          ["Eye", "Cataracts", "Clouded lens scatters light", "Ocular"],
          ["Eye", "Uveitis", "Inflammation inside the eye", "Ocular"],
          ["Eye", "Keratitis", "Corneal inflammation", "Ocular"],
          ["Eye", "Post-Surgical (LASIK)", "Healing causes temporary sensitivity", "Ocular"],
          ["Neuro", "Migraines", "80-90% of sufferers have photophobia", "Neurological"],
          ["Neuro", "TBI / Concussion", "Lingering sensitivity for months/years", "Neurological"],
          ["Neuro", "Blepharospasm", "Light triggers involuntary eyelid spasms", "Neurological"],
          ["Skin", "Lupus", "UV triggers flares and butterfly rash", "Both"],
          ["Skin", "Dermatomyositis", "UV-triggered skin rashes", "Both"],
          ["Skin", "Solar Urticaria", "Hives within minutes of sun exposure", "Both"],
          ["Skin", "PMLE", "Itchy red bumps from sunlight", "Both"],
        ]}
      />

      <h3>Medication-Induced Photophobia</h3>
      <div className="not-prose my-6 bg-amber-50 rounded-xl p-5 border border-amber-200">
        <div className="flex items-start gap-3">
          <Pill className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-heading text-sm mb-1">Common photosensitizing medications</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Doxycycline, ibuprofen, hydrochlorothiazide, birth control, and isotretinoin (Accutane) are among many drugs that dramatically increase light sensitivity.
            </p>
            <Link href="/resources/medications-that-cause-light-sensitivity" className="text-amber-600 font-semibold text-sm hover:underline mt-2 inline-block">See the full medication list →</Link>
          </div>
        </div>
      </div>

      <h2>What You Can Do About It</h2>
      <p>
        The approach depends on the cause, but these strategies help almost everyone:
      </p>

      <div className="not-prose my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { icon: Home, title: "Control Your Environment", desc: "Warm lighting at home, dimmers, blackout curtains", color: "text-amber-500" },
          { icon: Zap, title: "Optimize Your Devices", desc: "Dark mode, reduced brightness, blue light filters", color: "text-blue-500" },
          { icon: Glasses, title: "Protect Your Eyes", desc: "FL-41 glasses indoors, polarized sunglasses outdoors", color: "text-purple-500" },
          { icon: Car, title: "Protect While Driving", desc: "Medical window tint, visor extenders, clean windshield", color: "text-green-600" },
          { icon: Activity, title: "Track & Manage Triggers", desc: "Especially important if migraines are involved", color: "text-red-500" },
          { icon: Stethoscope, title: "Talk to Your Doctor", desc: "About both the condition and the photophobia itself", color: "text-cyan-600" },
        ].map((item) => (
          <div key={item.title} className="bg-surface rounded-xl p-5 border border-gray-100">
            <item.icon className={`w-6 h-6 ${item.color} mb-3`} />
            <p className="font-bold text-heading text-sm mb-1">{item.title}</p>
            <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <p>
        <Link href="/conditions" className="text-amber-600 font-semibold hover:underline">See all qualifying conditions for a window tint medical exemption →</Link>
      </p>

      <BlogCallout variant="tip" title="When to See a Doctor">
        <p>If you experience sudden or severe light sensitivity, see a doctor promptly — especially if accompanied by eye pain, vision changes, headache, or nausea. Sudden photophobia can indicate a serious condition like meningitis, acute glaucoma, or retinal detachment that requires immediate medical attention.</p>
      </BlogCallout>

      <BlogCTA
        heading="Does Your Photophobia Qualify for a Tint Exemption?"
        description="Many conditions causing light sensitivity qualify for a medical window tint exemption. Get evaluated online by a licensed physician — no office visit required."
        buttonText="Start Your Evaluation — Starting at $225"
      />

      <BlogCallout variant="warning" title="Medical Disclaimer">
        <p>This article is for informational purposes only and does not constitute medical advice. Always consult with a licensed healthcare provider regarding your specific medical condition and treatment options.</p>
      </BlogCallout>
    </>
  );
}
