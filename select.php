<!DOCTYPE html>
<html>
<header>
</header>
<body>
<?php
$servername ="localhost";
$username = "suncihai518";
$password = "sun518";
$dbname = "suncihai";

//create connection
$conn = new mysqli($servername, $username, $password, $dbname);

//check connection

if ($conn -> connect_error){
	die ("connection failed: " . $conn -> connect_error);
}

$sql = "SELECT * FROM `videoMathCenter`";

$result = $conn->query($sql);

if ($result){

	echo "<table><tr><th>id</th><th># of Visits</th><th>Student Name</th><th>Loaction</th><th>Reason to Visit</th><th>Student Id Number</th></tr>";
	while($row = $result -> fetch_assoc()){
		echo"<tr><td>".$row["id"]."</td><td>".$row["visitNumber"]."</td><td>".$row["studentName"]."</td><td>".$row["location"] . "</td><td>" . $row["reason"] . "</td><td>" . $row["idNumber"] . "</td></tr>";
	}	
	echo"</table>";


}else{
	echo"0 results";
}

$conn->close();


?>
<p>Test!</p>
</body>
</html>