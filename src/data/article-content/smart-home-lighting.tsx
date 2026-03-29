import Link from "next/link";

export function SmartHomeLightingContent() {
  return (
    <>
      <p className="text-xl text-gray-700 leading-relaxed">
        Smart lighting gives you something light-sensitive people desperately need: <strong>total control</strong>. Instead of on/off, you get precise brightness, adjustable color temperature, schedules, and voice commands. Here&apos;s how to set up your home.
      </p>

      <h2>Start with Dimmer Switches</h2>
      <p>
        Before going full smart home, basic dimmer switches are the cheapest and most impactful upgrade. A $20 dimmer switch on your main living area light instantly gives you brightness control. If the light is too bright, turn it down. Simple.
      </p>
      <p>
        <strong>Important:</strong> Make sure your LED bulbs are labeled &quot;dimmable.&quot; Non-dimmable LEDs on a dimmer switch will flicker — exactly what you don&apos;t want.
      </p>

      <h2>Smart Bulbs</h2>

      <h3>Philips Hue</h3>
      <p>
        The gold standard. Philips Hue offers white-only and color bulbs that connect to a hub (or newer models work with Bluetooth directly). The app lets you set exact color temperature from 2200K to 6500K and brightness from 1% to 100%.
      </p>
      <ul>
        <li><strong>Best feature for photophobia:</strong> Create &quot;scenes&quot; like &quot;Relax&quot; (2200K, 40% brightness) or &quot;Migraine&quot; (2200K, 5% brightness)</li>
        <li><strong>Automation:</strong> Schedule lights to gradually dim in the evening</li>
        <li><strong>Voice control:</strong> Works with Alexa, Google Assistant, and Apple HomeKit</li>
        <li><strong>Price:</strong> $15-25 per bulb + $60 hub (optional with Bluetooth models)</li>
      </ul>

      <h3>LIFX</h3>
      <p>
        No hub required — connects directly to WiFi. Same brightness and color temperature control as Hue. Slightly brighter output. Good if you don&apos;t want a hub.
      </p>
      <ul>
        <li><strong>Price:</strong> $25-40 per bulb</li>
        <li><strong>Works with:</strong> Alexa, Google Assistant, Apple HomeKit</li>
      </ul>

      <h3>Wyze Bulbs</h3>
      <p>
        Budget-friendly smart bulbs with tunable white (2700K-6500K). No hub needed. The app is simple and functional. Great if you want smart lighting without the premium price.
      </p>
      <ul>
        <li><strong>Price:</strong> $8-12 per bulb</li>
        <li><strong>Works with:</strong> Alexa, Google Assistant</li>
      </ul>

      <h2>Automation Routines</h2>
      <p>
        The real power of smart lighting is automation. Set up routines that adjust your lights without you having to think about it:
      </p>

      <h3>Evening Wind-Down</h3>
      <p>Starting at sunset, gradually shift all lights to 2200K and reduce brightness to 40% over 2 hours. This mimics natural sunset and prepares your eyes for lower light.</p>

      <h3>Morning Gentle Wake</h3>
      <p>Instead of blasting full brightness when you wake up, set lights to turn on at 10% brightness in warm tones and gradually increase over 30 minutes.</p>

      <h3>Migraine Mode</h3>
      <p>Create a voice command — &quot;Hey Google, migraine mode&quot; — that drops all lights to 2200K at 5% brightness or turns them off entirely. When an attack hits, you shouldn&apos;t have to fumble with apps or switches.</p>

      <h3>Away/Return</h3>
      <p>Use geofencing to automatically set lights to your preferred comfortable level when you arrive home, so you never walk into a dark house and have to find switches.</p>

      <h2>Voice Control Tips</h2>
      <ul>
        <li><strong>&quot;Set living room to 30%&quot;</strong> — Specific brightness commands</li>
        <li><strong>&quot;Set bedroom to warm white&quot;</strong> — Color temperature by name</li>
        <li><strong>&quot;Turn off all lights&quot;</strong> — Quick darkness for migraine attacks</li>
        <li><strong>&quot;Activate relax mode&quot;</strong> — Trigger your custom scene</li>
      </ul>

      <h2>What About Smart Switches?</h2>
      <p>
        If you don&apos;t want to replace every bulb, smart dimmer switches control your existing bulbs (as long as they&apos;re dimmable). Brands like Lutron Caseta and TP-Link Kasa offer excellent smart dimmers that work with Alexa and Google.
      </p>

      <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 not-prose my-8">
        <p className="text-sm text-gray-500 italic">
          <strong>Tip:</strong> Smart lighting manages your indoor environment. For the time you spend in your car, <Link href="/resources/complete-guide-to-window-tint-medical-exemptions" className="text-amber-600 hover:underline">medical window tint</Link> provides similar passive light control.
        </p>
      </div>
    </>
  );
}
