import { Routes, Route } from 'react-router'
import Landing from './pages/Landing'
import AppShell from './components/AppShell'
import HomeScreen from './pages/app/HomeScreen'
import BookingScreen from './pages/app/BookingScreen'
import DriversScreen from './pages/app/DriversScreen'
import ConfirmScreen from './pages/app/ConfirmScreen'
import TrackingScreen from './pages/app/TrackingScreen'
import PaymentScreen from './pages/app/PaymentScreen'
import ProfileScreen from './pages/app/ProfileScreen'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/app" element={<AppShell />}>
        <Route index element={<HomeScreen />} />
        <Route path="booking" element={<BookingScreen />} />
        <Route path="drivers" element={<DriversScreen />} />
        <Route path="confirm" element={<ConfirmScreen />} />
        <Route path="tracking" element={<TrackingScreen />} />
        <Route path="payment" element={<PaymentScreen />} />
        <Route path="profile" element={<ProfileScreen />} />
      </Route>
    </Routes>
  )
}
