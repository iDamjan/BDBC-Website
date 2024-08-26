import { Canvas } from "@react-three/fiber";
import "./App.css";
import { Environment, OrbitControls } from "@react-three/drei";
import Experience from "./components/experience/index";

function App() {
  return (
    <Canvas className="experience">
      <color attach="background" args={["#191919"]} />
      <directionalLight
        position={[-5, -10, 0]}
        color={"#f9b716"}
        intensity={1.5}
      />
      <directionalLight position={[5, 15, 2]} color={"#e0e0e0"} intensity={3} />
      <directionalLight
        position={[-4, 10, 0]}
        color={"#e0e0e0"}
        intensity={1.5}
      />
      <ambientLight color={"white"} intensity={4} />
      <OrbitControls />
      <Experience />
    </Canvas>
  );
}

export default App;
