import { Networking } from "@flamework/networking";

export interface ClientToServerEvents {}

export interface ServerToClientEvents {}

export interface ClientToServerFunctions {}

export interface ServerToClientFunctions {}

export const GlobalEvents = Networking.createEvent<ClientToServerEvents, ServerToClientEvents>();
export const GlobalFunctions = Networking.createFunction<ClientToServerFunctions, ServerToClientFunctions>();
