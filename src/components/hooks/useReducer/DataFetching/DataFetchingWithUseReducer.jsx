import axios from "axios";
import React, { useEffect, useReducer } from "react";

const initialState = {
  loading: true,
  photo: {},
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        photo: action.payload,
        error: "",
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        photo: {},
        error: "Something went wrong",
      };
    default:
      return state;
  }
};

const DataFetchingWithUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos/1")
      .then((res) => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR" });
      });
  }, []);

  return (
    <div>
      {state.loading ? "Loading" : <img src={state.photo.thumbnailUrl} />}
      {state.error ? state.error : null}
    </div>
  );
};

export default DataFetchingWithUseReducer;
