<?php
class Animal {
    public function makeSound() {
        echo "Some generic sound<br>";
    }
}

class Dog extends Animal {
    public function makeSound() {
        echo "Woof!<br>";
    }
}

class Cat extends Animal {
    public function makeSound() {
        echo "Meow!<br>";
    }
}

// $animals = [new Dog(), new Cat()];
$a=new Dog();
$a->makeSound();


?>