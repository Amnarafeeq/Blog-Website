"use client";
import React, { useState, useEffect } from "react";

const CommentSection = () => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<string[]>([]);

  useEffect(() => {
    const storedComments = localStorage.getItem("comments");
    if (storedComments) {
      try {
        const parsedComments = JSON.parse(storedComments);
        setComments(parsedComments);
      } catch (error) {
        console.error("Error parsing comments", error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const handleAddComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments([comment, ...comments]);
      setComment("");
    }
  };

  const handleDeleteComment = (index: number) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded-md mt-6">
      <h2 className="text-2xl font-bold mb-4">Comment Section</h2>
      <form onSubmit={handleAddComment} className="mb-4">
        <textarea
          className="w-full h-24 p-4 border border-gray-300 rounded-md focus:outline-none "
          placeholder="Write your comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="px-6 py-2 bg-customRed text-white rounded-md hover:bg-red-600"
        >
          Submit Comment
        </button>
      </form>

      <div>
        <h3 className="text-lg font-semibold mb-4">Comments:</h3>
        <div className="space-y-4">
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <div
                key={index}
                className="border border-gray-300 p-4 rounded-md shadow-sm flex justify-between items-center"
              >
                <p className="text-sm text-gray-700">{comment}</p>
                <button
                  onClick={() => handleDeleteComment(index)}
                  className="px-3 py-1 bg-red-500 text-white text-sm rounded-md hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-500">
              No comments yet. Be the first to comment!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
