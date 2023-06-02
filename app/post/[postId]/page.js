import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

const getPost = async (id) => {
  try {
    const response = await fetch(`https://dummyjson.com/posts/${id}`);
    return response.json();
  } catch (error) {
    throw new Error(error);
  }
};

const Page = async ({ params, searchParams }) => {
  //ben bu ayırmadan bi bok anlamadım
  console.log("params", params);
  console.log("searchParams", searchParams);
  const { id, body, title } = await getPost(params.postId);

  if (!title) {
    return notFound();
  }

  return (
    <div className={styles.blogContainer}>
      <div className={styles.cardImage}>
        <Image
          src={`https://picsum.photos/960/400?random=${id}`}
          alt={title}
          fill
        />
      </div>
      <h1 className={styles.title}>{title}</h1>
      <p> {body} </p>
    </div>
  );
};

export default Page;
