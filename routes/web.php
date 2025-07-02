<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
Route::view('/', 'home')->name('home')->where('url', '^(?!.*(api|broadcasting)).*$');


// Route::get('/', function () {
//     return view('welcome');
// });
