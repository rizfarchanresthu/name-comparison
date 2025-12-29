"use client";

import { useState } from "react";
import stringComparison from "string-comparison";

export default function Home() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [nameComparisonResult, setNameComparisonResult] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Implement your function logic here
    const nameComparisonResult = stringComparison.levenshtein.similarity(input1, input2)
    setNameComparisonResult(nameComparisonResult as number);

  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="w-full max-w-md px-6 py-12">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 rounded-lg bg-white p-8 shadow-lg dark:bg-zinc-900"
        >
          <h1 className="text-2xl font-semibold text-black dark:text-zinc-50">
            Name Comparison Tool
          </h1>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="input1"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              First String
            </label>
            <input
              id="input1"
              type="text"
              value={input1}
              onChange={(e) => setInput1(e.target.value)}
              className="rounded-md border border-zinc-300 px-4 py-2 text-black focus:border-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-50 dark:focus:border-zinc-600 dark:focus:ring-zinc-600"
              placeholder="Enter first string"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="input2"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Second String
            </label>
            <input
              id="input2"
              type="text"
              value={input2}
              onChange={(e) => setInput2(e.target.value)}
              className="rounded-md border border-zinc-300 px-4 py-2 text-black focus:border-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-50 dark:focus:border-zinc-600 dark:focus:ring-zinc-600"
              placeholder="Enter second string"
            />
          </div>

          <button
            type="submit"
            className="rounded-md bg-zinc-900 px-4 py-2 font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-black dark:hover:bg-zinc-200"
          >
            Submit
          </button>
        </form>
        {nameComparisonResult && (
          <div className="flex flex-col gap-2 mt-4">
            <p className="text-lg font-medium text-center text-zinc-700 dark:text-zinc-300">Name Comparison Result: <strong>{nameComparisonResult}</strong></p>
          </div>
        )}
      </main>
    </div>
  );
}
