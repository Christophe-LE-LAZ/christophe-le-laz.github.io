<?php
require __DIR__ . '/data/data.php';

$page = 'home';


if (isset($_GET['page'])) {
    if (in_array($_GET['page'], $pagesAllowed)) {
        $page = $_GET['page'];
    } else {
        $page = '404';
    }
}

require __DIR__ . '/inc/header.tpl.php';

require __DIR__ . "/inc/$page.tpl.php";

require __DIR__ . '/inc/footer.tpl.php';
?>