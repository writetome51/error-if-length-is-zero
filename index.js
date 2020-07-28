export function errorIfLengthIsZero(arg) {
    if (!(arg.length) || arg.length < 1) throw new Error("Input must have length greater than zero");
}
