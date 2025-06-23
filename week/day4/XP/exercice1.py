class Pets():
    def __init__(self, list_animals):
        self.animals = list_animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'
    

class Siamese(Cat):
    def sing(self, sounds):
            return f'{sounds}'
        

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'
    
    
bengal=Bengal("maxi",2)
chartreux=Chartreux("bob",1)
siamese=Siamese("zoey",3)

all_cats = [bengal, chartreux, siamese]

sara_pets=Pets(all_cats)

sara_pets.walk()
