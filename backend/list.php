<?php

$connect = connect();
$query = $connect->query("SELECT id, nome FROM users LIMIT 10");
echo json_encode($query->fetchAll());

