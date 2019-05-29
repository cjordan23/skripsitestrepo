<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesController extends Controller
{
    //
    public function homePage(){
        return view('pages.home');
    }
    public function pastDayPage(){
        return view ('pages.daymap');
    }
    public function pastWeekPage(){
        return view('pages.weekmap');
    }
    public function pastMonthPage(){
        return view('pages.monthmap');
    }
    public function kmlPage(){
        return view('pages.kml');
    }
    public function infoPage(){
        return view('pages.infopenting');
    } 
    public function aboutPage(){
        return view('pages.about');
    }  
}
