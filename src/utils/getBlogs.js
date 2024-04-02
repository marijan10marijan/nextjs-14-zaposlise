export const getBlogs = async () => {
  try {
    const response = await fetch("https://zaposlise.hr/wp-json/wp/v2/myPosts", {
      next: { revalidate: 3600 },
    });
    const data = await response.json();
    const blogs = data.data.slice(0, 4);
    return blogs;
  } catch (err) {
    console.log(err);
  }
};
