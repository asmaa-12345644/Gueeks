word=input("Enter a word: ")
d={}

l=[]

for i in range(len(word)):  
     if word[i] not in d:
          l=[i]
          
          for j in range(i+1,len(word)):
                if(word[i]==word[j]):
                    l.append(j)
                
          d[word[i]]=l

print(d)


