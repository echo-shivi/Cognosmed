import React from "react";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Title of Blog Post 1",
      date: "June 19, 2024",
      summary: "Brief summary or excerpt of the blog post.",
    },
    {
      id: 2,
      title: "Title of Blog Post 2",
      date: "June 18, 2024",
      summary: "Brief summary or excerpt of the blog post.",
    },
    // Add more posts
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container flex flex-col mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Welcome to Our Blog
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md p-4">
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <p className="text-sm text-gray-600 mb-2">{post.date}</p>
              <p className="text-gray-700">{post.summary}</p>
              <Link
                to={`/blog/${post.id}`}
                className="text-blue-500 hover:underline"
              >
                Read more
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sidebar components */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold mb-2">
              Subscribe to Our Newsletter
            </h3>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="py-2 px-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-500 text-white px-4 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Subscribe
              </button>
            </form>
          </div>

          {/* <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold mb-2">Archives</h3>
            <ul>
              <li>Month Year</li>
              <li>Month Year</li>
              <li>Month Year</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold mb-2">Categories</h3>
            <ul>
              <li>Category 1</li>
              <li>Category 2</li>
              <li>Category 3</li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
