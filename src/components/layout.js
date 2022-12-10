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

                body::-webkit-scrollbar {
                    width: 7px;
                }

                body::-webkit-scrollbar-track {
                    background: #000;
                }
                
                body::-webkit-scrollbar-thumb {
                    background: #111;
                }
                
                body::-webkit-scrollbar-thumb:hover {
                    background: #333;
                }

                // sign forms
                .sign_container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    font-family: Lalezar;
                    direction: rtl;
                    height: 95vh;
                }

                .title_box {
                    color: #ff9000;
                    font-size: 40px;
                    margin-bottom: 15px;
                }

                .sign_input {
                    background-color: #121212;
                    padding: 8px 20px;
                    border: 1px solid #2c2c2c;
                    border-radius: 5px;
                    margin-bottom: 15px;
                    font-family: Lalezar;
                    font-size: 16px;
                    font-weight: 0;
                    letter-spacing: .5px;
                    color: #fff;
                    width: 250px;
                    outline: 0;
                }
                .sign_input::placeholder {
                    color: #757575;
                    font-size: 14px;
                }
                .sign_input:focus {
                    border-color: #5c5c5c;
                }

                .submit_btn {
                    background-color: #ff9000;
                    font-weight: 0;
                    color: #000;
                    padding: 2px 0;
                    border-radius: 5px;
                    border: 1px solid #ff9000;
                    cursor: pointer;
                    transition: .2s;
                    margin-top: 10px;
                    width: 75px;
                    text-align: center;
                }
                .submit_btn:hover {
                    background: none;
                    color: #ff9000;
                }

                .sign_link {
                    color: #757575;
                    font-size: 14px;
                    font-weight: 100;
                    margin-top: 20px;
                }

                @media (max-width: 376px) {
                    .sign_input {
                        width: 200px;
                        font-size: 14px;
                    }

                    .title_box {
                        font-size: 35px;
                        margin-bottom: 20px;
                    }

                    .submit_btn {
                        font-size: 14px;
                        padding: 4px 0;
                    }
                }
            `}</style>
        </div>
    )
}

export default Layout