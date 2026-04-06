<!-- database file that connects to MySQL -->
<!-- we'll use this to access photos in the php files rather than having them hardcoded -->
<?php

$host = 'localhost';
$type = 'mysql';
$server = '192.185.2.183';
$user = 'selenaca_selenacabral';
$pass = 'Sanri0kurom1**';
$db = 'selenaca_clientsite';
$charset = 'utf8mb4';
$port = '3306';

// PDO options
$options = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, // throws an error 
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES => false
];

$dsn = "mysql:host=$host;dbname=$db;charset=$charset;port=$port";

try {
    $pdo = new PDO($dsn, $user, $pass, $options);
} 

catch (PDOException $e) {
    throw $e;
}
?>