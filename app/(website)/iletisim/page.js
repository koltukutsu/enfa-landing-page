import Contact from "./contact";
import { getSettings } from "@/lib/sanity/client";
export default async function ContactPage() {
  const settings = await getSettings(
  );
  return <Contact settings={settings} />;
}

// export const revalidate = 60;
