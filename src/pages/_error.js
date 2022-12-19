// tools
import Link from "next/link"

const Error = () => {
    return (
        <div style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#ff9000",
            flexDirection: "column"
        }}>
            <div style={{ fontWeight: "600", fontSize: "200px", letterSpacing: "5px" }}>۵۰۰</div>
            <div style={{ backgroundColor: "#ff9000", padding: "8px 15px", margin: "20px 0 0 0", borderRadius: "5px" }}><Link style={{ textDecoration: "none", color: "#000" }} href="/"><div>بازگشت به سایت</div></Link></div>
        </div>
    )
}

export default Error