import React from "react";
import { FaqPageClient } from "./FaqPageClient";

export const metadata = {
  title: "FAQ | HumNikah",
  description:
    "Answers to common questions about HumNikah's Islamic matchmaking service — membership, matches, privacy, verification, family involvement, and payments.",
};

export default function FaqPage() {
  return <FaqPageClient />;
}
