// tools
import Link from "next/link"
import Router from "next/router"
import { useState } from "react"

// react-redux
import { useDispatch } from "react-redux";
import { signIn } from "../redux/actions";
import { startLoading, stopLoading } from "../redux/actions";

// react-toastify
import { toast } from "react-toastify";

// components
import Loading from '../components/loading';

const SignIn = () => {

    let [username, setUsername] = useState('')
    let [password, setPassword] = useState('')

    const passwordRegex = /^(?=.{8,20})/
    const usernameRegex = /^(?=.{4,20}$)(?![_.])[a-zA-Z0-9@/./+/-/_]/

    let [usernameInputStatus, setUsernameInputStatus] = useState(false)
    let [passwordInputStatus, setPasswordInputStatus] = useState(false)

    const submitForm = (username, password) => {
        if (username.length < 1) {
            toast('نام کاربری الزامی است', { hideProgressBar: true, autoClose: 2000, type: 'warning' })
            setUsernameInputStatus(true)
        } else if (usernameRegex.test(username) === false) {
            toast('نام کاربری قابل قبول نمی باشد', { hideProgressBar: true, autoClose: 2000, type: 'error' })
            setUsernameInputStatus(true)
        } else if (password.length < 1) {
            toast('رمز عبور الزامی است', { hideProgressBar: true, autoClose: 2000, type: 'warning' })
            setPasswordInputStatus(true)
        } else if (passwordRegex.test(password) === false) {
            toast('رمز عبور قابل قبول نمی باشد', { hideProgressBar: true, autoClose: 2000, type: 'error' })
            setPasswordInputStatus(true)
        } else {
            dispatch(startLoading())
            dispatch(signIn(username, password))
            setTimeout(() => {
                Router.push('/')
                dispatch(stopLoading())
            }, 4000)
            toast('با موفقیت وارد شدید', { hideProgressBar: true, autoClose: 2000, type: 'success' })
        }
    }

    const dispatch = useDispatch()

    return (
        <div className="sign_container">
            <Link href="/" style={{ textDecoration: "none" }}><div className="mini_logo_box">-C-</div></Link>

            <div className="title_box">فرم ورود</div>

            <form className="sign_form" onSubmit={e => e.preventDefault()}>
                <input className={`sign_input ${usernameInputStatus ? 'error' : ''}`} type="text" placeholder="نام کاربری" onChange={e => setUsername(e.target.value)} />
                <input className={`sign_input ${passwordInputStatus ? 'error' : ''}`} type="password" placeholder="رمز عبور" onChange={e => setPassword(e.target.value)} />
                <button className="submit_btn" onClick={() => {
                    submitForm(username, password)
                }}>ورود</button>
            </form>

            <div className="sign_link">عضو نیستی ؟ <Link style={{ textDecoration: "none", color: "#ff9000", marginRight: "5px" }} href="/sign-up">عضویت</Link></div>

            <Loading />
        </div >
    )
}

export default SignIn