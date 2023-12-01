#!/usr/bin/python3
"""
Script to send a POST request with an email parameter to a given URL
and display the response body using the requests and sys packages.
"""
import requests
import sys

if __name__ == "__main__":
    # Get URL and email from command line arguments
    url = sys.argv[1]
    email = sys.argv[2]

    # Prepare payload and send POST request
    payload = {'email': email}
    response = requests.post(url, data=payload)

    # Display email and response body
    print("Your email is: {}".format(email))
    print(response.text)
