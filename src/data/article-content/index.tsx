"use client";

import { lazy, Suspense, ComponentType } from "react";

/* ── Existing articles (eagerly loaded to preserve current behavior) ── */
export { CompleteGuideContent } from "./complete-guide";
export { HowToGetContent } from "./how-to-get";
export { StatesAllowContent } from "./states-allow";
export { CostGuideContent } from "./cost-guide";

/* ── New articles ── */
export { LivingWithLightSensitivityContent } from "./living-with-light-sensitivity";
export { UnderstandingPhotophobiaContent } from "./understanding-photophobia";
export { IphoneSettingsContent } from "./iphone-settings";
export { AndroidSettingsContent } from "./android-settings";
export { ComputerSettingsContent } from "./computer-settings";
export { BestAppsContent } from "./best-apps";
export { TwentyTwentyTwentyContent } from "./twenty-twenty-twenty";
export { BlueLightProtectorsContent } from "./blue-light-protectors";
export { EinkVsLcdContent } from "./eink-vs-lcd";
export { LightProofHomeContent } from "./light-proof-home";
export { BestLightBulbsContent } from "./best-light-bulbs";
export { SmartHomeLightingContent } from "./smart-home-lighting";
export { BlackoutCurtainsContent } from "./blackout-curtains";
export { BiasLightingContent } from "./bias-lighting";
export { WorkplaceAccommodationsContent } from "./workplace-accommodations";
export { Fl41GlassesContent } from "./fl41-glasses";
export { FluorescentLightsContent } from "./fluorescent-lights";
export { RemoteWorkContent } from "./remote-work";
export { MigrainesAndLightContent } from "./migraines-and-light";
export { TrackMigraineTriggersContent } from "./track-migraine-triggers";
export { MigTriggerStackingContent } from "./migraine-trigger-stacking";
export { GreenLightTherapyContent } from "./green-light-therapy";
export { MigraineEmergencyKitContent } from "./migraine-emergency-kit";
export { BestSunglassesDrivingContent } from "./best-sunglasses-driving";
export { NightDrivingContent } from "./night-driving";
export { VehicleAccessoriesContent } from "./vehicle-accessories";
export { WindowTintTypesContent } from "./window-tint-types";
export { UnderstandingVltContent } from "./understanding-vlt";
export { CeramicTintContent } from "./ceramic-tint";
export { DarkerTintMythContent } from "./darker-tint-myth";
export { QuestionsInstallerContent } from "./questions-installer";
export { PulledOverContent } from "./pulled-over";
export { TravelingStatesContent } from "./traveling-states";
export { MedicationsContent } from "./medications";

/* ── Slug → Component map ── */
export const CONTENT_MAP: Record<string, ComponentType> = {
  "complete-guide-to-window-tint-medical-exemptions": lazy(() => import("./complete-guide").then(m => ({ default: m.CompleteGuideContent }))),
  "how-to-get-tint-exemption-online": lazy(() => import("./how-to-get").then(m => ({ default: m.HowToGetContent }))),
  "states-that-allow-window-tint-exemptions": lazy(() => import("./states-allow").then(m => ({ default: m.StatesAllowContent }))),
  "window-tint-exemption-cost": lazy(() => import("./cost-guide").then(m => ({ default: m.CostGuideContent }))),
  "living-with-light-sensitivity": lazy(() => import("./living-with-light-sensitivity").then(m => ({ default: m.LivingWithLightSensitivityContent }))),
  "understanding-photophobia": lazy(() => import("./understanding-photophobia").then(m => ({ default: m.UnderstandingPhotophobiaContent }))),
  "iphone-settings-light-sensitivity": lazy(() => import("./iphone-settings").then(m => ({ default: m.IphoneSettingsContent }))),
  "android-settings-light-sensitivity": lazy(() => import("./android-settings").then(m => ({ default: m.AndroidSettingsContent }))),
  "computer-settings-light-sensitivity": lazy(() => import("./computer-settings").then(m => ({ default: m.ComputerSettingsContent }))),
  "best-apps-light-sensitivity": lazy(() => import("./best-apps").then(m => ({ default: m.BestAppsContent }))),
  "20-20-20-rule-light-sensitivity": lazy(() => import("./twenty-twenty-twenty").then(m => ({ default: m.TwentyTwentyTwentyContent }))),
  "blue-light-screen-protectors": lazy(() => import("./blue-light-protectors").then(m => ({ default: m.BlueLightProtectorsContent }))),
  "e-ink-vs-lcd-sensitive-eyes": lazy(() => import("./eink-vs-lcd").then(m => ({ default: m.EinkVsLcdContent }))),
  "light-proof-your-home": lazy(() => import("./light-proof-home").then(m => ({ default: m.LightProofHomeContent }))),
  "best-light-bulbs-photosensitivity": lazy(() => import("./best-light-bulbs").then(m => ({ default: m.BestLightBulbsContent }))),
  "smart-home-lighting-light-sensitivity": lazy(() => import("./smart-home-lighting").then(m => ({ default: m.SmartHomeLightingContent }))),
  "blackout-curtains-window-film-guide": lazy(() => import("./blackout-curtains").then(m => ({ default: m.BlackoutCurtainsContent }))),
  "bias-lighting-reduce-eye-strain": lazy(() => import("./bias-lighting").then(m => ({ default: m.BiasLightingContent }))),
  "workplace-accommodations-light-sensitivity": lazy(() => import("./workplace-accommodations").then(m => ({ default: m.WorkplaceAccommodationsContent }))),
  "fl-41-glasses-complete-guide": lazy(() => import("./fl41-glasses").then(m => ({ default: m.Fl41GlassesContent }))),
  "fluorescent-lights-at-work": lazy(() => import("./fluorescent-lights").then(m => ({ default: m.FluorescentLightsContent }))),
  "remote-work-light-sensitivity": lazy(() => import("./remote-work").then(m => ({ default: m.RemoteWorkContent }))),
  "migraines-and-light-sensitivity": lazy(() => import("./migraines-and-light").then(m => ({ default: m.MigrainesAndLightContent }))),
  "track-migraine-triggers": lazy(() => import("./track-migraine-triggers").then(m => ({ default: m.TrackMigraineTriggersContent }))),
  "migraine-trigger-stacking": lazy(() => import("./migraine-trigger-stacking").then(m => ({ default: m.MigTriggerStackingContent }))),
  "green-light-therapy-migraines": lazy(() => import("./green-light-therapy").then(m => ({ default: m.GreenLightTherapyContent }))),
  "migraine-emergency-kit": lazy(() => import("./migraine-emergency-kit").then(m => ({ default: m.MigraineEmergencyKitContent }))),
  "best-sunglasses-driving-light-sensitivity": lazy(() => import("./best-sunglasses-driving").then(m => ({ default: m.BestSunglassesDrivingContent }))),
  "night-driving-light-sensitivity": lazy(() => import("./night-driving").then(m => ({ default: m.NightDrivingContent }))),
  "vehicle-accessories-photosensitive-drivers": lazy(() => import("./vehicle-accessories").then(m => ({ default: m.VehicleAccessoriesContent }))),
  "window-tint-types-explained": lazy(() => import("./window-tint-types").then(m => ({ default: m.WindowTintTypesContent }))),
  "understanding-vlt-window-tint": lazy(() => import("./understanding-vlt").then(m => ({ default: m.UnderstandingVltContent }))),
  "ceramic-window-tint-medical-use": lazy(() => import("./ceramic-tint").then(m => ({ default: m.CeramicTintContent }))),
  "darker-tint-not-more-uv-protection": lazy(() => import("./darker-tint-myth").then(m => ({ default: m.DarkerTintMythContent }))),
  "questions-to-ask-tint-installer": lazy(() => import("./questions-installer").then(m => ({ default: m.QuestionsInstallerContent }))),
  "pulled-over-tinted-windows": lazy(() => import("./pulled-over").then(m => ({ default: m.PulledOverContent }))),
  "traveling-between-states-tint-exemption": lazy(() => import("./traveling-states").then(m => ({ default: m.TravelingStatesContent }))),
  "medications-that-cause-light-sensitivity": lazy(() => import("./medications").then(m => ({ default: m.MedicationsContent }))),
};

export function ArticleContent({ slug }: { slug: string }) {
  const Content = CONTENT_MAP[slug];
  if (!Content) return <p>Article content coming soon.</p>;
  return (
    <Suspense fallback={<div className="animate-pulse h-96 bg-gray-100 rounded-xl" />}>
      <Content />
    </Suspense>
  );
}
