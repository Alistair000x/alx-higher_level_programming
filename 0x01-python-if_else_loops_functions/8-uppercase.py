#!/usr/bin/python3
def uppercase(str):
    ns = ""
    for j in str:
        if 'a' <= j <= 'z':
            ns += chr((ord(j) - ord('a')) + ord('A'))
        else:
            ns += j
    print("{}".format(ns))
