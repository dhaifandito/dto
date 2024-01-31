import React, { useState, useEffect } from "react"

export default function (props) {

  const [banner, setBanner] = useState("karimun");
  const bannerDesc = [{name: 'prau',title: 'Mt Prau, Dieng',date:'30/04/2023'},{name: 'jogja',title: 'Malioboro, Yogyakarta',date:'19/06/2023'}, 
  {name: 'solo',title: 'Surakarta City',date:'14/07/2023'},{name: 'karimun',title: 'Karimun Jawa Island',date:'30/09/2023'},];

  useEffect(() => {
    const interval = setInterval(() => {
      setBanner((prevImage) =>
        prevImage === "prau" ? "jogja" : prevImage === "jogja" ? "solo" : prevImage === "solo" ? "karimun" : "prau" 
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  
    return (
        <div className="flex flex-col justify-center items-center px-5 ">
          <p style={{ color: props.otherColor }} className="font-bold text-2xl">
              dto.
            </p>
          <p className="lg:px-0 text-center">
            is stand for Delay, Tolerate, and Overthink 
          </p>
         
            <div className="flex flex-col justify-between items-center">
              <img
                src={`/${banner}.jpg`}
                alt={`${banner}`}
                className="w-auto h-48 lg:h-96 rounded-xl shadow-lg mt-10"
              />
              {bannerDesc.map((item)=>{
                
                if(item.name===banner){
                  return (
                <div className="flex flex-col items-center justify-center">
              <p className="mt-2 text-xl">{item.title}</p>
              <p className="text-md">{item.date}</p>
                </div>)}
              })}
          </div>
          <div className="flex justify-center flex-col pb-10 mt-8 px-5 lg:px-0">
            <div>
              <p style={{ color: props.otherColor }} className="font-bold text-2xl">
                Delay
              </p>
              <p className="py-3">
                de·lay /dəˈlā/ verb{" "}
                <span style={{ color: props.otherColor }}>
                  {" "}
                  make (someone or something) late or slow.
                </span>
              </p>
            </div>
            <div>
              <p style={{ color: props.otherColor }} className="font-bold text-2xl">
                Tolerate
              </p>
              <p className="py-3">
                tol·er·ate /ˈtäləˌrāt/ verb{" "}
                <span style={{ color: props.otherColor }}>
                  {" "}
                  allow the existence, occurrence, or practice of without
                  interference.{" "}
                </span>
              </p>
            </div>
            <div>
              <p style={{ color: props.otherColor }} className="font-bold text-2xl">
                Overthink
              </p>
              <p className="py-3">
                o·ver·think /ˌōvərˈTHiNGk/ verb{" "}
                <span style={{ color: props.otherColor }}>
                  {" "}
                  think about (something) too much or for too long.
                </span>
              </p>
            </div>
          </div>
        </div>
    )
}