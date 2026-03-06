// I make sure my secret stuff in .env dont leak to the browser and stay in the server

import "server-only";

export const API_URL = process.env.API_URL;