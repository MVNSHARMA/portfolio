"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion";

export default function ScrollyCanvas({ totalFrames = 90 }: { totalFrames?: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress 0-1 to frame index 0-89
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, totalFrames - 1]);

  useEffect(() => {
    // Preload all images
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < totalFrames; i++) {
      const img = new Image();
      // Format: /sequence/frame_00_delay-0.066s.png
      const formattedIndex = i.toString().padStart(2, "0");
      img.src = `/sequence/frame_${formattedIndex}_delay-0.066s.png`;
      
      img.onload = () => {
        loadedCount++;
        setImagesLoaded(loadedCount);
      };
      
      loadedImages.push(img);
    }
    
    setImages(loadedImages);
  }, [totalFrames]);

  useEffect(() => {
    // Need at least one image to draw, but ideally wait for most or all
    if (images.length === 0 || imagesLoaded < 10) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d", { alpha: false }); // Optimize for no transparency
    if (!ctx) return;

    // Set canvas dimensions to window inner size
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Draw the current frame on resize
      drawFrame(frameIndex.get());
    };
    
    const drawFrame = (index: number) => {
      let frameIndexInt = Math.floor(index);
      // Clamp to available images index
      if (frameIndexInt >= totalFrames) frameIndexInt = totalFrames - 1;
      if (frameIndexInt < 0) frameIndexInt = 0;

      const img = images[frameIndexInt];
      
      if (!img || !img.complete) return;
      
      // Object-fit: cover logic
      const canvasRatio = canvas.width / canvas.height;
      const imgRatio = img.width / img.height;
      
      let drawWidth, drawHeight, offsetX, offsetY;
      
      if (canvasRatio > imgRatio) {
        drawWidth = canvas.width;
        drawHeight = canvas.width / imgRatio;
        offsetX = 0;
        offsetY = (canvas.height - drawHeight) / 2;
      } else {
        drawWidth = canvas.height * imgRatio;
        drawHeight = canvas.height;
        offsetX = (canvas.width - drawWidth) / 2;
        offsetY = 0;
      }
      
      ctx.fillStyle = "#121212";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial resize and draw
    
    const unsubscribe = frameIndex.on("change", (latest) => {
      requestAnimationFrame(() => drawFrame(latest));
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      unsubscribe();
    };
  }, [images, imagesLoaded, frameIndex, totalFrames]);

  return (
    <div ref={containerRef} className="relative w-full h-[500vh] bg-[#121212]">
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        <canvas ref={canvasRef} className="w-full h-full block" />
        
        {/* Loading overlay gracefully fades out once mostly loaded */}
        <div 
          className={`absolute inset-0 flex flex-col items-center justify-center bg-[#121212] z-50 transition-opacity duration-1000 ${
            imagesLoaded >= totalFrames * 0.8 ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <div className="w-48 h-1 bg-white/20 rounded-full overflow-hidden mb-4">
             <div 
               className="h-full bg-white transition-all duration-300 ease-out"
               style={{ width: `${(imagesLoaded / totalFrames) * 100}%` }}
             />
          </div>
          <div className="text-white/50 text-xs tracking-[0.2em] font-light uppercase">
            Loading Experience
          </div>
        </div>
      </div>
    </div>
  );
}
