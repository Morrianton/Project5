// TypeScript 2.6

export interface Transaction {
    success: boolean;
    // resultBalance will be unchanged from the previous balance when success is false.
    amount: number;
    // amount will be positive for deposits and negative for withdrawals:
    resultBalance: number;
    transactionDate: Date;
    description: string;
    errorMessage: string;
    // errorMessage will be an empty string when success is true:
}