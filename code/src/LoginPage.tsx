import { useNavigate } from "react-router-dom"
import Dollar from "./assets/Dollar sign.png"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./FirebaseConfig";
import { useState } from "react";

function LoginPage() {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [error, setError] = useState<string | null>(null)
    const navigate = useNavigate()
    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
            navigate("/main")
        } catch (e) {
            setError("nutune seis")
            console.log(e);
        }
    }

    return (
        <div className="p-16">
            <div className="flex flex-col items-center gap-4">
                <img src={Dollar} className="size-16" />
                <h1 className="text-onContainerBlue text-4xl font-bold">SplitWise</h1>
            </div>
            <div className="gap-4 flex flex-col w-[325px] mt-12">
                {error && <p>{error}</p>}
                <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email" className="p-3.5 text-md w-full rounded-md bg-[#F1F4FF] border-2 border-solid border-onContainerBlue" />
                <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password" className="p-3.5 text-md w-full rounded-md bg-[#F1F4FF] focus:border-2 border-solid border-onContainerBlue" />
            </div>
            <button onClick={handleLogin} className="bg-onContainerBlue w-full py-3.5 text-xl text-white rounded-md mt-12">Sign in</button>
        </div>
    )
}

export default LoginPage
