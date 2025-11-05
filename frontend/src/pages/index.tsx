import Head from 'next/head'
import VideoGenerator from '../components/VideoGenerator'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 flex flex-col">
      <Head>
        <title>Varnika 🎬 — AI Video Generator</title>
      </Head>

      {/* Header */}
      <header className="py-6 text-center border-b border-gray-800 bg-[#0f0f0f] shadow-md">
        <h1 className="text-4xl font-extrabold text-white tracking-wide">
          <span className="text-indigo-500">Varnika</span> 🎬
        </h1>
        <p className="text-gray-400 mt-2 text-sm">AI Video & Image Generator — powered by Stable Diffusion</p>
      </header>

      {/* Main Layout */}
      <main className="flex flex-col md:flex-row flex-grow">
        {/* Left Panel */}
        <section className="md:w-1/3 bg-[#111] border-r border-gray-800 p-6">
          <h2 className="text-lg font-semibold mb-4 text-indigo-400 uppercase tracking-wide">Prompt Control</h2>
          <VideoGenerator />
        </section>

        {/* Right Panel */}
        <section className="flex-1 p-6 bg-gradient-to-br from-[#0b0b0b] to-[#1a1a1a] flex items-center justify-center">
          <div className="w-full h-[80vh] max-w-3xl border border-gray-800 rounded-2xl flex items-center justify-center bg-[#0f0f0f] shadow-inner">
            <p className="text-gray-600 text-center text-sm">
              Generated image or video will appear here ✨
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-3 text-center text-gray-600 text-xs border-t border-gray-800 bg-[#0f0f0f]">
        © {new Date().getFullYear()} Varnika AI — Designed by Renjith Kallinal
      </footer>
    </div>
  )
}
