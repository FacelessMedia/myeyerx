import Link from "next/link";
import { Eye, Timer, Clock, Zap, Droplets, CheckCircle } from "lucide-react";
import { BlogTLDR } from "@/components/blog/BlogTLDR";
import { BlogStepCards } from "@/components/blog/BlogStepCards";
import { BlogCallout } from "@/components/blog/BlogCallout";
import { BlogCTA } from "@/components/blog/BlogCTA";

export function TwentyTwentyTwentyContent() {
  return (
    <>
      <p className="text-xl text-gray-700 leading-relaxed">
        Every 20 minutes, look at something 20 feet away, for 20 seconds. That&apos;s it. It sounds almost too simple to work, but this rule is one of the most effective things you can do to reduce eye strain and manage light sensitivity during screen time.
      </p>

      <BlogTLDR items={[
        "Every 20 min → look 20 ft away → for 20 seconds — a micro-reset for your visual system",
        "Ciliary muscles fatigue after 20+ min of near-focus, causing strain and light sensitivity",
        "For photophobic people, screen strain compounds existing sensitivity and can trigger migraines",
        "Combine with conscious blinking (5-10 blinks per break) for tear film refresh",
        "Use apps like Stretchly or phone timers to build the habit",
      ]} />

      <div className="not-prose my-8 bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-2xl p-8 border-2 border-amber-200 text-center">
        <p className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-4">THE RULE</p>
        <div className="flex items-center justify-center gap-4 sm:gap-8">
          {[
            { num: "20", unit: "minutes", desc: "of screen time" },
            { num: "20", unit: "feet", desc: "look away" },
            { num: "20", unit: "seconds", desc: "rest your eyes" },
          ].map((item, i) => (
            <div key={item.unit} className="flex items-center gap-4 sm:gap-8">
              <div>
                <p className="text-4xl sm:text-5xl font-black text-amber-600">{item.num}</p>
                <p className="text-xs font-bold text-amber-700 uppercase">{item.unit}</p>
                <p className="text-[10px] text-gray-500 mt-0.5">{item.desc}</p>
              </div>
              {i < 2 && <span className="text-2xl text-amber-300 font-light">→</span>}
            </div>
          ))}
        </div>
      </div>

      <h2>Why It Works</h2>
      <p>
        When you stare at a screen, your ciliary muscles — the tiny muscles inside your eye that control focus — lock into a contracted position to keep the close-up display sharp. After 20+ minutes of sustained contraction, these muscles fatigue. That fatigue manifests as eye strain, headaches, blurred vision, and increased sensitivity to light.
      </p>
      <p>
        Looking at something 20 feet away forces these muscles to relax completely. Twenty seconds is enough time for the muscles to fully release their contracted state. It&apos;s a micro-reset for your visual system.
      </p>

      <BlogCallout variant="warning" title="Why it matters MORE for light-sensitive people">
        <p>If you already have photophobia, eye strain makes everything worse. Fatigued eyes are more reactive to light. Strained ciliary muscles contribute to tension headaches, which can trigger migraines. The 20-20-20 rule doesn&apos;t cure sensitivity, but it prevents screen time from compounding it.</p>
      </BlogCallout>

      <h2>How to Actually Remember</h2>
      <BlogStepCards steps={[
        { icon: Timer, title: "Set a Recurring Timer", description: "Phone alarm every 20 minutes during work hours — the simplest approach" },
        { icon: Zap, title: "Use an App", description: "Stretchly (free, desktop) or EyeCare 20 20 20 (mobile) automate reminders" },
        { icon: Eye, title: "Tie It to a Habit", description: "Every time you finish reading an email, glance out the window" },
        { icon: Clock, title: "Use Your Calendar", description: "Block 30-second breaks every 20 minutes in your work calendar" },
      ]} />

      <h2>What Counts as &quot;20 Feet Away&quot;?</h2>
      <BlogCallout variant="tip" title="No tape measure needed">
        <p>If you can see it clearly without squinting — a tree outside your window, a painting across the room, the far wall of your office — it&apos;s far enough. The point is to shift from near focus to distance focus.</p>
      </BlogCallout>

      <h2>Combine It with Blinking</h2>
      <div className="not-prose my-6 bg-blue-50 rounded-xl p-5 border border-blue-200">
        <div className="flex items-start gap-3">
          <Droplets className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-heading text-sm mb-1">People blink 66% less when staring at screens</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Reduced blinking dries out your eyes and worsens light sensitivity. During your 20-second break, consciously blink 5-10 times to refresh your tear film.
            </p>
          </div>
        </div>
      </div>

      <h2>Does It Replace Other Treatments?</h2>
      <p>
        No. The 20-20-20 rule is one tool in a larger toolkit. It works best combined with:
      </p>
      <div className="not-prose my-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {[
          { label: "Optimized display settings", link: "/resources/computer-settings-light-sensitivity" },
          { label: "FL-41 glasses for indoor use", link: "/resources/fl-41-glasses-complete-guide" },
          { label: "Bias lighting behind your monitor", link: "/resources/bias-lighting-reduce-eye-strain" },
          { label: "Proper monitor positioning & distance" },
          { label: "Artificial tears for dry eye" },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-2 bg-surface rounded-lg p-3 border border-gray-100">
            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
            {item.link ? (
              <Link href={item.link} className="text-amber-600 font-semibold text-sm hover:underline">{item.label}</Link>
            ) : (
              <span className="text-gray-700 text-sm">{item.label}</span>
            )}
          </div>
        ))}
      </div>

      <BlogCTA
        heading="Screen Strain Is Just One Piece"
        description="If light sensitivity affects your driving too, a medical window tint exemption provides passive protection against sunlight and glare. 100% online evaluation."
        buttonText="Start Your Evaluation — Starting at $225"
      />

      <BlogCallout variant="warning" title="Medical Disclaimer">
        <p>The 20-20-20 rule helps manage screen-related eye strain but is not a treatment for underlying medical conditions. If you experience persistent light sensitivity, consult a healthcare provider.</p>
      </BlogCallout>
    </>
  );
}
