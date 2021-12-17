import { useEffect, useState } from "react";

const FetchPosts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
          {
            signal: signal,
          }
        );
        console.log("received response");
        const data = await response.json();
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

export default FetchPosts;
