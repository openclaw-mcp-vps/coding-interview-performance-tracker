import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Interview Tracker — Track Coding Interview Performance Patterns',
  description: 'Analyze your coding interview results, identify failure patterns, and get AI-powered personalized study recommendations to land your next offer.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="462b8240-ea00-4612-9787-a315f6dea406"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
