"use client";

import { useEvents } from "@/hooks/use-events";
import EventItem from "./_components/event-item";
import Loader from "@/components/loader";
import PaginationList from "@/components/pagination-list";

const Events = () => {
  const { dataEvents, currentPage, nextPage, previousPage } = useEvents();

  if (dataEvents.length == 0) return <Loader />;

  return (
    <main>
      <h1 className="text-xl pl-5 my-6 text-center sm:text-left">
        List of Games/Events
      </h1>
      <section className="flex flex-wrap gap-5 justify-center items-center">
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
