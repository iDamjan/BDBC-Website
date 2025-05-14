import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import { Environment, OrbitControls } from "@react-three/drei";
import Experience from "./components/experience/index";
import Navbar from "./components/Navbar";
import About from "./components/about/About";
import Events from "./components/events/Events";
import Gallery from "./components/gallery/Gallery";
import ContactModal from "./components/contact/ContactModal";

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => {
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  return (
    <div className="app-container">
      <Navbar onContactClick={openContactModal} />
      <div className="experience-container">
        <Canvas className="experience">
          <color attach="background" args={["#191919"]} />
          <directionalLight
            position={[-5, -10, 0]}
            color={"#f9b716"}
            intensity={1.5}
          />
          <directionalLight
            position={[5, 15, 2]}
            color={"#e0e0e0"}
            intensity={3}
          />
          <directionalLight
            position={[-4, 10, 0]}
            color={"#e0e0e0"}
            intensity={1.5}
          />
          <ambientLight color={"white"} intensity={4} />
          <Environment preset="night" environmentIntensity={0.35} />
          {/* <OrbitControls /> */}
          <Experience />
        </Canvas>
      </div>
      <About />
      <Events onContactClick={openContactModal} />
      <Gallery />
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </div>
  );
}

export default App;
