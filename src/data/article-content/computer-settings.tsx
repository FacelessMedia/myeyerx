import Link from "next/link";

export function ComputerSettingsContent() {
  return (
    <>
      <p className="text-xl text-gray-700 leading-relaxed">
        Your computer monitor is a light source sitting inches from your face for hours at a time. For people with light sensitivity, that&apos;s a recipe for headaches, eye strain, and migraine triggers. The good news: both Windows and Mac have built-in tools that help significantly, and third-party apps fill the remaining gaps.
      </p>

      <h2>Windows Settings</h2>

      <h3>Night Light</h3>
      <p>
        Windows Night Light reduces blue light output by shifting the display to warmer tones. It&apos;s the equivalent of iPhone&apos;s Night Shift.
      </p>
      <p><strong>How to enable:</strong> Settings → System → Display → Night Light. Set the strength slider to your preference (higher = warmer). Schedule it to turn on at sunset or leave it on all day.</p>

      <h3>Dark Mode</h3>
      <p>
        Windows supports a system-wide dark theme that most Microsoft apps and many third-party apps follow.
      </p>
      <p><strong>How to enable:</strong> Settings → Personalization → Colors → Choose your mode → Dark.</p>

      <h3>High Contrast Mode</h3>
      <p>
        For extreme sensitivity, Windows High Contrast themes can dramatically reduce visual intensity. The &quot;High Contrast Black&quot; theme in particular creates a very dark interface.
      </p>
      <p><strong>How to enable:</strong> Settings → Accessibility → Contrast Themes. Select a theme and click Apply.</p>

      <h2>Mac Settings</h2>

      <h3>Night Shift</h3>
      <p>
        Same concept as Windows Night Light — shifts display colors to the warm end of the spectrum.
      </p>
      <p><strong>How to enable:</strong> System Settings → Displays → Night Shift. Set the color temperature to &quot;More Warm&quot; and schedule it or leave it on manually.</p>

      <h3>Dark Mode</h3>
      <p><strong>How to enable:</strong> System Settings → Appearance → Dark. macOS also offers &quot;Auto&quot; which switches based on time of day.</p>

      <h3>Reduce White Point (Mac)</h3>
      <p>
        Just like on iPhone, Mac has a Reduce White Point option that dims bright colors below the normal minimum brightness.
      </p>
      <p><strong>How to enable:</strong> System Settings → Accessibility → Display → Reduce White Point. Adjust the slider to your comfort level.</p>

      <h2>Third-Party Apps</h2>

      <h3>f.lux (Free)</h3>
      <p>
        <strong>f.lux</strong> is the gold standard for computer blue light filtering. It goes far beyond built-in Night Light/Night Shift because it adjusts color temperature based on your location and the actual time of day, creating a more natural transition. It also offers much warmer settings than built-in tools allow — you can go all the way to candlelight-level warmth.
      </p>
      <ul>
        <li>Available for Windows, Mac, and Linux</li>
        <li>Customizable presets for daytime, sunset, and bedtime</li>
        <li>Movie mode preserves accurate colors for video</li>
        <li>Darkroom mode turns your screen deep red (useful during migraine attacks)</li>
      </ul>

      <h3>Iris (Paid, ~$15)</h3>
      <p>
        <strong>Iris</strong> offers everything f.lux does plus <strong>flicker-free dimming</strong>. Standard LCD screens use PWM (Pulse Width Modulation) to control brightness, which creates an imperceptible flicker that can trigger headaches and migraines in sensitive people. Iris dims your screen using software methods that eliminate this flicker entirely.
      </p>
      <ul>
        <li>Flicker-free brightness control</li>
        <li>Blue light filtering</li>
        <li>Automatic break reminders</li>
        <li>Font rendering improvements</li>
      </ul>

      <h2>Monitor Positioning</h2>
      <p>
        Hardware settings matter too:
      </p>
      <ul>
        <li><strong>Position your monitor</strong> so windows are to the side, not directly behind or in front of you — this reduces contrast between screen and environment</li>
        <li><strong>Use bias lighting</strong> — a warm-toned LED strip behind your monitor reduces the contrast between bright screen and dark room. <Link href="/resources/bias-lighting-reduce-eye-strain" className="text-amber-600 hover:underline">Read our bias lighting guide →</Link></li>
        <li><strong>Matte screen</strong> — if possible, use a matte (anti-glare) monitor or apply a matte screen protector to reduce reflections</li>
        <li><strong>Distance</strong> — position your monitor at arm&apos;s length (about 20-26 inches from your eyes)</li>
        <li><strong>Height</strong> — the top of the screen should be at or slightly below eye level</li>
      </ul>

      <h2>Browser Extensions</h2>
      <p>
        Even with system-wide dark mode, many websites still blast you with white backgrounds. These browser extensions help:
      </p>
      <ul>
        <li><strong>Dark Reader</strong> (free) — Forces dark mode on every website. The most popular solution.</li>
        <li><strong>Turn Off the Lights</strong> (free) — Dims everything except the video you&apos;re watching</li>
      </ul>

      <h2>The 20-20-20 Rule</h2>
      <p>
        Every 20 minutes, look at something 20 feet away for 20 seconds. This gives your eye muscles micro-breaks and reduces strain accumulation. <Link href="/resources/20-20-20-rule-light-sensitivity" className="text-amber-600 font-semibold hover:underline">Read more about the 20-20-20 rule →</Link>
      </p>

      <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 not-prose my-8">
        <p className="text-sm text-gray-500 italic">
          <strong>Medical Disclaimer:</strong> This article is for informational purposes only and does not constitute medical advice. If your light sensitivity is significantly impacting your ability to work, consult with a healthcare provider about treatment options.
        </p>
      </div>
    </>
  );
}
