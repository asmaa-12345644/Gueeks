birthdays={"Asmaa":"2006/02/25","Kelly":"2015/06/13","Sanchez":"1988/10/30",
           "Mike":"1990/12/07","Rufus":"2000/09/15"
           }
for names in birthdays:
    print(names,end=" ")

name=input("\nGive me a person's name: ").title()

if name in birthdays:
    print(f"{name}'s birthday is {birthdays[name]}")
else:
    print(f"Sorry, we don't have the birthday information for {name}")
