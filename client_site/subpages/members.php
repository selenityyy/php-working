<?php
// include all necessary files
include '../includes/db.php';
include '../includes/auth.php';

// used Claude AI for help with this query
// this query gets all the members from the database
$result = $conn->query("SELECT * FROM members ORDER BY name ASC");
$members = $result->fetch_all(MYSQLI_ASSOC);
?>

<!-- html here -->
<!-- this basically displays all the members in a list based on their input credentials -->
<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <title> Members Page </title>
    <link rel="stylesheet" href="../css/homepage.css">
</head>

<body>
    <h2> Member List: </h2>
    <p> Total Members in ASA: <?= count($members) ?></p>

    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Year</th>
                <th>Major</th>
                <th>JoinDate</th>
            </tr>
        </thead>
        <tbody>
            <!-- for each statement here which iterates through all the members in the database -->
            <?php foreach ($members as $member):  ?>
                <tr>
                    <td> <?= $member['name'] ?> </td>
                    <td> <?= $member['email'] ?> </td>
                    <td> <?= $member['year'] ?> </td>
                    <td> <?= $member['major'] ?> </td>
                    <td> <?= date('M j, Y', strtotime($member['joinDate'])) ?> </td>
                </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
    <a href="admin_logout.php">Logout</a>
</body>