/**
 * @copyright 2025 kianpamungkas
 * @license Apache-2.0
 */

/**
 * Components
*/
import About from "./components/About"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Skill from "./components/Skill"

const App = () => {
  return (
      <>
         <Header />
         <main>
            <Hero />
            <About />
            <Skill />
         </main>
      </>
  )
}

export default App
