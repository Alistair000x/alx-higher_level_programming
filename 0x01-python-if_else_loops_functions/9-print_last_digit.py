#!/usr/bin/python3

def print_last_digit(n):
    last_digit = abs(n) % 10
    print("{}".format(last_digit), end="")
    return last_digit
