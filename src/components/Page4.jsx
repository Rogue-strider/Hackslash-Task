import React from "react";
import 'remixicon/fonts/remixicon.css';
const Page4 = () => {
  const posts = [
    {
      title: "Building a blog with Jekyll, Docker and GitLab",
      id: 1,
      date: "May 22, 2015",
      readTime: "2 minute read",
      description:
        "Developing a Jekyll blog with Docker deployed to GitLab pages",
      link: "#",
    },
    {
      title: "Business - A PHP library for business date calculations",
      id: 2,
      date: "May 22, 2015",
      readTime: "2 minute read",
      description:
        "Discovering Business, a PHP library to ease dealing with business date calculations",
      link: "#",
    },
    {
      title: "Data tables with Symfony, Hateoas and AngularJS",
      id: 3,
      date: "May 22, 2015",
      readTime: "2 minute read",
      description:
        "Building a simple Angular table consuming a Hateoas REST API",
      link: "#",
    },
    {
      title: "Swap - A PHP exchange rates library",
      id: 4,
      date: "May 22, 2015",
      readTime: "2 minute read",
      description: "Discovering Swap, an exchange rates library for PHP",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen w-full ">
      <div className="cards h-screen grid grid-cols-2 grid-rows-2 ">
        {posts.map((post, index) => (
          <div
            key={index}
            className={`${post.id == 1 ? "bg-[#344CB7]" : post.id == 4 ? "bg-zinc-800" : "bg-white"} p-[10%]  flex flex-col justify-between`}
          >
            <div>
              <h2
                className={`${
                  post.id == 1 ? "text-white" : post.id == 4 ? "text-white" : ""
                } text-3xl font-md mb-[5%] `}
              >
                {post.title}
              </h2>
              <p className={`${
                  post.id == 1 ? "text-white" : post.id == 4 ? "text-white" : ""
                } text-xl  text-gray-600 mb-[5%]`}>
                {post.date} - {post.readTime}
              </p>
              <p
                className={`${
                  post.id == 1 ? "text-white" : post.id == 4 ? "text-white" : ""
                } text-xl mb-4`}
              >
                {post.description}
              </p>
            </div>
            <a
              href={post.link}
              className={`${
                post.id == 2 ? "text-[#344CB7]" : post.id == 3 ? "text-[#344CB7]" : post.id == 1 ? "text-white" : post.id == 4 ? "text-white" : ""
              } font-semibold hover:text-blue-800 transition duration-300 flex items-center`}
            >
              <i className="mr-2 ri-arrow-right-fill text-lg"></i>READ ARTICLE
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page4;