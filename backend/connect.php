<?php

function connect(){
    return new PDO('mysql:host=localhost;dbname=bancoteste', 'admin', 'admin123', [
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ
    ]);
}