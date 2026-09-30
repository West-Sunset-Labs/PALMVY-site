import Script from "next/script";
import { CLOUDFLARE_BEACON_SRC, getCloudflareToken } from "@/core/data/analytics";

export function CloudflareAnalytics() {
  const token = getCloudflareToken();

  if (!token) return null;

  return (
    <Script
      src={CLOUDFLARE_BEACON_SRC}
      strategy="afterInteractive"
      data-cf-beacon={JSON.stringify({ token })}
    />
  );
}
