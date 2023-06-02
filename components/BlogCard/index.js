import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./styles.module.css";

const BlogCard = ({ title, body, id }) => {
  return (
    <Link href={`post/${id}`} className={styles.card}>
      {/* Image */}
      <div className={styles.cardImage}>
        <Image
          src={`https://picsum.photos/200/300?random=${id}`}
          alt="Blog Card image"
          fill
        />
      </div>
      <div className={styles.cardBody}>
        {/* title */}
        <h3> {title} </h3>
        {/* description */}
        <p> {body} </p>
      </div>
    </Link>
  );
};

export default BlogCard;
