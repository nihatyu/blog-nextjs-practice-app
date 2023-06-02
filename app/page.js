import BlogCard from "@/components/BlogCard";
import styles from "./styles.module.css";

// "@next/font": "^13.4.3" dependencies den sildim warning verdiği için, gerek olursa tekrar koy.

const getPosts = async () => {
  const response = await fetch("https://dummyjson.com/posts?limit=10");
  return response.json();
};

export default async function Home() {
  const { posts } = await getPosts(); // json obje içinde döneni { posts } şeklinde distract ederek alabilirsin.

  // console.log("posts", posts)

  return (
    <div className={styles.blogsContainer}>
      {posts.map((post) => {
        console.log("post", post);
        return <BlogCard key={post.id} {...post} />;
      })}
    </div>
  );
}
