import React from "react";

const CategoryCard:React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-neutral-700">
      <div className="bg-neutral-700 rounded-lg p-8 shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Category Card</h1>
        <input
          type="text"
          placeholder="Enter category Name"
          className="w-full bg-gray-200 border border-gray-300 rounded mb-4 p-2"
        />
        <textarea
          placeholder="Enter description"
          className="w-full bg-gray-200 border border-gray-300 rounded mb-4 p-2"
          rows={4}
        ></textarea>
        <button
          className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;