import request from "./request";

export async function getBlogCategories() {
  return await request.get("/api/blogtype");
}

export async function getBlogs(page = 1, limit = 10, categoryid = -1) {
  return await request.get("/api/blog", {
    params: {
      page,
      limit,
      categoryid,
    },
  });
}
