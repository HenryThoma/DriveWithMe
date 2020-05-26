export function gasCalculator(rides: number, price: number) {
    if (rides > 0 && price > 0) {
        return rides * price;
    }
    return null;
}
