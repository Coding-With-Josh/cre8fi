"use client";

import { useState } from "react";

interface Post {
  id: number;
  content: string;
  comments: string[]; // Array to hold comments for each post
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
    <div className="flex flex-col lg:flex-row min-h-screen">
      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-6 ">
          {/* User Profiles */}
          <section className="mb-24">
            <div className="flex space-x-4 mt-4">
              <div className="  ">
                <img
                  src="/assets/Rectangle 34625155.png"
                  alt="Esther Howard"
                  className="m-5 rounded-full object-cover   "
                />
                <div className="pl-5">
                  <p className="text-sm text-lightGray ">Esther Howard</p>
                </div>
              </div>
              <div className="  ">
                <img
                  src="/assets/Profile img 1.png"
                  alt="Arlene McCoy"
                  className="m-5  rounded-full object-cover   "
                />
                <div className="pl-5">
                  <p className="text-sm text-lightGray ">Arlene McCoy</p>
                </div>
              </div>
              <div className="  space-x-3">
                <img
                  src="/assets/Profile img 1 (1).png"
                  alt="Robert Fox"
                  className="m-5 rounded-full object-cover   "
                />
                <div className="pl-5">
                  <p className="text-sm text-lightGray ">Robert Fox</p>
                </div>
              </div>
              <div className="  space-x-3">
                <img
                  src="/assets/Profile img 1 (2).png"
                  alt="Flores"
                  className="m-5 rounded-full object-cover   "
                />
                <div className="pl-5">
                  <p className="text-sm text-lightGray ">Flores</p>
                </div>
              </div>

              <div className="  space-x-3">
                <img
                  src="/assets/Add story f 7.png"
                  alt="User 1"
                  className="m-5 rounded-full object-cover   "
                />
                <div className="pl-5">
                  <p className="text-sm text-lightGray ">Annette Black</p>
                </div>
              </div>
            </div>
          </section>

          {/* Create Post Section */}
          <section className="mb-10">
            <div className="mt-4 p-6 bg-[#212330] rounded-[10px] ">
              <div className="mt-4 flex items-start space-x-2">
                <img
                  src="/assets/Rectangle 40068.png"
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full"
                />
                <textarea
                  value={newPost}
                  onChange={(e) => setNewPost(e.target.value)}
                  placeholder="What's on your mind?"
                  className="flex-1 pt-4 pl-4 border bg-[#212330] border-lightGray rounded-[10px]"
                />
              </div>

              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center space-x-4">
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
                  className="bg-customBlue text-lightGray px-4 py-2 rounded-[10px]"
                >
                  Create Post
                </button>
              </div>
            </div>
          </section>

          {/* Display Created Posts */}
          <section className="mt-8">
            <div className="mt-4 space-y-4">
              {posts.length > 0 ? (
                posts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-[#212330] border border-lightGray p-4 rounded-[20px] shadow-md"
                  >
                    <p className="text-lightGray mb-4">{post.content}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex space-x-6">
                        <button className="flex items-center text-lightGray focus:outline-none">
                          <img
                            src="/assets/heart.png"
                            alt="Like"
                            className="w-5 h-5 mr-2"
                          />
                          <span className="text-sm">Like</span>
                        </button>

                        {/* Comment Icon */}
                        <button className="flex items-center text-lightGray focus:outline-none">
                          <img
                            src="/assets/message-2.png"
                            alt="Comment"
                            className="w-5 h-5 mr-2"
                          />
                          <span className="text-sm">Comment</span>
                        </button>
                      </div>

                      <button className="flex items-center text-lightGray focus:outline-none">
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
                      {/* Comment Input */}
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
                          className="flex-1 pt-2 pl-4 border bg-[#212330] border-lightGray rounded-[10px]"
                        />
                      </div>
                      <div className="flex justify-end mt-2">
                        <button
                          onClick={() => handleCreateComment(post.id)} // Pass the post id
                          className="bg-customBlue text-lightGray px-4 py-2 rounded-[10px]"
                        >
                          Comment
                        </button>
                      </div>

                      {/* Display Comments */}
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
      {/* Sidebar: People You Might Know & Suggested Pages */}
      <div className="w-[350px]   text-lightGray">
        <div className=" border bg-[#1b1c22] p-6 m-6">
          <section className="mb-10  ">
            <h3 className="text-lg font-semibold mb-4">
              People You Might Know
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img
                  src="/assets/Rectangle 34625155.png"
                  alt="User 1"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-medium">John Doe</p>
                  <button className="text-customBlue text-sm">
                    Add Friend
                  </button>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <img
                  src="/assets/user2.png"
                  alt="User 2"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-medium">Jane Smith</p>
                  <button className="text-customBlue text-sm">
                    Add Friend
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className=" border bg-[#1b1c22] p-6 m-6">
          <section className="">
            <h3 className="text-lg font-semibold mb-4">Suggested Pages</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img
                  src="/assets/page1.png"
                  alt="Page 1"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-medium">Tech World</p>
                  <button className="text-customBlue text-sm">Like Page</button>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <img
                  src="/assets/page2.png"
                  alt="Page 2"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-medium">Fitness Hub</p>
                  <button className="text-customBlue text-sm">Like Page</button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
