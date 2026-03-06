// lib/actions/actions.ts

"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Priority } from "../types/ticket";
import { API_URL } from "../config";

// Add a new ticket
export async function addTicket(formData: FormData) {
    // Everything here is as string becuase even if something ia a number it is sent from the form as string
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const email = formData.get("email") as string;
    const priority = formData.get("priority") as Priority;

    const newTicket = {
        title,
        body: description,
        user_email: email,
        priority,
    };

    const res = await fetch(`${API_URL}/tickets`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTicket),
    });

    const data = await res.json();
    console.log(data);

    // Refresh all tickets
    revalidatePath("/tickets");
    // Send user to this url
    redirect("/tickets");
}

// Update existing ticket
export async function updateTicket(formData: FormData) {
    // get id to be able to fetch correct endpoint
    const id = formData.get("id") as string;
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const email = formData.get("email") as string;
    const priority = formData.get("priority") as Priority;

    const newTicket = {
        title,
        body: description,
        user_email: email,
        priority,
    };

    const res = await fetch(`${API_URL}/tickets/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTicket),
    });

    const data = await res.json();
    console.log(data);

    revalidatePath("/tickets");
    redirect("/tickets");
}