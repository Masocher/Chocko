// tools
import Link from "next/link"
import { useState } from "react"

const SignIn = () => {

    let [user_email, set_user_email] = useState('')
    let [user_password, set_user_password] = useState('')

    let [email_status, set_email_status] = useState(false)
    let [password_status, set_password_status] = useState(false)

    return (
        <div className="sign_container">
            <Link href="/" style={{ textDecoration: "none" }}><div className="mini_logo_box">-C-</div></Link>

            <div className="title_box">فرم ورود</div>

            <form className="sign_form" onSubmit={e => e.preventDefault()}>
                <input className="sign_input" type="email" placeholder="نام کاربری یا ایمیل" onChange={e => set_user_email(e.target.value)} />
                <input className="sign_input" type="password" placeholder="رمز عبور" onChange={e => set_user_password(e.target.value)} />
                <button className="submit_btn">ورود</button>
            </form>

            <div className="sign_link">عضو نیستی ؟ <Link style={{ textDecoration: "none", color: "#ff9000", marginRight: "5px" }} href="/sign-up">عضویت</Link></div>
        </div >
    )
}

export default SignIn