import Link from "next/link";

export function QuestionsInstallerContent() {
  return (
    <>
      <p className="text-xl text-gray-700 leading-relaxed">
        Choosing the right tint installer is almost as important as choosing the right tint. A bad installation means bubbles, peeling, gaps in UV coverage, and wasted money. Here are the questions to ask before handing over your keys.
      </p>

      <h2>Before You Go</h2>

      <h3>1. &quot;What brands of film do you carry?&quot;</h3>
      <p>
        Reputable installers carry name-brand films like 3M, XPEL, Llumar, or SunTek. If they can&apos;t tell you the brand or say &quot;we use our own film,&quot; that&apos;s a red flag. Name brands have published specifications you can verify.
      </p>

      <h3>2. &quot;Do you offer ceramic tint?&quot;</h3>
      <p>
        For medical use, <Link href="/resources/ceramic-window-tint-medical-use" className="text-amber-600 hover:underline">ceramic tint</Link> is the best option. If they only offer dyed or metalized film, consider going elsewhere. Most professional shops carry ceramic options.
      </p>

      <h3>3. &quot;What is the UV rejection percentage of the film?&quot;</h3>
      <p>
        The answer should be 99% or higher for ceramic film. If they can&apos;t give you a specific number, ask to see the manufacturer&apos;s spec sheet. Every legitimate film has documented performance data.
      </p>

      <h3>4. &quot;Can I see the manufacturer&apos;s data sheet?&quot;</h3>
      <p>
        This document shows the exact VLT, UV rejection, infrared rejection, and total solar energy rejection for each film they offer. A professional installer should have these readily available.
      </p>

      <h3>5. &quot;What warranty do you offer?&quot;</h3>
      <p>
        Most quality tint installations come with a manufacturer&apos;s warranty (often lifetime for ceramic) plus an installer warranty on the workmanship. Get both in writing. Ask specifically about coverage for bubbling, peeling, fading, and delamination.
      </p>

      <h3>6. &quot;How long have you been installing tint?&quot;</h3>
      <p>
        Experience matters. Window tint installation is a skill that takes years to master. An experienced installer will have cleaner edges, fewer bubbles, and better corner coverage.
      </p>

      <h3>7. &quot;Do you have experience with medical exemption customers?&quot;</h3>
      <p>
        Some installers are familiar with medical exemptions and know the specific VLT requirements for your state. They may want to see your <Link href="/resources/complete-guide-to-window-tint-medical-exemptions" className="text-amber-600 hover:underline">exemption certificate</Link> before applying tint darker than legal limits.
      </p>

      <h3>8. &quot;How long does installation take?&quot;</h3>
      <p>
        A full car typically takes 2-4 hours for a professional job. If someone says they can do a full car in under an hour, they&apos;re likely cutting corners.
      </p>

      <h3>9. &quot;What&apos;s the cure time?&quot;</h3>
      <p>
        After installation, tint needs time to cure (dry and adhere fully). This typically takes 3-5 days in warm weather and up to 2-4 weeks in cold weather. During this time, don&apos;t roll down the tinted windows. A good installer will explain this.
      </p>

      <h3>10. &quot;Can I see examples of your work?&quot;</h3>
      <p>
        Ask to see completed vehicles or photos of their work. Look for clean edges, no bubbles, consistent coverage, and neat corners. Most installers have a portfolio or social media page showing their work.
      </p>

      <h2>Red Flags</h2>
      <ul>
        <li>Can&apos;t name the film brand they use</li>
        <li>No manufacturer&apos;s warranty</li>
        <li>Significantly cheaper than other local shops (usually means low-quality film)</li>
        <li>Promises installation in under an hour for a full car</li>
        <li>Won&apos;t show you the film&apos;s spec sheet</li>
        <li>No portfolio or examples of completed work</li>
      </ul>

      <h2>After Installation</h2>
      <ul>
        <li>Small water bubbles are normal during the curing period — they should disappear within a few weeks</li>
        <li>Don&apos;t roll down newly tinted windows for the recommended cure time</li>
        <li>Clean tinted windows with ammonia-free glass cleaner and a soft cloth</li>
        <li>Keep your warranty paperwork and the film&apos;s spec sheet with your vehicle records</li>
      </ul>

      <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 not-prose my-8">
        <p className="text-sm text-gray-500 italic">
          <strong>Tip:</strong> Get quotes from at least 3 installers. Compare not just price, but the film brand, warranty, and the installer&apos;s experience level.
        </p>
      </div>
    </>
  );
}
