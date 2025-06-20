myString="Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"
myList = [s for s in myString.split(", ")]
print(len(myList))


print(myList.sort(reverse=True)) 

letterO=0
noI=0
for word in myList:
    if "o" in word.lower():
        letterO+=1
print(f"Number of names containing the letter 'o': {letterO}")

for word in myList:
    if "i" not in word.lower():
        noI+=1
print(f"Number of names without the letter 'i': {noI}")