import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 bg-white shadow-lg rounded-lg p-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-shrink-0 w-48 h-48">
            <Image
              src="/profile.jpg"
              alt="Profile picture of Moid Uddin"
              width={200}
              height={200}
              className="rounded-full border-4 border-blue-600 shadow-xl"
            />
          </div>

          <div className="flex-1 text-center lg:text-left space-y-6">
            <h2 className="text-4xl font-semibold text-gray-800">
              Hi, I'm <span className="text-blue-600">MOID UDDIN</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              My education includes{" "}
              <span className="font-semibold text-blue-600">
                O-Levels in Science
              </span>{" "}
              and{" "}
              <span className="font-semibold text-blue-600">
                A-Levels in Pre-Engineering
              </span>
              .
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I possess strong skills in{" "}
              <span className="font-semibold text-blue-600">
                HTML, CSS, TypeScript
              </span>
              , and I am also skilled in{" "}
              <span className="font-semibold text-blue-600">speaking</span>.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I have{" "}
              <span className="font-semibold text-blue-600">
                2 years of experience
              </span>{" "}
              working as a Graphic Designer at{" "}
              <span className="font-semibold text-blue-600">CDX</span> and am
              currently employed at{" "}
              <span className="font-semibold text-blue-600">Viral Verse</span>.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I am committed to learning and developing dynamic and
              user-friendly applications, with a particular interest in
              integrating AI solutions into web development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
