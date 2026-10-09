import { Route, Routes } from "react-router-dom"
import AnyQuestion from "./components/anyQuestion/anyQuestion"
import Footer from "./components/footer/footer"
import Header from "./components/header/header"
import { router } from "./router/routes"

function App() {

  return (
    <>
    <div>
      <Header />
      <main>
        <Routes>
          {router.map((rout, r) => (
            <Route key={r} path={rout.path} element={rout.element} />
          ))}
        </Routes>
      </main>
      <AnyQuestion />
      <Footer />
    </div>
    </>
  )
}

export default App
