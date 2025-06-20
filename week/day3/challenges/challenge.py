class Farm:
    def __init__(self,farm_name):
        self.name=farm_name
        self.animals={}

    def add_animal(self,animal_type,count=1):
        for i in range(count):
            if animal_type in self.animals:
                    count+=1
            else:
                 self.animals[animal_type]=count

    def get_info(self):
         info=f"The farm's name is {self.name}\n "
         for key,value in self.animals.items():
              info+= f"{key} : {value} \n"
         info+= "E-I-E-I-O!"
         return info
    
    #bonus
    def get_animal_types(self):
         return sorted(self.animals)
              
    def get_short_info(self):
         s=f"{self.name}'s farm has "
  
         animal_list=[]
         for animal in self.get_animal_types():
              if self.animals[animal]>1:
                 animal_list.append(f"{animal}s")
              else:
                 animal_list.append(animal)

         if len(animal_list) == 1:
                s += animal_list[0]
         else:
                s += ", ".join(animal_list[:-1])
                s += " and " + animal_list[-1]
     
         return s+"."


         
macdonald = Farm("McDonald")
macdonald.add_animal('cow', 5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
print(macdonald.get_info())





