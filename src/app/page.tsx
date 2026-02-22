import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Database, FlaskConical, BookOpen, Layers, Search, Sparkles, Settings2, GitCompare } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-blue-500/5" />
        <div className="max-w-5xl mx-auto px-6 py-20 relative">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-10 w-10 rounded-lg bg-emerald-500 flex items-center justify-center">
              <Database className="h-5 w-5 text-white" />
            </div>
            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400">
              Portfolio Project
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
            RAG Playground
            <span className="text-emerald-400"> — FCA Handbook</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed">
            An interactive tool for experimenting with how different Retrieval Augmented Generation
            configurations affect AI-generated answers about UK financial regulation. Tweak every
            parameter and see the impact in real time.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/playground"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white font-medium transition-colors"
            >
              <FlaskConical className="h-4 w-4" />
              Open Playground
            </Link>
            <Link
              href="/learn"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-border hover:bg-secondary transition-colors font-medium"
            >
              <BookOpen className="h-4 w-4" />
              Learn RAG
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-8">What You Can Explore</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              icon: Layers,
              title: "Chunking Strategies",
              desc: "Fixed, sentence, paragraph, and recursive splitting — see how chunk size affects retrieval quality",
            },
            {
              icon: Search,
              title: "Retrieval Methods",
              desc: "Cosine similarity, MMR, and hybrid search — compare how each finds relevant FCA provisions",
            },
            {
              icon: Sparkles,
              title: "Generation Tuning",
              desc: "Temperature, top-p, penalties — control how the model synthesises regulatory answers",
            },
            {
              icon: GitCompare,
              title: "Side-by-Side Comparison",
              desc: "Run the same query with two different configs and compare answers, chunks, and costs",
            },
          ].map((feat) => (
            <div
              key={feat.title}
              className="p-5 rounded-lg border border-border hover:border-emerald-500/50 transition-colors"
            >
              <feat.icon className="h-8 w-8 text-emerald-400 mb-3" />
              <h3 className="font-semibold mb-1.5">{feat.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Data Source */}
      <section className="border-t border-border">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold mb-4">Built on the FCA Handbook</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl">
            The knowledge base is sourced from six key FCA sourcebooks covering the core of
            UK financial regulation.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { code: "PRIN", name: "Principles for Businesses", desc: "The 12 fundamental obligations" },
              { code: "SYSC", name: "Systems & Controls", desc: "Governance and organisational requirements" },
              { code: "COBS", name: "Conduct of Business", desc: "MiFID conduct rules and suitability" },
              { code: "ICOBS", name: "Insurance Conduct", desc: "Insurance distribution rules" },
              { code: "DISP", name: "Dispute Resolution", desc: "Complaints handling and FOS" },
              { code: "FCG", name: "Financial Crime Guide", desc: "AML, sanctions, and fraud prevention" },
            ].map((sb) => (
              <div key={sb.code} className="flex items-start gap-3 p-4 rounded-lg bg-secondary/30">
                <span className="text-xs font-mono font-bold px-2 py-1 rounded bg-emerald-500/20 text-emerald-400 shrink-0">
                  {sb.code}
                </span>
                <div>
                  <div className="text-sm font-medium">{sb.name}</div>
                  <div className="text-xs text-muted-foreground">{sb.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-secondary/20">
        <div className="max-w-5xl mx-auto px-6 py-12 text-center">
          <Settings2 className="h-10 w-10 text-emerald-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Ready to experiment?</h2>
          <p className="text-muted-foreground mb-6">
            No API key needed — the playground works in demo mode with pre-computed results.
          </p>
          <Link
            href="/playground"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white font-medium transition-colors"
          >
            <FlaskConical className="h-4 w-4" />
            Launch Playground
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
