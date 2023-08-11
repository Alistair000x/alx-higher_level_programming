#!/usr/bin/python3
if __name__ == "__main__":
    from sys import argv
    i = len(argv)
    
    if i == 1:
        print(0)
    elif i > 1:
        total = 0
        for j in range(1, i):
            total += int(argv[j])
        print("{:d}".format(total))

