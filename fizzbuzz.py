#!/usr/bin/env python3
"""
FizzBuzz Application

A classic programming exercise that prints numbers from 1 to 100,
replacing multiples of 3 with "Fizz", multiples of 5 with "Buzz",
and multiples of both with "FizzBuzz".
"""


def fizzbuzz(start=1, end=100):
    """
    Print FizzBuzz sequence for a given range.

    Args:
        start (int): Starting number (default: 1)
        end (int): Ending number (default: 100)
    """
    for num in range(start, end + 1):
        output = ""

        if num % 3 == 0:
            output += "Fizz"
        if num % 5 == 0:
            output += "Buzz"

        print(output if output else num)


def main():
    """Main function to run FizzBuzz."""
    print("FizzBuzz from 1 to 100:")
    print("-" * 30)
    fizzbuzz()


if __name__ == "__main__":
    main()
