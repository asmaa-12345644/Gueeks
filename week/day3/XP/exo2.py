class Dog:
    def __init__(self,name,height):
        self.name=name
        self.height=height
    
    def bark(self):
        print(f"{self.name} goes woof!")
    def jump(self):
        print(f"{self.name} jumps {self.height*2} cm high!")


davids_dog =Dog("Max",5)
sarahs_dog=Dog("Anee",8)   

print(f"Davids'dog is {davids_dog.name} with height {davids_dog.height}")
davids_dog.bark()
davids_dog.jump()

print(f"Sarah'dog is {sarahs_dog.name} with height {sarahs_dog.height}")
sarahs_dog.bark()
sarahs_dog.jump()

if(davids_dog.height > sarahs_dog.height):
    print("David's dog has big size than Sarah's dog")
elif davids_dog.height < sarahs_dog.height:
    print("Sarah's dog is bigger than David's dog")
else:
    print("Both dogs are the same height")
