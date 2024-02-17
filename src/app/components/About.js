import React from "react";

export default function (props) {
  return (
    <div className="my-5">
      <div className="items-center flex flex-col justify-center">
        <p className="text-3xl" style={{ color: props.textColor }}>
          About <span style={{ color: props.otherColor }}>dto.</span>
        </p>
        <div
          className="w-60 h-1 m-2"
          style={{ backgroundColor: props.otherColor }} 
        ></div>
        <div className="flex justify-center items-center"></div>
      </div>
      <div className="flex justify-center">
      <div className="lg:flex-none flex flex-col items-center lg:grid grid-cols-3 lg:w-3/4 lg:p-12" >
        <div>
          <img
            src="/about.jpg"
            className="rounded-full w-36 h-36 lg:w-60 lg:h-60 flex items-center mt-3 lg:mt-0"
          />
        </div>
        <div className="lg:grid gap-4 col-span-2 mt-8 px-8 lg:px-0">
            <p>
          <span style={{ color: props.otherColor }}>dto.</span> is an antithesis
          of any movement. Not everything needs to be done
          urgently; you can{" "}
          <span style={{ color: props.otherColor }}>delay</span> it. Not
          everything that doesn't suit you needs to be rejected; you can{" "}
          <span style={{ color: props.otherColor }}>tolerate</span> it. Not
          everything requires your immediate action; you can just{" "}
          <span style={{ color: props.otherColor }}>overthink</span> about it.
          It's a movement to not move and stand still, to only care about what
          truly needs to be cared about.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}
