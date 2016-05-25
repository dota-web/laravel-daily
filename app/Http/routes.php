<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/
class foo {
function test() {
		echo "string";
	}
}

Route::get('/', function () {
    return view('welcome');
});

Route::get('test', function () {
	$json = json_encode(array(
		'name'=> 'caihuan',
		'age' => '19'
	));

	$obj = new foo();

	$json1 = json_encode($obj->test());
	return Response(json_decode($json1));
	//dd('test');
});

//Route::controller('app', 'AppController');