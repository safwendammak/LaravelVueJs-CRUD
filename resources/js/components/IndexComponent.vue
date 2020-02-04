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
                <th>Item Name</th>
                <th>Item Price</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr :key="post.id" v-for="(post,index) in posts">
                <td>{{ post.id }}</td>
                <td>{{ post.title }}</td>
                <td>{{ post.body }}</td>
                <td>
                    <router-link :to="{name: 'edit', params: { id: post.id }}" class="btn btn-primary">Edit
                    </router-link>
                </td>
                <td>
                    <button @click.prevent="deletePost(post.id,index)" class="btn btn-danger">Delete</button>
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
            });
        },
        methods: {
            deletePost(id, index) {
                console.log(id, index);
                let uri = `http://localhost:8000/api/post/delete/${id}`;
                this.axios.delete(uri).then(response => {
                    // this.$forceUpdate();
                    // console.log(this.posts);
                    // console.log(id,index);
                    // this.posts = this.posts.slice();
                    // location.reload();
                    // this.posts = this.posts.filter((e)=>e.id !== id )
                    // this.$delete(this.posts, index)
                    this.posts.splice(this.posts.indexOf(id), 1);
                    console.log(this.posts);
                });
            }
        }
    }
</script>
