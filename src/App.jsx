import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <div className="text-3xl text-amber-300">App</div>
  )
}

export default App