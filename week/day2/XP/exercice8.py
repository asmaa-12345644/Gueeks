
active=True
price=10
toppings=[]
while active:
  topping=input("Enter your pizza topping (enter 'quit' when you are finished): ")
  if(topping=="quit"):
     active=False
  else:
    price+=2.50
    toppings.append(topping)
    print(f"Adding {topping} to your pizza.")

print("All the toppings are:", " , ".join(toppings))

print("the total cost of the pizza is: ",price)
#new
  #latest