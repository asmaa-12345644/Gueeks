sequence=input("Enter a sequence of words separated by a comma: ")
l=sorted([se for se in sequence.split(",")])

print((",").join(l))