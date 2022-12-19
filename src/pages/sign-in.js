// tools
import Link from "next/link"

const SignIn = () => {
    return (
        <form className="sign_container">
            <Link href="/" style={{ textDecoration: "none" }}><div className="mini_logo_box">-C-</div></Link>

            <div className="title_box">فرم ورود</div>

            <input className="sign_input" type="text" placeholder="ایمیل" />
            <input className="sign_input" type="password" placeholder="رمز عبور" />

            <div className="submit_btn">ورود</div>

            <div className="sign_link">عضو نیستی ؟ <Link style={{ textDecoration: "none", color: "#ff9000", marginRight: "5px" }} href="/sign-up">عضویت</Link></div>
        </form>
    )
}

export default SignIn