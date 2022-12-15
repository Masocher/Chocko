// tools
import Link from "next/link"

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons"

const SignIn = () => {
    return (
        <form className="sign_container">
            <div className="back_btn"><Link href="/" style={{textDecoration: "none", color: "#000", fontSize: "16px"}}><div>بازگشت <FontAwesomeIcon icon={faAngleLeft} style={{position: "relative", top: "2px", right: "4px"}} /></div></Link></div>

            <div className="title_box">فرم ورود</div>
            
            <input className="sign_input" type="text" placeholder="ایمیل" />
            <input className="sign_input" type="password" placeholder="رمز عبور" />
            
            <div className="submit_btn">ورود</div>

            <div className="sign_link">عضو نیستی ؟ <Link style={{textDecoration: "none", color: "#ff9000", marginRight: "5px"}} href="/sign-up">عضویت</Link></div>
        </form>
    )
}

export default SignIn