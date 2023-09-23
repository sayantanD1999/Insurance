import styles from '@/styles/Home.module.css'
import NavBar from '@/components/NavBar'
import Hero from '@/components/Hero'
import Contact from '@/components/Contact'
import GridCard from '@/components/Card'
import About from '@/components/About'
import Modal from '@/components/Modal'
import Features from '@/components/Features'
import Footer from '@/components/Footer'




export default function Home() {
  return (
    <>
      <NavBar/>
      <Hero/>
      <GridCard/>
      <About/>
      <Features/>
      <Contact/>
     <Footer/>

    </>
  )
}
