import { useGLTF, Resize, Html } from "@react-three/drei";
import Skull from "./skull.jsx";
import Yard from "./yard.jsx";
import "./index.css";
const Experience = () => {
  return (
    <>
      <Yard />
      <h1>test</h1>
      <Resize height scale={2.7}>
        <Skull />

        <Html as="div" center>
          <div className="container-logo">
            <img src="./logo.png" alt="BDBC Logo" />
          </div>
        </Html>
      </Resize>
      <fogExp2 attach="fog" color="black" density={0.05} />
    </>
  );
};

export default Experience;
