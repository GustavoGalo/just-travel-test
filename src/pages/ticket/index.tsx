import { Divider, Space } from "antd";
import { GetServerSideProps } from "next";
import { ITicket } from "../../interfaces/ITicket";
import { listTickets } from "../../services/listTickets";

interface IPageProps {
  tickets: ITicket[];
}

const Ticket: React.FC<IPageProps> = ({ tickets }) => {
  return (
    <div>
      {tickets?.map((ticket) => (
        <>
          <Space key={ticket.id}>{ticket.name}</Space>
          <Divider />
        </>
      ))}
    </div>
  );
};

export default Ticket;

export const getServerSideProps: GetServerSideProps = async () => {
  const tickets = await listTickets();

  return {
    props: {
      tickets,
    },
  };
};
