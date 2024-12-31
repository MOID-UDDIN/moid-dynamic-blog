"use client";

import { useParams } from "next/navigation";
import { useState } from "react";

const blogData: Record<
  number,
  { title: string; content: string; datePublished: string; imageSrc?: string }
> = {
  1: {
    title: "What is Next.js?",
    content:
      "Next.js is a popular React framework that enables developers to build powerful and scalable web applications. It allows for server-side rendering, static site generation, and dynamic routing. With Next.js, websites are optimized for SEO and performance, ensuring quick load times and better user experiences. Next.js also supports API routes, allowing you to build full-stack applications with ease. By using Next.js, developers can take advantage of automatic code splitting, hot reloading, and improved routing for creating high-quality websites. This framework has grown rapidly due to its simplicity and robust feature set, making it a favorite among web developers.",
    datePublished: "31 December 2024",
    imageSrc: "/next.png",
  },
  2: {
    title: "What is Agentic AI?",
    content:
      "Agentic AI is an advanced branch of AI designed to act autonomously in decision-making processes. Unlike traditional AI, which requires manual instructions, agentic AI can learn from its surroundings, adapt to new situations, and make independent choices. It is being utilized in industries such as robotics, customer service, and logistics, where tasks require constant learning and adjustment. These AI systems can set their own goals, develop strategies, and modify behavior based on the environment. The ethical implications of such AI are a topic of ongoing debate, especially regarding autonomy and accountability.",
    datePublished: "31 December 2024",
    imageSrc: "/Agentic.png",
  },
  3: {
    title: "Understanding TypeScript",
    content:
      "TypeScript is a statically typed superset of JavaScript that enhances the development process by adding type annotations and providing better tooling. It allows developers to catch errors early during development, improving code quality and maintainability. With TypeScript, you can define types for variables, functions, and objects, which leads to fewer bugs and more predictable code behavior. TypeScript also enables seamless integration with existing JavaScript codebases, making it a powerful tool for both small and large projects. This language supports modern JavaScript features, such as async/await and modules, while ensuring robust type checking throughout the development lifecycle.",
    datePublished: "31 December 2024",
    imageSrc: "/typescript.png",
  },
  4: {
    title: "What is Python?",
    content:
      "Python is a versatile programming language known for its readability and ease of use. It is widely used for web development, data science, artificial intelligence, and automation. Python's extensive libraries and frameworks, like Django for web development and TensorFlow for machine learning, make it a top choice for both beginners and professionals. Python emphasizes simplicity, allowing developers to focus on problem-solving rather than complex syntax. It also has a vast community that contributes to its growing ecosystem, making Python one of the most popular languages in the world today.",
    datePublished: "31 December 2024",
    imageSrc: "/python.png",
  },
  5: {
    title: "Exploring Machine Learning",
    content:
      "Machine learning is a field of AI that focuses on developing algorithms that allow computers to learn from data. Rather than being explicitly programmed to perform tasks, machine learning systems improve their performance over time through experience. These algorithms are used in applications such as image recognition, recommendation systems, and natural language processing. The most common types of machine learning are supervised learning, unsupervised learning, and reinforcement learning. Each approach is suited to different problem types and data availability. As technology advances, machine learning continues to revolutionize industries from healthcare to finance.",
    datePublished: "31 December 2024",
    imageSrc: "/ml.png",
  },
  6: {
    title: "Introduction to Web Development",
    content:
      "Web development involves the creation of websites and web applications. It encompasses both front-end (client-side) and back-end (server-side) development. Front-end development focuses on the design and user interface, using languages like HTML, CSS, and JavaScript. Back-end development, on the other hand, deals with server-side operations, databases, and server logic, often using languages like Node.js, Python, and Ruby. Web development has grown significantly with the rise of frameworks like React, Vue, and Angular, which simplify the development process and improve user experience.",
    datePublished: "31 December 2024",
    imageSrc: "/webdev.png",
  },
};

const BlogDetail = () => {
  const params = useParams();
  const blogId = params?.id;

  const currentBlog = blogData[Number(blogId) as keyof typeof blogData];

  const [userFeedbacks, setUserFeedbacks] = useState<
    { username: string; feedback: string }[]
  >([]);
  const [nameField, setNameField] = useState<string>("");
  const [commentField, setCommentField] = useState<string>("");

  const submitUserFeedback = () => {
    if (nameField.trim() && commentField.trim()) {
      setUserFeedbacks([
        ...userFeedbacks,
        { username: nameField, feedback: commentField },
      ]);
      setNameField("");
      setCommentField("");
    }
  };

  if (!currentBlog) {
    return <p className="text-center text-red-600">Blog not found.</p>;
  }

  return (
    <div className="p-8 bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen">
      <div className="bg-white shadow-xl rounded-lg overflow-hidden mx-auto max-w-3xl p-6 mt-8">
        <h3 className="text-3xl font-semibold text-blue-800 hover:text-blue-600 mb-4 transition-all">
          {currentBlog.title}
        </h3>
        {currentBlog.imageSrc && (
          <img
            src={currentBlog.imageSrc}
            alt={currentBlog.title}
            className="w-full h-auto rounded-lg mb-4 shadow-md"
          />
        )}
        <p className="text-lg text-gray-700 mb-6">{currentBlog.content}</p>
        <p className="text-sm text-gray-500">
          Published on: {currentBlog.datePublished}
        </p>
      </div>

      <div className="mt-10 max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Feedback</h2>
        {userFeedbacks.length === 0 ? (
          <p className="italic text-gray-500">
            No feedback yet. Be the first to share your thoughts!
          </p>
        ) : (
          <ul className="space-y-4">
            {userFeedbacks.map((feedback, index) => (
              <li
                key={index}
                className="bg-gray-50 p-4 rounded-md shadow-sm text-left"
              >
                <p className="font-semibold text-blue-700">
                  {feedback.username}:
                </p>
                <p className="text-gray-600">{feedback.feedback}</p>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-6">
          <input
            type="text"
            value={nameField}
            onChange={(e) => setNameField(e.target.value)}
            placeholder="Your name..."
            className="border border-gray-300 p-3 rounded w-full mb-4"
          />
          <textarea
            value={commentField}
            onChange={(e) => setCommentField(e.target.value)}
            placeholder="Write your feedback..."
            className="border border-gray-300 p-3 rounded w-full mb-4"
          ></textarea>
          <button
            onClick={submitUserFeedback}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 w-full"
          >
            Submit Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
