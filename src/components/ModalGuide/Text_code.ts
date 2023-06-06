export const textCode = `
# define functions for each operation
def add(x, y):
    return x + y

def subtract(x, y):
    return x - y

def multiply(x, y):
    return x * y

def divide(x, y):
    return x / y

# take user input for numbers and operation
num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))
op = input("Enter operation (+, -, *, /): ")

# perform the selected operation
if op == '+':
    result = add(num1, num2)
elif op == '-':
    result = subtract(num1, num2)
elif op == '*':
    result = multiply(num1, num2)
elif op == '/':
    result = divide(num1, num2)
else:
    print("Invalid operation selected.")
    result = None

# print the result
if result is not None:
    print("Result:", result)
`