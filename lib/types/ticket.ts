// lib/types/ticket.ts

export type Priority = 'low' | 'medium' | 'high'

export interface Ticket {
    id: number;
    title: string;
    body: string;
    priority: Priority;
    user_email: string;
}