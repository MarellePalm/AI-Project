import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginPage from "./LoginPage"
import MainPage from "./MainPage"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage/>}/>
                <Route path="/main" element={<MainPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
