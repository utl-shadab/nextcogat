"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaPlay, FaPause, FaVolumeMute, FaVolumeUp } from "react-icons/fa";

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
        className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
      >
        {/* Modal Container with Mac Tab Animation */}
        <motion.div
          className="relative bg-transparent rounded-2xl p-6 w-full max-w-2xl shadow-lg"
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } }}
          exit={{ scale: 0.7, opacity: 0, transition: { duration: 0.3, ease: "easeIn" } }}
        >
          {/* Close Button */}
          <button onClick={closeModal} className="absolute top-1 right-4 z-50 text-white bg-[#E43F5A] rounded-full p-2">
            <FaTimes className="text-xl" />
          </button>

          {/* Video Container */}
          <div className="relative">
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
              className="absolute bottom-5 left-5 bg-black bg-opacity-60 text-white p-3 rounded-full text-lg"
            >
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>

            {/* Mute/Unmute Overlay Button */}
            <button
              onClick={toggleMute}
              className="absolute bottom-5 right-5 bg-black bg-opacity-60 text-white p-3 rounded-full text-lg"
            >
              {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default VideoModal;
