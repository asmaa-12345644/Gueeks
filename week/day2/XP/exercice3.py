brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": "blue",
        "Spain": "red",
        "US": ["pink", "green"]
    }
}

brand["number_stores"] = 2

print("Zara's clients are: ", end="")
for i in range(len(brand["type_of_clothes"])):
    print(f"{brand['type_of_clothes'][i]} ", end="")  
print()  

brand["country_creation"] = "Spain"

if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")

del brand["creation_date"]

print(brand["international_competitors"][-1])       
print(brand["major_color"]["US"])                     
print(len(brand.keys()))                              
print(brand.keys())                               


#bonus

more_on_zara={"creation_date":1975,"number_stores":20}

brand.update(more_on_zara)