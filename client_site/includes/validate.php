<!-- validation file to validate forms -->
<!-- create functions as well to check that the forms meet criteria -->

<?php
// a function to check if there is text
function is_text($value, $min, $max) {
    $value = trim($value);
    if ($value === '') {
        return 'This field is required.';
    }
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
    $value = trim($value);
    if ($value === '') {
        return 'This field is required.';
    }
    if (!is_numeric($value)) {
        return 'Must be a valid number.';
    }
    $number = (int) $value;
    if ($number >= $min && $number <= $max) {
        return '';
    }
    else {
        return "Must be a number between $min and $max.";
    }
}

// function to check if the email is valid
function is_email($value, $min, $max) {
    $value = trim($value);
    if ($value === '') {
        return 'Email is required.';
    }
    $length = strlen($value);
    if ($length < $min || $length > $max) {
        return "Email must be between $min and $max characters long.";
    }
    if (!filter_var($value, FILTER_VALIDATE_EMAIL)) {
        return 'Please enter a valid email address.';
    }
    return '';
}

// function to check if a value is one of the allowed options
function is_valid_option($value, $allowed_options) {
    $value = trim($value);
    if ($value === '') {
        return 'Please select an option.';
    }
    if (!in_array($value, $allowed_options, true)) {
        return 'Invalid selection. Please choose a valid option.';
    }
    return '';
}
?>
