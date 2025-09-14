import * as elements from "./pages/elements";

// To get element locator from element file
export const readElement = async ( elementKey ) => {
    for (let item in elements.elements) {
        if (item === elementKey) {
            return elements.elements[item];
        }
    }
}

// To get .env variable value
export const readEnv = async ( value ) => {
    if (value.includes("ENV_")) {
        const envKey = value.replace("ENV_", "");
        return process.env[envKey];
    } else {
        return value;
    }
}

// To access nested properties using a string path like
export const readJsonPath = async (obj, path) => {
  return path
    .replace(/\[(\w+)\]/g, '.$1')  // Convert [0] to .0
    .replace(/^\./, '')            // Remove leading dot
    .split('.')
    .reduce((acc, key) => acc?.[key], obj);
}
