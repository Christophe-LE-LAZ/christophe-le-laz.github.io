<?php
require __DIR__ . 'data/data.php';

$page = 'home';


if (isset($_GET['page'])) {
    if (in_array($_GET['page'], $pageAllowed)) {
        $page = $_GET['page'];
    } else {
        $page = '404';
    }
}

require __DIR__ . 'php/inc/header.tpl.php';

require __DIR__ . "php/inc/$page.tpl.php";

require __DIR__ . 'php/inc/footer.tpl.php';
?>