        import Image from "next/image";
        import image from "../public/hero.png"

        function Hero(){
            return(
                <section className="hero">
                    <div className="hero-text mt-8">
                        <h1>Cyber Watch</h1>
                        <br/>
                        <p>Our vision is to make your Social Media activity safer!</p>

                        <br/>
                        <br/>

                        <a href="/signup" className="signup-btn">SignUp</a>

                    </div>

                    <div className="hero-image-div mt-8">
                        <Image src={image} alt="Hero logo"  />
                    </div>

                </section>
            )
        }

        export default Hero;