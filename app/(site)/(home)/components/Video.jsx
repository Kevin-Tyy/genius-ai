"use client";
import React from "react";
import VideoJS from "../../../../components/client/VideoJs";
import Image from "next/image";

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
      <div className="max-w-[1560px] mx-auto relative">
        <div className="flex justify-center items-center px-5 py-10 mx-auto">
          <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
        </div>
        <Image src="/svgs/dotted-line-red.svg" alt="" width={6} height={10} className="absolute top-0 -right-20" draggable={false} />
      </div>
    </>
  );
};

export default Video;
