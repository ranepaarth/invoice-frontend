import React from "react";

const CardWrapper = ({ children, cardHeader, cardDescription }) => {
  return (
    <section className="w-full p-4">
      <article className="bg-white rounded-md">
        <div className="space-y-2 mb-5">
          <h3 className="text-lg sm:text-xl font-semibold border-b-2 w-fit pr-4 border-blue-500 text-black">
            {cardHeader}
          </h3>
          <p className="text-sm font-medium text-neutral-500">
            {cardDescription}
          </p>
        </div>
        <div className="flex flex-col gap-4">{children}</div>
      </article>
    </section>
  );
};

export default CardWrapper;
