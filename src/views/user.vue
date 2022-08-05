<template>
  <div class="user">
    <h3>个人中心页面</h3>
    <div v-if="isLogin" class="info">
      <el-card class="box-card">
        <div>用户登录了</div>
        <div>
          用户名:
          <span>{{ userInfo.name }}</span>
        </div>
      </el-card>
    </div>
    <el-form v-else label-position="top" class="form">
      <el-form-item label="UserName">
        <el-input v-model="params.userName" />
      </el-form-item>
      <el-form-item label="Password">
        <el-input v-model="params.password" type="password" />
      </el-form-item>
      <el-form-item>
        <el-button :loading="loading" type="success" @click="submitHandle">Submit</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { useUser } from '@/store/user';
import { reactive, ref, computed } from 'vue';

const params = reactive({
  userName: '',
  password: ''
});
const userStore = useUser();
const loading = ref(false);
const isLogin = computed(() => !!userStore.userInfo.token);
const userInfo = computed(() => userStore.userInfo);
const submitHandle = () => {
  const { userName, password } = params;
  if (!userName) {
    ElNotification({
      type: 'error',
      title: 'Error',
      message: 'Username is required'
    });
    return;
  }
  if (!password) {
    ElNotification({
      type: 'error',
      title: 'Error',
      message: 'Password is required'
    });
    return;
  }
  loading.value = true;
  window.setTimeout(() => {
    userStore.updateUser({
      name: userName,
      userId: '1',
      token: Math.random().toString(36).slice(-8)
    });
    loading.value = false;
  }, 1500);
};
</script>

<style lang="scss">
.form {
  width: 450px;
  margin: 0 auto;
}
.box-card {
  width: 480px;
  margin: 20px auto;
}
</style>
