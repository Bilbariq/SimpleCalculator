#include <stdio.h>
#include <stdlib.h>
#include <string.h>

double calculate(double a, double b, char operator) {
    switch (operator) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
        case '%': return (int)a % (int)b;
        default: return 0;
    }
}

int main() {
    char input[100];
    double num1, num2, result;
    char operator;

    printf("Enter calculation (e.g., 5 + 3): ");
    fgets(input, sizeof(input), stdin);
    sscanf(input, "%lf %c %lf", &num1, &operator, &num2);

    result = calculate(num1, num2, operator);
    printf("Result: %.2lf\n", result);

    return 0;
}
