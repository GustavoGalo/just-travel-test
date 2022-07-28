import { Pagination } from "antd";
import { useState } from "react";

import { ITicket } from "../interfaces/ITicket";
import { TicketCard } from "./TicketCard";

interface ITicketCardListProps {
  tickets: ITicket[];
}

export const TicketCardList: React.FC<ITicketCardListProps> = ({ tickets }) => {
  const [page, setPage] = useState(1);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
          marginBottom: 30.5,
        }}
      >
        {tickets
          .filter((_, index) => (index + 1) % 10 === page)
          .map((ticket) => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))}
      </div>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <Pagination
          defaultCurrent={page}
          total={tickets.length}
          onChange={setPage}
        />
      </div>
    </>
  );
};
