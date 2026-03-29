import Link from "next/link";

export function EinkVsLcdContent() {
  return (
    <>
      <p className="text-xl text-gray-700 leading-relaxed">
        If you read a lot and have light sensitivity, switching to an e-ink device might be one of the most impactful changes you can make. E-ink screens don&apos;t emit light the way phones, tablets, and computers do — they look and feel like actual paper. Here&apos;s why that matters.
      </p>

      <h2>How E-ink Works</h2>
      <p>
        E-ink (electronic ink) displays use tiny capsules of black and white particles that rearrange when an electrical charge is applied. The screen reflects ambient light just like paper — it doesn&apos;t generate its own light. This is fundamentally different from LCD and OLED screens, which blast photons directly at your eyes.
      </p>

      <h2>Why E-ink Is Better for Light Sensitivity</h2>
      <ul>
        <li><strong>No direct light emission</strong> — The screen reflects light like paper instead of shining light at you</li>
        <li><strong>No blue light</strong> — Since it&apos;s reflected ambient light, there&apos;s no blue light spectrum to irritate your eyes</li>
        <li><strong>No screen flicker</strong> — LCD screens use PWM to control brightness, creating invisible flicker that triggers headaches. E-ink has zero flicker.</li>
        <li><strong>No contrast fatigue</strong> — The contrast ratio matches paper, which your eyes handle naturally</li>
        <li><strong>Optional front light</strong> — Modern e-readers have adjustable warm-toned front lights for reading in dim conditions, but you can turn them off entirely</li>
      </ul>

      <h2>Best E-ink Devices</h2>

      <h3>Amazon Kindle Paperwhite</h3>
      <p>
        The most popular e-reader for good reason. The Paperwhite has a flush screen, adjustable warm front light, and weeks of battery life. It&apos;s compact, affordable, and perfect for book reading.
      </p>
      <ul>
        <li><strong>Best for:</strong> Pure reading — books, articles, documents</li>
        <li><strong>Light control:</strong> Adjustable brightness and color temperature</li>
        <li><strong>Price:</strong> ~$140-$190</li>
      </ul>

      <h3>BOOX Tablets</h3>
      <p>
        BOOX makes Android-based e-ink tablets that can run any Android app — including web browsers, note-taking apps, and even email. If you want e-ink for more than just books, BOOX is the way to go.
      </p>
      <ul>
        <li><strong>Best for:</strong> Versatile use — reading, notes, web, email on e-ink</li>
        <li><strong>Light control:</strong> Adjustable front light with warm/cool toggle</li>
        <li><strong>Price:</strong> ~$250-$600 depending on model/size</li>
      </ul>

      <h2>Limitations</h2>
      <p>
        E-ink isn&apos;t perfect for everything:
      </p>
      <ul>
        <li><strong>Slow refresh rate</strong> — Not suitable for video, gaming, or fast scrolling</li>
        <li><strong>Grayscale</strong> — Most e-ink screens are black and white (color e-ink exists but is limited)</li>
        <li><strong>Not a phone replacement</strong> — You still need your phone for calls, messaging, and most apps</li>
      </ul>
      <p>
        But for reading — which is often one of the most problematic activities for light-sensitive people — e-ink is a genuine game-changer.
      </p>

      <h2>Tip: Combine E-ink with Your Existing Setup</h2>
      <p>
        Use your e-reader for long reading sessions and keep your phone/tablet with <Link href="/resources/iphone-settings-light-sensitivity" className="text-amber-600 hover:underline">optimized settings</Link> for everything else. This reduces total screen-light exposure throughout your day.
      </p>

      <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 not-prose my-8">
        <p className="text-sm text-gray-500 italic">
          <strong>Medical Disclaimer:</strong> This article is for informational purposes only and does not constitute medical advice. Consult a healthcare provider for persistent light sensitivity.
        </p>
      </div>
    </>
  );
}
