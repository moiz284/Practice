<?php
class Manufacturer {
    public $name;
    public $country;

    public function __construct($name, $country) {
        $this->name = $name;
        $this->country = $country;
        echo "Manufacturer: {$this->name} from {$this->country} created.<br>";
    }
    public function getName(){
        return $this->name;
    }
}
class car extends Manufacturer {
    public $color;
    public function setColor($color){
        $this->color = $color;
    }
    public function getColor(){
        return $this->color;
    }
    
    public function __construct($name, $country, $color) {
        parent:: __construct($name, $country);
        $this->color = "red"; // Default color
        echo "Car class initialized.<br>";
    }
    
    
}
$c= new car("Toyota", "Japan","blue");
// $c->setColor("blue");
echo "The car color is: " . $c->getColor(); 
?>