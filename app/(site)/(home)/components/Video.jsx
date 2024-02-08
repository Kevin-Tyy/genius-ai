"use client";
import React from "react";
import VideoJS from "../../../../components/client/VideoJs";

const Video = () => {
  const playerRef = React.useRef(null);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: "/videos/Company-Introduction-Video.mp4",
        type: "video/mp4",
      },
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };

  return (
    <>
      <div className="flex justify-center items-center px-5 py-10 mx-auto">
        <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
      </div>
    </>
  );
};

export default Video;
