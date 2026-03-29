import Link from "next/link";

export function WorkplaceAccommodationsContent() {
  return (
    <>
      <p className="text-xl text-gray-700 leading-relaxed">
        If fluorescent lights, bright monitors, and open-plan offices make your workday miserable, you have more options than you might think. The Americans with Disabilities Act (ADA) may entitle you to reasonable accommodations — and many changes don&apos;t require any formal process at all.
      </p>

      <h2>Your Rights Under the ADA</h2>
      <p>
        The ADA requires employers with 15+ employees to provide <strong>reasonable accommodations</strong> for employees with qualifying disabilities, as long as the accommodations don&apos;t create &quot;undue hardship&quot; for the employer. Light sensitivity caused by medical conditions like migraines, lupus, TBI, or chronic photophobia generally qualifies.
      </p>
      <p>
        You don&apos;t have to disclose your specific diagnosis — only that you have a medical condition that requires accommodation. Your employer can ask for documentation from your healthcare provider confirming the need for accommodation.
      </p>

      <h2>Accommodations You Can Request</h2>

      <h3>Lighting Changes</h3>
      <ul>
        <li><strong>Remove or disconnect overhead fluorescent tubes</strong> directly above your desk</li>
        <li><strong>Install fluorescent light covers/diffusers</strong> that reduce flicker and filter blue-green wavelengths</li>
        <li><strong>Provide a desk lamp</strong> with a warm-toned bulb as an alternative to overhead lighting</li>
        <li><strong>Relocate your desk</strong> away from windows or to a corner with less overhead lighting</li>
        <li><strong>Allow you to wear <Link href="/resources/fl-41-glasses-complete-guide" className="text-amber-600 hover:underline">FL-41 glasses</Link></strong> at your desk (if dress code is a concern)</li>
      </ul>

      <h3>Workstation Changes</h3>
      <ul>
        <li><strong>Anti-glare screen</strong> or matte monitor</li>
        <li><strong>Monitor hood</strong> — A physical shade that blocks overhead light from reflecting on your screen</li>
        <li><strong>Adjustable monitor arm</strong> — Position your screen to minimize glare from windows and lights</li>
        <li><strong>Software accommodations</strong> — Permission to use Dark Mode, f.lux, or adjusted display settings</li>
      </ul>

      <h3>Schedule/Location Flexibility</h3>
      <ul>
        <li><strong>Remote work days</strong> — Work from your <Link href="/resources/light-proof-your-home" className="text-amber-600 hover:underline">light-controlled home environment</Link> on bad days</li>
        <li><strong>Flexible hours</strong> — Shift your schedule to avoid peak sunlight hours if your commute or office is problematic</li>
        <li><strong>Private or semi-private workspace</strong> — Away from windows and with individual lighting control</li>
      </ul>

      <h2>How to Request Accommodations</h2>
      <ol>
        <li><strong>Document your needs</strong> — Get a letter from your healthcare provider describing your condition and recommended accommodations</li>
        <li><strong>Talk to HR or your manager</strong> — You can make the request verbally or in writing. Written is better for your records.</li>
        <li><strong>Be specific</strong> — Instead of &quot;I need less light,&quot; say &quot;I need the two fluorescent tubes directly above my desk disconnected and a desk lamp with a warm-toned bulb provided as a replacement&quot;</li>
        <li><strong>Frame it as productivity</strong> — &quot;These changes will help me work without headaches and maintain my productivity&quot;</li>
        <li><strong>Follow up in writing</strong> — After any verbal conversation, send a follow-up email summarizing what was discussed</li>
      </ol>

      <h2>Quick Wins (No Formal Request Needed)</h2>
      <p>These changes often don&apos;t require any formal accommodation process:</p>
      <ul>
        <li>Wear FL-41 glasses at your desk</li>
        <li>Adjust your monitor brightness and enable Dark Mode</li>
        <li>Install <Link href="/resources/best-apps-light-sensitivity" className="text-amber-600 hover:underline">f.lux or similar software</Link> on your work computer</li>
        <li>Position your monitor to reduce window glare</li>
        <li>Bring a small desk lamp from home</li>
        <li>Use the <Link href="/resources/20-20-20-rule-light-sensitivity" className="text-amber-600 hover:underline">20-20-20 rule</Link> throughout the day</li>
      </ul>

      <h2>What If Your Employer Pushes Back?</h2>
      <p>
        Most of the accommodations listed above are inexpensive or free. An employer would have a very hard time arguing that disconnecting two fluorescent tubes or allowing you to use Dark Mode creates &quot;undue hardship.&quot; If you encounter resistance, the Job Accommodation Network (JAN) at askjan.org provides free consultation to both employees and employers on ADA accommodations.
      </p>

      <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 not-prose my-8">
        <p className="text-sm text-gray-500 italic">
          <strong>Disclaimer:</strong> This article provides general information about workplace accommodations and is not legal advice. Consult an employment attorney for specific legal questions about your situation.
        </p>
      </div>
    </>
  );
}
