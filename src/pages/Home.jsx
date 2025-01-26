import { About } from "../components/About"
import { Header } from "../components/Header"
import { Principal } from "../components/Principal"
import { Skills } from "../components/Skills"

function Home() {

  return (
    <>
      <Header/>
      <Principal/>
      <div style={{width: '100%', height: '9.8125rem', background:"#FF003D"}}/>
      <About/>
      <Skills/>
    </>
  )
}

export default Home
