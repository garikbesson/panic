<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $data = [];
        $data['name'] = $request->user()->name;
        $data['email'] = $request->user()->email;
        $data['role'] = $request->user()->role;
        $data['id'] = $request->user()->id;
        return response()->json([
            'data' => $data,
        ]);
    }
}
