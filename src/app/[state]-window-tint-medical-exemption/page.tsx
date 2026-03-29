// This route folder persists due to OneDrive sync.
// The actual state exemption pages are served by [slug]/page.tsx.
// This file redirects to avoid route conflicts.
import { notFound } from "next/navigation";

export default function LegacyRoute() {
  notFound();
}
