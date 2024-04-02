import React from "react";
import SingleBlog from "../singleBlog/SingleBlog";

const BlogRightSide = ({ blogs }) => {
  return (
    <div className="blog-blogs__right">
      <SingleBlog blogs={blogs} index={1} />
      <SingleBlog blogs={blogs} index={2} />
      <SingleBlog blogs={blogs} index={3} />
    </div>
  );
};

export default BlogRightSide;
