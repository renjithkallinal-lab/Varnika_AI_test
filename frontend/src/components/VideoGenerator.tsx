import { useState } from 'react'
import axios from 'axios'

export default function VideoGenerator() {
  const [prompt, setPrompt] = useState('')
  const [style, setStyle] = useState('cinematic')
  const [duration, setDuration] = useState(3)
  const [loading, setLoading] = useState(false)
  const [videoUrl, setVideoUrl] = useState('')

  const generate = async () => {
    setLoading(true)
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_COLAB_API_URL}/generate`, { prompt, style, duration })
      setVideoUrl(res.data.video_url)
    } catch (e) {
      alert('Generation failed: ' + (e as any).message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <label className="block mb-2">Prompt</label>
      <textarea value={prompt} onChange={e => setPrompt(e.target.value)} className="w-full h-28 p-3 bg-gray-900 border border-gray-700 rounded" />

      <div className="flex gap-4 mt-4">
        <div>
          <label>Style</label>
          <select value={style} onChange={e => setStyle(e.target.value)} className="ml-2 bg-gray-900 border border-gray-700 rounded p-1">
            <option value="cinematic">Cinematic</option>
            <option value="realistic">Realistic</option>
            <option value="anime">Anime</option>
            <option value="cartoon">Cartoon</option>
          </select>
        </div>
        <div>
          <label>Duration (s)</label>
          <input type="number" value={duration} onChange={e => setDuration(Number(e.target.value))} min={1} max={8} className="ml-2 w-20 bg-gray-900 border border-gray-700 rounded p-1" />
        </div>
      </div>

      <button onClick={generate} disabled={loading} className="mt-4 bg-indigo-600 px-4 py-2 rounded">
        {loading ? 'Generating...' : 'Generate Video'}
      </button>

      {videoUrl && (
        <div className="mt-6">
          <video src={videoUrl} controls autoPlay loop className="w-full rounded" />
          <a href={videoUrl} className="block mt-2 text-sm text-indigo-300">Download</a>
        </div>
      )}
    </div>
  )
}
