import axios from "axios"

const FetchingData = () => {
  return async (dispatch) => {
    dispatch({type:"fetch"})
    try {

      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      dispatch({ type: "success", payload: res.data });
    } catch (e) {
      dispatch({ type: "failed", payload: e.message });
    }
  };
};

export default FetchingData;
