import type Runnable from "@quartz/Runnable";
import type { CTX } from "Command";
import type { Client, EmbedOptions, Message } from "eris";
import type { ConditionalPick } from "type-fest";

export type CommandData = {
    subOnly?: boolean;
}

export type CommandCTX = {
    name: string;
    context: CommandData;
    message: Message;
    client: Client;
    sub: Array<SubCommand>;
}

export type CommandFunc = {
    execute: Runnable<CTX>;
};

export type SubCommand = {
    name: string;
    execute: Runnable<CTX>;
};

export type MessageCreateEventArgs = [Message, Client];

export interface CommandAll extends CommandFunc, CommandCTX {}