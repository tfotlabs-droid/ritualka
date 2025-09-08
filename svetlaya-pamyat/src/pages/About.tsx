export default function AboutPage() {
  const team = [
    { name: 'Анна', role: 'Ритуальный агент' },
    { name: 'Сергей', role: 'Координатор' },
    { name: 'Мария', role: 'Поддержка клиентов' },
  ]
  return (
    <div className="py-10">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">О нас</h1>
      <p className="text-gray-600 max-w-2xl">Мы заботимся о вас в трудный момент. Наша миссия — организовать прощание светло, честно и бережно.</p>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {team.map(t => (
          <div key={t.name} className="bg-white border rounded-xl p-6 text-center">
            <div className="mx-auto h-16 w-16 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-lg font-semibold">{t.name[0]}</div>
            <div className="mt-3 font-medium text-gray-800">{t.name}</div>
            <div className="text-sm text-gray-500">{t.role}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
