// lib/api/tickets.ts

import { API_URL } from "../config";
import { Ticket } from "../types/ticket";

type GetTicketsOptions = {
    order?: "asc" | "desc";
};

export async function getTickets(options?: GetTicketsOptions): Promise<Ticket[]> {
    try {
        const params = new URLSearchParams();

        if (options?.order) {
            params.set("order", options.order);
        }

        const url = params.toString()
            ? `${API_URL}/tickets?${params.toString()}`
            : `${API_URL}/tickets`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Failed to fetch tickets");
        }

        return response.json();
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
