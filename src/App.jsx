import { AllRoutes } from "./Componants/AllRoutes"
import { useLocation } from "react-router-dom"
import { Footer } from "./Footer/Footer"
import { Header } from "./NavbarHeader/Header"
import "./App.css"

function App() {
  let location = useLocation()

  const isLoginPage = location.pathname === "/login"
  const isSignUpPage = location.pathname === "/signup"
  const isCart = location.pathname === "/cart"
  const isPayment = location.pathname === "/payment"


  const renderHeader = !isLoginPage && !isSignUpPage && !isPayment
  const renderFooter = !isLoginPage && !isSignUpPage && !isPayment

  return (
    <>
      {renderHeader && <Header />}
      <AllRoutes />
      {renderFooter && <Footer />}
    </>
  )
}

export default App
