import React, { useState, useEffect } from "react";
import { RWebShare } from "react-web-share";
import BlogComments from "./BlogComments";

const formatNumber = (num) => {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "k";
  }
  return num.toString();
};

function MyBlog() {
  const [likeCount, setLikeCount] = useState(1200);
  const [commentCount, setCommentCount] = useState(50);
  const [viewCount, setViewCount] = useState(5000);

  useEffect(() => {
    setViewCount(viewCount + 1);
  }, []);

  const handleLike = () => {
    setLikeCount(likeCount + 1);
  };

  const addComment = () => {
    setCommentCount(commentCount + 1);
  };

  return (
    <>
      <div className="max-w-5xl mx-auto bg-white rounded-lg overflow-hidden">
        <div className="p-5">
          <div className="blog-heading flex justify-between">
            <div className="Header">
              <h1 className="text-2xl font-bold text-gray-900">TECHNOLOGY TRENDS IN 2024</h1>
            </div>
            <div className="save-share flex justify-around">
              <RWebShare
                data={{
                  text: "My Blog",
                  url: "http://localhost:5173/myBlog",
                  title: "My Blog",
                }}
                onClick={() => console.log("shared successfully!")}
              >
                <button><img src="Vector.png" className="shareImg mr-4" alt="Share" /></button>
              </RWebShare>
              <button><img src="save.png" className="saveImg" alt="Save" /></button>
            </div>
          </div>
          <div className="flex flex-wrap justify-between">
            <div className="profile flex">
              <img src="Profile.jpg" alt="Author" className="author-avatar w-12 h-12 rounded-full" />
              <div className="ml-3">
                <span className="author-name flex font-bold text-xl text-gray-700">
                  Rahul Saxena
                  <img src="Propic.png" className="w-5 h-5 ml-2 mt-1" alt="Pro Pic" />
                </span>
                <p className="post-date text-gray-500 text-sm">Yesterday</p>
              </div>
            </div>
            <div className="flex justify-around gap-3 items-center mt-2 text-gray-600">
              <div className="flex items-center">
                <button onClick={handleLike}><img src="like.png" className="likeImg mr-1 w-5 h-5" alt="Like" /></button>
                <span>{formatNumber(likeCount)}</span>
              </div>
              <div className="flex items-center">
                <button onClick={() => setCommentCount(commentCount + 1)}><img src="chat.png" className="chatImg w-5 h-5 mr-1" alt="Comment" /></button>
                <span>{commentCount}</span>
              </div>
              <div className="flex items-center">
                <button onClick={() => setViewCount(viewCount + 1)}><img src="view.png" className="viewImg mr-1 w-5 h-5" alt="View" /></button>
                <span>{formatNumber(viewCount)}</span>
              </div>
            </div>
          </div>
          <img
            src="bgpic.png"
            alt="Technology Trends"
            className="mt-4 w-full"
          />
          <p className="mt-4 text-gray-700 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quaerat consequuntur molestias eius ut nobis autem accusamus quo non nihil impedit, excepturi dolor omnis rem tenetur nulla ullam placeat voluptate?
            Aperiam tempora aut nostrum numquam nesciunt, voluptate error. Odit in, eius voluptatibus dicta totam fugit quibusdam veritatis possimus aperiam accusamus veniam delectus consequatur numquam eaque blanditiis, provident tempore nobis rerum.
          </p>
          <p className="mt-4 text-gray-700 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quaerat consequuntur molestias eius ut nobis autem accusamus quo non nihil impedit, excepturi dolor omnis rem tenetur nulla ullam placeat voluptate?
            Aperiam tempora aut nostrum numquam nesciunt, voluptate error. Odit in, eius voluptatibus dicta totam fugit quibusdam veritatis possimus aperiam accusamus veniam delectus consequatur numquam eaque blanditiis, provident tempore nobis rerum.
          </p>
          <a
            href="https://www.simplilearn.com/top-technology-trends-and-jobs-article"
            className="block mt-4 text-blue-500 hover:underline"
          >
            https://www.simplilearn.com/top-technology-trends-and-jobs-article
          </a>
          <p className="mt-4 text-gray-700 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quaerat consequuntur molestias eius ut nobis autem accusamus quo non nihil impedit, excepturi dolor omnis rem tenetur nulla ullam placeat voluptate?
            Aperiam tempora aut nostrum numquam nesciunt, voluptate error. Odit in, eius voluptatibus dicta totam fugit quibusdam veritatis possimus aperiam accusamus veniam delectus consequatur numquam eaque blanditiis, provident tempore nobis rerum.
          </p>
          <p className="mt-4 text-gray-700 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quaerat consequuntur molestias eius ut nobis autem accusamus quo non nihil impedit, excepturi dolor omnis rem tenetur nulla ullam placeat voluptate?
            Aperiam tempora aut nostrum numquam nesciunt, voluptate error. Odit in, eius voluptatibus dicta totam fugit quibusdam veritatis possimus aperiam accusamus veniam delectus consequatur numquam eaque blanditiis, provident tempore nobis rerum.
          </p>
          <BlogComments commentCount={commentCount} addComment={addComment} />
        </div>
      </div>
      <img src="Vector 2.png" alt="Vector" className="footer-img w-full mt-5" />
    </>
  );
}

export default MyBlog;
