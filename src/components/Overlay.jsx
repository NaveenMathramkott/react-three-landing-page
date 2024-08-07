import { Suspense, useLayoutEffect, useRef } from "react";
import Glass from "./Glass";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
// import { useControls } from "leva";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Loading } from "./Loading";

const Overlay = () => {
  gsap.registerPlugin(ScrollTrigger);
  const jdOne = useRef();
  const jdTwo = useRef();
  const jdThree = useRef();
  const groupRef = useRef();

  const { scene, camera } = useThree();
  const tl = gsap.timeline();

  useLayoutEffect(() => {
    new ScrollTrigger({});
    tl.to(groupRef.current.position, {
      x: 2,
      y: 0,
      z: 0,
    })
      .to(groupRef.current.rotation, {
        x: 0,
        y: -0.3,
        z: 0,
      })
      .to(camera.position, {
        x: -4.8,
        y: 3.8,
        z: 12,
        scrollTrigger: {
          trigger: ".second-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })
      .to(groupRef.current.position, {
        x: -3,
        y: 1,
        z: 2,
        scrollTrigger: {
          trigger: ".second-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })
      .to(groupRef.current.rotation, {
        x: 0,
        y: Math.PI * 2,
        z: 0,
        scrollTrigger: {
          trigger: ".second-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })
      .to(jdTwo.current.rotation, {
        x: 0,
        y: Math.PI * 2,
        z: 0,
        scrollTrigger: {
          trigger: ".second-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })
      .to(jdThree.current.rotation, {
        x: 0,
        y: Math.PI * 2,
        z: 0,
        scrollTrigger: {
          trigger: ".second-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })

      .to(camera.position, {
        x: 2,
        y: 0,
        z: 10,
        scrollTrigger: {
          trigger: ".third-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })
      .to(groupRef.current.position, {
        x: 2,
        y: 0,
        z: 0,
        scrollTrigger: {
          trigger: ".third-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })
      .to(jdOne.current.rotation, {
        x: 0,
        y: Math.PI * 2,
        z: 0,
        scrollTrigger: {
          trigger: ".third-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })
      .to(jdTwo.current.rotation, {
        x: 0,
        y: 0,
        z: 0,
        scrollTrigger: {
          trigger: ".third-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })
      .to(jdThree.current.rotation, {
        x: 0,
        y: 0,
        z: 0,
        scrollTrigger: {
          trigger: ".third-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      });
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <group ref={groupRef}>
        <Glass ref={jdOne} position={[0, -2, 0]} />
        <Glass ref={jdTwo} position={[-1, -2, -1.3]} rotation={[0, 0, 0.3]} />
        <Glass ref={jdThree} position={[1, -2, -1.3]} rotation={[0, 0, -0.3]} />
      </group>
    </Suspense>
  );
};

export default Overlay;
