<?php
// $number=1;
// switch($number){
//     case 1:
//         echo "Number is 1";
//         break;
//     case 2:
//         echo "Number is 2";
//         break;
//     case 'three':
//         echo "Number is three";
//         break;
// }
$arr = array(1, 2, 3);
foreach($arr as $key=>$value){
    echo  "Key: $key, Value: $value<br>";
}
echo 'the get value is '. $_GET['name'];
echo 'the post value is '. $_POST['name'];
?>

<form method='get' action="">
    <input type='text' name='name' placeholder='Enter your name'>
    <input type='submit' value='Submit'>    
</form>
<form method='post' action="">
    <input type='text' name='name' placeholder='Enter your name'>
    <input type='submit' value='Submit'>    
</form>