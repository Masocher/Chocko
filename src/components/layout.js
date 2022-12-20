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

                // sign forms --------------------
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
                    position: relative;
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

                .back_btn {
                    margin-top: 15px;
                }

                .mini_logo_box {
                    font-size: 18px;
                    font-weight: bold;
                    letter-spacing: 2px;
                    color: #000;
                    user-select: none;
                    background-color: #ff9000;
                    border-radius: 50%;
                    width: 45px;
                    height: 42px;
                    padding-top: 3px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-bottom: 10px;
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

                // download box --------------------
                .download_box_container {
                    width: 95%;
                    margin: 100px auto 0 auto;
                    position: relative;
                    direction: rtl;
                }

                .right_side_box, .left_side_box {
                    display: flex;
                    align-items: center;
                }

                .download_box {
                    width: 100%;
                    height: fit-content;
                    border-radius: 10px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                }

                .down_box {
                    background-color: #111;
                    width: calc(100% - 60px);
                    height: 100px;
                    border-radius: 3px;
                    margin-top: 25px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0 30px;
                    direction: ltr;
                }

                .download_box_title {
                    font-size: 30px;
                    letter-spacing: .5px;
                }

                .download_btn, .download_btn_2 {
                    width: fit-content;
                    display: flex;
                    font-size: 14px;
                    font-weight: 100;
                    letter-spacing: .5px;
                    padding: 8px 15px;
                    border-radius: 5px;
                    border: 1px solid #ff9000;
                    cursor: pointer;
                    transition: .2s;
                    background-color: #ff9000;
                    color: #000;
                    direction: rtl;
                }
                .download_btn:hover {
                    color: #ff9000;
                    background: none;
                }

                .download_btn_icon {
                    margin-left: 8px;
                    font-size: 15px;
                }

                .softsub {
                    background-color: #ff9000;
                    color: #000;
                    padding: 6px 15px;
                    border-radius: 5px;
                    font-size: 16px;
                }

                .size_box {
                    margin: 0 30px;
                    padding: 0 30px;
                    border-right: 2px solid #222;
                    border-left: 2px solid #222;
                    height: 38px;
                    display: flex;
                    align-items: center;
                }

                .size {
                    background-color: #ff9000;
                    color: #000;
                    width: 100px;
                    text-align: center;
                    border-radius: 5px;
                    font-size: 16px;
                    padding: 6px 0;
                    direction: rtl;
                }
                .size span {
                    margin-left: 4px;
                }

                .file_quality {
                    background-color: #c0c0c0;
                    color: #000;
                    width: 70px;
                    text-align: center;
                    border-radius: 5px;
                    font-size: 16px;
                    padding: 6px 0;
                }

                @media (max-width: 1390px) {
                    .download_box_container {
                        display: none;
                    }
                }

                @media (max-width: 376px) {
                    .download_box_title {
                        margin-bottom: 5px;
                    }
                }
            `}</style>
        </div>
    )
}

export default Layout