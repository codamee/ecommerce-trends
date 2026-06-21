import { useNavigate } from "react-router"
import { useState } from "react"

const LoginForm = () => {
    const navigate = useNavigate()
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [errorMsg, setErrorMsg] = useState('')
    const [errorMsgToggle, setErrorMsgToggle] = useState(false)

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const onChangeUsername = (e) => {
        setUsername(e.target.value)
    }
    const onSubmitSuccess = () => {
        navigate('/', { replace: true })
    }
    const onSubmitFail = (errorMsg) => {
        setErrorMsgToggle(true)
        setErrorMsg(errorMsg)
    }
    const submitForm = async (e) => {
        e.preventDefault()
        const userDetails = { username, password }
        const url = 'https://apis.ccbp.in/login'
        const options = {
            method: "POST",
            body: JSON.stringify(userDetails)
        }
        const response = await fetch(url, options)
        const data = await response.json()
        if (response.ok == true) {
            onSubmitSuccess()
        }
        else {
            onSubmitFail(data.error_msg)
        }
    }

    return (
        <div className="flex h-screen p-10 bg-green-50 justify-evenly items-center">
            <div className='w-1/2'>
                <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png" alt="loginImg" />
            </div>
            <form className="p-8 w-1/4 bg-white shadow-xl rounded-xl flex flex-col gap-3 items-center justify-center">
                <div className='font-bold text-3xl w-1/2'>
                    <p className='text-3xl'>&#8355;rend&#8368;</p>
                </div>
                <div className="flex flex-col gap-3 w-full">
                    <label className="text-xs font-bold" htmlFor="username">USERNAME</label>
                    <input className=" px-4 py-2 border rounded" value={username} onChange={onChangeUsername} type="text" name="username" id="username" />
                </div>
                <div className="flex flex-col gap-3 w-full">
                    <label className="text-xs font-bold" htmlFor="password">PASSWORD</label>
                    <input className="px-4 py-2 border rounded" value={password} onChange={onChangePassword} type="password" name="password" id="password" />
                </div>
                <button onClick={submitForm} className="w-full mt-2 cursor-pointer px-4 py-2 rounded text-white font-semibold bg-green-600 ">Log In</button>
                {errorMsg && <p className="text-sm text-red-400">{errorMsg}</p>}
            </form>
        </div>
    )
}

export default LoginForm