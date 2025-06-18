word=input("Enter a String: ")
lettres=[]
lettres.append(word[0])
for i in range(1,len(word)):
        if(word[i]!=word[i-1]):
           lettres.append(word[i])

        
print("".join(lettres))

