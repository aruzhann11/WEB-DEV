class Animal:
    def __init__(self, name, age, species):
        self.name = name
        self.age = age
        self.species = species

    def birthday(self):
        self.age += 1
        print(f"{self.name} is now {self.age} years old!")

    def speak(self):
        print(f"{self.name} makes a sound")

    def __str__(self):
        return f"{self.species} named {self.name}, age {self.age}"


class Dog(Animal):
    def __init__(self, name, age, breed):
        super().__init__(name, age, "Dog")
        self.breed = breed

    def speak(self):  
        print(f"{self.name} says: Woof!")

    def fetch(self):
        print(f"{self.name} is fetching the ball!")


class Cat(Animal):
    def __init__(self, name, age, color):
        super().__init__(name, age, "Cat")
        self.color = color

    def speak(self): 
        print(f"{self.name} says: Meow!")

    def climb(self):
        print(f"{self.name} climbs the tree!")