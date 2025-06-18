number=int(input("Enter a Number: "))
length=int(input("Enter a length: "))
liste=[]
for i in range(length):
    liste.append(number*(i+1))
print(liste)