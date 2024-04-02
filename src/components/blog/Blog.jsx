import React from "react";
import Upoznaj from "../upoznaj/Upoznaj";
import { getBlogs } from "@/utils/getBlogs";
import BlogRightSide from "./blogRightSide/BlogRightSide";
import BlogLeftSide from "./blogLeftSide/BlogLeftSide";

const Blog = async ({ blogPage }) => {
  const blogs = await getBlogs();

  return (
    <div className={blogPage == "posloprimci" ? "blog blog-dva" : "blog"}>
      {blogPage == "posloprimci" ? (
        <Upoznaj title="Pronađi oglas i Zaposlise." />
      ) : null}
      <div
        className={
          blogPage ? "blog-container blog-dva-container" : "blog-container"
        }
      >
        <div className="blog-header">
          <div className="blog-header__container">
            <h1 className="blog-title">
              Pažljivo osluškujemo trendove modernog tržišta rada
            </h1>
            <p className="blog-subtitle line-height">
              Zato se trudimo za tebe pronaći najsvježije informacije o svemu
              vezanom uz potragu za poslom ili talentima.
            </p>
          </div>
          {!blogs || blogs.length == 0 ? (
            <h1 style={{ textAlign: "center", fontSize: "2rem" }}>
              Trenutno nema aktivnih blogova.
            </h1>
          ) : (
            <div className="blog-blogs">
              <div className="blog-decoration__img"></div>
              <BlogLeftSide blogs={blogs} />
              <BlogRightSide blogs={blogs} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
