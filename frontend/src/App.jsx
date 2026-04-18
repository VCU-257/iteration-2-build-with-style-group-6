import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Listing from './pages/Listing.jsx'
import Checkout from './pages/Checkout.jsx'
import Account from './pages/Account.jsx'
import AccountHome from './pages/AccountHome.jsx'
import Wishlist from './pages/Wishlist.jsx'
import OrderConfirmation from './pages/OrderConfirmation.jsx'
import TopNavBar from './components/NavBar/TopNavBar.jsx'
import BottomNavBar from './components/BottomNavBar/BottomNavBar.jsx'
import Signup from './pages/Signup.jsx'

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '') || undefined}>
      <div className="d-flex flex-column min-vh-100">
        <TopNavBar />
        <main className="flex-grow-1 container py-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/listing" element={<Listing />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-confirmation" element={<OrderConfirmation />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/account-home" element={<AccountHome />} />
            <Route path="/account" element={<Account />} />
            <Route path="/wishlist" element={<Wishlist />} />
          </Routes>
        </main>
        <BottomNavBar />
      </div>
    </BrowserRouter>
  )
}
