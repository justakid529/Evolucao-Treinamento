<?php
session_start();
if(!isset($_SESSION['logado']) || $_SESSION['logado'] !== true){
    header("Location: login.php");
    exit;
}
include 'config.php';
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Admin Dashboard - Contatos</title>
<style>
    body { font-family: Arial, sans-serif; background: #f5f5f5; }
    h1 { text-align: center; margin-top: 20px; }
    table { width: 90%; margin: 20px auto; border-collapse: collapse; background: white; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
    th, td { padding: 12px; border-bottom: 1px solid #ddd; text-align: left; }
    th { background-color: #333; color: white; }
    tr:hover { background-color: #f1f1f1; }
    .logout { text-align: center; margin-top: 10px; }
    .logout a { color: #fff; background: #333; padding: 10px 20px; text-decoration: none; border-radius: 5px; }
</style>
</head>
<body>
<h1>Formulário de Contatos</h1>
<div class="logout"><a href="logout.php">Sair</a></div>
<table>
<tr>
<th>ID</th>
<th>Nome</th>
<th>Email</th>
<th>Telefone</th>
<th>Mensagem</th>
</tr>
<?php
$sql = "SELECT * FROM contatos ORDER BY id DESC";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  while ($row = $result->fetch_assoc()) {
    echo "<tr>
            <td>{$row['id']}</td>
            <td>{$row['nome']}</td>
            <td>{$row['email']}</td>
            <td>{$row['telefone']}</td>
            <td>{$row['mensagem']}</td>
          </tr>";
  }
} else {
  echo "<tr><td colspan='5'>Nenhum contato encontrado</td></tr>";
}
$conn->close();
?>
</table>
</body>
</html>
