names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']
n=input("Enter your Name")

for i in range(len(names)):
    if(n==names[i]):
        print(i)
        break
