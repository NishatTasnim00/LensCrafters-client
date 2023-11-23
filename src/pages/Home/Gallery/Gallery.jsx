import React, { useContext, useEffect, useState } from "react";
import Title from "../../../component/Title/Title";
import { AuthContext } from "../../../Provider/AuthProvider";
import axios from "axios";

const Gallery = () => {
  const {user, loading} = useContext(AuthContext)
  const [imgs, SetImags] = useState([]);

  
    useEffect(() => {
      axios.get(`${import.meta.env.VITE_API_URL}/gallery`).then((data) => SetImags(data.data));
    }, [loading, axios]);
  
  console.log(imgs);

  return (
    <div className="container mx-auto">
      <Title className="mx-auto" heading="Gallery"></Title>
      <div className="gallery lg:columns-4 space-y-3">
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
