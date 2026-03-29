import Link from "next/link";

export function MedicationsContent() {
  return (
    <>
      <p className="text-xl text-gray-700 leading-relaxed">
        Many common medications list &quot;photosensitivity&quot; as a side effect — but most people don&apos;t realize how significant that sensitivity can be until they&apos;re squinting through a sunny drive or getting headaches under office lights. Here&apos;s what you need to know about medication-induced light sensitivity.
      </p>

      <h2>How Medications Cause Photosensitivity</h2>
      <p>
        Medications can cause light sensitivity through two mechanisms:
      </p>
      <ul>
        <li><strong>Phototoxic reactions</strong> — The drug absorbs UV light and releases it as energy that damages skin cells. This is the more common type and causes a sunburn-like reaction on exposed skin.</li>
        <li><strong>Photoallergic reactions</strong> — UV light changes the drug&apos;s chemical structure on the skin, causing an immune response. This leads to eczema-like rashes that can spread beyond sun-exposed areas.</li>
      </ul>
      <p>
        Some medications also directly affect the eyes — dilating pupils, altering tear production, or affecting the retina — which increases visual light sensitivity independent of skin reactions.
      </p>

      <h2>Common Photosensitizing Medications</h2>

      <h3>Antibiotics</h3>
      <ul>
        <li><strong>Tetracyclines</strong> — Doxycycline, minocycline, tetracycline. Among the most photosensitizing drugs prescribed. Very commonly used for acne, Lyme disease, and respiratory infections.</li>
        <li><strong>Fluoroquinolones</strong> — Ciprofloxacin (Cipro), levofloxacin. Common for urinary and respiratory infections.</li>
        <li><strong>Sulfonamides</strong> — Sulfamethoxazole/trimethoprim (Bactrim). Used for UTIs and other infections.</li>
      </ul>

      <h3>NSAIDs (Pain Relievers)</h3>
      <ul>
        <li><strong>Ibuprofen</strong> (Advil, Motrin)</li>
        <li><strong>Naproxen</strong> (Aleve)</li>
        <li><strong>Piroxicam</strong> (Feldene) — One of the most photosensitizing NSAIDs</li>
      </ul>

      <h3>Diuretics (Water Pills)</h3>
      <ul>
        <li><strong>Hydrochlorothiazide (HCTZ)</strong> — One of the most commonly prescribed medications in the US, and one of the most photosensitizing. Used for high blood pressure.</li>
        <li><strong>Furosemide</strong> (Lasix)</li>
      </ul>

      <h3>Psychiatric Medications</h3>
      <ul>
        <li><strong>Phenothiazines</strong> — Chlorpromazine, thioridazine</li>
        <li><strong>Tricyclic antidepressants</strong> — Amitriptyline, nortriptyline</li>
        <li><strong>SSRIs</strong> — Some patients report increased light sensitivity with sertraline, fluoxetine</li>
      </ul>

      <h3>Heart Medications</h3>
      <ul>
        <li><strong>Amiodarone</strong> — Can cause both skin photosensitivity and corneal deposits that increase light sensitivity</li>
      </ul>

      <h3>Diabetes Medications</h3>
      <ul>
        <li><strong>Sulfonylureas</strong> — Glipizide, glyburide</li>
      </ul>

      <h3>Retinoids</h3>
      <ul>
        <li><strong>Isotretinoin</strong> (Accutane) — Extreme photosensitivity is a well-known side effect</li>
        <li><strong>Tretinoin</strong> — Topical retinoids also increase skin sensitivity to UV</li>
      </ul>

      <h2>What to Do If Your Medication Causes Photosensitivity</h2>
      <ol>
        <li><strong>Don&apos;t stop your medication</strong> without talking to your doctor. Many of these drugs are essential.</li>
        <li><strong>Protect your skin</strong> — Broad-spectrum SPF 50+ sunscreen, protective clothing, wide-brimmed hats.</li>
        <li><strong>Protect your eyes</strong> — <Link href="/resources/best-sunglasses-driving-light-sensitivity" className="text-amber-600 hover:underline">Polarized sunglasses</Link> outdoors, <Link href="/resources/fl-41-glasses-complete-guide" className="text-amber-600 hover:underline">FL-41 glasses</Link> indoors.</li>
        <li><strong>Protect while driving</strong> — A <Link href="/resources/complete-guide-to-window-tint-medical-exemptions" className="text-amber-600 font-semibold hover:underline">medical window tint exemption</Link> provides passive UV protection every time you drive.</li>
        <li><strong>Optimize your environment</strong> — <Link href="/resources/light-proof-your-home" className="text-amber-600 hover:underline">Home lighting adjustments</Link>, <Link href="/resources/computer-settings-light-sensitivity" className="text-amber-600 hover:underline">screen settings</Link>, <Link href="/resources/workplace-accommodations-light-sensitivity" className="text-amber-600 hover:underline">workplace accommodations</Link>.</li>
        <li><strong>Talk to your doctor</strong> — Ask if there&apos;s an alternative medication with less photosensitivity risk.</li>
      </ol>

      <h2>Does Medication-Induced Photosensitivity Qualify for a Tint Exemption?</h2>
      <p>
        <strong>Yes, in most states.</strong> Medical tint exemptions cover any condition that causes medically documented light or UV sensitivity. If your medication causes photosensitivity that impacts your ability to drive comfortably, you may qualify. The key is having a healthcare provider document the condition.
      </p>
      <p>
        <Link href="/resources/how-to-get-tint-exemption-online" className="text-amber-600 font-semibold hover:underline">Learn how to get a medical tint exemption online →</Link>
      </p>

      <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 not-prose my-8">
        <p className="text-sm text-gray-500 italic">
          <strong>Medical Disclaimer:</strong> This article is for informational purposes only. Never change or stop medication without consulting your prescribing physician. Discuss photosensitivity concerns with your healthcare provider.
        </p>
      </div>
    </>
  );
}
