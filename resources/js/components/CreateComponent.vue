<template>
    <div>
        <h1>Create A Post</h1>
        <form @submit.prevent="addPost">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Post Title:</label>
                        <input class="form-control" type="text" v-model="post.title">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Post Body:</label>
                        <textarea class="form-control" rows="5" v-model="post.body"></textarea>
                    </div>
                </div>
            </div>
            <br/>
            <div class="form-group">
                <button class="btn btn-primary">Create</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                post: {}
            }
        },
        methods: {
            addPost() {
                let uri = 'http://localhost:8000/api/post/create';
                console.log(this.post);
                console.log('test');
                this.axios.post(uri, this.post).then((response) => {
                    console.log(this.post);
                    this.$router.push({name: 'posts'});
                });
            }
        }
    }
</script>
