def get_full_name(first_name,last_name,middle_name="None"):
    if(middle_name=="None"):
        return f"{first_name} {last_name}"
    else:
        return f"{first_name} {middle_name} {last_name}"

print(get_full_name("john","hooker","lee"))

print(get_full_name("bruce","lee"))
