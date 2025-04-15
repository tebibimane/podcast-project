<?php
$servername="localhost";
$username="root";
$password="poweremy";
$dname="project";
 
$connect=new mysqli($servername,$username,$password,$dname);
if($connect->connect_error){
    die ("connection is not good ".$connect->connect_error);


}
$name=$_POST['name'];
$email=$_POST['email'];
$number=$_POST['number'];
$order=$_POST['order'];

echo $name;
echo $email;
echo $number;
echo $order;
 


$connect->query($sql);
echo $helloworld
?>