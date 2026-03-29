import Link from "next/link";

export function IphoneSettingsContent() {
  return (
    <>
      <p className="text-xl text-gray-700 leading-relaxed">
        Your iPhone has some incredibly powerful accessibility features that can make screen time dramatically more comfortable for light-sensitive eyes. Most people only know about brightness and Dark Mode — but Apple has buried several other tools that, when combined, create what we call the &quot;Ultra-Dim Stack.&quot;
      </p>

      <h2>1. Dark Mode</h2>
      <p>
        The most basic and most important change. Dark Mode inverts most of the interface to use light text on dark backgrounds, dramatically reducing overall light output from your screen.
      </p>
      <p><strong>How to enable:</strong> Settings → Display &amp; Brightness → select Dark. Or use Control Center to toggle it quickly.</p>
      <p>
        You can also schedule Dark Mode to turn on automatically at sunset and off at sunrise, though many light-sensitive people just leave it on permanently.
      </p>

      <h2>2. Night Shift</h2>
      <p>
        Night Shift changes the color temperature of your screen, shifting it toward the warm (amber) end of the spectrum and reducing the blue light output. Blue light in the 480-520nm range is the most irritating wavelength for photophobia.
      </p>
      <p><strong>How to enable:</strong> Settings → Display &amp; Brightness → Night Shift. Set the color temperature slider all the way to &quot;More Warm&quot; for maximum effect.</p>
      <p>
        Schedule it to run from sunset to sunrise, or turn it on manually 24/7 if you prefer the warmer tone at all times.
      </p>

      <h2>3. Reduce White Point</h2>
      <p>
        This is the hidden gem most people don&apos;t know about. <strong>Reduce White Point</strong> dims the intensity of bright colors on your screen without affecting the minimum brightness. Even when your screen brightness is already at its lowest, Reduce White Point can make it even dimmer.
      </p>
      <p><strong>How to enable:</strong> Settings → Accessibility → Display &amp; Text Size → Reduce White Point. Toggle it on and adjust the slider — start around 50% and adjust to your comfort level.</p>
      <p>
        This is especially useful at night or in dark rooms where even the lowest brightness setting is still too intense.
      </p>

      <h2>4. Color Filters</h2>
      <p>
        Apple&apos;s Color Filters can apply a tint to your entire screen. For light sensitivity, the most useful options are:
      </p>
      <ul>
        <li><strong>Color Tint</strong> — Apply an amber or warm tint (similar to FL-41 glasses but on your screen)</li>
        <li><strong>Grayscale</strong> — Removes all color, which some people find reduces visual stimulation</li>
      </ul>
      <p><strong>How to enable:</strong> Settings → Accessibility → Display &amp; Text Size → Color Filters. Toggle on and choose your preferred filter.</p>

      <h2>5. The Ultra-Dim Stack</h2>
      <p>
        For maximum comfort, combine all of these together:
      </p>
      <ol>
        <li>Turn on <strong>Dark Mode</strong></li>
        <li>Enable <strong>Night Shift</strong> at maximum warmth</li>
        <li>Turn on <strong>Reduce White Point</strong> at 80-100%</li>
        <li>Lower <strong>screen brightness</strong> to minimum</li>
      </ol>
      <p>
        This combination gets your screen dimmer than any single setting can achieve alone. It&apos;s the difference between &quot;tolerable&quot; and &quot;actually comfortable&quot; for many photophobia sufferers, especially during migraine attacks or in dark environments.
      </p>

      <h2>6. Accessibility Shortcut (Triple-Click)</h2>
      <p>
        You can set up a triple-click shortcut to toggle Reduce White Point instantly — no digging through settings menus.
      </p>
      <p><strong>How to set up:</strong> Settings → Accessibility → Accessibility Shortcut → select Reduce White Point. Now triple-click the side button to toggle it on/off instantly.</p>

      <h2>7. Per-App Settings</h2>
      <p>
        iOS lets you force Dark Mode on a per-app basis, even for apps that don&apos;t officially support it.
      </p>
      <p><strong>How to enable:</strong> Settings → Accessibility → Per-App Settings → Add App → select the app → set Dark Mode to &quot;On.&quot;</p>

      <h2>8. Smart Invert</h2>
      <p>
        If an app doesn&apos;t support Dark Mode natively, Smart Invert reverses the display colors while trying to preserve images and media. It&apos;s not perfect, but it&apos;s useful for apps with blinding white backgrounds that refuse to offer a dark theme.
      </p>
      <p><strong>How to enable:</strong> Settings → Accessibility → Display &amp; Text Size → Smart Invert.</p>

      <h2>Bonus: Auto-Brightness</h2>
      <p>
        Keep Auto-Brightness enabled (Settings → Accessibility → Display &amp; Text Size → Auto-Brightness). This lets your phone adjust to ambient light automatically. Combined with Reduce White Point, it ensures your screen is always at a comfortable level.
      </p>

      <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 not-prose my-8">
        <p className="text-sm text-gray-500 italic">
          <strong>Tip:</strong> These settings help manage screen-based light exposure. For driving, where you can&apos;t control the light source, a <Link href="/resources/complete-guide-to-window-tint-medical-exemptions" className="text-amber-600 hover:underline">medical window tint exemption</Link> provides passive protection that&apos;s always working.
        </p>
      </div>
    </>
  );
}
