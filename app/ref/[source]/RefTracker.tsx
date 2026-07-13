"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { track } from "@vercel/analytics";

export default function RefTracker({ source }: { source: string }) {
  const router = useRouter();

  useEffect(() => {
    // Record where this visitor came from, then send them to the homepage.
    track("ref_visit", { source });
    router.replace("/");
  }, [source, router]);

  return (
    <div className="min-h-screen flex items-center justify-center text-sm text-neutral-500">
      Redirecting…
    </div>
  );
}
