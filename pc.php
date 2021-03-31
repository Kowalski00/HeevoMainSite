<?php

print_r($POST);

$Usertype = "";
$Profession = "";
$Otherprof = "";
$Commerce = "";
$Othercom = "";
$ComName = "";

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

# API SendPulse
$data = array(
    "email": $Email,
    "phone": $Phone,
    "nome_completo": $Fullname,
    "date_nasc": $Datnasc,
    "usertype": $Usertype,
    "profession": $Profession,
    "otherprof": $OtherProf,
    "commerce": $Commerce,
    "othercom": $Othercom,
    "commercename": $ComName
);

# Create a connection
$url = 'https://events.sendpulse.com/events/name/registration_75';
$ch = curl_init($url);
# Form data string
$postString = http_build_query($data, '', '&');
# Setting our options
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $postString);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
# Get the response
$response = curl_exec($ch);
curl_close($ch);
echo $response;


if(mysqli_query($link,$sql)){
    echo "<script>
                function myFunction() {
                    alert("I am an alert box!");
                }
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