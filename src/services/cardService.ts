import axios from "axios";
import { Business } from "../interfaces/Business";

const api: string = `${process.env.REACT_APP_API}/cards`;

export function addBusinessCard(newBusinessCard: Business) {
  return axios.post(api, newBusinessCard);
}

export function getCards() {
  return axios.get(api);
}

export function deleteCard(cardId: number) {
  axios.delete(`${api}/${cardId}`);
}

export function getCardDetails(cardId: number) {
  return axios.get(`${api}/${cardId}`);
}

export function editCard(cardId: number, cardDetails: Business) {
  return axios.put(`${api}/${cardId}`, cardDetails);
}
