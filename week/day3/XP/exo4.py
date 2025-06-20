class Zoo:
    def __init__(self,zoo_name):
         self.zoo_name=zoo_name
         self.animals = []
    def add_animal(self,new_animal):
              if new_animal not in self.animals:
                   self.animals.append(new_animal)
    
    def get_animals(self):
         for animal in self.animals:
              print(animal,end=" ")

    def sell_animal(self,animal_sold):
         if animal_sold in self.animals:
              self.animals.remove(animal_sold)

    def sort_animals(self):
        d= {}
        for animal in self.animals:
            first_letter = animal[0].upper()
            if first_letter not in d:
                d[first_letter] = []
            d[first_letter].append(animal)
        for letter in d:
            d[letter].sort()
        return d

    def get_groups(self):
         g=self.sort_animals()
         print()
         for key in g:
              print(f"{key}: {g[key]}")

ramat_gan_safari = Zoo("Ramat Gan Safari")


ramat_gan_safari.add_animal("Giraffe")
ramat_gan_safari.add_animal("Bear")
ramat_gan_safari.add_animal("Baboon")
ramat_gan_safari.get_animals()
ramat_gan_safari.sell_animal("Bear")
ramat_gan_safari.get_animals()
ramat_gan_safari.sort_animals()

ramat_gan_safari.get_groups()
                   
