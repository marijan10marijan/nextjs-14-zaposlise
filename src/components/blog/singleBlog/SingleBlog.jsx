import React from "react";
import { pretvoriDatum } from "@/utils/pretvoriDatum";

const SingleBlog = ({ blogs, index }) => {
  return (
    <div className="right-flex">
      <div className="right-image">
        <a href={blogs[index].post_url}>
          <img
            loading="lazy"
            src={blogs[index].post_web_image}
            alt={`blog post ${blogs[index].post_title}`}
          />
        </a>
      </div>
      <div className="right-content">
        <div className="right-content__header">
          {blogs[index].category_list.includes(",") ? (
            <>
              {blogs[index].category_list.split(",").map((category_item) => (
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
              href={`https://zaposlise.hr/category/${blogs[
                index
              ].category_list.toLowerCase()}`}
            >
              {blogs[index].category_list}
            </a>
          )}
          <span className="postdate">
            {pretvoriDatum(blogs[index].post_date)}
          </span>
        </div>
        <h4 className="right-content__title">
          <a href={blogs[index].post_url}>
            {blogs[index].post_title.length > 46 ? (
              <>{blogs[index].post_title.substring(0, 46)}...</>
            ) : (
              blogs[index].post_title
            )}
          </a>
        </h4>
        <div className="right-content__link">
          <a className="line-height link" href={blogs[index].post_url}>
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

export default SingleBlog;
