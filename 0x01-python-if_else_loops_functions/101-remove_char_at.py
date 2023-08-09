#!/usr/bin/python3
def remove_char_at(str, n):
    a = ""
    for b in range(len(str)):
        if b != n:
            a = a + str[b]
    return (a)
