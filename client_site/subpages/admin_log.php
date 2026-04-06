<!-- this is the file for admin logins -->
<?php
session_start();
include '../includes/db.php';

// if a POST request is sent, check if user and pass are correct
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // check if the admin is actually in the database
    $stmt = $conn->prepare("SELECT * FROM admin WHERE username = ? AND password = ?");
    $stmt->bind_param("ss", $username, $password);
    $stmt->execute();
    $result = $stmt->get_result();

    // if the admin is in the database, set the session variable and redirect to the homepage
    $admin = $result->fetch_assoc();
    if ($admin && password_verify($password, $admin['password'])) {
        $_SESSION['admin'] = true;
        header('Location: index.php');
        exit;
    }
    // if admin not in db, error out; prob means they shouldn't be there
    else {
        $error = 'Invalid username or password';
    }
}
?>

<!-- html stuff now -->
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title> E-Board Login </title>
        <link rel="stylesheet" href="../css/homepage.css">
    </head>
    
    <body>
        <h2> Admin Login </h2>
        <form method="POST">
            <!-- input fields for username and password -->
            <input type="text" name="username" placeholder="Username" required>
            <input type="password" name="password" placeholder="Password" required>
            <!-- login button to submit credentials -->
            <button type=""submit>Login</button>
            <?php if (!empty($error)) echo "<p class='error'>$error</p>" ?>
        </form>
    </body>
</html>