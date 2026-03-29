import Link from "next/link";

export function AndroidSettingsContent() {
  return (
    <>
      <p className="text-xl text-gray-700 leading-relaxed">
        Android devices have powerful built-in tools for reducing screen brightness and filtering harsh light — and Samsung phones have a few extras that make them especially good for light-sensitive users. Here&apos;s how to set everything up.
      </p>

      <h2>1. Dark Theme</h2>
      <p>
        Android&apos;s system-wide Dark Theme switches the UI to light text on dark backgrounds. Most Google apps and many third-party apps automatically follow this setting.
      </p>
      <p><strong>How to enable:</strong> Settings → Display → Dark Theme. Toggle it on. You can also schedule it to activate at sunset.</p>

      <h2>2. Eye Comfort Shield / Night Light</h2>
      <p>
        This shifts your screen color temperature toward warm amber tones, reducing blue light output. Samsung calls it &quot;Eye Comfort Shield&quot; while stock Android calls it &quot;Night Light.&quot;
      </p>
      <p><strong>Samsung:</strong> Settings → Display → Eye Comfort Shield. Set to &quot;Adaptive&quot; for automatic adjustments or &quot;Custom&quot; to set your own schedule and color temperature.</p>
      <p><strong>Stock Android:</strong> Settings → Display → Night Light. Adjust intensity and schedule.</p>
      <p>
        For maximum benefit, push the color temperature slider all the way to the warm end. The screen will look very amber, but it&apos;s significantly easier on light-sensitive eyes.
      </p>

      <h2>3. Extra Dim</h2>
      <p>
        This is Android&apos;s equivalent of iPhone&apos;s Reduce White Point, and it&apos;s a game-changer. <strong>Extra Dim</strong> reduces screen brightness below the normal minimum, which is critical for dark environments or during migraine attacks when even the lowest brightness setting is too intense.
      </p>
      <p><strong>How to enable:</strong> Settings → Accessibility → Extra Dim. Toggle on and adjust the intensity slider. Add it to your Quick Settings panel for instant access.</p>

      <h2>4. Bedtime Mode / Wind Down</h2>
      <p>
        Bedtime Mode (called Wind Down on some devices) can apply a grayscale filter to your entire screen. Removing all color reduces visual stimulation significantly, which some people with photophobia find very helpful.
      </p>
      <p><strong>How to enable:</strong> Settings → Digital Wellbeing → Bedtime Mode. Enable &quot;Grayscale&quot; option. You can schedule it or toggle it manually.</p>

      <h2>5. Color Correction / Color Inversion</h2>
      <p>
        Android offers color correction modes that can adjust your display for different types of visual needs. For light sensitivity, the most useful options are:
      </p>
      <ul>
        <li><strong>Grayscale</strong> — Removes all color for minimal visual stimulation</li>
        <li><strong>Color Inversion</strong> — Swaps light and dark elements, useful for apps without Dark Mode support</li>
      </ul>
      <p><strong>How to enable:</strong> Settings → Accessibility → Color Correction or Color Inversion.</p>

      <h2>6. Samsung-Specific Features</h2>
      <p>
        Samsung Galaxy devices have additional features worth knowing about:
      </p>
      <ul>
        <li><strong>Blue Light Filter</strong> — Separate from Eye Comfort Shield, gives more granular control</li>
        <li><strong>Screen Mode</strong> — Set to &quot;Natural&quot; instead of &quot;Vivid&quot; for more subdued, accurate colors that are easier on sensitive eyes</li>
        <li><strong>Edge Lighting</strong> — Subtle notification indicators that don&apos;t flash the whole screen</li>
      </ul>

      <h2>7. The Android Ultra-Dim Stack</h2>
      <p>
        For maximum comfort, combine these settings:
      </p>
      <ol>
        <li>Enable <strong>Dark Theme</strong></li>
        <li>Turn on <strong>Eye Comfort Shield / Night Light</strong> at max warmth</li>
        <li>Enable <strong>Extra Dim</strong> at 50-80% intensity</li>
        <li>Lower <strong>screen brightness</strong> to minimum</li>
        <li>Optional: Enable <strong>Grayscale</strong> via Bedtime Mode for extreme situations</li>
      </ol>
      <p>
        This stack gets your screen significantly dimmer and warmer than any single setting alone. Add it as a custom routine in Bixby Routines (Samsung) or Google Assistant Routines to toggle it all with one command.
      </p>

      <h2>8. Quick Settings Shortcuts</h2>
      <p>
        Add these to your Quick Settings panel (swipe down from the top) for instant access:
      </p>
      <ul>
        <li>Dark Theme toggle</li>
        <li>Extra Dim toggle</li>
        <li>Eye Comfort Shield toggle</li>
        <li>Blue Light Filter toggle (Samsung)</li>
      </ul>

      <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 not-prose my-8">
        <p className="text-sm text-gray-500 italic">
          <strong>Tip:</strong> Phone settings manage screen light, but driving exposes you to uncontrollable sunlight and glare. A <Link href="/resources/complete-guide-to-window-tint-medical-exemptions" className="text-amber-600 hover:underline">medical window tint exemption</Link> provides passive protection you don&apos;t have to think about.
        </p>
      </div>
    </>
  );
}
