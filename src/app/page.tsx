"use client";

import { Recipe } from "@/components/recipe";
import { getRecipes } from "@/lib/action";

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <Recipe />
    </main>
  );
}
