export default function OnlineOrderPage() {
  return (
    <div className="py-10">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Онлайн-заказ</h1>
      <form className="bg-white border rounded-xl p-6 grid gap-4 max-w-xl">
        <div>
          <label className="block text-sm text-gray-600 mb-1">Ваше имя</label>
          <input className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500" placeholder="Иван Иванов"/>
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Телефон</label>
          <input className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500" placeholder="+7 (___) ___-__-__"/>
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Комментарий</label>
          <textarea className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500" rows={4} placeholder="Опишите ваши пожелания"/>
        </div>
        <button type="submit" className="px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Отправить заявку</button>
      </form>
    </div>
  )
}
