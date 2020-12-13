<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix' => 'auth'], function () {
    Route::post('register', 'AuthController@register');
    Route::post('login', 'AuthController@login');

    Route::group(['middleware' => 'auth:api'], function () {
        Route::get('logout', 'AuthController@logout');
        Route::get('profile', 'AuthController@profile');
    });
});

Route::group(['prefix' => 'user', 'middleware' => 'auth:api'], function () {
    Route::group(['middleware' => 'scope:user'], function () {
        Route::get('/user-scope', function () {
            return response()->json([
                'message' => 'Los usuarios pueden acceder',
                'status_code' => 200
            ], 200);
        });
    });

    Route::group(['middleware' => 'scope:administrator'], function () {
        Route::get('/admin-scope', function () {
            return response()->json([
                'message' => 'El administrador pueden acceder',
                'status_code' => 200
            ], 200);
        });
    });    
});

Route::resource('categories', 'CategoryController');
Route::resource('histories', 'HistoryController');
Route::resource('authors', 'AuthorController');
