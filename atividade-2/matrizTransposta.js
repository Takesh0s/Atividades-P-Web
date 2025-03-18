function transporMatriz(A) {
    console.log("Matriz original:");
    console.table(A);

    let transposta = A[0].map((_, colIndex) => A.map(row => row[colIndex]));

    console.log("Matriz transposta:");
    console.table(transposta);

    return transposta;
}

const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

transporMatriz(matriz);
