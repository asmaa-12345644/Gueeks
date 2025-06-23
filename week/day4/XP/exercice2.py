class Dog:
    def __init__(self, name, age, weight):
        self.name=name
        self.age=age
        self.weight=weight
    
    def bark(self):
        return f"{self.name} is barking"
    
    def run_speed(self):
        return f"{self.name} runs {self.weight/(self.age*10)}"
    
    def fight(self, other_dog):
        first = self.run_speed() * self.weight
        second = other_dog.run_speed() * other_dog.weight

        if first > second:
            print(f"The winner is {self.name}")
        else:
            print(f"The winner is {other_dog.name}")

dog1=Dog("jack",2,12)
dog2=Dog("Tom",3,15)

print(dog1.bark())
print(dog2.run_speed())
dog1.fight(dog2)