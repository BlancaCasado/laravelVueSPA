<?php

namespace App\Http\Controllers;

use App\History;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class HistoryController extends Controller
{
  
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    $histories = History::orderBy('created_at', 'desc')->paginate(5);
    return response()->json($histories, 200);
  }

  /**
   * Show the form for creating a new resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function create()
  {
    //
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    $request->validate([
      'name' => 'required|min:3',
      'image' => 'required|image|mimes:jpeg,png,jpg'
    ]);

    $history = new History();
    $history->name = $request->name;

    $path = $request->file('image')->store('histories_images');

    $history->image = $path;

    if ($history->save()) {
      return response()->json($history, 200);
    } else {
      return response()->json($history, 500);
    }
  }

  /**
   * Display the specified resource.
   *
   * @param  \App\History  $history
   * @return \Illuminate\Http\Response
   */
  public function show(History $history)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  \App\History  $history
   * @return \Illuminate\Http\Response
   */
  public function edit(History $history)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\History  $history
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, History $history)
  {
    $request->validate([
      'name' => 'required|min:3',
    ]);

    $history->name =$request->name;
    $oldPath = $history->image;
    if ($request->hasFile('image')) {
      $request->validate([
        'image' => 'image|mimes:jpeg,png,jpg',
      ]);
      
      $path = $request->file('image')->store('histories_images');
      $history->image =$path;

      Storage::delete($oldPath);
    } 

    if ($history->save()) {
      return response()->json($history, 200);
    } else {
      Storage::delete($path);
      return response()->json([
        'message' => 'Ha ocurrido un error prueba de nuevo',
        'status_code' => 500
      ], 500);
    }
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\History  $history
   * @return \Illuminate\Http\Response
   */
  public function destroy(History $history)
  {
    if ($history->delete()) {
      Storage::delete($history->image);

      return response()->json([
        'message' => 'Post de historia borrada correctamente',
        'status_code' => 200
      ], 200);
    } else {
      return response()->json([
        'message' => 'Ha ocurrido un error prueba de nuevo',
        'status_code' => 500
      ], 500);
    }
  }
}
