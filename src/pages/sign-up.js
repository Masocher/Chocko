// tools
import Link from "next/link"
import { useState } from "react";

// react-toastify
import { toast } from "react-toastify";

// react-redux
import { useDispatch } from "react-redux";
import { signUp } from "../redux/actions";

const SignUp = () => {

    const passwordRegex = /^(?=.{8,20})/
    const usernameRegex = /^(?=.{4,20}$)(?![_.])[a-zA-Z0-9@/./+/-/_]/

    let [password, setPassword] = useState(null)
    let [username, setUsername] = useState(null)

    const submitForm = (username, password) => {
        if (username.length < 1) {
            toast('نام کاربری الزامی است', { hideProgressBar: true, autoClose: 2000, type: 'error' })
        } else if (usernameRegex.test(username) === false) {
            toast('نام کاربری قابل قبول نمی باشد', { hideProgressBar: true, autoClose: 2000, type: 'error' })
        } else if (password.length < 1) {
            toast('رمز عبور الزامی است', { hideProgressBar: true, autoClose: 2000, type: 'error' })
        } else if (passwordRegex.test(password) === false) {
            toast('رمز عبور قابل قبول نمی باشد', { hideProgressBar: true, autoClose: 2000, type: 'error' })
        } else {
            dispatch(signUp(username, password))
            toast('اطلاعات ارسال شد', { hideProgressBar: true, autoClose: 2000, type: 'success' })
        }
    }

    const dispatch = useDispatch()

    return (
        <div className="sign_container">
            <Link href="/" style={{ textDecoration: "none" }}><div className="mini_logo_box">C|K</div></Link>

            <div className="title_box">فرم عضویت</div>

            <input onChange={e => setUsername(e.target.value)} className="sign_input" type="text" placeholder="نام کاربری" />
            <input onChange={e => setPassword(e.target.value)} className="sign_input" type="password" placeholder="رمز عبور" />
            <input className="sign_input" type="email" placeholder="ایمیل ( اختیاری )" />

            <div className="submit_btn" onClick={() => {
                submitForm(username, password)
            }}>ثبت نام</div>

            <div className="sign_link">قبلا عضو بودی ؟<Link style={{ textDecoration: "none", color: "#ff9000", marginRight: "5px" }} href="/sign-in">ورود</Link></div>
        </div>
    )
}

export default SignUp