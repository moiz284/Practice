<?php
Interface Auth{
    public function Login($userName, $password);
}

?>
<?php
class Person{
    public $name;
    public $email;

    public function __construct($name,$email){
        $this->name= $name;
        $this->email= $email;

    }
    public function greet(){
        echo "Hi ";
    }
}
?>
<?php
class User extends Person implements Auth {
    private $username;
    private $password;
    public function __construct($name, $email, $username, $password) {
        parent::__construct($name, $email);  // Call Person constructor
        $this->username = $username;
        $this->password = $password;
    }
    public function login($username,$password){
    if ($this->username === $username && $this->password === $password) {
            echo "Login successful<br>";
        } else {
            echo "Login failed<br>";
        }
 }
}
$user = new User("Moiz", "moiz@example.com", "moiz123", "pass123");

$user->greet();  // Inherited from Person
$user->login("moiz123","pass");
?>
