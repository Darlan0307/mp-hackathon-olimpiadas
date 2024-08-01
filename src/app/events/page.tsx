"use client";

import { useEvents } from "@/hooks/use-events";
import EventItem from "./_components/event-item";
import Loader from "@/components/loader";
import PaginationList from "@/components/pagination-list";

const Events = () => {
  const { dataEvents, currentPage, nextPage, previousPage } = useEvents();

  if (dataEvents.length == 0) return <Loader />;

  return (
    <main className="max-w-[1500px] mx-auto">
      <h1 className="text-xl pl-5 mt-6 mb-6 sm:mt-0 text-center sm:text-left sm:pl-[8vw]">
        List of Games/Events
      </h1>
      <section className="flex flex-wrap gap-5 justify-center items-center h-[70vh] overflow-y-auto [&::-webkit-scrollbar]:hidden">
        {dataEvents.map((data) => (
          <EventItem key={data.id} data={data} />
        ))}
      </section>
      <section className="flex justify-center my-6">
        <PaginationList
          currentPage={currentPage}
          nextPage={nextPage}
          previousPage={previousPage}
        />
      </section>
    </main>
  );
};

export default Events;
