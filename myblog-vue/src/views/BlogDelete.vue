<template>
    <div id="page">
        <div id="delete">
            <h3 style="align-content: center">是否删除</h3>

            <el-button type="danger" plain @click="deleteForm('id')">是</el-button>
            <el-button plain @click="backForm">否</el-button>
        </div>
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
            },
            backForm() {
                this.$router.push("/blogs")
            }
        }
    }
</script>

<style scoped>
    #delete {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        height: 250px;
        text-align: center;
    }
    #page {
        background-color: #25a4bb;
        background-size: cover;
        position: fixed;
        height: 100%;
        width: 100%;
    }
</style>