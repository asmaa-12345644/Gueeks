import random
def randomNumbers(number):
    r=random.randint(1, 100)
    if(r==number):
        print("Success!")
    else:
        print(f"Fail! Your number: {number}, Random number: {r}")

randomNumbers(1)