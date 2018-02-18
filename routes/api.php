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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
// Route::post('/register', 'Auth\AuthController@register');

Route::group(['middleware' => ['api']], function () {
    Route::post('/register', [
        'uses' => 'Auth\AuthController@register',
    ]);

    Route::post('/signin', [
        'uses' => 'Auth\AuthController@signin',
    ]);

    Route::group(['middleware' => 'jwt.auth'], function () {
        Route::get('/user', [
            'uses' => 'UserController@index',
        ]);
        Route::post('/request', [
            'uses' => 'RequestController@create',
        ]);
        Route::get('/request', [
            'uses' => 'RequestController@get',
        ]);
        Route::post('/answer', [
            'uses' => 'RequestController@answer',
        ]);
    });

});