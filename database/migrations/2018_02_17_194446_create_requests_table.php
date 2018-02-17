<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRequestsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('requests', function (Blueprint $table) {
            $table->increments('id');
            $table->string('type');
            $table->string('message');
            $table->integer('author_id')->unsigned();
            $table->string('status');
            $table->dateTime('answer_date')->nullable();
            $table->string('answer')->nullable();
            $table->integer('answerer_id')->nullable()->unsigned();
            $table->timestamps();
        });
        Schema::table('requests', function($table) {
            $table->foreign('author_id')->references('id')->on('users');
            $table->foreign('answerer_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('requests');
    }
}
