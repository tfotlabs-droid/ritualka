import Calculator from '../shared/Calculator'

export default function HomePage() {
  return (
    <div className="py-10">
      <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">Светлая память с заботой и честностью</h1>
            <p className="mt-4 text-gray-600">Современное ритуальное бюро в Барнауле. Прозрачные цены, внимательное отношение, онлайн‑сервисы.</p>
            <a href="#calculator" className="inline-block mt-6 px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Рассчитать стоимость</a>
          </div>
          <div id="calculator">
            <Calculator />
          </div>
        </div>
      </section>
    </div>
  )
}
