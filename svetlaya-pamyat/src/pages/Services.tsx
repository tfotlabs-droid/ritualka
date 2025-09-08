export default function ServicesPage() {
  const packages = [
    { key: 'Эконом', price: 25000, desc: 'Базовый набор услуг' },
    { key: 'Стандарт', price: 45000, desc: 'Оптимальный выбор' },
    { key: 'Премиум', price: 85000, desc: 'Расширенный пакет' },
  ]
  const extras = [
    { title: 'Транспорт', desc: 'Катафалк и сопровождение' },
    { title: 'QR‑мемориалы', desc: 'Переход на страницу памяти' },
    { title: 'Онлайн‑трансляция', desc: 'Дистанционное участие' },
  ]
  return (
    <div className="py-10">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Услуги</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {packages.map(p => (
          <div key={p.key} className="bg-white border rounded-xl p-6 shadow-sm">
            <div className="text-lg font-medium text-gray-800">{p.key}</div>
            <div className="text-2xl font-semibold text-blue-700 mt-2">{p.price.toLocaleString('ru-RU')} ₽</div>
            <p className="text-gray-600 mt-2">{p.desc}</p>
          </div>
        ))}
      </div>
      <h2 className="text-xl font-medium text-gray-800 mt-10 mb-4">Дополнительные услуги</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {extras.map(e => (
          <div key={e.title} className="bg-pastelBlue/40 border border-blue-100 rounded-xl p-4">
            <div className="font-medium text-gray-800">{e.title}</div>
            <p className="text-gray-600 text-sm">{e.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
