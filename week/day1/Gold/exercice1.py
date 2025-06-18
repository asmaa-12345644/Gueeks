n=int(input("Enter a Month (1 to 12) : "))
while(n<1 or n>12):
    n=int(input("Enter a Month (1 to 12) : "))
print("The season of that Month is ",end="")
if(3<= n <=5):
    print("Spring ")
elif(6<= n <=8):
    print("Summer")
elif(9<= n<=11):
    print("Autumn")
else:
    print("Winter")