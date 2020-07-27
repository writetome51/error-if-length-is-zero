export function errorIfLengthIsZero(arg) {
    if (arg.length === 0) throw new Error("Input must have length greater than zero");
}
