<?php

$email = $_POST["email"];
$phone= $_POST["phone"];
$surname = $_POST["surname"];
$fatherName= $_POST["fatherName"];
$salary = $_POST["salary"];
$tax = $_POST["tax"];

$emailPattern = "/^[a-zA-Z0-9]+@[a-zA-Z0-9-]+\.[a-zA-Z.]{1,6}$/";
$phonePattern = "/^[0-9]{10}$/";


if (preg_match($emailPattern, $email)) {
    echo "Пошта введена коректно! <br>";
} 
else {
    echo "Пошта введена некоректно! <br>";
}

if (preg_match($phonePattern, $phone)) {
    echo "Телефон введений коректно! <br>";
} 
else {
    echo "Телефон введений не коректно! <br>";
}

if (preg_match("/[a-zA-Z]/", $salary))
{
    echo "Нарахована зарплата не є числом";
}
else
{
    echo "Нарахована зарплата  є числом";
}
?>