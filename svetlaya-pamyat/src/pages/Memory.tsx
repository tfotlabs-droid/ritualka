import QRCode from 'qrcode'
import { useEffect, useRef } from 'react'

export default function MemoryPage() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  useEffect(() => {
    const url = typeof window !== 'undefined' ? window.location.href : 'https://example.com'
    if (canvasRef.current) {
      QRCode.toCanvas(canvasRef.current, url, { width: 128 })
    }
  }, [])
  return (
    <div className="py-10">
      <div className="bg-white border rounded-xl p-6 grid md:grid-cols-3 gap-6 items-start">
        <div className="md:col-span-1">
          <div className="aspect-square bg-softGray rounded-xl" />
          <div className="mt-3 text-sm text-gray-500">Фото умершего</div>
          <canvas ref={canvasRef} className="mt-4" />
          <div className="text-sm text-gray-500">QR-код для перехода</div>
        </div>
        <div className="md:col-span-2">
          <h1 className="text-2xl font-semibold text-gray-800">Иванов Иван Иванович</h1>
          <div className="text-gray-500">1950 — 2024</div>
          <p className="mt-4 text-gray-700">Краткая биография. Здесь можно разместить воспоминания, важные этапы жизни и достижения.</p>
          <div className="mt-6 grid grid-cols-3 gap-3">
            <div className="aspect-video bg-softGray rounded-lg" />
            <div className="aspect-video bg-softGray rounded-lg" />
            <div className="aspect-video bg-softGray rounded-lg" />
          </div>
          <div className="mt-6">
            <label className="block text-sm text-gray-600 mb-1">Оставить слова памяти</label>
            <textarea className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500" rows={4} placeholder="Ваши слова"/>
            <button className="mt-3 px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Отправить</button>
          </div>
        </div>
      </div>
    </div>
  )
}
