<!DOCTYPE html>
<html>
	<head>
		<title>Login</title>
	</head>
	<body>
		<div id="main">
			<h1>Simple Login</h1>
			<form method="POST">
				Username:<input type="text" name="username" autocomplete="off" required><br><br>
				Password:<input type="password" name="password" required><br><br>
				<input type="submit" name="submit" id="sub">
			</form>
		</div>
	</body>
</html>

<?php
	if(isset($_POST['submit'])){
		$un = $_POST['username'];
		$pw = $_POST['password'];
	}
?>