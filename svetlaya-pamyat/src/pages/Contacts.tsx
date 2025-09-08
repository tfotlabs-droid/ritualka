export default function ContactsPage() {
  return (
    <div className="py-10">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Контакты</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white border rounded-xl p-6">
          <div className="text-gray-700">Адрес: г. Барнаул, ул. Примерная, 1</div>
          <div className="text-gray-700 mt-2">Телефон: +7 (3852) 00-00-00</div>
          <div className="text-gray-700 mt-2">Время работы: ежедневно 9:00–20:00</div>
          <form className="mt-6 grid gap-3">
            <input className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500" placeholder="Ваше имя"/>
            <input className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500" placeholder="Телефон"/>
            <textarea className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500" rows={4} placeholder="Сообщение"/>
            <button className="px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Отправить</button>
          </form>
        </div>
        <div className="bg-pastelBlue/50 border border-blue-100 rounded-xl p-6">
          <div className="text-gray-600 text-sm">Карта (встраиваемый виджет можно добавить позже)</div>
        </div>
      </div>
    </div>
  )
}
