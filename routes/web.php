<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

//Page Routing
Route::get('/home', 'PagesController@homePage');
Route::get('/kmlmap', 'PagesController@kmlPage');
Route::get('/daymap', 'PagesController@pastDayPage');
Route::get('/weekmap','PagesController@pastWeekPage');
Route::get('/monthmap','PagesController@pastMonthPage');
Route::get('/infopenting', 'PagesController@infoPage');
Route::get('/about','PagesController@aboutPage');