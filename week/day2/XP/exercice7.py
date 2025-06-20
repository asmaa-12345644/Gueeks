import random

def get_random_temp():
    return random.randint(-10,40)

def main():
    t = get_random_temp()
    print(f"The temperature right now is {t} degrees Celsius.")

    if (t<0):
        print("Brrr, that’s freezing! Wear some extra layers today.")
    elif(0<=t<16):
        print("Quite chilly! Don’t forget your coat.")
    elif(16<=t<=23):
        print("Nice weather.")
    elif(24<=t<32):
        print("bit warm, stay hydrated.")
    else:
        print("It’s really hot! Stay cool.")

#bonus
def get_random_temp():
    return random.uniform(-10,40)

#bonus
def get_random_temp(season):
    if(season=="Spring"):
        print(random.uniform(10, 20))
    elif(season=="Summer"):
        print(random.uniform(20, 35))
    elif(season=="Autumn"):
        print(random.uniform(5, 20))
    else:
        print(random.uniform(-10, 10))

        

mois=int(input("Enter a month (1-12): "))

print("The season of that Month is ",end="")
if(3<= mois <=5):
    season="Spring"
elif(6<= mois <=8):
    season="Summer"
elif(9<= mois <=11):
    season="Autumn"
else:
    season="Winter"

print(f"Season: {season} a une Temperature: {get_random_temp(season)} °C" )

