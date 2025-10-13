<?php
// Configuração do banco
$host = "localhost";
$usuario = "root";
$senha = "";
$banco = "meubanco";

// Conexão
$conn = new mysqli($host, $usuario, $senha, $banco);

// Verifica erro
if ($conn->connect_error) {
  die("Erro na conexão: " . $conn->connect_error);
}

// Pega os dados enviados pelo form
$nome = $_POST['name'];
$email = $_POST['email'];
$telefone = $_POST['phone'];
$mensagem = $_POST['message'];

// Insere no banco
$sql = "INSERT INTO contatos (nome, email, telefone, mensagem) VALUES ('$nome', '$email', '$telefone', '$mensagem')";
if ($conn->query($sql) === TRUE) {
  echo "Contato salvo com sucesso!";
} else {
  echo "Erro: " . $conn->error;
}

$conn->close();
?>
