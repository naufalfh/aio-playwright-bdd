import { elements } from "./pages/elements";

export const readElement = async ( elementKey ) => {
    for (let item in elements) {
        if (item === elementKey) {
            return elements[item];
        }
    }
}

export const readEnv = async ( key ) => {
    return process.env[key];
}