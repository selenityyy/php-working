<!-- an HTML form to collect data -->
<?php ?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title> Data Form </title>
        <link rel="stylesheet" href="css/homepage.css"> 
    </head>

    <body>
        <img src="images/ASA-pics/ASA_2_FRONT.png" alt="ASA logo" width="100" height="100" onclick="goHome()">

        <div class="content-wrapper">
            <div style="text-align: center">
                <h1 id="form-header"> Join us! </h1>
            </div>
            <hr>

            <form action="process.php" method="POST">
                <label for="name">Name:</label>
                <input type="text" name="name" id="name" value="<?= $_COOKIE['username'] ?? '' ?>">
                <br> 

                <label for="email">URI Email:</label>
                <input type="email" name="email" id="email">
                <br>

                <label for="age">Age:</label>
                <input type="number" name="age" id="age">
                <br>

                <label for="year">School Year:</label><br>
                <input type="radio" name="uni_year" value="Freshman" > Freshman<br> 
                <input type="radio" name="uni_year" value="Sophomore" > Sophomore<br>
                <input type="radio" name="uni_year" value="Junior" > Junior<br>
                <input type="radio" name="uni_year" value="Senior" > Senior<br>
                <br>

                <input type="submit" value="Submit">
            </form>
        </div>

        <footer>
            <p><?php echo date("Y"); ?> Asian Student Association | Contact us: asa@rhodysenate.org</p>
        </footer>

        <script src="js/homepage.js"></script>
    </body>
</html>
