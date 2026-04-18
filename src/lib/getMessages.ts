import { cookies } from "next/headers";

export async function getMessages() {
  const cookieStore = await cookies();
  const locale = cookieStore.get("locale")?.value || "en";
  return (await import(`../../messages/${locale}.json`)).default;
}

export async function getLocale() {
  const cookieStore = await cookies();
  return cookieStore.get("locale")?.value || "en";
}
