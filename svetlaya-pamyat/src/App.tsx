import { Route, Routes, NavLink } from 'react-router-dom'
import './App.css'
import HomePage from './pages/Home'
import ServicesPage from './pages/Services'
import PricesPage from './pages/Prices'
import OnlineOrderPage from './pages/OnlineOrder'
import AboutPage from './pages/About'
import ContactsPage from './pages/Contacts'
import MemoryPage from './pages/Memory'

function Header() {
  return (
    <header className="bg-white/90 backdrop-blur border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">СП</div>
          <div>
            <div className="text-lg font-semibold text-gray-800">Светлая Память</div>
            <div className="text-xs text-gray-500">Барнаул</div>
          </div>
        </NavLink>
        <nav className="flex gap-4 text-sm">
          <NavLink to="/services" className={({isActive})=>`px-2 py-1 rounded ${isActive? 'text-blue-700 bg-blue-50':'text-gray-700 hover:text-blue-700'}`}>Услуги</NavLink>
          <NavLink to="/prices" className={({isActive})=>`px-2 py-1 rounded ${isActive? 'text-blue-700 bg-blue-50':'text-gray-700 hover:text-blue-700'}`}>Цены</NavLink>
          <NavLink to="/order" className={({isActive})=>`px-2 py-1 rounded ${isActive? 'text-blue-700 bg-blue-50':'text-gray-700 hover:text-blue-700'}`}>Онлайн-заказ</NavLink>
          <NavLink to="/about" className={({isActive})=>`px-2 py-1 rounded ${isActive? 'text-blue-700 bg-blue-50':'text-gray-700 hover:text-blue-700'}`}>О нас</NavLink>
          <NavLink to="/contacts" className={({isActive})=>`px-2 py-1 rounded ${isActive? 'text-blue-700 bg-blue-50':'text-gray-700 hover:text-blue-700'}`}>Контакты</NavLink>
          <NavLink to="/memory" className={({isActive})=>`px-2 py-1 rounded ${isActive? 'text-blue-700 bg-blue-50':'text-gray-700 hover:text-blue-700'}`}>Страница памяти</NavLink>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-gray-500">
        © {new Date().getFullYear()} Светлая Память, Барнаул. Мы заботимся о вас в трудный момент.
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-full bg-softGray">
      <Header />
      <main className="max-w-6xl mx-auto px-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/prices" element={<PricesPage />} />
          <Route path="/order" element={<OnlineOrderPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/memory" element={<MemoryPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
