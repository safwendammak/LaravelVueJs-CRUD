<template>
    <div>

        <h1>Posts</h1>
        <div class="row">
            <div class="col-md-10"></div>
            <div class="col-md-2">
                <router-link :to="{ name: 'create' }" class="btn btn-primary">Create Post</router-link>
            </div>
        </div>
        <br/>

        <table class="table table-hover">
            <thead>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Body</th>
                <th>Created At</th>
                <th>Updated At</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr :key="post.id" v-for="post in posts">
                <td>{{ post.id }}</td>
                <td>{{ post.title }}</td>
                <td>{{ post.body }}</td>
                <td>{{ post.created_at }}</td>
                <td>{{ post.updated_at }}</td>
                <td>
                    <router-link :to="{name: 'edit', params: { id: post.id }}" class="btn btn-primary">Edit
                    </router-link>
                    <button @click.prevent="deletePost(post.id)" class="btn btn-danger">Delete</button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component POST.')
        },
        data() {
            return {
                posts: []
            }
        },
        created() {
            let uri = 'http://localhost:8000/api/posts';
            this.axios.get(uri, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                }
            }).then(response => {
                this.posts = response.data.data;
                console.log(this.posts);
            });
        },
        methods: {
            deletePost(id) {
                let uri = `http://localhost:8000/api/post/delete/${id}`;
                // Loop because multi dimensial array
                for (var i = 0; i < this.posts.length; i++) {
                    if (this.posts[i].id === id) {
                        console.log('i=' + i);
                        break;
                    }
                }
                this.axios.delete(uri).then(response => {
                    // this.$forceUpdate(); > Not a good solution
                    // location.reload(); >>> Not a good solution
                    // this.posts = this.posts.filter((e)=>e.id !== id ) > Not working
                    // this.$delete(this.posts, index) > Not working
                    // console.log(this.posts.indexOf(id)); > -1
                    this.posts.splice(i, 1);
                    console.log(this.posts);
                });
            }
        }
    }
</script>
