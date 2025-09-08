export default function PricesPage() {
  const data = [
    { name: 'Эконом', price: 25000, includes: 'Базовые услуги' },
    { name: 'Стандарт', price: 45000, includes: 'Расширенный набор' },
    { name: 'Премиум', price: 85000, includes: 'Максимальный комфорт' },
  ]
  return (
    <div className="py-10">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Цены</h1>
      <div className="overflow-x-auto bg-white border rounded-xl">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-softGray">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Пакет</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Стоимость</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Состав</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {data.map(row => (
              <tr key={row.name}>
                <td className="px-4 py-3 text-gray-800">{row.name}</td>
                <td className="px-4 py-3 font-semibold text-blue-700">{row.price.toLocaleString('ru-RU')} ₽</td>
                <td className="px-4 py-3 text-gray-600">{row.includes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-sm text-gray-500 mt-4">Прозрачные условия без скрытых платежей.</p>
    </div>
  )
}
