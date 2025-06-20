import random

def throw_dice():
   return random.randint(1,6)

def throw_until_doubles():
   dice1=throw_dice()
   dice2=throw_dice()
   total=1
   while(dice1 != dice2):
         total+=1
         dice1=throw_dice()
         dice2=throw_dice()

   return total

def main():
    collections= []
    for i in range(100):
        collection = throw_until_doubles()
        collections.append(collection)
    print(f"It took in total to reach 100 doubles {sum(collections)} throws")
    print(f"The average amount of throws is {(sum(collections)/len(collections)):.2f}")

main()
