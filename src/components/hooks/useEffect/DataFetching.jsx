import React, { useEffect, useState } from "react";
import axios from "axios";

const DataFetching = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        console.log(res);
        setPhotos(res.data.slice(0, 10));
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {photos.length > 0 && photos.length <= 5000 && (
        <ul>
          {photos.map((photo) => (
            <li key={photo.id}>
              <img src={photo.thumbnailUrl} alt="images" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DataFetching;
