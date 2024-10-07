"use client";

import { useState } from "react";

interface Post {
  id: number;
  content: string;
  comments: string[];
}

const DashboardPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPost, setNewPost] = useState("");
  const [newComment, setNewComment] = useState("");

  const handleCreatePost = () => {
    if (newPost.trim()) {
      setPosts([
        ...posts,
        { id: posts.length + 1, content: newPost, comments: [] },
      ]);
      setNewPost("");
    }
  };

  const handleCreateComment = (postId: number) => {
    if (newComment.trim()) {
      const updatedPosts = posts.map((post) => {
        if (post.id === postId) {
          return { ...post, comments: [...post.comments, newComment] };
        }
        return post;
      });
      setPosts(updatedPosts);
      setNewComment("");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-6">
          {/* User Profiles */}
          <section className="mb-8">
            <div className="flex flex-wrap justify-start items-center gap-4 mt-4">
              {[
                {
                  name: "Esther Howard",
                  img: "/assets/Rectangle 34625155.png",
                },
                { name: "Arlene McCoy", img: "/assets/Profile img 1.png" },
                { name: "Robert Fox", img: "/assets/Profile img 1 (1).png" },
                { name: "Flores", img: "/assets/Profile img 1 (2).png" },
                { name: "Annette Black", img: "/assets/Add story f 7.png" },
              ].map((profile, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img
                    src={profile.img}
                    alt={profile.name}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover"
                  />
                  <p className="text-sm text-lightGray">{profile.name}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Create Post Section */}
          <section className="mb-10">
            <div className="p-6 bg-[#212330] rounded-lg">
              <div className="flex items-start space-x-2">
                <img
                  src="/assets/Rectangle 40068.png"
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full"
                />
                <textarea
                  value={newPost}
                  onChange={(e) => setNewPost(e.target.value)}
                  placeholder="What's on your mind?"
                  className="flex-1 pt-4 pl-4 bg-[#212330] border border-lightGray rounded-lg"
                />
              </div>

              <div className="flex items-center justify-between mt-2">
                <div className="flex space-x-4">
                  <button className="focus:outline-none">
                    <img
                      src="/assets/gallery.png"
                      alt="Add Image"
                      className="w-6 h-6"
                    />
                  </button>
                  <button className="focus:outline-none">
                    <img
                      src="/assets/video-square.png"
                      alt="Add Video"
                      className="w-6 h-6"
                    />
                  </button>
                  <button className="focus:outline-none">
                    <img
                      src="/assets/calendar.png"
                      alt="Add Event"
                      className="w-6 h-6"
                    />
                  </button>
                </div>
                <button
                  onClick={handleCreatePost}
                  className="bg-customBlue text-lightGray px-4 py-2 rounded-lg"
                >
                  Create Post
                </button>
              </div>
            </div>
          </section>

          {/* Display Created Posts */}
          <section>
            <div className="space-y-4">
              {posts.length > 0 ? (
                posts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-[#212330] border border-lightGray p-4 rounded-lg shadow-md"
                  >
                    <p className="text-lightGray mb-4">{post.content}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex space-x-6">
                        <button className="flex items-center text-lightGray">
                          <img
                            src="/assets/heart.png"
                            alt="Like"
                            className="w-5 h-5 mr-2"
                          />
                          <span className="text-sm">Like</span>
                        </button>

                        <button className="flex items-center text-lightGray">
                          <img
                            src="/assets/message-2.png"
                            alt="Comment"
                            className="w-5 h-5 mr-2"
                          />
                          <span className="text-sm">Comment</span>
                        </button>

                        <button className="flex items-center text-lightGray">
                          <img
                            src="/assets/retweeet.png"
                            alt="Retweet"
                            className="w-5 h-5 mr-2"
                          />
                          <span className="text-sm">Retweet</span>
                        </button>
                      </div>

                      <button className="flex items-center text-lightGray">
                        <img
                          src="/assets/Icon set.png"
                          alt="Share"
                          className="w-5 h-5 mr-2"
                        />
                        <span className="text-sm">Share</span>
                      </button>
                    </div>

                    {/* Comments Section */}
                    <div className="mt-4">
                      <div className="flex items-start space-x-4">
                        <img
                          src="/assets/Rectangle 40068.png"
                          alt="User Avatar"
                          className="w-10 h-10 rounded-full"
                        />
                        <textarea
                          value={newComment}
                          onChange={(e) => setNewComment(e.target.value)}
                          placeholder="Write your comment..."
                          className="flex-1 pt-2 pl-4 bg-[#212330] border border-lightGray rounded-lg"
                        />
                      </div>
                      <div className="flex justify-end mt-2">
                        <button
                          onClick={() => handleCreateComment(post.id)}
                          className="bg-customBlue text-lightGray px-4 py-2 rounded-lg"
                        >
                          Comment
                        </button>
                      </div>

                      <div className="mt-2">
                        {post.comments.length > 0 ? (
                          post.comments.map((comment, index) => (
                            <div key={index} className="text-lightGray mt-1">
                              <span className="font-semibold">Comment:</span>{" "}
                              {comment}
                            </div>
                          ))
                        ) : (
                          <p className="text-gray-600 mt-1">No comments yet.</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-600">No posts yet.</p>
              )}
            </div>
          </section>
        </main>
      </div>

      {/* Sidebar */}
      <div className="w-full lg:w-[350px]  mr-24  text-lightGray">
        <div className=" bg-[#1b1c22]  p-6 m-6 rounded-[10px] shadow-lg">
          <section className="mb-10">
            <h3 className="text-lg font-semibold mb-4">
              People You Might Know
            </h3>
            <div className="space-y-4">
              {[
                { name: "Bessie", img: "/assets/Profile img 1 (3).png" },
                { name: "Edwards", img: "/assets/Profile img 1 (4).png" },
                {
                  name: "Savannah Nguyen",
                  img: "/assets/Profile img 1 (6).png",
                },
                { name: "Ronald", img: "/assets/Profile img 1 (1).png" },
                { name: "Jerome", img: "/assets/Profile img 1 (7).png" },
                { name: "Dianne Russell", img: "/assets/Profile img 1.png" },
              ].map((person, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <img
                    src={person.img}
                    alt={person.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-medium">{person.name}</p>
                    <button className="text-customBlue text-sm">
                      Add Friend
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
        <div className=" bg-[#1b1c22] p-6 m-6 rounded-[10px] shadow-lg">
          <section>
            <h3 className="text-lg font-semibold mb-4">Suggested Pages</h3>
            <div className="space-y-4">
              {[
                {
                  name: "Graphic Design",
                  imgSrc: "/assets/Profile img 1 (9).png",
                },
                {
                  name: "Technology news update",
                  imgSrc: "/assets/Profile img 1 (10).png",
                },
                {
                  name: "Freelancing tips",
                  imgSrc: "/assets/Profile img 1 (11).png",
                },
                { name: "Marketing", imgSrc: "/assets/Profile img 1 (12).png" },
                {
                  name: "Blender tutorials",
                  imgSrc: "/assets/Profile img 1 (13).png",
                },
                {
                  name: "Power of learning",
                  imgSrc: "/assets/Profile img 1 (14).png",
                },
              ].map((page, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-2 hover:bg-[#2a2b30] rounded transition duration-200"
                >
                  <img
                    src={page.imgSrc}
                    alt={page.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-medium text-lightGray">{page.name}</p>
                    <button className="text-customBlue text-sm hover:underline focus:outline-none">
                      Like Page
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <button className="text-sm font-semibold text-customBlue hover:underline focus:outline-none">
                View All
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
