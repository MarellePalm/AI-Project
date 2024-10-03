import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import LoginPage from "./LoginPage"
import MainPage from "./MainPage"
import { ReactNode } from "react"
import { auth } from "./FirebaseConfig"

function Protected(props: { children: ReactNode }) {
    const user = auth.currentUser
    console.log("protected")
    const isValid = user != null
    console.log(isValid ? `user is valid email: $` : "user is nor valid");
    
    
    return !isValid ? <Navigate to="/"/> : props.children
}

function App() {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/main" element={
                        <Protected>
                            <MainPage />
                        </Protected>
                    } />
                </Routes>
        </BrowserRouter>
    )
}

export default App
