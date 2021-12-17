import axios from "axios";
import { useEffect, useState } from "react";

export const AxiosPosts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    let cancelToken;

    const fetchData = async () => {
      cancelToken = axios.CancelToken.source();
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          { cancelToken: cancelToken.token }
        );
        console.log("received response");
        const data = response.data;
        setPosts(data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();

    return () => {
      cancelToken.cancel("Operation canceled.");
    };
  }, []);
  return (
    <ul>
      {posts.map((post) => {
        return <li key={post.id}>{post.title}</li>;
      })}
    </ul>
  );
};

export default AxiosPosts;
