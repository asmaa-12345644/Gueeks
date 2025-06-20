names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']

n=input("Enter your name: ")

if n.title() in names:
    for i, name in enumerate(names):
        if n.title() == name:
            print(i)
            break
else:
    print("That name is not in the list")
