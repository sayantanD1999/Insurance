import styles from '@/styles/Home.module.css'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Contact from '@/components/Contact'
import Card from '@/components/Card'
import About from '@/components/About'
import Modal from '@/components/Modal'
import Features from '@/components/Features'




export default function Home() {
  return (
    <>
      <Nav/>
      <Hero/>
      <Card/>
      <About/>
      <Features/>
      <Contact/>
     

    </>
  )
}
