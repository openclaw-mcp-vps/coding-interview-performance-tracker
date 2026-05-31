export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold tracking-widest uppercase">
          For Software Engineers Actively Interviewing
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop Repeating the Same<br />
          <span className="text-[#58a6ff]">Interview Mistakes</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Track every coding interview, uncover hidden failure patterns, and get AI-powered study recommendations tailored to your weak spots — so you finally land the offer.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Tracking — $9/mo
        </a>
        <p className="mt-4 text-xs text-[#484f58]">Cancel anytime. No contracts.</p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📊</div>
            <h3 className="font-semibold text-white mb-1">Pattern Analysis</h3>
            <p className="text-sm text-[#8b949e]">AI identifies exactly which problem types and difficulty levels trip you up most.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🎯</div>
            <h3 className="font-semibold text-white mb-1">Personalized Plans</h3>
            <p className="text-sm text-[#8b949e]">Get a custom study roadmap based on your actual interview history, not generic advice.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📈</div>
            <h3 className="font-semibold text-white mb-1">Progress Metrics</h3>
            <p className="text-sm text-[#8b949e]">Watch your success rate climb with clear before/after performance dashboards.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$9</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Unlimited interview entries</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> AI pattern analysis</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Personalized study recommendations</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Performance dashboards</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Cancel anytime</li>
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How do I log my interviews?</h3>
            <p className="text-sm text-[#8b949e]">After signing up, you manually enter each interview result — problem type, difficulty, outcome, and notes. The AI then analyzes your entries to surface patterns.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How accurate are the AI recommendations?</h3>
            <p className="text-sm text-[#8b949e]">Recommendations improve as you log more interviews. Most users see meaningful pattern insights after 5–10 entries and actionable study plans within the first week.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel my subscription?</h3>
            <p className="text-sm text-[#8b949e]">Yes — cancel anytime from your account settings with no fees or penalties. Your data remains accessible until the end of your billing period.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] py-8 text-center text-xs text-[#484f58]">
        © {new Date().getFullYear()} Interview Tracker. All rights reserved.
      </footer>
    </main>
  )
}
