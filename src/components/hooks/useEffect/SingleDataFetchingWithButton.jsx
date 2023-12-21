import React, { useEffect, useState } from "react";
import axios from "axios";

const SingleDataFetchingWithButton = () => {
  const [photo, setPhoto] = useState({});
  const [id, setId] = useState(1);
  const [idButtonClick, setIdButtonClick] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos/${idButtonClick}`)
      .then((res) => {
        console.log(res);
        setPhoto(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idButtonClick]);

  const idFromButtonClick = () => {
    setIdButtonClick(id);
  };

  return (
    <div>
      <input type="number" onChange={(e) => setId(e.target.value)} />
      <button onClick={idFromButtonClick}> But</button>
      <img src={photo.thumbnailUrl} />
    </div>
  );
};

export default SingleDataFetchingWithButton;
