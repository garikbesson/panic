<?php

namespace App\Http\Controllers;

use App\Models\Request;
use App\Models\User;
use App\Http\Requests\RequestFromRequest;
use App\Http\Requests\AnswerFormRequest;

class RequestController extends Controller
{
    public function create(RequestFromRequest $request)
    {
        $author_id = User::select('id')->where('name', '=', $request->json('author'))->get()[0]->id;

        Request::create([
            'type' => $request->json('type'),
            'message' => $request->json('message'),
            'status' => 'Accepted',
            'author_id' => $author_id,
        ]);
    }

    public function get()
    {
        $requests = Request::leftJoin('users', 'requests.author_id', '=', 'users.id')->select('requests.*', 'users.name')->get();
        
        return response()->json($requests);
    }

    public function answer(AnswerFormRequest $request) {
        Request::where('id', $request->json('id'))->update(array('answer' => $request->json('answer'), 'answered_at' => $request->json('answered_at'), 'status' => $request->json('status')));
    }
}
