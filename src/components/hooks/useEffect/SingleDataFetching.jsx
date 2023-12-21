import React, { useEffect, useState } from "react";
import axios from "axios";

const SingleDataFetching = () => {
  const [photo, setPhoto] = useState({});
  const [id, setId] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then((res) => {
        console.log(res);
        setPhoto(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <div>
      <input
        type="number"
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <img src={photo.thumbnailUrl} alt="images" />
    </div>
  );
};

export default SingleDataFetching;
