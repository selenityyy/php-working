<!-- allows for eboard members (admins) to logout successfully -->
<?php
session_start();
session_destroy();
header("Location: ../admin_log.php");
exit;
?>