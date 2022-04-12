        import Image from "next/image";
        import image from "../public/hero.png"

        function About(){
            return(
                <section className="about" id="About">

                    <div className="about-image-div">
                        <Image src={image} alt="logo" className="aboutImg" width={1200} height={1000} />
                    </div>

                    <div className="about-text">
                        <h1 className="font-semibold text-[60px] mb-2 text-[#250F55] font-Montserrat">About Us</h1>
                        <br/>
                        <p className="">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
                    </div>

                </section>

            )
        }

        export default About;