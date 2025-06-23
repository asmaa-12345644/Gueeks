class Person:
    def __init__(self,first_name,age,last_name=""):
        self.first_name=first_name
        self.age=age
        self.last_name=last_name
    def is_18(self):
        if(self.age>=18):
            return True
        else:
            return False

class Family:
     def __init__(self,last_name):
         self.last_name=last_name
         self.members=[]

     def born(self,first_name, age):
         personne=Person(first_name,age)
         personne.last_name=self.last_name
         self.members.append(personne)
    
     def check_majority(self,first_name):
         for personne in self.members:
             if(personne.first_name == first_name):
                 if personne.is_18():
                     print("You are over 18, your parents Jane and John accept that you will go out with your friends")
                 else:
                     print("Sorry, you are not allowed to go out with your friends.")
        
  
     def family_presentation(self):
         print(self.last_name)
         for p in self.members:
             print(f"First name: {p.first_name} Age: {p.age}")


            
ma_famille = Family("Smith")

ma_famille.born("john", 16)
ma_famille.born("Bob", 20)

   
ma_famille.check_majority("john")  
ma_famille.check_majority("Bob")   


ma_famille.family_presentation()