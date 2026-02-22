"use client";

import { useState } from "react";
import type { RAGConfig, QueryResult } from "@/lib/types";
import { DEFAULT_CONFIG } from "@/lib/types";
import { ConfigPanel } from "@/components/config-panel/config-panel";
import { ResultsPanel } from "./results-panel";
import { demoQuery } from "@/lib/demo-data";

interface ComparisonViewProps {
  configA: RAGConfig;
  onConfigAChange: (config: RAGConfig) => void;
}

export function ComparisonView({ configA, onConfigAChange }: ComparisonViewProps) {
  const [configB, setConfigB] = useState<RAGConfig>({
    ...DEFAULT_CONFIG,
    chunkSize: 200,
    temperature: 0.8,
    generationModel: "gpt-3.5-turbo",
  });
  const [resultA, setResultA] = useState<QueryResult | null>(null);
  const [resultB, setResultB] = useState<QueryResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentQuery, setCurrentQuery] = useState("");

  const handleQuery = async (query: string) => {
    setIsLoading(true);
    setCurrentQuery(query);
    // Run both configs in parallel
    await new Promise((resolve) => setTimeout(resolve, 300));
    const rA = demoQuery(query, configA);
    await new Promise((resolve) => setTimeout(resolve, 200));
    const rB = demoQuery(query, configB);
    setResultA(rA);
    setResultB(rB);
    setIsLoading(false);
  };

  return (
    <div className="flex h-full">
      {/* Config A */}
      <div className="w-72 border-r border-border shrink-0 overflow-y-auto">
        <ConfigPanel config={configA} onChange={onConfigAChange} label="Config A" />
      </div>
      {/* Results A */}
      <div className="flex-1 border-r border-border min-w-0">
        <div className="p-2 bg-secondary/30 border-b border-border text-xs font-semibold text-center text-emerald-400">
          Configuration A
        </div>
        <ResultsPanel result={resultA} isLoading={isLoading} onQuery={handleQuery} />
      </div>
      {/* Results B */}
      <div className="flex-1 border-r border-border min-w-0">
        <div className="p-2 bg-secondary/30 border-b border-border text-xs font-semibold text-center text-blue-400">
          Configuration B
        </div>
        <ResultsPanel result={resultB} isLoading={isLoading} onQuery={handleQuery} />
      </div>
      {/* Config B */}
      <div className="w-72 shrink-0 overflow-y-auto">
        <ConfigPanel config={configB} onChange={setConfigB} label="Config B" />
      </div>
    </div>
  );
}
