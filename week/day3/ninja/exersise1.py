import math

class Circle:
    def __init__(self,radius=1.0):
        self.radius=radius
    def compute_perimeter(self):
        return 2*math.pi * self.radius

    def compute_area(self):
        return math.pi*(self.radius ** 2)

    def print_definition(self):
        print("A circle is a set of all points in a plane that are at a fixed distance (radius) from a given point (center).")

