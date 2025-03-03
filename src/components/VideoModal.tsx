"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Pause, Volume2, VolumeX } from "lucide-react"; // Using Lucide React icons

const VideoModal: React.FC<{ closeModal: () => void }> = ({ closeModal }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null); // Reference for video element

  // Toggle play/pause
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Toggle mute/unmute
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[9999] p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
      >
        {/* Modal Container with Mac Tab Animation */}
        <motion.div
          className="relative bg-transparent rounded-2xl w-full max-w-4xl shadow-lg"
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } }}
          exit={{ scale: 0.7, opacity: 0, transition: { duration: 0.3, ease: "easeIn" } }}
        >
          {/* Close Button */}
          <button onClick={closeModal} className="absolute top-2 right-2 z-50 bg-[#E43F5A] text-white rounded-full p-2 hover:bg-red-600 transition">
            <X className="w-5 h-5" />
          </button>

          {/* Video Container */}
          <div className="relative rounded-lg overflow-hidden">
            <video
              ref={videoRef} // Attach ref
              src="/video.mp4"
              className="w-full rounded-lg"
              autoPlay
              muted={isMuted}
              loop
            ></video>

            {/* Play/Pause Overlay Button */}
            <button
              onClick={togglePlay}
              className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white p-3 rounded-full flex items-center justify-center hover:bg-opacity-80 transition"
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </button>

            {/* Mute/Unmute Overlay Button */}
            <button
              onClick={toggleMute}
              className="absolute bottom-4 right-4 bg-black bg-opacity-60 text-white p-3 rounded-full flex items-center justify-center hover:bg-opacity-80 transition"
            >
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default VideoModal;
