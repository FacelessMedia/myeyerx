import { redirect } from "next/navigation";

export default function GetStartedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  redirect("/");
}
