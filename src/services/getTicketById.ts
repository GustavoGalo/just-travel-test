import { ITicket } from "../interfaces/ITicket";
import api from "./api";

type funcType = (id: string) => Promise<ITicket>;

export const getTicketById: funcType = async (id) => {
  const response = await api.get(`/ticket/${id}`);

  return response.data;
};
