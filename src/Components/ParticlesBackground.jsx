import Particles from "react-tsparticles";
import ParticlesConfig from "./Config/ParticlesConfig";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const ParticlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  return <Particles init={ParticlesInit} options={ParticlesConfig}></Particles>;
};

export default ParticlesBackground;
