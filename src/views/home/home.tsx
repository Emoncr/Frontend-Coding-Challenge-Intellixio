import { createStyledLink } from "@/utils/createStyledLink";
import React from "react";

const PRODUCTS_LINK_TEXT = "Products";
const USER_AGENT_LINK_TEXT = "User Agent";

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100vh]">
      <div className="text-center">
        {createStyledLink("/products", PRODUCTS_LINK_TEXT)}
        {createStyledLink("/user-agent", USER_AGENT_LINK_TEXT)}
      </div>

      {/* Problem solutions */}
      <div className="max-w-2xl mx-auto p-6 bg-gray-100 rounded-lg mt-10 ">
        <div className="space-y-8">
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="text-lg font-semibold text-gray-800">
              {" Problem 1 Solution:"}
            </h4>
            <p className="mt-2 text-gray-600">
              {" I solved the first problem using query params."}
            </p>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <h4 className="text-lg font-semibold text-gray-800">
              {"Problem 2 Solution:"}
            </h4>
            <p className="mt-2 text-gray-600">
              {
                "Second problem solved by using server side rendering(ssr) in user agent page."
              }
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-800">
              {"Thank you :)"}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};
