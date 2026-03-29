import Link from "next/link";

export function MigraineEmergencyKitContent() {
  return (
    <>
      <p className="text-xl text-gray-700 leading-relaxed">
        When a migraine hits, the last thing you want is to scramble for supplies. Having a pre-packed emergency kit — at home, at work, and in your car — means you can respond immediately and minimize the attack&apos;s severity.
      </p>

      <h2>The Home Kit</h2>
      <p>Keep this in your bedroom or designated dark room:</p>
      <ul>
        <li><strong>Blackout sleep mask</strong> — For instant darkness anywhere. Look for contoured masks that don&apos;t press on your eyelids.</li>
        <li><strong>Cold compress / ice pack</strong> — Keep one in the freezer at all times. Gel bead masks that cover the forehead and eyes work great.</li>
        <li><strong>Medications</strong> — Your prescribed migraine medication (triptan, gepant, etc.) in a bedside drawer so you don&apos;t have to search.</li>
        <li><strong>Water bottle</strong> — Dehydration worsens migraines. Keep water within arm&apos;s reach.</li>
        <li><strong>Green light</strong> — A small <Link href="/resources/green-light-therapy-migraines" className="text-amber-600 hover:underline">green light</Link> night light for navigating without triggering more pain.</li>
        <li><strong>Phone charger</strong> — So your phone is ready with the Ultra-Dim Stack if you need it.</li>
        <li><strong>Earplugs</strong> — Many migraines come with sound sensitivity too.</li>
      </ul>

      <h2>The Work Kit</h2>
      <p>Keep this in your desk drawer or bag:</p>
      <ul>
        <li><strong>FL-41 glasses</strong> — <Link href="/resources/fl-41-glasses-complete-guide" className="text-amber-600 hover:underline">Indoor FL-41 lenses</Link> to immediately filter problematic light.</li>
        <li><strong>Blackout sleep mask</strong> — A small one that fits in a desk drawer.</li>
        <li><strong>Medication</strong> — A dose of your prescribed migraine medication.</li>
        <li><strong>Electrolyte packets</strong> — Add to water for faster rehydration.</li>
        <li><strong>Cold compress</strong> — Instant cold packs (the kind you squeeze to activate) don&apos;t need a freezer.</li>
        <li><strong>Sunglasses</strong> — For the drive home if needed.</li>
      </ul>

      <h2>The Car Kit</h2>
      <p>Keep this in your glove compartment or center console:</p>
      <ul>
        <li><strong>Polarized sunglasses</strong> — <Link href="/resources/best-sunglasses-driving-light-sensitivity" className="text-amber-600 hover:underline">Quality driving sunglasses</Link> with polarized lenses.</li>
        <li><strong>Visor extender</strong> — Clips to your sun visor to block light from angles the visor can&apos;t reach.</li>
        <li><strong>Medication</strong> — A backup dose in the car.</li>
        <li><strong>Water</strong> — Keep a sealed bottle in the car.</li>
        <li><strong>Blackout sleep mask</strong> — If you need to pull over and rest in the car.</li>
        <li><strong>Your tint exemption certificate</strong> — Always keep your <Link href="/resources/complete-guide-to-window-tint-medical-exemptions" className="text-amber-600 hover:underline">medical exemption</Link> in the vehicle.</li>
      </ul>

      <h2>Digital Preparedness</h2>
      <p>Set up these phone shortcuts <em>before</em> you need them:</p>
      <ul>
        <li><strong>iPhone:</strong> Triple-click shortcut for Reduce White Point (<Link href="/resources/iphone-settings-light-sensitivity" className="text-amber-600 hover:underline">setup guide</Link>)</li>
        <li><strong>Android:</strong> Extra Dim in Quick Settings panel (<Link href="/resources/android-settings-light-sensitivity" className="text-amber-600 hover:underline">setup guide</Link>)</li>
        <li><strong>Smart home:</strong> &quot;Migraine mode&quot; voice command that dims all lights to minimum</li>
      </ul>

      <h2>When an Attack Starts</h2>
      <ol>
        <li><strong>Take medication immediately</strong> — Early treatment is more effective. Don&apos;t wait to see if it gets worse.</li>
        <li><strong>Reduce light exposure</strong> — Put on FL-41 glasses or sleep mask. If at work, darken your workspace or move to a quiet room.</li>
        <li><strong>Apply cold</strong> — Cold compress on forehead, temples, or back of neck.</li>
        <li><strong>Hydrate</strong> — Drink water or an electrolyte drink.</li>
        <li><strong>If driving, pull over safely</strong> — Don&apos;t drive through an active migraine. Pull over, put on your sleep mask, recline the seat, and wait it out.</li>
      </ol>

      <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 not-prose my-8">
        <p className="text-sm text-gray-500 italic">
          <strong>Medical Disclaimer:</strong> This article is for informational purposes only. Always follow your neurologist&apos;s treatment plan for migraine management.
        </p>
      </div>
    </>
  );
}
