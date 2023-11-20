import React, { useEffect, useState } from "react";



const Gallery = () => {
  const [imgs, SetImags] = useState([]);
  useEffect(() => {
    fetch("gallery.json")
      .then((res) => res.json())
      .then((data) => {
        SetImags(data);
      });
  }, []);
  // console.log(imgs);
  return (
    <div className="container">
      <div className="gallery columns-4 space-y-3">
        {imgs?.map((img, i) => {
          return (
           
              <figure className="w-full rounded-lg" key={i}>
                <img
                  className="w-full h-full object-cover rounded-lg hover:scale-105 "
                  src={img?.source}
                  alt="image"
                />
              </figure>
          
          );
        })}
      </div>
        
    </div>
  );
};

export default Gallery;
