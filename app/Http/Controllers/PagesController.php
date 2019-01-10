<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesController extends Controller
{
    //
    public function test(){
        return view('pages.test');
    }
    public function kml(){
        return view('pages.kml');
    }   
}
