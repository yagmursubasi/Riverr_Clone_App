import React from "react";

type TitleProps = {
  query: string | null;
  category: string | null;
};

const Title = ({ query, category }: TitleProps) => {
  return (
    <div className="mb-8">
      <h1 className="text-xl md:text-2xl font-extrabold text-gray-800 mb-2">
        {query
          ? `Search results for "${query}"`
          : category
          ? `Category: "${category}"`
          : "All Gigs"}
      </h1>
      <p className="text-gray-500 text-sm md:text-base">
        {query
          ? `Find top-rated gigs related to "${query}".`
          : category
          ? `Explore the best gigs in the "${category}" category.`
          : "Browse all available gigs from talented freelancers."}
      </p>
      <div className="w-24 h-1 bg-green-500 rounded-full mt-3"></div>
    </div>
  );
};

export default Title;
