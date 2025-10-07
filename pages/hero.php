<!DOCTYPE html>
<html lang="es">

<head>
    <?php require_once'./components/header.php'; ?>
    <link rel="stylesheet" href="../styles/animaciones.css">
    <link rel="stylesheet" href="../styles/variables.css">
    <link rel="stylesheet" href="../styles/navbar.css">
    <link rel="stylesheet" href="../styles/hero.css">
    <link rel="stylesheet" href="../styles/nosotros.css">
    <link rel="stylesheet" href="../styles/nosotros_parte2.css">
    <link rel="stylesheet" href="../styles/section__1.css">
    <link rel="stylesheet" href="../styles/blog.css">
    <link rel="stylesheet" href="../styles/contacto.css">
    <link rel="stylesheet" href="../styles/footer.css">
    <?php require_once'./components/style.php'; ?>
    
</head>

<body data-bs-spy="scroll" data-bs-target="#navbarNav" tabindex="0">
    <?php require_once './components/navbar.php'; ?>
    <main class="view">
        <?php require_once './components/inicio.php'; ?>
        <div class="container-fluid contenedor-barra-verde  w-100 bottom-0 d-flex justify-content-center">
            <span class="barra-verde w-75 d-block"></span>
        </div>
        <?php require_once './components/grey-strip.php'; ?>
        <?php require_once './components/unidadesPresen.php'; ?>
        <?php require_once './components/testimonio.php'; ?>
        <?php require_once './components/contacto.php'; ?>
    </main>
        <?php require_once './components/footer.php'; ?>

    <?php require_once './components/scrips.php'; ?>
</body>
</html>