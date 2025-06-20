family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

cost=0
for key,value in family.items():
    if(value<3):
        price=0
    elif(3<=value<=12):
        price=10
    else:
        price=15
    print(f"{key} d'age {value} =>Ticket price ${price}")
    cost+=price

print("the total cost is ",cost)

#bonus

family_members={}
n=int(input("Combien des membres vous voulez ajoutés: "))
for i in range(n):
    nom=input("Entrez le nom: ")
    age=int(input("Entrez l'age: "))
    family_members[nom]=age

cost=0
for key,value in family_members.items():
    if(value<3):
        cost+=0
    elif(3<=value<=12):
        cost+=10
    else:
        cost+=15
    

print("the total cost is ",cost)