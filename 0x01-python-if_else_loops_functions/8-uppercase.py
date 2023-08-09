#!/usr/bin/python3

def uppercase(str):
    for ch in str:
        if ord('a') <= ord(ch) <= ord('z'):
            oset = ord('A') - ord('a')
            uppercase_ch = chr(ord(ch) + oset)
            print("{}".format(uppercase_ch), end="")
        else:
            print("{}".format(ch), end="")
    print()
