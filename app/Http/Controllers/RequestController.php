<?php

namespace App\Http\Controllers;

use App\Models\Request;
use App\Models\User;
use App\Http\Requests\RequestFormRequest;

class RequestController extends Controller
{
    public function create(RequestFormRequest $request)
    {
        $author_id = User::select('id')->where('name', '=', $request->json('author'))->get()[0]->id;

        Request::create([
            'type' => $request->json('type'),
            'message' => $request->json('message'),
            'status' => 'accepted',
            'author_id' => $author_id,
        ]);
    }
}
