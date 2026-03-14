from models import Animal, Dog, Cat


def main():
    dog1 = Dog("Bobik", 3, "Labrador")
    cat1 = Cat("Murka", 2, "White")
    animal1 = Animal("Generic", 5, "Unknown")

    animals = [dog1, cat1, animal1]

    for animal in animals:
        print(animal)
        animal.speak()  
        animal.birthday()
        print()


if __name__ == "__main__":
    main()