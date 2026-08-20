import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Desktop3DCanvas({ className = "" }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x070512, 0.012);

    const aspect = container.clientWidth / container.clientHeight;
    const camera = new THREE.PerspectiveCamera(50, aspect, 0.1, 1000);
    camera.position.set(0, 2.2, 11);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xf97316, 2.5);
    mainLight.position.set(5, 10, 7);
    mainLight.castShadow = true;
    scene.add(mainLight);

    // Warm Orange Backlight
    const orangePointLight = new THREE.PointLight(0xf97316, 4, 15);
    orangePointLight.position.set(0, -1, 3);
    scene.add(orangePointLight);

    // Purple Fill Light
    const purplePointLight = new THREE.PointLight(0xa855f7, 3, 15);
    purplePointLight.position.set(-4, 3, 4);
    scene.add(purplePointLight);

    // Dynamic Screen Canvas Texture
    const screenCanvas = document.createElement("canvas");
    screenCanvas.width = 1024;
    screenCanvas.height = 640;
    const ctx = screenCanvas.getContext("2d");

    const screenTexture = new THREE.CanvasTexture(screenCanvas);
    screenTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();

    let codeOffset = 0;
    const drawScreenContent = () => {
      ctx.fillStyle = "#090d16";
      ctx.fillRect(0, 0, 1024, 640);

      // Top Browser Bar
      ctx.fillStyle = "#111827";
      ctx.fillRect(0, 0, 1024, 50);

      // Window Control Dots
      ctx.fillStyle = "#ef4444";
      ctx.beginPath(); ctx.arc(30, 25, 7, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = "#f59e0b";
      ctx.beginPath(); ctx.arc(50, 25, 7, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = "#10b981";
      ctx.beginPath(); ctx.arc(70, 25, 7, 0, Math.PI * 2); ctx.fill();

      // URL Pill
      ctx.fillStyle = "#1f2937";
      if (ctx.roundRect) ctx.roundRect(110, 12, 500, 26, 6);
      else ctx.rect(110, 12, 500, 26);
      ctx.fill();
      ctx.fillStyle = "#f97316";
      ctx.font = "bold 13px monospace";
      ctx.fillText("🔒 https://devhub.com/ready-to-build", 125, 30);

      // Code Lines background editor
      ctx.fillStyle = "#0f172a";
      ctx.fillRect(20, 70, 580, 540);

      // Sidebar UI Preview
      ctx.fillStyle = "#1e1b4b";
      if (ctx.roundRect) ctx.roundRect(620, 70, 384, 540, 12);
      else ctx.rect(620, 70, 384, 540);
      ctx.fill();

      ctx.fillStyle = "#f97316";
      ctx.font = "bold 20px sans-serif";
      ctx.fillText("READY TO BUILD?", 650, 120);

      ctx.fillStyle = "#94a3b8";
      ctx.font = "14px sans-serif";
      ctx.fillText("Your Next-Gen 3D Interactive Website", 650, 150);

      // Pulsing Button on screen UI
      const buttonPulse = Math.sin(Date.now() * 0.005) * 0.15 + 0.85;
      ctx.fillStyle = `rgba(249, 115, 22, ${buttonPulse})`;
      if (ctx.roundRect) ctx.roundRect(650, 180, 200, 45, 22);
      else ctx.rect(650, 180, 200, 45);
      ctx.fill();
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 15px sans-serif";
      ctx.fillText("Get Started →", 700, 208);

      // Glowing Code Editor Lines
      codeOffset = (codeOffset + 0.5) % 300;
      const codeLines = [
        { text: "import { Canvas } from '@react-three/fiber';", color: "#c084fc" },
        { text: "import gsap from 'gsap';", color: "#38bdf8" },
        { text: "import { ScrollTrigger } from 'gsap/ScrollTrigger';", color: "#38bdf8" },
        { text: "", color: "#ffffff" },
        { text: "export default function DevHubWebsite() {", color: "#f472b6" },
        { text: "  const [building, setBuilding] = useState(true);", color: "#f97316" },
        { text: "  useEffect(() => {", color: "#fbbf24" },
        { text: "    gsap.to('.desktop-3d', {", color: "#60a5fa" },
        { text: "      scrollTrigger: '#ready-to-build',", color: "#4ade80" },
        { text: "      rotationY: Math.PI * 2,", color: "#f472b6" },
        { text: "      duration: 2,", color: "#38bdf8" },
        { text: "    });", color: "#60a5fa" },
        { text: "  }, []);", color: "#fbbf24" },
        { text: "  return <Hero3DInteractive />;", color: "#f97316" },
        { text: "}", color: "#f472b6" },
      ];

      ctx.font = "14px monospace";
      codeLines.forEach((line, i) => {
        const y = 110 + i * 26;
        if (y < 590) {
          ctx.fillStyle = line.color;
          ctx.fillText(line.text, 40, y);
        }
      });

      // Cursor blink
      if (Math.floor(Date.now() / 500) % 2 === 0) {
        ctx.fillStyle = "#f97316";
        ctx.fillRect(290, 472, 10, 18);
      }

      screenTexture.needsUpdate = true;
    };

    // 3D Desktop Group
    const desktopGroup = new THREE.Group();
    scene.add(desktopGroup);

    // Monitor Frame
    const monitorWidth = 7;
    const monitorHeight = 4.3;
    const monitorDepth = 0.25;

    const frameGeo = new THREE.BoxGeometry(monitorWidth, monitorHeight, monitorDepth);
    const frameMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      metalness: 0.8,
      roughness: 0.2,
    });
    const monitorFrame = new THREE.Mesh(frameGeo, frameMat);
    monitorFrame.position.set(0, 1.6, 0);
    monitorFrame.castShadow = true;
    desktopGroup.add(monitorFrame);

    // Monitor Screen Mesh
    const screenGeo = new THREE.PlaneGeometry(monitorWidth - 0.2, monitorHeight - 0.2);
    const screenMat = new THREE.MeshBasicMaterial({ map: screenTexture });
    const screenMesh = new THREE.Mesh(screenGeo, screenMat);
    screenMesh.position.set(0, 1.6, 0.13);
    desktopGroup.add(screenMesh);

    // Wireframe Glow Border
    const borderGeo = new THREE.BoxGeometry(monitorWidth + 0.1, monitorHeight + 0.1, 0.05);
    const borderMat = new THREE.MeshBasicMaterial({
      color: 0xf97316,
      transparent: true,
      opacity: 0.4,
      wireframe: true,
    });
    const borderMesh = new THREE.Mesh(borderGeo, borderMat);
    borderMesh.position.set(0, 1.6, 0.1);
    desktopGroup.add(borderMesh);

    // Stand
    const standPoleGeo = new THREE.CylinderGeometry(0.18, 0.22, 1.6, 32);
    const standMat = new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.9, roughness: 0.1 });
    const standPole = new THREE.Mesh(standPoleGeo, standMat);
    standPole.position.set(0, -0.6, -0.2);
    desktopGroup.add(standPole);

    const standBaseGeo = new THREE.BoxGeometry(2.4, 0.1, 1.8);
    const standBase = new THREE.Mesh(standBaseGeo, standMat);
    standBase.position.set(0, -1.4, 0.2);
    desktopGroup.add(standBase);

    // Keyboard with Backlit Keys
    const kbGroup = new THREE.Group();
    kbGroup.position.set(0, -1.35, 1.8);
    kbGroup.rotation.x = 0.12;
    desktopGroup.add(kbGroup);

    const kbBaseGeo = new THREE.BoxGeometry(4.8, 0.18, 1.8);
    const kbBaseMat = new THREE.MeshStandardMaterial({ color: 0x070a12, metalness: 0.7, roughness: 0.3 });
    const kbBase = new THREE.Mesh(kbBaseGeo, kbBaseMat);
    kbGroup.add(kbBase);

    const kbGlowGeo = new THREE.BoxGeometry(5.0, 0.04, 2.0);
    const kbGlowMat = new THREE.MeshBasicMaterial({ color: 0xf97316, transparent: true, opacity: 0.7 });
    const kbGlow = new THREE.Mesh(kbGlowGeo, kbGlowMat);
    kbGlow.position.set(0, -0.08, 0);
    kbGroup.add(kbGlow);

    const rows = 5;
    const cols = 14;
    const keyWidth = 0.28;
    const keyHeight = 0.08;
    const keyDepth = 0.26;
    const keyGap = 0.05;

    const keyGeo = new THREE.BoxGeometry(keyWidth, keyHeight, keyDepth);
    const keyMatDark = new THREE.MeshStandardMaterial({ color: 0x111827, roughness: 0.4 });
    const keyMatGlowOrange = new THREE.MeshStandardMaterial({
      color: 0xf97316,
      emissive: 0xea580c,
      emissiveIntensity: 0.8,
      roughness: 0.2,
    });
    const keyMatGlowPurple = new THREE.MeshStandardMaterial({
      color: 0xa855f7,
      emissive: 0x9333ea,
      emissiveIntensity: 0.8,
      roughness: 0.2,
    });

    const startX = -((cols * (keyWidth + keyGap)) / 2) + keyWidth / 2;
    const startZ = -((rows * (keyDepth + keyGap)) / 2) + keyDepth / 2;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const isGlowing = (r === 2 && c >= 10) || (r === 4 && c === 6) || (r === 0 && c % 3 === 0);
        const isPurple = (r === 1 && c === 0) || (r === 3 && c === 12);
        
        let mat = keyMatDark;
        if (isGlowing) mat = keyMatGlowOrange;
        else if (isPurple) mat = keyMatGlowPurple;

        const keyMesh = new THREE.Mesh(keyGeo, mat);
        keyMesh.position.set(
          startX + c * (keyWidth + keyGap),
          0.1,
          startZ + r * (keyDepth + keyGap)
        );
        kbGroup.add(keyMesh);
      }
    }

    // Mouse
    const mouseGeo = new THREE.SphereGeometry(0.35, 32, 16);
    mouseGeo.scale(0.7, 0.4, 1.1);
    const mouseMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, metalness: 0.6, roughness: 0.3 });
    const mouseMesh = new THREE.Mesh(mouseGeo, mouseMat);
    mouseMesh.position.set(3.0, -1.3, 1.8);
    desktopGroup.add(mouseMesh);

    const wheelGeo = new THREE.BoxGeometry(0.04, 0.08, 0.14);
    const wheelMat = new THREE.MeshBasicMaterial({ color: 0xf97316 });
    const wheelMesh = new THREE.Mesh(wheelGeo, wheelMat);
    wheelMesh.position.set(3.0, -1.18, 1.65);
    desktopGroup.add(wheelMesh);

    // Floating particles
    const particleCount = 200;
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pPos[i * 3] = (Math.random() - 0.5) * 20;
      pPos[i * 3 + 1] = (Math.random() - 0.5) * 15;
      pPos[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    pGeo.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
    const pMat = new THREE.PointsMaterial({
      size: 0.08,
      color: 0xf97316,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
    const particleSystem = new THREE.Points(pGeo, pMat);
    scene.add(particleSystem);

    // Parallax mouse hover
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mouseX = (x / container.clientWidth - 0.5) * 2;
      mouseY = (y / container.clientHeight - 0.5) * 2;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      drawScreenContent();

      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      desktopGroup.rotation.y = Math.sin(elapsedTime * 0.5) * 0.08 + targetX * 0.25;
      desktopGroup.rotation.x = targetY * 0.15;
      desktopGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.12;

      kbGlowMat.opacity = 0.5 + Math.sin(elapsedTime * 3) * 0.25;
      orangePointLight.intensity = 3 + Math.sin(elapsedTime * 2.5) * 1.5;

      particleSystem.rotation.y = elapsedTime * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      frameGeo.dispose();
      frameMat.dispose();
      screenGeo.dispose();
      screenMat.dispose();
      borderGeo.dispose();
      borderMat.dispose();
      standPoleGeo.dispose();
      standBaseGeo.dispose();
      standMat.dispose();
      kbBaseGeo.dispose();
      kbBaseMat.dispose();
      kbGlowGeo.dispose();
      kbGlowMat.dispose();
      keyGeo.dispose();
      keyMatDark.dispose();
      keyMatGlowOrange.dispose();
      keyMatGlowPurple.dispose();
      mouseGeo.dispose();
      mouseMat.dispose();
      wheelGeo.dispose();
      wheelMat.dispose();
      pGeo.dispose();
      pMat.dispose();
      screenTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`w-full h-full min-h-[320px] sm:min-h-[420px] relative pointer-events-auto cursor-grab active:cursor-grabbing ${className}`}
    />
  );
}
