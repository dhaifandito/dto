import React, { useState } from "react";

export default function (props) {
  const destination = [
    { name: "karimun", image: "/karimun.jpg" },
    { name: "jogja", image: "/jogja.jpg" },
    { name: "solo", image: "/solo.jpg" },
    { name: "prau", image: "/prai.jpg" },
  ];
  const [currentdestination, setCurrentdestination] = useState(0);

  const nextdestination = () => {
    if (currentdestination < destination.length - 1) {
      setCurrentdestination(currentdestination + 1);
    } else {
      setCurrentdestination(0);
    }
  };
  const prevdestination = () => {
    if (currentdestination > 0) {
      setCurrentdestination(currentdestination - 1);
    } else {
      setCurrentdestination(destination.length - 1);
    }
  };

  return (
    <div className="my-5">
      <div className="items-center flex flex-col justify-center">
        <p className="text-3xl" style={{ color: props.textColor }}>
          recommen<span style={{ color: props.otherColor }}>dto.</span>n
        </p>
        <div
          className="w-60 h-1 m-2"
          style={{ backgroundColor: props.otherColor }}
        ></div>
        <div className="flex justify-center items-center">
          <p
            onClick={() => prevdestination()}
            style={{ color: currentdestination === 0 ? "gray" : props.textColor }}
          >
            Prev
          </p>
          <div className="flex overflow-auto">
            <div className="flex items-center">
              {currentdestination === 0 ? (
                <div className="flex flex-col m-3">
                  <p>{destination[destination.length - 1].name} </p>
                  <img
                    src={destination[destination.length - 1].image}
                    alt={destination[destination.length - 1].name}
                    className="rounded-xl w-36 h-auto"
                  />
                </div>
              ) : (
                <p></p>
              )}
              {destination.map((item, index) => {
                return (
                  <div>
                    {currentdestination === 0 ? (
                      <div
                        className="m-3"
                        style={{
                          display: index === currentdestination ? "block" : "none",
                        }}
                      >
                        <p className="w-36"></p>
                      </div>
                    ) : (
                      <div
                        className="flex flex-col m-3"
                        style={{
                          display: index === currentdestination - 1 ? "block" : "none",
                        }}
                      >
                        <p>{item.name} </p>
                        <img
                          src={item.image}
                          alt={item.name}
                          className="rounded-xl w-36 h-auto"
                        />
                      </div>
                    )}

                    <div
                      className="flex flex-col m-3"
                      style={{
                        display: index === currentdestination ? "block" : "none",
                      }}
                    >
                      <p>{item.name} </p>
                      <img
                        src={item.image}
                        alt={item.name}
                        className={`rounded-xl w-60 h-80 transition-all ease-in-out duration-1000 opacity-0 ${
                          index === currentdestination ? "opacity-100" : ""
                        }`}
                      />
                    </div>

                    {currentdestination === destination.length - 1 ? (
                      <div></div>
                    ) : (
                      <div
                        className="flex flex-col m-3"
                        style={{
                          display: index === currentdestination + 1 ? "block" : "none",
                        }}
                      >
                        <p>{item.name} </p>
                        <img
                          src={item.image}
                          alt={item.name}
                          className="rounded-xl w-36 h-auto"
                        />
                      </div>
                    )}
                  </div>
                );
              })}
              {currentdestination === destination.length - 1 ? (
                <div className="flex flex-col m-3">
                  <p>{destination[0].name} </p>
                  <img
                    src={destination[0].image}
                    alt={destination[0].name}
                    className="rounded-xl w-36 h-auto"
                  />
                </div>
              ) : (
                <p></p>
              )}
            </div>
          </div>
          <p
            onClick={() => nextdestination()}
            style={{
              color: currentdestination === destination.length - 1 ? "gray" : props.textColor,
            }}
          >
            Next
          </p>
        </div>
        <p>
          {currentdestination + 1}/{destination.length}
        </p>
      </div>
    </div>
  );
}
