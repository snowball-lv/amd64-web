import { writable } from "svelte/store";
import { CType, C_TYPES } from "./ctypes";

export const ALL_TYPES = writable([...C_TYPES]);
export const PARAMS = writable([]);
