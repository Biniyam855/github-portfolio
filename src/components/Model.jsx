import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { gsap } from "gsap";

export default function Model(props) {
  const group = useRef();
  const { scene } = useGLTF("/models/coder.glb"); // path to your .glb

  useEffect(() => {
    gsap.to(group.current.rotation, {
      y: "+=6.283", // 360° rotation
      duration: 20,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  return <primitive ref={group} object={scene} {...props} />;
}