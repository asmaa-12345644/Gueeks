import math
import turtle

class Circle:
         def __init__(self,radius=0,diameter=0):
                 if(radius>0):
                         self.radius=radius
                         self.diameter=radius*2
                 elif(diameter>0):
                          self.diameter=diameter
                          self.radius=diameter/2
                 else:
                         self.diameter=diameter
                         self.radius=radius
                 
         def circle_area(self):
                 return math.pi * (self.radius**2)
         
         def __str__(self):
                 return f"Circle with radius={self.radius} and diameter={self.diameter}"
         
         def __add__(self,second):
                  return Circle(self.radius + second.radius)
         
         def __lt__(self, second):
                  return self.diameter <second.diameter

         
         def __eq__(self,second):
                  return self.diameter==second.diameter
           

c1 = Circle(100)
c2 = Circle(50)
l = [c1, c2]
s=sorted(l)

#bonus

turtle.speed(10)
turtle.bgcolor("white")
turtle.penup()


x_start = -150
y_start = 0


for circle in s:
    turtle.goto(x_start, y_start - circle.radius)  
    turtle.pendown()
    turtle.circle(circle.radius)
    turtle.penup()
    x_start += circle.diameter + 20  

turtle.done()