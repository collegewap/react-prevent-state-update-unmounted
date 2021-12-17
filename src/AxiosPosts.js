import axios from "axios";
import { useEffect, useState } from "react";

export const AxiosPosts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            signal: signal,
          }
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
      controller.abort();
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
