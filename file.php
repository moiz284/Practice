<?php
$filename ='myfile.txt';
$myfile= fopen($filename,'w') or die("unable to open file");

fwrite($myfile,"Hi bye how are you not doing");
// echo fread($myfile, filesize($filename)). "<br>";
fclose($myfile);


?>