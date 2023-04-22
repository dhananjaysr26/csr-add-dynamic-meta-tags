import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

export default function SEO() {
  const { postId } = useParams();
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    const FetchPostDetails = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/photos/${postId}`
      );
      const data = await res.json();
      console.log(data);
      setPostData(data);
    };
    if (postId) {
      FetchPostDetails();
    }
  }, [postId]);
  console.log(postData, postId);
  return (
    postData &&
    Object.keys(postData).length > 0 && (
      <Helmet>
        {/* Standard metadata tags */}
        <title>{postData.title}</title>
        <meta name="description" content={postData.title} />
        <meta property="og:image" content={postData.url} />
        {/* End standard metadata tags */}
        {/* Facebook tags */}
        <meta property="og:type" content={"website"} />
        <meta property="og:title" content={postData.title} />
        <meta property="og:description" content={postData.title} />
        {/* End Facebook tags */}
        {/* Twitter tags */}
        <meta name="twitter:card" content={"website"} />
        <meta name="twitter:title" content={postData.title} />
        <meta name="twitter:description" content={postData.title} />
        {/* End Twitter tags */}
      </Helmet>
    )
  );
}
