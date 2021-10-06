<!DOCTYPE html>
<html lang="de">
	<head>
		<meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Unser Bücher-Angebot</title>
		<link rel="stylesheet" type="text/css" href="css/style.css">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
		
	</head>
	<body>
		
		<!--
		Dies ist das PHP-Skript, welches für die Ausgabe der Tabellenzeilen sorgt.
		Hier fehlen noch die entsprechenden HTML-Tags für die Tabelle selbst und für den Tabellenkopf.
		Die restliche HTML-Struktur soll von Ihnen angelegt werden. Gehen Sie am Besten so vor, 
		dass Sie zunächst eine Statische Tabelle mit einer oder zwei Zeilen für die Ausgabe der Titel 
		und eines Buttons anlegen.
		Wenn das alles stimmig ist ersetzen Sie die beiden statischen Zeilen mit dem folgenden PHP-Skript:
		(bitte alles von Zeile 20 bis einschließlich Zeile 36 kopieren und ersetzen)
		-->

		<h1>Unsere Bücher:</h1>
		<hr>
	<div id="wrap">
		<table>
			<th>Nr.</th>
			<th>Titel</th>
			<th>Details</th>
		<?php
		include_once( 'includes/db-connect.php' );
		$sql = 'SELECT isbn, title, id FROM items';
		$result = mysqli_query( $con, $sql );
		while( $row = mysqli_fetch_array( $result, MYSQLI_ASSOC ) ) : ?>
			<tr id="<?php echo $row['isbn']; ?>">
				<td>
					<?php echo $row['id']; ?>
				</td>
				<td>
					<?php echo $row['title']; ?>
				</td>
				
				<td>
					<button type="button" id="<?php echo $row['isbn']; ?>">
						Details
					</button>
				</td>
		
			</tr>
		<?php endwhile;
		?>
		</table>		

		<div id="ausgabe">
			<div id="cover"></div>
			<div id="title"></div>
			<div id="author"></div>
			<div id="nr"></div>
			<div id="publisher"></div>
			<div id="description"></div>
			
			
		</div>

	</div>
		<script src="js/books.js"></script>
	</body>
</html>