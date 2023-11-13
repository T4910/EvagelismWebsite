import Image from 'next/image'
import Hero from './component/heroBg'
import Statements from './component/statement'
import  Executives from './component/executives'
import  Questions from './component/questions'
import  Testimonies from './component/testimonies'
import Welcome from './component/welcome'
import Community from './component/community'

export default function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <Statements />
      <Executives />
      <Testimonies />
      <Questions />
      <Community />
       {/* You're always welcome then a slider of our active members */}
      {/* Join evengelism form is the footer */}
    </>
  )
}
