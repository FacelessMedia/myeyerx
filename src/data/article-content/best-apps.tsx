import Link from "next/link";

export function BestAppsContent() {
  return (
    <>
      <p className="text-xl text-gray-700 leading-relaxed">
        The right apps can make a measurable difference in how you manage light sensitivity day to day. From blue light filters that go beyond what your phone offers natively, to migraine trackers that help you identify patterns, here are the apps worth knowing about.
      </p>

      <h2>Blue Light Filters</h2>

      <h3>f.lux (Free — Windows, Mac, Linux, Android, iPhone/iPad)</h3>
      <p>
        The original and still the best blue light filter for computers. f.lux adjusts your screen&apos;s color temperature based on your location and time of day, gradually shifting to warmer tones as the sun sets. It goes much warmer than built-in Night Light/Night Shift — all the way down to candlelight levels (1200K).
      </p>
      <ul>
        <li><strong>Best for:</strong> Computer users who need finer control than built-in tools offer</li>
        <li><strong>Key feature:</strong> Darkroom mode turns the screen deep red — perfect during migraine attacks</li>
        <li><strong>Price:</strong> Free</li>
      </ul>

      <h3>Iris (Paid ~$15 — Windows, Mac, Linux)</h3>
      <p>
        Iris does everything f.lux does plus one critical extra: <strong>flicker-free dimming</strong>. Most LCD monitors use PWM (Pulse Width Modulation) to control brightness, which creates an invisible flicker that triggers headaches in sensitive people. Iris dims your screen without PWM, eliminating this hidden trigger entirely.
      </p>
      <ul>
        <li><strong>Best for:</strong> People who get headaches from screens even with low brightness</li>
        <li><strong>Key feature:</strong> PWM-free brightness control</li>
        <li><strong>Price:</strong> ~$15 one-time</li>
      </ul>

      <h2>Migraine Trackers</h2>

      <h3>Migraine Buddy (Free with premium — iOS, Android)</h3>
      <p>
        The most comprehensive migraine tracking app available. It lets you log attacks, triggers, symptoms, medications, sleep, weather, and more. After a month or two, patterns start to emerge that you&apos;d never notice otherwise — like which specific trigger combinations lead to attacks.
      </p>
      <ul>
        <li><strong>Best for:</strong> Detailed migraine tracking and pattern discovery</li>
        <li><strong>Key feature:</strong> Shareable reports you can bring to your doctor</li>
        <li><strong>Price:</strong> Free (premium removes ads and adds advanced features)</li>
      </ul>

      <h3>Migraine Monitor (Free — iOS, Android)</h3>
      <p>
        A simpler alternative to Migraine Buddy for people who want quick logging without the depth. Good for tracking frequency and basic triggers without feeling overwhelmed by options.
      </p>
      <ul>
        <li><strong>Best for:</strong> Quick, simple migraine logging</li>
        <li><strong>Key feature:</strong> Fast entry that takes under a minute</li>
        <li><strong>Price:</strong> Free</li>
      </ul>

      <h2>Browser Extensions</h2>

      <h3>Dark Reader (Free — Chrome, Firefox, Edge, Safari)</h3>
      <p>
        Forces dark mode on every website, even ones that don&apos;t offer it natively. If you&apos;ve ever been blinded by a white webpage after setting up Dark Mode everywhere else, this is the fix.
      </p>
      <ul>
        <li><strong>Best for:</strong> Web browsing without white-background ambushes</li>
        <li><strong>Key feature:</strong> Per-site customization — whitelist sites that already have good dark modes</li>
        <li><strong>Price:</strong> Free</li>
      </ul>

      <h2>Break Reminders</h2>

      <h3>Stretchly (Free — Windows, Mac, Linux)</h3>
      <p>
        Reminds you to take breaks using the <Link href="/resources/20-20-20-rule-light-sensitivity" className="text-amber-600 hover:underline">20-20-20 rule</Link>. Customizable intervals, gentle or firm reminders, and tracks your break compliance over time.
      </p>

      <h2>Light Measurement</h2>

      <h3>Lux Meter Apps (Various — iOS, Android)</h3>
      <p>
        Your phone&apos;s ambient light sensor can measure lux levels in your environment. While not lab-accurate, these apps help you compare different rooms, lighting setups, and times of day to identify which environments are worst for your symptoms.
      </p>

      <h2>What About Blue Light Glasses Apps?</h2>
      <p>
        Some apps claim to simulate blue light glasses on your screen. These are just color temperature shifters — the same thing f.lux and built-in Night Shift/Night Light already do. Don&apos;t pay for something your phone already does for free.
      </p>

      <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 not-prose my-8">
        <p className="text-sm text-gray-500 italic">
          <strong>Note:</strong> Apps manage digital light sources. For protection from sunlight while driving, consider a <Link href="/resources/complete-guide-to-window-tint-medical-exemptions" className="text-amber-600 hover:underline">medical window tint exemption</Link>.
        </p>
      </div>
    </>
  );
}
