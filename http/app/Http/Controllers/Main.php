<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Main extends Controller
{
    
    function __invoke(){
        echo view('home');
    }

    function aa(){
        echo "test";
    }

    
}
