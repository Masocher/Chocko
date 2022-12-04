const Layout = (props) => {
    return (
        <div className="layout_container">
            {props.children}
            
            <style jsx global>{`
                @font-face {
                    font-family: Lalezar;
                    url(../../public/fonts/Lalezar-Regular.ttf)
                }

                body {
                    margin: 0;
                    padding: 0;
                    font-family: Lalezar;
                    background-color: #000;
                    max-height: 100vh;
                }
            `}</style>
        </div>
    )
}

export default Layout