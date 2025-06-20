import random

class MyList:
    def __init__(self,listLettres):
          self.listLettres=listLettres

    def reverse(self):
         return self.listLettres[::-1]
    
    def sortListe(self):
         return sorted(self.listLettres)
    
    #bonus
    def second(self):
         return [random.randint(0, 100) for i in range(len(self.listLettres))]
         