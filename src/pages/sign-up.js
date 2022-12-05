// tools
import Link from "next/link"

const SignUp = () => {
    return (
        <form className="sign_container">
            <div className="title_box">فرم عضویت</div>

            <input className="sign_input" type="text" placeholder="نام کاربری" />
            <input className="sign_input" type="text" placeholder="ایمیل" />
            <input className="sign_input" type="password" placeholder="رمز عبور" />
            
            <div className="submit_btn">ثبت نام</div>

            <div className="sign_link">قبلا عضو بودی ؟<Link style={{textDecoration: "none", color: "#ff9000", marginRight: "5px"}} href="/sign-in">ورود</Link></div>
        </form>
    )
}

export default SignUp