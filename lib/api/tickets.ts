// lib/api/tickets.ts

import { API_URL } from "../config";
import { Ticket } from "../types/ticket";

export async function getTickets(): Promise<Ticket[]> {

    try {
        const response = await fetch(`${API_URL}/tickets`)
        //Lägga till cache

        if (!response.ok) {
            throw new Error("Failed to fetch tickets")
        }

        return response.json()

    } catch (error) {
        console.error("Error while fetching tickets: ", error);
        throw error;
    }

};

export async function getTicket({
    id,
}: {
    id: string;
}): Promise<Ticket> {
    try {
        const response = await fetch(`${API_URL}/tickets/${id}`)
        //Lägga till cache

        if (!response.ok) {
            console.log(response);
            throw new Error("Could not fetch ticket");
        }

        return response.json()

    } catch (error) {
        console.error("Error while fetching ticket: ", error);
        throw error;
    }

}
