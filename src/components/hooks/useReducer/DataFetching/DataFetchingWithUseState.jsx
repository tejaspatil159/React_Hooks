import axios from "axios";
import React, { useEffect, useState } from "react";

const DataFetchingWithUseState = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [photo, setPhoto] = useState({});

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos/1")
      .then((res) => {
        setLoading(false);
        setError("");
        setPhoto(res.data);
      })
      .catch((error) => {
        setLoading(false);
        setError("Somthing went wrong");
        setPhoto({});
      });
  });
  return (
    <div>
      {loading ? "Loading" : <img src={photo.thumbnailUrl} alt="" />}
      {error ? error : null}
    </div>
  );
};

export default DataFetchingWithUseState;
