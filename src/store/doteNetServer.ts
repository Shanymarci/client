import { HTTP } from "../Services/http";

const PORT = 5100;

const apiUrl = `http://localhost:${PORT}`;

export const http = new HTTP(apiUrl);