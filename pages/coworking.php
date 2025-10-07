<!DOCTYPE html>
<html lang="es">

<head>
    <?php require_once'./components/header.php'; ?>
    <link rel="stylesheet" href="../styles/animaciones.css">
    <link rel="stylesheet" href="../styles/variables.css">
    <link rel="stylesheet" href="../styles/navbar.css">
    <link rel="stylesheet" href="../styles/coworking.css">
    <link rel="stylesheet" href="../styles/contacto.css">
    <link rel="stylesheet" href="../styles/footer.css">
    <?php require_once'./components/style.php'; ?>
    
</head>

<body data-bs-spy="scroll" data-bs-target="#navbarNav" tabindex="0">
    <?php require_once './components/navbar.php'; ?>
    <main class="view">
        <?php require_once './components/coworking.php'; ?>
        <?php require_once './components/contacto_w.php'; ?>
    </main>
        <?php require_once './components/footer.php'; ?>

    <?php require_once './components/scrips.php'; ?>
</body>
</html>