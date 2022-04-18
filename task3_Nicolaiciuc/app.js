const array = [
    {
        x: 1,
        y: 2,
    },
    {
        x: 3,
        y: 4,
    },
    {
        x: 5,
        y: null,
    },
    {
        x: undefined,
        y: 6,
    },
]

console.log(
    array
        .filter(({x, y}) => typeof x === "number" && typeof y === "number")
        .map(({x, y}) => ({x, y}))
)