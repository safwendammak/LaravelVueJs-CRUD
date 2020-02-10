<?php

namespace Tests\Unit;

use Tests\TestCase;

class PostTest extends TestCase
{

    public function testAddPost()
    {
        $response = $this->postJson('api/post/create', ['title' => 'test', 'body' => 'test']);
        $response
            ->assertStatus(200)
            ->assertExactJson([
                'successfully added'
            ]);
    }

    public function testFetchPosts()
    {
        $response = $this->Json('GET', 'api/posts');
        $response
            ->assertStatus(200)
            ->assertSee(
                'data'
            );
    }

    public function testUpdatePost()
    {
        $response = $this->postJson('api/post/update/3', ['title' => 'teshhhtedit', 'body' => 'testedit']);
        $response
            ->assertStatus(200)
            ->assertExactJson([
                'successfully updated'
            ]);
    }

    public function testDeletePost()
    {
        $response = $this->deleteJson('api/post/delete/4');
        $response
            ->assertStatus(200)
            ->assertExactJson([
                'successfully deleted'
            ]);
    }

}
