import { ITicket } from "../interfaces/ITicket";
import { avoidRateLimit } from "../utils/avoidRateLimit";
import api from "./api";

type funcType = (id: string) => Promise<ITicket>;

export const getTicketById: funcType = async (id) => {
  await avoidRateLimit();
  const response = await api.get(`/ticket/${id}`);

  return response.data;
};
