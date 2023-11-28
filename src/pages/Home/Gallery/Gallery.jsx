import React, { useContext, useEffect, useState } from "react";
import Title from "../../../component/Title/Title";
import { AuthContext } from "../../../Provider/AuthProvider";
import axios from "axios";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Gallery = () => {
  const { user, loading } = useContext(AuthContext);
  const [imgs, SetImags] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/gallery`)
      .then((data) => SetImags(data.data));
  }, [loading, axios]);

  // console.log(imgs);

  return (
    <div className="container mx-auto">
      <Title className="mx-auto" heading="Gallery"></Title>
      <div className="gallery lg:columns-4 space-y-3">
        {imgs?.map((img, i) => {
          return (
            // <div data-aos="zoom-in" key={i}>
            <figure className="w-full rounded-lg" key={i}>
              <
                 LazyLoadImage
                effect="blur"
                delayTime={1000}
                threshold={200} 
          placeholderSrc={`https://via.placeholder.com/50`} 
                className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out"
                src={img?.source}
                alt="image"
              />
           
            </figure>
            // </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
