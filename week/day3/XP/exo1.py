class Cat:
    def __init__(self,cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age
    
def find_oldest_cat(cat1, cat2, cat3):
         if(cat1.age>cat2.age and cat1.age>cat3.age):
             return cat1
         elif(cat2.age>cat3.age):
             return cat2
         else:
             return cat3
         

        


cat1=Cat("cat1",1)
cat2=Cat("cat2",3)
cat3=Cat("cat3",2)
oldest=find_oldest_cat(cat1,cat2,cat3)
print(f"The oldest cat is {oldest.name}, and is {oldest.age} years old.")


