<?php
session_start();

if (!isset($_SESSION['user_id'])) {
    header("Location: login.html");
    exit;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
    <link rel="stylesheet" href="styles2.css">
    <script>
        // Redirect to text.html after 5 seconds
        setTimeout(function() {
            window.location.href = 'test.html';
        }, 5000);
    </script>
</head>
<body>
    <div class="welcome-container">
        <h2>Welcome, <?php echo $_SESSION['email']; ?>!</h2>
        <p>You have successfully logged in.</p>
    </div>
</body>
</html>
