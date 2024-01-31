import React from "react";

export default function (props) {
  return (
    <div
    >
        <div 
      style={{backgroundColor: props.otherColor}}
      className="flex flex-col items-center rounded-xl min-h-96 m-8 pt-12">
      <p>
        <span style={{ color: props.backColor}} className="font-bold">
          dto.
        </span>{" "}
        Playlist
      </p>
      <a
        href="https://open.spotify.com/track/6BEKt5axiNeWCr9huv0k7I?si=c4192903f1a6400d"
        target="_blank"
        rel="noopener noreferrer"
        className={
          props.theme === "dark"
            ? "my-5 hover:text-darkOther"
            : "my-5 hover:text-lightOther"
        }
      >
        Truce - Twenty One Pilots
      </a>
      </div>
    </div>
  );
}
