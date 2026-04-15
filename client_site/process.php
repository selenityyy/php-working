<!-- data process file -->
<?php
// include the validation file
session_start();
include("includes/validate.php");

// redirect to form if page is accessed directly without POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: form.php');
    exit;
}

// allowed values for university year radio buttons
$allowed_years = ['Freshman', 'Sophomore', 'Junior', 'Senior'];

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

// get the form data using null coalescing to handle missing keys
$user['name'] = trim($_POST['name'] ?? '');
$user['email'] = trim($_POST['email'] ?? '');
$user['age'] = trim($_POST['age'] ?? '');
$user['uni_year'] = trim($_POST['uni_year'] ?? '');

// validate each field
$errors['name'] = is_text($user['name'], 2, 20);
$errors['email'] = is_email($user['email'], 5, 50);
$errors['age'] = is_number($user['age'], 18, 40);
$errors['uni_year'] = is_valid_option($user['uni_year'], $allowed_years);

// check for invalid data/inputs
$invalid = implode('', $errors);

if ($invalid) {
    $message = 'Please correct the errors below.';
}
else {
    // AI helped in terms of the time setting because I didn't exactly know what to put there
    setcookie('username', $user['name'], [
        'expires' => time() + (86400 * 7),
        'path' => '/',
        'httponly' => true,
        'samesite' => 'Lax'
    ]);
    $message = 'Nice! Data is valid!';
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
                <?php if ($invalid): ?>
                    <h1> Oops! There were some errors. </h1>
                <?php else: ?>
                    <h1> Thank you for signing up! :D</h1>
                <?php endif; ?>
            </div>
            <hr>

            <?php if ($invalid): ?>
                <p style="color: red;"><strong><?= htmlspecialchars($message); ?></strong></p>
                <ul style="color: red;">
                    <?php if ($errors['name']): ?>
                        <li><strong>Name:</strong> <?= htmlspecialchars($errors['name']); ?></li>
                    <?php endif; ?>
                    <?php if ($errors['email']): ?>
                        <li><strong>Email:</strong> <?= htmlspecialchars($errors['email']); ?></li>
                    <?php endif; ?>
                    <?php if ($errors['age']): ?>
                        <li><strong>Age:</strong> <?= htmlspecialchars($errors['age']); ?></li>
                    <?php endif; ?>
                    <?php if ($errors['uni_year']): ?>
                        <li><strong>University Year:</strong> <?= htmlspecialchars($errors['uni_year']); ?></li>
                    <?php endif; ?>
                </ul>
                <p><a href="form.php">Go back to the form</a></p>
            <?php else: ?>
                <p><strong>Name: </strong> <?= htmlspecialchars($user['name']); ?> </p>
                <p><strong>Email: </strong><?= htmlspecialchars($user['email']); ?> </p>
                <p><strong>Age: </strong> <?= htmlspecialchars($user['age']); ?> </p>
                <p><strong>University Year: </strong> <?= htmlspecialchars($user['uni_year']); ?> </p>
            <?php endif; ?>
        </div>
        
        <footer> 
            <p><?php echo date("Y"); ?> Asian Student Association | Contact us: asa@rhodysenate.org</p>
        </footer>

        <script src="js/homepage.js"></script>
    </body>
</html>



