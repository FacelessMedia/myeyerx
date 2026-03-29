import Link from "next/link";

export function RemoteWorkContent() {
  return (
    <>
      <p className="text-xl text-gray-700 leading-relaxed">
        Working from home gives light-sensitive people something the office never can: <strong>total control over your environment</strong>. No fluorescent lights you can&apos;t turn off, no windows you can&apos;t cover, no colleagues who want the blinds open. Here&apos;s how to set up the ideal remote workspace.
      </p>

      <h2>The Ideal Home Office Setup</h2>

      <h3>Lighting</h3>
      <ul>
        <li><strong>No overhead fluorescents</strong> — Use a desk lamp with a <Link href="/resources/best-light-bulbs-photosensitivity" className="text-amber-600 hover:underline">warm white (2700K) bulb</Link> instead</li>
        <li><strong>Dimmer switch or smart bulb</strong> — Adjust brightness throughout the day as needed</li>
        <li><strong><Link href="/resources/bias-lighting-reduce-eye-strain" className="text-amber-600 hover:underline">Bias lighting</Link></strong> behind your monitor — Reduces contrast strain</li>
        <li><strong>Window position</strong> — Desk perpendicular to windows, not facing them or with them behind your screen</li>
      </ul>

      <h3>Monitor Setup</h3>
      <ul>
        <li><strong>Dark Mode everything</strong> — OS, browser, apps. <Link href="/resources/computer-settings-light-sensitivity" className="text-amber-600 hover:underline">Full computer settings guide →</Link></li>
        <li><strong>f.lux or Iris</strong> — Software blue light filtering beyond what Night Light provides</li>
        <li><strong>Matte screen</strong> — Anti-glare monitor or matte screen protector</li>
        <li><strong>Arm&apos;s length distance</strong> — 20-26 inches from your eyes</li>
        <li><strong>Top of screen at eye level</strong> — Reduces strain from looking up into overhead light</li>
      </ul>

      <h3>Window Management</h3>
      <ul>
        <li><strong>Sheer curtains</strong> for moderate days — Soften sunlight without blocking it completely</li>
        <li><strong>Blackout curtains</strong> for bad days — Close them and work by lamp light</li>
        <li><strong>UV-blocking window film</strong> — Permanent UV protection even when curtains are open</li>
      </ul>

      <h2>Video Calls</h2>
      <p>
        Video calls create a unique challenge: you need to be well-lit enough for the camera while keeping your environment comfortable for your eyes. Solutions:
      </p>
      <ul>
        <li><strong>Ring light with adjustable temperature</strong> — Set it to warm white and position it behind your camera. It lights your face without blasting your eyes.</li>
        <li><strong>Bounce light off the wall</strong> — Point a desk lamp at the wall behind your monitor. The reflected light illuminates your face softly.</li>
        <li><strong>Reduce call window brightness</strong> — Minimize the video call window size or use &quot;speaker view&quot; to reduce the overall screen brightness from gallery view</li>
        <li><strong>Wear FL-41 glasses</strong> — The rose tint is subtle enough for professional calls and most people won&apos;t notice or will assume they&apos;re regular glasses</li>
      </ul>

      <h2>Schedule Optimization</h2>
      <p>
        One of remote work&apos;s biggest advantages is schedule flexibility. If your employer allows it:
      </p>
      <ul>
        <li><strong>Start earlier</strong> — Morning light is softer and less triggering than midday</li>
        <li><strong>Take breaks during peak sun</strong> — 11am-2pm is often the worst; schedule non-screen tasks during this window</li>
        <li><strong>Follow the <Link href="/resources/20-20-20-rule-light-sensitivity" className="text-amber-600 hover:underline">20-20-20 rule</Link></strong> — Every 20 minutes, look at something 20 feet away for 20 seconds</li>
        <li><strong>Block &quot;dark time&quot;</strong> — Schedule 15-minute breaks in a darkened room if needed</li>
      </ul>

      <h2>Making the Case for Remote Work</h2>
      <p>
        If you don&apos;t already work remotely and your light sensitivity is impacting your office productivity, remote work may qualify as a <Link href="/resources/workplace-accommodations-light-sensitivity" className="text-amber-600 hover:underline">reasonable accommodation under the ADA</Link>. Document how your condition affects you in the office versus at home, and work with your healthcare provider to support the request.
      </p>

      <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 not-prose my-8">
        <p className="text-sm text-gray-500 italic">
          <strong>Medical Disclaimer:</strong> This article is for informational purposes only. Consult a healthcare provider for medical advice about managing light sensitivity in your work environment.
        </p>
      </div>
    </>
  );
}
