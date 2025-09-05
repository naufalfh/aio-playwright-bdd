import { elements } from "./pages/elements";

export const readElement = async ( elementKey ) => {
    for (let item in elements) {
        if (item === elementKey) {
            return elements[item];
        }
    }
}

export const readEnv = async ( value ) => {
    if (value.includes("ENV_")) {
        const envKey = value.replace("ENV_", "");
        return process.env[envKey];
    } else {
        return value;
    }
}