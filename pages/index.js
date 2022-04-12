  import Head from 'next/head'
  import Image from 'next/image'
  import styles from '../styles/Home.module.css'
  import NavBar from '../components/navBar'
  import Hero from '../components/heroSection'
  import Features from '../components/featureSection'
  import About from '../components/about'
  import Footer from '../components/footer'

  export default function Home() {
    return (
      <div>
        <NavBar />    
        <Hero />
        <Features />
        <About />
        <Footer />
      </div>
      

      
      
      
      
    )
  }
