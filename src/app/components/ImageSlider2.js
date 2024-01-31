import React, { useState } from "react";

export default function (props) {
  const recco = [
    {book: [
        {name: 'Smoke and Mirrors How Hype Obscures The Future and How To See It', author:'Gemma Milne', image:'/smoke.jpg'},
        {name: 'Keajaiban Toko Kelontong Namiya', author: 'Keigo Higashino', image:'/toko.jpg'},
        {name: 'Furiously Happy A Funny Book About Horrible Things', author: 'Jenny Lawson', image:'/happy.jpg'}
    ],
    album: [
        {name: 'Columbo', artist: 'Bruno Major', image:'/columbo.jpg'},
        {name: 'Vessel', artist: 'Twenty One Pilots', image:'/vessel.jpg'},
        {name: 'Peace or Love', artist: 'Kings of Convenience', image:'/peace.jpg'}
    ],
    film: [
        {name: 'Stand By Me', director: 'Rob Reiner', image:'/stand.jpg'},
        {name: 'Monster', director: 'Kore-Eda Hirokazu', image:'/monster.jpg'},
        {name: 'Killers of The Flower Moon', director: 'Martin Scorsese', image:'/killers.jpg'}
    ]
    }];

    const [openRecc, setOpenRecc] = useState('book');

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

        <div className="flex">
        <div className="flex" onClick={()=>setOpenRecc('book')}s>
            <p style={{ color: openRecc==='book' ? props.otherColor : 'grey' }} className="font-bold lg:text-2xl p-3 lg:p-7">Books</p>
            
        </div>
        <div className="flex" onClick={()=>setOpenRecc('album')}>
            <p style={{ color: openRecc==='album' ? props.otherColor : 'grey' }} className="font-bold lg:text-2xl p-3 lg:p-7">Music Album</p>
        </div><div className="flex" onClick={()=>setOpenRecc('film')}>
            <p style={{ color: openRecc==='film' ? props.otherColor : 'grey' }} className="font-bold lg:text-2xl p-3 lg:p-7">Film</p>
        </div>
        </div>

        <div>
        {openRecc==='book' ?
            <div className="lg:flex overflow-auto">
          {recco[0].book.map((item)=>{
            return (
                <div className="w-60 p-5 ">
                    <img 
                    src={item.image}
                    alt={item.name}
                    className='rounded-lg drop-shadow-lg w-60 lg:h-80'
                    />
                    <p className="text-wrap my-2" style={{color: props.otherColor}}>{item.name}</p>
                    <p>by {item.author}</p>
                </div>
            )
          })}
          </div> : <div></div>}
          {openRecc==='album' ?
            <div className="lg:flex overflow-auto">
          {recco[0].album.map((item)=>{
            return (
                <div className="w-60  p-5">
                    <img 
                    src={item.image}
                    alt={item.name}
                    className='rounded-lg drop-shadow-lg w-60 h-60 my-10'
                    />
                    <p className="text-wrap my-2" style={{color: props.otherColor}}>{item.name}</p>
                    <p>by {item.artist}</p>
                </div>
            )
          })}
          </div> : <div></div>}
          {openRecc==='film' ?
            <div className="lg:flex overflow-auto">
          {recco[0].film.map((item)=>{
            return (
                <div className="w-60  p-5">
                    <img 
                    src={item.image}
                    alt={item.name}
                    className='rounded-lg drop-shadow-lg w-60 h-80'
                    />
                    <p className="text-wrap my-2" style={{color: props.otherColor}}>{item.name}</p>
                    <p>by {item.director}</p>
                </div>
            )
          })}
          </div>: <div></div>}
        </div>

      </div>
    </div>
  );
}
