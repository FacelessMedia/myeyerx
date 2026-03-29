import Link from "next/link";

export function BlackoutCurtainsContent() {
  return (
    <>
      <p className="text-xl text-gray-700 leading-relaxed">
        Controlling the light that enters through your windows is one of the most impactful things you can do for a light-sensitive home. But different rooms need different approaches. Here&apos;s when to use blackout curtains, sheer curtains, and residential window film — and how to combine them.
      </p>

      <h2>Blackout Curtains</h2>
      <p>
        Blackout curtains block 99-100% of incoming light. They use a dense, opaque liner (usually foam-backed or multi-layered fabric) that prevents light from passing through.
      </p>
      <h3>Best For</h3>
      <ul>
        <li><strong>Bedrooms</strong> — Essential for quality sleep and migraine recovery rooms</li>
        <li><strong>Media rooms</strong> — Eliminate screen glare from windows</li>
        <li><strong>Any room used as a &quot;dark retreat&quot;</strong> during migraine attacks</li>
      </ul>
      <h3>Tips</h3>
      <ul>
        <li>Get curtains <strong>wider than your window</strong> — overlap the edges by 3-4 inches on each side to prevent light leaking around the edges</li>
        <li>Use a <strong>wraparound curtain rod</strong> that curves back to the wall at the ends</li>
        <li>Install a <strong>pelmet or valance</strong> above to block light from the top gap</li>
        <li>Velcro strips along the edges seal remaining light gaps</li>
      </ul>

      <h2>Sheer Curtains</h2>
      <p>
        Sheer curtains diffuse and soften incoming sunlight without blocking it entirely. They reduce glare and harsh direct sunlight while maintaining a bright, airy feel in the room.
      </p>
      <h3>Best For</h3>
      <ul>
        <li><strong>Living rooms</strong> — Maintain natural light without the harshness</li>
        <li><strong>Kitchens</strong> — Soften morning sun while keeping the space bright enough to cook</li>
        <li><strong>Any room where you want some natural light</strong> but need to take the edge off</li>
      </ul>
      <h3>Tips</h3>
      <ul>
        <li>Layer sheers with blackout curtains — use sheers during the day and close blackouts when needed</li>
        <li>White or light-colored sheers diffuse light more evenly than darker ones</li>
      </ul>

      <h2>Residential Window Film</h2>
      <p>
        UV-blocking window film is a transparent or lightly tinted film applied directly to the glass. Quality films block up to <strong>99% of UV radiation</strong> while letting most visible light through. Some films also reduce heat and glare.
      </p>
      <h3>Best For</h3>
      <ul>
        <li><strong>Sun-facing windows</strong> that get intense direct light</li>
        <li><strong>Rooms where curtains aren&apos;t practical</strong> (like bathrooms or entryways)</li>
        <li><strong>UV protection without darkening the room</strong> — important for people with UV-triggered conditions like lupus, dermatomyositis, or PMLE</li>
        <li><strong>Permanent, set-it-and-forget-it protection</strong></li>
      </ul>
      <h3>Types of Window Film</h3>
      <ul>
        <li><strong>Clear UV-blocking film</strong> — Blocks UV without changing the appearance. Best for rooms where you want full natural light minus the UV.</li>
        <li><strong>Tinted film (10-50% VLT)</strong> — Reduces both UV and visible light. Good for sun-facing rooms where glare is a problem.</li>
        <li><strong>Frosted/privacy film</strong> — Diffuses light like a permanent sheer curtain. Good for bathrooms and street-level windows.</li>
      </ul>

      <h2>Combining Approaches</h2>
      <p>
        The best setup for a light-sensitive home often uses all three:
      </p>
      <ul>
        <li><strong>Bedroom:</strong> Blackout curtains + UV-blocking film (belt and suspenders for total darkness plus UV protection)</li>
        <li><strong>Living room:</strong> UV-blocking film on the glass + sheer curtains for diffusion + blackout curtains on a separate rod for bad days</li>
        <li><strong>Home office:</strong> UV-blocking film + sheer curtains to manage glare while maintaining enough light to work</li>
        <li><strong>Bathroom:</strong> Frosted window film (privacy + light diffusion)</li>
      </ul>

      <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 not-prose my-8">
        <p className="text-sm text-gray-500 italic">
          <strong>Note:</strong> Residential window film manages light at home. For your vehicle, <Link href="/resources/complete-guide-to-window-tint-medical-exemptions" className="text-amber-600 hover:underline">medical-grade window tint</Link> with a legal exemption provides similar protection on the road.
        </p>
      </div>
    </>
  );
}
