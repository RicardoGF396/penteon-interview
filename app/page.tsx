"use client";

import { useEffect } from "react";
import Card from "@/components/Card";
import ErrorFetching from "@/components/ErrorFetching";
import SkeletonCards from "@/components/SkeletonCards";
import { useInfiniteScrollCardsData } from "@/hooks";
import { useInView } from "react-intersection-observer";
import { twMerge } from "tailwind-merge";

export default function Home() {
  const {
    data: cardList,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    refetch,
  } = useInfiniteScrollCardsData();

  const { ref, inView } = useInView();

  useEffect(() => {
    /* Check the view to start fetching new data */
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage, isFetchingNextPage]);

  const renderCards = () => (
    <div>
      {cardList &&
        cardList.pages.map((page, index) => (
          <div key={index}>
            {page.data.map((card) => (
              <Card
                key={card.id}
                image={card.image}
                fullname={card.fullname}
                catFact={card.funFactDescription}
              />
            ))}
          </div>
        ))}
      <div ref={ref}>
        {isFetchingNextPage && <SkeletonCards quantity={4} />}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (status) {
      case "loading":
        return <SkeletonCards quantity={9} />;
      case "error":
        return <ErrorFetching refetch={refetch} />;
      case "success":
        return renderCards();
      default:
        return null;
    }
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center background-pattern">
      <div
        className={twMerge(
          "w-[752px] bg-[#F9FAFB] h-screen border pb-6",
          cardList?.pages ? "overflow-y-auto" : "overflow-hidden"
        )}
      >
        {renderContent()}
      </div>
    </div>
  );
}
