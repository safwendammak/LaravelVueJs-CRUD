<template>
    <div>
        <h1>Edit Post</h1>
        <form @submit.prevent="updatePost">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Post Title:
                        <input type="text" class="form-control" v-model="post.title">
                        </label>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Post Body:
                        <textarea class="form-control" v-model="post.body" rows="5"></textarea>
                        </label>
                    </div>
                </div>
            </div><br />
            <div class="form-group">
                <button class="btn btn-primary">Update</button>
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
        created() {
            let uri = `http://localhost:8000/api/post/edit/${this.$route.params.id}`;
            this.axios.get(uri).then((response) => {
                this.post = response.data;
            });
        },
        methods: {
            updatePost() {
                let uri = `http://localhost:8000/api/post/update/${this.$route.params.id}`;
                this.axios.post(uri, this.post).then((response) => {
                    this.$router.push({name: 'posts'});
                });
            }
        }
    }
</script>
