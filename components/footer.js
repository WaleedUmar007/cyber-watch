        function Footer(){
            return(
                <footer className="bg-[#250F55] pt-[40px] w-full h-[250px] static sm:w-full">
                    <div className="flex align-middle justify-center flex-col text-center font-normal text-white text-[30px] font-Montserrat">
                        <p>Connect with us! </p>
                        <div className="footer-icons">
                            <a href="#0" ><i className="fab fa-facebook-f"></i></a>
                            &nbsp;&nbsp;&nbsp;
                            <a href="#0" ><i className="fab fa-twitter"></i></a>
                            &nbsp;&nbsp;&nbsp;
                            <a href="#0" ><i className="fab fa-instagram"></i></a>
                        </div>
                        <br />
                        <p className="footer-copyright">&copy; 2022, Cyber Watch. All rights reserved </p>
                    </div>
                </footer>

            )
        }

export default Footer;