import usuario from "./usuario";

export default new Array(12).fill(true).map(() => ({
    ...usuario,
}));