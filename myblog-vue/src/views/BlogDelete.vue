<template>
    <div>
        是否删除？
        <button @click="deleteForm('id')">是</button>
    </div>
</template>

<script>
    export default {
        name: "BlogDelete",
        methods: {
            deleteForm() {
                const _this = this
                this.$axios.get('/blog/delete/' + this.$route.params.blogId).then((res) => {
                    console.log(res)
                    _this.$alert('操作成功', '提示', {
                        confirmButtonText: '确定',
                        callback: action => {
                            _this.$router.push("/blogs")
                        }
                    });
                })
            }
        }
    }
</script>

<style scoped>

</style>