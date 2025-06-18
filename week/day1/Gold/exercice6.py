import random
w=0
l=0
active=True
while active:
    n=input("\nEnter a number from 1 to 9 (enter 'quit' when you are finished): ")
    if n=="quit":
        active=False
    else:
            r=random.randint(1,9)
            if (int(n)==r):
                print("Winner")
                w+=1
            else:
                print("Better luck next time.")
                l+=1
print(f"You won {w} Times ")
print(f"You lost {l} Times ")