import {BrowserRouter, Route, Routes} from "react-router-dom"
import HomePage from "./Pages/App/HomePage/HomePage"
import AppIndex from "./Pages/App/Index/AppIndex"
import SplashScreen from "./Pages/SplashScreen/SplashScreen"
import './sass/global.scss'



function App() {

  return (
    <div className="app_container">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<SplashScreen />} />
            <Route path="/eagles" element={<AppIndex />}>
                <Route index element={<HomePage />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
