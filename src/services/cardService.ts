import axios from "axios";
import { Business } from "../interfaces/Business";

const api: string = `${process.env.REACT_APP_API}/cards`;

export function addBusinessCard(newBusinessCard: Business) {
  return axios.post(api, newBusinessCard);
}
