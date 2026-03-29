import Link from "next/link";

export function VehicleAccessoriesContent() {
  return (
    <>
      <p className="text-xl text-gray-700 leading-relaxed">
        Beyond window tint and sunglasses, several vehicle accessories can make driving significantly more comfortable for light-sensitive people. Most are inexpensive and easy to install yourself.
      </p>

      <h2>Visor Extenders</h2>
      <p>
        Factory sun visors are too small and don&apos;t extend far enough to the side. Visor extenders clip onto your existing visor and add coverage that blocks light from angles the standard visor can&apos;t reach — especially that brutal low-angle sun during sunrise and sunset drives.
      </p>
      <ul>
        <li><strong>Polarized visor extenders</strong> — The best option. They filter glare rather than just blocking light, so you can still see the road. Tinted yellow or gray. $15-30.</li>
        <li><strong>Opaque visor extenders</strong> — Block light completely in the extended area. More blocking but less visibility. $10-20.</li>
        <li><strong>Slide-out extenders</strong> — Extend horizontally to cover the side window area. Good for low-angle side sun. $15-25.</li>
      </ul>

      <h2>Windshield Sun Strips</h2>
      <p>
        A tinted strip across the top of your windshield (often called a &quot;brow band&quot; or &quot;visor strip&quot;) blocks overhead sun without obstructing your forward view. Most states allow a tinted strip in the top 5-6 inches of the windshield even without a medical exemption.
      </p>

      <h2>Dashboard Anti-Reflective Mat</h2>
      <p>
        Light-colored dashboards reflect sunlight upward into your eyes and onto the windshield. A dark, non-reflective dashboard mat or cover eliminates this secondary glare source. Simple, cheap, and surprisingly effective.
      </p>

      <h2>Auto-Dimming Rearview Mirror</h2>
      <p>
        If your car doesn&apos;t have one already, aftermarket auto-dimming mirrors detect bright headlights behind you and automatically darken to reduce glare. Much better than manually flipping the mirror tab. $30-80 for aftermarket options.
      </p>

      <h2>Windshield Cleaning Kit</h2>
      <p>
        A clean windshield reduces glare dramatically. Keep these in your car:
      </p>
      <ul>
        <li><strong>Interior glass cleaner</strong> — Specifically formulated for auto glass (not household glass cleaner)</li>
        <li><strong>Microfiber cloths</strong> — For streak-free interior cleaning</li>
        <li><strong>Rain repellent</strong> — Products like Rain-X on the exterior cause water to bead and roll off, improving visibility in rain</li>
        <li><strong>Fresh wiper blades</strong> — Replace every 6-12 months. Streaky wipers scatter oncoming light at night.</li>
      </ul>

      <h2>Seat Position</h2>
      <p>
        This isn&apos;t an accessory, but adjusting your seat position can reduce light exposure:
      </p>
      <ul>
        <li>Raise your seat slightly so the roof provides more overhead shade</li>
        <li>Tilt the seat back slightly to bring overhead light sources above your field of view</li>
        <li>Ensure you can still comfortably see over the steering wheel and reach all controls</li>
      </ul>

      <h2>The Complete Driving Protection Stack</h2>
      <ol>
        <li><strong><Link href="/resources/complete-guide-to-window-tint-medical-exemptions" className="text-amber-600 hover:underline">Medical window tint</Link></strong> — Passive protection on all windows</li>
        <li><strong><Link href="/resources/best-sunglasses-driving-light-sensitivity" className="text-amber-600 hover:underline">Polarized sunglasses</Link></strong> — Active protection for your eyes</li>
        <li><strong>Visor extender</strong> — Blocks low-angle sun</li>
        <li><strong>Clean windshield</strong> — Eliminates scatter glare</li>
        <li><strong>Auto-dimming mirror</strong> — Handles headlights behind you</li>
        <li><strong>Dashboard mat</strong> — Eliminates reflected dashboard glare</li>
      </ol>

      <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 not-prose my-8">
        <p className="text-sm text-gray-500 italic">
          <strong>Note:</strong> All accessories should be installed safely and must not obstruct your view. Check your state&apos;s regulations regarding windshield obstructions.
        </p>
      </div>
    </>
  );
}
