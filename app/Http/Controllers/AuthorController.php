<?php

namespace App\Http\Controllers;

use App\Author;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class AuthorController extends Controller
{
  
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    $authors = Author::orderBy('created_at', 'desc')->paginate(5);
    return response()->json($authors, 200);
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

    $author = new Author();
    $author->name = $request->name;

    $path = $request->file('image')->store('authors_images');

    $author->image = $path;

    if ($author->save()) {
      return response()->json($author, 200);
    } else {
      return response()->json($author, 500);
    }
  }

  /**
   * Display the specified resource.
   *
   * @param  \App\Author  $author
   * @return \Illuminate\Http\Response
   */
  public function show(Author $author)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  \App\Author  $author
   * @return \Illuminate\Http\Response
   */
  public function edit(Author $author)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\Author  $author
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Author $author)
  {
    $request->validate([
      'name' => 'required|min:3',
    ]);

    $author->name =$request->name;
    $oldPath = $author->image;
    if ($request->hasFile('image')) {
      $request->validate([
        'image' => 'image|mimes:jpeg,png,jpg',
      ]);
      
      $path = $request->file('image')->store('authors_images');
      $author->image =$path;

      Storage::delete($oldPath);
    } 

    if ($author->save()) {
      return response()->json($author, 200);
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
   * @param  \App\Author  $author
   * @return \Illuminate\Http\Response
   */
  public function destroy(Author $author)
  {
    if ($author->delete()) {
      Storage::delete($author->image);

      return response()->json([
        'message' => 'Autor borrada correctamente',
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
