export function shuffle<T> (_: T, __: T): number {
    return 2 * Math.random() - 1;
}

export function randomNum(min=0, max: number) {
    return Math.floor(Math.random() * max + min)
}

export function randomElement<T>(arr: T[]): T {
    if (arr.length === 0) { throw new Error("Sadness") }
    return arr[Math.floor(Math.random() * arr.length)]
}