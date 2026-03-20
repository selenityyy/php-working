<!-- validation file to validate froms -->
<!-- create functions as well to check that the forms meet criteria -->

<?php
// a function to check if there is text
function is_text($value, $min, $max) {
    $length = strlen($value);
    if ($length >= $min && $length <= $max) {
        return '';
    }
    else {
        return "Must be between $min and $max characters long.";
    }
}

// function to check if there is a number
function is_number($value, $min, $max) {
    $length = strlen($value);
    if (is_numeric($value) && $value >= $min && $length <= $max) {
        return '';
    }
    else {
        return "Must be a number between $min and $max.";
    }
}
?>