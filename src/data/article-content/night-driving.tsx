import Link from "next/link";

export function NightDrivingContent() {
  return (
    <>
      <p className="text-xl text-gray-700 leading-relaxed">
        Night driving is uniquely challenging for light-sensitive people. During the day, the problem is too much light. At night, the problem flips: your eyes are adapted to darkness, and then oncoming headlights, streetlights, and reflections blast through that adaptation. Here&apos;s how to manage it.
      </p>

      <h2>Why Night Driving Is So Hard</h2>
      <p>
        In darkness, your pupils dilate to let in more light. When an oncoming car&apos;s headlights hit your dilated pupils, the sudden surge of light is much more intense than it would be during the day (when your pupils are already constricted). For people with photophobia, this surge triggers pain, discomfort, and temporary vision impairment.
      </p>
      <p>
        Modern LED and HID headlights make this worse. They&apos;re significantly brighter and bluer than older halogen headlights, and their color temperature (often 5000-6500K) falls right in the wavelength range that&apos;s most irritating for light-sensitive eyes.
      </p>

      <h2>Solutions</h2>

      <h3>Anti-Glare Night Driving Glasses</h3>
      <p>
        Yellow or amber-tinted lenses designed for night driving reduce glare from oncoming headlights while maintaining visibility. They work by filtering blue light and enhancing contrast.
      </p>
      <ul>
        <li><strong>Yellow tint</strong> — Enhances contrast and reduces blue light glare. The most common night driving lens.</li>
        <li><strong>Light amber/copper</strong> — Similar benefits with slightly less color distortion.</li>
        <li><strong>Anti-reflective coating</strong> — Reduces internal reflections within the lens itself.</li>
      </ul>
      <p>
        <strong>Important:</strong> Night driving glasses should be very lightly tinted. Any tint dark enough to significantly reduce brightness also reduces your overall visibility, which is dangerous at night. The goal is to filter problematic wavelengths, not darken your view.
      </p>

      <h3>Clean Your Windshield — Both Sides</h3>
      <p>
        This sounds basic, but it&apos;s one of the most effective things you can do. A dirty windshield scatters incoming light, turning every headlight into a diffused halo of glare. Clean the <strong>inside</strong> of your windshield regularly — that&apos;s where the worst film builds up from off-gassing dashboard materials.
      </p>
      <ul>
        <li>Use glass cleaner and microfiber cloth on the interior surface</li>
        <li>Clean exterior with a good windshield washer fluid</li>
        <li>Replace old, streaky wiper blades</li>
      </ul>

      <h3>Adjust Your Mirrors</h3>
      <ul>
        <li><strong>Rearview mirror</strong> — Use the night/dimming mode (the tab on the bottom of most rearview mirrors). Auto-dimming mirrors are even better.</li>
        <li><strong>Side mirrors</strong> — Angle them slightly outward to reduce direct headlight reflection from cars behind you.</li>
      </ul>

      <h3>Dashboard Brightness</h3>
      <p>
        Most cars let you dim the dashboard and instrument panel lights. Dim them as low as you can while still reading essential gauges. Bright dashboard displays contribute to overall light load and reduce your dark adaptation.
      </p>

      <h3>Avoid Looking Directly at Oncoming Lights</h3>
      <p>
        This is driving 101, but worth repeating: when oncoming headlights approach, shift your gaze to the right edge of the road or the white lane line. Your peripheral vision still tracks the oncoming vehicle, but your central vision avoids the direct light blast.
      </p>

      <h2>Window Tint and Night Driving</h2>
      <p>
        There&apos;s a common concern that window tint makes night driving harder. In reality, quality tint — especially <Link href="/resources/ceramic-window-tint-medical-use" className="text-amber-600 hover:underline">ceramic tint</Link> — reduces glare from oncoming headlights while maintaining good visibility. Many light-sensitive drivers report that tinted windows actually make night driving <em>easier</em>, not harder, because the tint takes the edge off bright headlights.
      </p>
      <p>
        A <Link href="/resources/complete-guide-to-window-tint-medical-exemptions" className="text-amber-600 font-semibold hover:underline">medical tint exemption</Link> allows you to go darker than standard limits for medical reasons.
      </p>

      <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 not-prose my-8">
        <p className="text-sm text-gray-500 italic">
          <strong>Safety Note:</strong> If your night vision is significantly impaired, consult an eye care professional. Some conditions that cause light sensitivity also affect night vision and may need separate treatment.
        </p>
      </div>
    </>
  );
}
