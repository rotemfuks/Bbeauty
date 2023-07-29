import axios from "axios";
import { Card } from "../interfaces/Card";

const api: string = `${process.env.REACT_APP_API}/cards`;

export function addCard(newBusinessCard: Card) {
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

export function editCard(cardId: number, cardDetails: Card) {
  return axios.put(`${api}/${cardId}`, cardDetails);
}
