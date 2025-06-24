def longest(word):
    d={}
    l=[se for se in word.split(" ")]
    for w in l:
        d[w]=len(w)

    max=0
    chaine=""
    for key,value in d.items():
        if  value>max:
            max=value
            chaine=key
    print(chaine)

longest("Margaret's toy is a pretty doll.")
