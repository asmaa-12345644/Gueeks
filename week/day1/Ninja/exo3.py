paragraphe="Python is a popular programming language.It was created by Guido van Rossum.It supports multiple programming paradigms,such as object-oriented and functional programming."
characters=len(paragraphe)
print("Nombre des caracteres dans le paragraphe est: ",characters)
sentences=len([s for s in paragraphe.split(".") if s.strip() != ""])
print("Nombre des phrases est: ",sentences)
words=paragraphe.split()
lenWords=len(words)
print("Nombre des mots est: ",lenWords)
uniqueWords = set(word.strip(".,").lower() for word in words)
lenUniqueWords = len(uniqueWords)
print("Nombre de mots uniques est : ",lenUniqueWords)

#bonus
non_whitespace=len(paragraphe.replace(" ", ""))
print("Nombre de caractères non blancs: ",non_whitespace)
#bonus
avg_words_per_sentence = lenWords / sentences
print("Le nombre moyen de mots par phrase: ",avg_words_per_sentence)
