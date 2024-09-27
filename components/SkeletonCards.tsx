import React from "react";

type SkeletonCardsProps = {
  quantity: number;
};

export default function SkeletonCards({ quantity }: SkeletonCardsProps) {
  return Array(quantity)
    .fill(0)
    .map((_, index) => (
      <div
        key={index}
        className="mx-12 py-3 px-4 shadow-sm border rounded-md mt-6 animate-pulse"
      >
        <div className="flex items-center gap-x-3 mb-2">
          <div className="bg-gray-300 rounded-full h-12 w-12"></div>
          <div className="h-4 bg-gray-300 rounded w-24"></div>
        </div>
        <div className="h-4 bg-gray-300 rounded w-full"></div>
      </div>
    ));
}
