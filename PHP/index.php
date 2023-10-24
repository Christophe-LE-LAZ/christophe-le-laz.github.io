<?php
include __DIR__.'/inc/header.tpl.php';?>
    <main class="min-vh-100 min-vw-100 d-flex justify-content-center align-items-center">
        <div class="container-fluid min-vh-100 p-0 m-0 d-flex align-items-center justify-content-center flex-column">
            <div class="row d-flex align-items-center flex-column">
                <section class="col-7 text-center">
                    <h6 class="p-2">Bonjour, je suis</h6>
                    <h4 class="">Christophe</h4>
                    <h4 class="p-2">Le Laz</h4>
                    <h3 class="">Développeur Web FullStack en formation</h3>
                </section>
                <div class="col-5 text-center mt-3">
                    <img src="../images/moi.png" alt="photo de Christophe LE LAZ" class="w-100 h-100">
                </div>
            </div>
            <div class="row mt-5">
                <section class="col d-flex flex-column align-items-center">
                    <h4>Choisissez votre thème</h4>
                    <div class="content">
                        <div class="content__container position-relative">
                                <ul class="content__container__list text-center">
                                <li class="content__container__list__item"><a href="../PHP/classique.php">classique</a></li>
                                <li class="content__container__list__item"><a href="../PHP/sportif.php">sportif</a></li>
                                <li class="content__container__list__item"><a href="../PHP/fun.php">fun</a></li>
                                <li class="content__container__list__item"><a href="" id="aleatoireTheme">aléatoire</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </div>
<?php include __DIR__.'/inc/footer.tpl.php';
?>