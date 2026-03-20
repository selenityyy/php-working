<!-- data process file -->
<?php
// include the validation file
session_start();
include("includes/validate.php");

// cookies
$user = [
    'name' => '',
    'email'=> '',
    'age' => '',
    'uni_year' => ''
];

$errors = [
    'name' => '',
    'email'=> '',
    'age' => '',
    'uni_year' => ''
];

$message = '';

// get the form data
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $user['name'] = $_POST["name"];
    $user['email'] = $_POST["email"];
    $user['age'] = $_POST["age"];
    $user['uni_year'] = $_POST["uni_year"];

    $errors['name'] = is_text($user['name'], 2, 20);
    $errors['email'] = is_text($user['email'], 10, 50);
    $errors['age'] = is_number($user['age'], 18, 40);
    $errors['uni_year'] = $user['uni_year'] ? '' : 'Please select a school year.';

    // check for invalid data/inputs
    $invalid = implode('', $errors);
    if ($invalid) {
        $message = 'Please correct the following errors: ' . $invalid;
    }

    if (!$invalid) {
        // AI helped in terms of the time setting because I didn't exactly know what to put there
        setcookie('username', $user['name'], time() + (86400 * 7));
        $message = 'Nice! Data is valid!';
    }
}
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title> Form Successfully Submitted! </title>
        <link rel="stylesheet" href="css/homepage.css"> 
    </head>
    <body>
        <img src="images/ASA-pics/ASA_2_FRONT.png" alt = "ASA logo" width="100" height="100" onclick="goHome()">
        <div class="content-wrapper">
            <div style="text-align: center">
                <h1> Thank you for signing up! :D</h1>
            </div>
            <hr>

            <p><strong>Name: </strong> <?= htmlspecialchars($user['name']); ?> </p>
            <p><strong>Email: </strong><?= htmlspecialchars($user['email']); ?> </p>
            <p><strong>Age: </strong> <?= htmlspecialchars($user['age']); ?> </p>
            <p><strong>University Year: </strong> <?= htmlspecialchars($user['uni_year']); ?> </p>
        </div>
        
        <footer> 
            <p><?php echo date("Y"); ?> Asian Student Association | Contact us: asa@rhodysenate.org</p>
        </footer>

        <script src="js/homepage.js"></script>
    </body>
</html>



