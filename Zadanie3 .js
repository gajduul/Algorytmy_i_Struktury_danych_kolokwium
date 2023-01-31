function FindPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        let product = arr[i] * arr[i + 1];
        for (let j = i + 2; j < arr.length; j++) {
            let product1 = arr[j] * arr[j + 1];
            if (product === product1) {
                return [i, j];
            }
        }
    }
    return "Brak par";
}