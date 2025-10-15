<?php
session_start();
$usuario = "Rudinei"; // usuário que o cliente vai usar
$senha = "1105"; // senha que o cliente vai usar

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if ($_POST['usuario'] === $usuario && $_POST['senha'] === $senha) {
        $_SESSION['logado'] = true;
        header("Location: admin.php");
        exit;
    } else {
        $erro = "Usuário ou senha incorretos.";
    }
}
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Login Admin</title>
<style>
    body { font-family: Arial; display: flex; justify-content: center; align-items: center; height: 100vh; background: #f5f5f5; }
    form { background: white; padding: 30px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
    input { display: block; margin: 10px 0; padding: 10px; width: 100%; }
    button { padding: 10px; width: 100%; background: #333; color: white; border: none; cursor: pointer; }
    p { color: red; }
</style>
</head>
<body>
<form method="post">
    <h2>Login Admin</h2>
    <input type="text" name="usuario" placeholder="Usuário" required>
    <input type="password" name="senha" placeholder="Senha" required>
    <button type="submit">Entrar</button>
    <?php if(isset($erro)) echo "<p>$erro</p>"; ?>
</form>
</body>
</html>
