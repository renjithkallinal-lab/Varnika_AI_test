import Head from 'next/head'
import VideoGenerator from '../components/VideoGenerator'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-gray-100 flex flex-col">
      <Head>
        <title>Varnika — AI Video Generator</title>
      </Head>

      {/* Header */}
      <header className="py-6 border-b border-gray-800 text-center">
        <h1 className="text-4xl font-extrabold tracking-wide">
          <span className="text-indigo-500">Varnika</span> 🎬 — AI Video Generator
        </h1>
        <p className="text-gray-400 mt-2 text-sm">Create stunning AI-generated visuals from text prompts</p>
      </header>

      {/* Main Layout */}
      <main className="flex flex-col md:flex-row flex-grow">
        {/* Left Panel - Controls */}
        <div className="md:w-1/3 p-6 border-r border-gray-800 bg-[#111]">
          <h2 className="text-lg font-semibold mb-4 text-indigo-400">Prompt Input</h2>
          <VideoGenerator />
        </div>

        {/* Right Panel - Output */}
        <div className="flex-1 p-6 flex items-center justify-center bg-gradient-to-br from-[#111] to-[#1a1a1a]">
          <div className="w-full h-[80vh] max-w-3xl border border-gray-800 rounded-2xl flex items-center justify-center bg-black text-gray-500">
            <p className="text-center text-gray-600">Your generated image/video will appear here ✨</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-3 text-center text-gray-600 text-xs border-t border-gray-800">
        © {new Date().getFullYear()} Varnika AI — Powered by Stable Diffusion
      </footer>
    </div>
  )
}
