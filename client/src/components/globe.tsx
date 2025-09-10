import type React from "react";

const Globe: React.FC = () => {
  return (
    <>
      <style>
        {`
          @keyframes earthRotate {
            0% { background-position: 0 0; }
            100% { background-position: 400px 0; }
          }
          @keyframes twinkling { 0%,100% { opacity:0.1; } 50% { opacity:1; } }
          @keyframes twinkling-slow { 0%,100% { opacity:0.1; } 50% { opacity:1; } }
          @keyframes twinkling-long { 0%,100% { opacity:0.1; } 50% { opacity:1; } }
          @keyframes twinkling-fast { 0%,100% { opacity:0.1; } 50% { opacity:1; } }
          
          @keyframes rotateAroundGlobe {
            0% { transform: rotate(0deg) translateX(200px) rotate(0deg); }
            100% { transform: rotate(360deg) translateX(200px) rotate(-360deg); }
          }
          
          @keyframes textFadeInOut {
            0%, 45% { opacity: 1; }
            50%, 95% { opacity: 0; }
            100% { opacity: 1; }
          }
          
          .rotating-text {
            position: absolute;
            font-size: 24px;
            font-weight: bold;
            color: #ffffff;
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6);
            animation: rotateAroundGlobe 8s linear infinite;
            transform-origin: 0 0;
            white-space: nowrap;
          }
          
          .text-elverra {
            animation: rotateAroundGlobe 8s linear infinite, textFadeInOut 8s linear infinite;
          }
          
          .text-zenika {
            animation: rotateAroundGlobe 8s linear infinite, textFadeInOut 8s linear infinite;
            animation-delay: 4s;
          }
        `}
      </style>
      <div className="relative w-full h-[100vh]">
        {/* Div pour l'image de fond avec flou */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/public/lovable-uploads/Poster.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(5px)",
          }}
        ></div>

        {/* Conteneur pour le globe et les étoiles, sans flou */}
        <div className="flex items-center justify-center relative h-full">
          <div
            className="relative w-[300px] h-[300px] rounded-full overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.3),-10px_0_16px_#c3f4ff_inset,30px_4px_50px_#000_inset,-48px_-4px_68px_#c3f4ff99_inset,500px_0_88px_#00000066_inset,300px_0_76px_#000000aa_inset]"
            style={{
              backgroundImage:
                "url('https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/globe.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "left",
              animation: "earthRotate 30s linear infinite",
            }}
          ></div>

          <div className="rotating-text text-elverra">Elverra Global</div>
          <div className="rotating-text text-zenika">Zenika Carte</div>

          {/* Stars */}
          <div
            className="absolute left-[-20px] w-1 h-1 bg-white rounded-full"
            style={{ animation: "twinkling 3s infinite" }}
          />
          <div
            className="absolute left-[-40px] top-[30px] w-1 h-1 bg-white rounded-full"
            style={{ animation: "twinkling-slow 2s infinite" }}
          />
          <div
            className="absolute left-[350px] top-[90px] w-1 h-1 bg-white rounded-full"
            style={{ animation: "twinkling-long 4s infinite" }}
          />
          <div
            className="absolute left-[200px] top-[290px] w-1 h-1 bg-white rounded-full"
            style={{ animation: "twinkling 3s infinite" }}
          />
          <div
            className="absolute left-[50px] top-[270px] w-1 h-1 bg-white rounded-full"
            style={{ animation: "twinkling-fast 1.5s infinite" }}
          />
          <div
            className="absolute left-[250px] top-[-50px] w-1 h-1 bg-white rounded-full"
            style={{ animation: "twinkling-long 4s infinite" }}
          />
          <div
            className="absolute left-[290px] top-[60px] w-1 h-1 bg-white rounded-full"
            style={{ animation: "twinkling-slow 2s infinite" }}
          />
        </div>
      </div>
    </>
  );
};

export default Globe;
