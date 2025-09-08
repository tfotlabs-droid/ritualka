import { useMemo, useState } from 'react'

type PackageKey = 'econom' | 'standard' | 'premium'

const PACKAGE_PRICES: Record<PackageKey, number> = {
  econom: 25000,
  standard: 45000,
  premium: 85000,
}

const OPTIONS = {
  wreath: { label: 'Венок', price: 3000 },
  transport: { label: 'Транспорт', price: 5000 },
  streaming: { label: 'Онлайн‑трансляция', price: 7000 },
}

export default function Calculator() {
  const [selectedPackage, setSelectedPackage] = useState<PackageKey>('standard')
  const [wreath, setWreath] = useState(false)
  const [transport, setTransport] = useState(false)
  const [streaming, setStreaming] = useState(false)

  const total = useMemo(() => {
    let sum = PACKAGE_PRICES[selectedPackage]
    if (wreath) sum += OPTIONS.wreath.price
    if (transport) sum += OPTIONS.transport.price
    if (streaming) sum += OPTIONS.streaming.price
    return sum
  }, [selectedPackage, wreath, transport, streaming])

  return (
    <div className="bg-pastelBlue/50 border border-blue-100 rounded-xl p-6">
      <h2 className="text-xl font-medium text-gray-800">Калькулятор стоимости</h2>
      <div className="mt-4 grid gap-4">
        <div>
          <label className="block text-sm text-gray-600 mb-1">Пакет услуг</label>
          <select
            value={selectedPackage}
            onChange={(e)=>setSelectedPackage(e.target.value as PackageKey)}
            className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="econom">Эконом — {PACKAGE_PRICES.econom.toLocaleString('ru-RU')} ₽</option>
            <option value="standard">Стандарт — {PACKAGE_PRICES.standard.toLocaleString('ru-RU')} ₽</option>
            <option value="premium">Премиум — {PACKAGE_PRICES.premium.toLocaleString('ru-RU')} ₽</option>
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <label className="flex items-center gap-2 bg-white border rounded-lg px-3 py-2">
            <input type="checkbox" className="size-4" checked={wreath} onChange={(e)=>setWreath(e.target.checked)} />
            <span className="text-sm text-gray-700">{OPTIONS.wreath.label} (+{OPTIONS.wreath.price.toLocaleString('ru-RU')} ₽)</span>
          </label>
          <label className="flex items-center gap-2 bg-white border rounded-lg px-3 py-2">
            <input type="checkbox" className="size-4" checked={transport} onChange={(e)=>setTransport(e.target.checked)} />
            <span className="text-sm text-gray-700">{OPTIONS.transport.label} (+{OPTIONS.transport.price.toLocaleString('ru-RU')} ₽)</span>
          </label>
          <label className="flex items-center gap-2 bg-white border rounded-lg px-3 py-2">
            <input type="checkbox" className="size-4" checked={streaming} onChange={(e)=>setStreaming(e.target.checked)} />
            <span className="text-sm text-gray-700">{OPTIONS.streaming.label} (+{OPTIONS.streaming.price.toLocaleString('ru-RU')} ₽)</span>
          </label>
        </div>
        <div className="flex items-center justify-between bg-white border rounded-lg px-4 py-3">
          <div className="text-gray-600">Итого</div>
          <div className="text-2xl font-semibold text-blue-700">{total.toLocaleString('ru-RU')} ₽</div>
        </div>
        <a href="/order" className="inline-flex justify-center items-center px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Оформить онлайн
        </a>
      </div>
    </div>
  )
}
