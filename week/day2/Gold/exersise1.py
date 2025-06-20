birthdays={"Asmaa":"2006/02/25","Kelly":"2015/06/13","Sanchez":"1988/10/30",
           "Mike":"1990/12/07","Rufus":"2000/09/15"
           }

print("Welcome\nYou can look up the birthdays of the people in the list!")
name=input("Give me a person's name: ").title()

if name in birthdays:
    print(f"The birthday of {name} is {birthdays[name]}")