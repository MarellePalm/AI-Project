import Dollar from "./assets/Dollar sign.png"

function LoginPage() {
    return (
        <div className="p-16">
            <div className="flex flex-col items-center gap-4">
                <img src={Dollar} className="size-16" />
                <h1 className="text-onContainerBlue text-4xl font-bold">SplitWise</h1>
            </div>
            <div className="gap-4 flex flex-col w-[325px] mt-12">
                <input type="email" placeholder="Email" className="p-3.5 text-md w-full rounded-md bg-[#F1F4FF] border-2 border-solid border-onContainerBlue"/>
                <input type="password" placeholder="Password" className="p-3.5 text-md w-full rounded-md bg-[#F1F4FF] focus:border-2 border-solid border-onContainerBlue"/>
            </div>
            <input type="button" value="Sign in" className="bg-onContainerBlue w-full py-3.5 text-xl text-white rounded-md mt-12" />
        </div>
    )
}

export default LoginPage
