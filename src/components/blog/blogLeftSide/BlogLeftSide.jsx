import React from "react";
import { pretvoriDatum } from "@/utils/pretvoriDatum";

const BlogLeftSide = ({ blogs }) => {
  return (
    <div className="blog-blogs__left">
      <div className="left-image">
        <a href={blogs[0]?.post_url}>
          <img
            loading="lazy"
            src={blogs[0].post_web_image}
            alt={`blog post ${blogs[0]?.post_title}`}
          />
        </a>
      </div>
      <div className="left-content">
        <div className="left-content__header"> 
          {blogs[0].category_list.includes(",") ? (
            <>
              {blogs[0].category_list.split(",").map((category_item) => (
                <div
                  key={category_item}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: ".5rem",
                  }}
                >
                  <a
                    href={`https://zaposlise.hr/category/${category_item.toLowerCase()}`}
                  >
                    {category_item}
                  </a>
                  <a
                    href={`https://zaposlise.hr/category/${category_item.toLowerCase()}`}
                  >
                    {category_item}
                  </a>
                </div>
              ))}
            </>
          ) : (
            <a
              href={`https://zaposlise.hr/category/${blogs[0].category_list.toLowerCase()}`}
            >
              {blogs[0].category_list}
            </a>
          )}
          <span className="postdate">{pretvoriDatum(blogs[0]?.post_date)}</span>
        </div>
        <h4 className="left-content__title"> 
          <a className="link" href={blogs[0]?.post_url}> 
            {blogs[0]?.post_title} 
          </a>
        </h4>
        <div className="left-content__subtitle line-height">
          {blogs[0].post_content
            .substr(0, 140)
            .replace(/<[^>]+>|<[^>]+/g, "")
            .match(/[a-zA-ZćčžšđĆČŽŠĐ]+/g)
            .join(" ")}
        </div>
        <div className="left-content__link">
          <a className="line-height link" href={blogs[0].post_url}>
            <span>Saznajte više</span>
            <img
              loading="lazy"
              src="https://zaposlise.hr/wp-content/themes/ngtheme/assets/i/arrow-1.png"
              alt="strelica u desnu stranu"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogLeftSide;
