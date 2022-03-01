<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="">後台</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/products">產品列表</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/coupon">優惠卷</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <a href="#" @click.prevent="signout">登出</a>
  <router-view v-if="checkSuccess"></router-view>
  <!-- <router-link class="navbar-brand" to="/home"></router-link>
  <router-view></router-view> -->
</template>

<script>
export default {
  name: 'DashboardView',
  data () {
    return {
      checkSuccess: false
    }
  },
  methods: {
    checkLogin () {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
      if (token) {
        this.$http.defaults.headers.common.Authorization = `${token}`

        this.$http.post(`${process.env.VUE_APP_API}api/user/check`, { api_token: this.token })
          .then((res) => {
            this.checkSuccess = true
          })
          .catch((err) => {
            alert(err.data.message)
            this.$router.push('/admin/products')
          })
      } else {
        alert('請登入')
        this.$router.push('/login')
      }
    },
    signout () {
      document.cookie = 'hexToken=;expires=;'
      alert('已登出')
      this.$router.push('/login')
    },
    mounted () {
      this.checkLogin()
    }
  }
}
</script>
