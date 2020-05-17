<template>
  <div>
    <HeadTop title="搜索"></HeadTop>
    <section class="search">
      <form class="search_form" action="#" @submit.prevent="search">
        <input
          type="search"
          name="search"
          placeholder="请输入商家或美食名称"
          class="search_input"
          v-model="keyWord"
        />
        <input type="submit" name="submit" class="search_submit" />
      </form>
    </section>
  </div>
</template>

<script>
import HeadTop from '../../component/head/head'
export default {
  data () {
    return {
      keyWord: ''
    }
  },
  components: {
    HeadTop
  },
  methods: {
    search () {
      const keyWord = this.keyWord.trim()
      if (keyWord) {
        this.$store.dispatch('searchShops', keyWord)
      }
    }
  }
}
</script>

<style lang="stylus">
.search { // 搜索
  width: 100%;

  .search_form {
    clearFix();
    margin-top: 45px;
    background-color: #fff;
    padding: 12px 8px;

    input {
      height: 35px;
      padding: 0 4px;
      border-radius: 2px;
      font-weight: bold;
      outline: none;

      &.search_input {
        float: left;
        width: 79%;
        border: 4px solid #f2f2f2;
        font-size: 14px;
        color: #333;
        background-color: #f2f2f2;
      }

      &.search_submit {
        float: right;
        width: 18%;
        border: 4px solid #02a774;
        font-size: 16px;
        color: #fff;
        background-color: #02a774;
      }
    }
  }
}
</style>
