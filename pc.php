<?php

print_r($POST);

$Fullname = ($_POST["fullname"]);
$Email = ($_POST["email"]);
$Phone = ($_POST["phone"]);
$Datnasc = ($_POST["datnasc"]);
$Usertype = ($_POST["user"]);
$Profession = ($_POST["profession"]);
$Otherprof = ($_POST["otherProf"]);
$Commerce = ($_POST["commerce"]);
$Othercom = ($_POST["otherCom"]);
$ComName = ($_POST["commerceName"]);

$hostname="localhost";
$username="HeevoUser";
$password="Pi@8545195";
$dbname="HeevoDB";
$usertable="precadastro";

$link = mysqli_connect($hostname,$username,$password,$dbname);

if($link===false){
    die("ERROR: Could not connect. " .mysqli_connect_error());
}

$sql = "INSERT INTO precadastro (fullname,email,phone,datnasc,usertype,profession,otherprof,commerce,othercom,commercename) VALUES ('$Fullname','$Email','$Phone','$Datnasc','$Usertype','$Profession','$Otherprof', '$Commerce','$Othercom','$ComName')";

if(mysqli_query($link,$sql)){
    echo "<script>
         $(window).load(function(){
             $('#thankyouModal').modal('show');
         });
    </script>";
    sleep(3);
    header("Location:https://www.heevo.life");
}
else{
    echo "ERROR: $sql . " .  mysqli_error($link);
}

mysqli_close();

header('Location ../index.html');
?>