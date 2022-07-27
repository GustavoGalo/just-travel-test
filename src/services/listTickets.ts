import { ITicket } from "../interfaces/ITicket";
import api from "./api";

type funcType = () => Promise<ITicket[]>;

export const listTickets: funcType = async () => {
  const response = await api.get("/ticket");

  return response.data;
};
