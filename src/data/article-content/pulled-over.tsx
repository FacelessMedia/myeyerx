import Link from "next/link";

export function PulledOverContent() {
  return (
    <>
      <p className="text-xl text-gray-700 leading-relaxed">
        Getting pulled over for window tint can be stressful — especially when you have a legitimate medical reason for it. Here&apos;s exactly what to do, what to say, and how to handle the situation if you have a medical exemption.
      </p>

      <h2>Before It Happens: Be Prepared</h2>
      <ul>
        <li><strong>Keep your exemption certificate in the vehicle at all times</strong> — Glove compartment, center console, or visor clip. Somewhere you can reach it quickly without fumbling.</li>
        <li><strong>Print two copies</strong> — One for the vehicle, one at home as backup in case the first gets lost or damaged.</li>
        <li><strong>Keep a photo on your phone</strong> — As a backup in case you can&apos;t find the paper copy quickly.</li>
        <li><strong>Know your state&apos;s requirements</strong> — Some states require you to register the exemption with the DMV. Some require you to carry a specific form. Know what your state expects.</li>
      </ul>

      <h2>During the Stop</h2>
      <ol>
        <li><strong>Stay calm and cooperative</strong> — The officer is doing their job. Tint violations are one of the most common traffic stops.</li>
        <li><strong>Roll down your window</strong> — This shows cooperation and lets the officer see you clearly.</li>
        <li><strong>Inform the officer immediately</strong> — &quot;Officer, I have a medical window tint exemption. The certificate is in my glove compartment / center console. May I get it for you?&quot;</li>
        <li><strong>Present the certificate</strong> — Hand it to the officer along with your license and registration.</li>
        <li><strong>Be patient</strong> — The officer may not be immediately familiar with medical tint exemptions. Give them time to review the document and verify it if needed.</li>
      </ol>

      <h2>What the Officer Will Check</h2>
      <ul>
        <li><strong>Your name</strong> matches the certificate</li>
        <li><strong>The certificate is current</strong> (not expired)</li>
        <li><strong>The physician&apos;s signature</strong> is present</li>
        <li><strong>The state</strong> — The exemption should be from the state you&apos;re driving in (or the officer may accept out-of-state exemptions depending on your state&apos;s reciprocity rules)</li>
      </ul>
      <p>
        The officer may also use a <strong>tint meter</strong> to check your VLT. Even with an exemption, some states still have minimum VLT requirements. Your tint should be within whatever your state&apos;s exemption allows.
      </p>

      <h2>If You Get a Citation Anyway</h2>
      <p>
        Occasionally, an officer may still issue a citation — either because they&apos;re unfamiliar with medical exemptions, because they believe the certificate is invalid, or because your tint exceeds even the exempted limits. If this happens:
      </p>
      <ol>
        <li><strong>Don&apos;t argue at the scene</strong> — Accept the citation respectfully. You can contest it later.</li>
        <li><strong>Note the officer&apos;s name and badge number</strong></li>
        <li><strong>Contact the court</strong> — In most jurisdictions, you can get the citation dismissed by presenting your valid exemption certificate to the court or prosecutor.</li>
        <li><strong>Bring documentation</strong> — Your exemption certificate, a copy of your state&apos;s medical exemption law, and any DMV registration of the exemption.</li>
      </ol>

      <h2>Without an Exemption</h2>
      <p>
        If you don&apos;t have an exemption but have a medical condition that qualifies, getting pulled over is actually a sign that you should get one. The fines for illegal tint range from $25 to $500+ depending on your state, and repeat offenses can mean higher fines, points on your license, or required tint removal.
      </p>
      <p>
        Getting a <Link href="/resources/complete-guide-to-window-tint-medical-exemptions" className="text-amber-600 font-semibold hover:underline">medical exemption</Link> protects you legally while keeping the tint your condition requires.
      </p>

      <h2>Interstate Travel</h2>
      <p>
        If you&apos;re pulled over in a state different from where your exemption was issued, the situation gets more complex. Some states honor out-of-state exemptions, others don&apos;t. <Link href="/resources/traveling-between-states-tint-exemption" className="text-amber-600 font-semibold hover:underline">Read our guide on traveling between states with a tint exemption →</Link>
      </p>

      <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 not-prose my-8">
        <p className="text-sm text-gray-500 italic">
          <strong>Legal Disclaimer:</strong> This article provides general information and is not legal advice. Traffic laws and enforcement vary by jurisdiction. Consult a traffic attorney for specific legal questions about your situation.
        </p>
      </div>
    </>
  );
}
