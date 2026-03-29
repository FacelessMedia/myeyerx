import Link from "next/link";

export function TwentyTwentyTwentyContent() {
  return (
    <>
      <p className="text-xl text-gray-700 leading-relaxed">
        Every 20 minutes, look at something 20 feet away, for 20 seconds. That&apos;s it. It sounds almost too simple to work, but this rule is one of the most effective things you can do to reduce eye strain and manage light sensitivity during screen time.
      </p>

      <h2>Why It Works</h2>
      <p>
        When you stare at a screen, your ciliary muscles — the tiny muscles inside your eye that control focus — lock into a contracted position to keep the close-up display sharp. After 20+ minutes of sustained contraction, these muscles fatigue. That fatigue manifests as eye strain, headaches, blurred vision, and increased sensitivity to light.
      </p>
      <p>
        Looking at something 20 feet away forces these muscles to relax completely. Twenty seconds is enough time for the muscles to fully release their contracted state. It&apos;s a micro-reset for your visual system.
      </p>

      <h2>Why It Matters More for Light-Sensitive People</h2>
      <p>
        If you already have photophobia, eye strain makes everything worse. Fatigued eyes are more reactive to light. Strained ciliary muscles contribute to tension headaches, which can trigger migraines in susceptible people. The 20-20-20 rule doesn&apos;t cure light sensitivity, but it prevents screen time from compounding it.
      </p>

      <h2>How to Actually Remember</h2>
      <p>
        The hardest part of the 20-20-20 rule is remembering to do it. When you&apos;re deep in work or scrolling, 20 minutes flies by. Here are practical ways to build it into your routine:
      </p>
      <ul>
        <li><strong>Set a recurring timer</strong> — Phone alarm every 20 minutes during work hours</li>
        <li><strong>Use an app</strong> — Stretchly (free, desktop) or EyeCare 20 20 20 (mobile) automate reminders</li>
        <li><strong>Tie it to a habit</strong> — Every time you finish reading an email, glance out the window</li>
        <li><strong>Use your calendar</strong> — Block 30-second breaks every 20 minutes in your work calendar</li>
      </ul>

      <h2>What Counts as &quot;20 Feet Away&quot;?</h2>
      <p>
        You don&apos;t need a tape measure. If you can see it clearly without squinting — a tree outside your window, a painting across the room, the far wall of your office — it&apos;s far enough. The point is to shift from near focus to distance focus. Even looking across a large room works.
      </p>

      <h2>Combine It with Blinking</h2>
      <p>
        People blink about 66% less when staring at screens. Reduced blinking means less tear film coverage, which dries out your eyes and worsens light sensitivity. During your 20-second break, consciously blink 5-10 times. This refreshes your tear film and provides additional relief.
      </p>

      <h2>Does It Replace Other Treatments?</h2>
      <p>
        No. The 20-20-20 rule is one tool in a larger toolkit. It works best combined with:
      </p>
      <ul>
        <li><Link href="/resources/computer-settings-light-sensitivity" className="text-amber-600 hover:underline">Optimized computer display settings</Link></li>
        <li><Link href="/resources/fl-41-glasses-complete-guide" className="text-amber-600 hover:underline">FL-41 glasses</Link> for indoor use</li>
        <li><Link href="/resources/bias-lighting-reduce-eye-strain" className="text-amber-600 hover:underline">Bias lighting</Link> behind your monitor</li>
        <li>Proper monitor positioning and distance</li>
        <li>Artificial tears if you have dry eye</li>
      </ul>

      <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 not-prose my-8">
        <p className="text-sm text-gray-500 italic">
          <strong>Medical Disclaimer:</strong> The 20-20-20 rule helps manage screen-related eye strain but is not a treatment for underlying medical conditions. If you experience persistent light sensitivity, consult a healthcare provider.
        </p>
      </div>
    </>
  );
}
