<template>
  <div id="#app" class="example">
    <s-shadowed class="example-1" has-upper-shadow has-bottom-shadow>
      <div class="wrapper">
        AAA <br>
        aaaaaaaa <br>
        aaaaaaaa <br>
        aaaaaaaa <br>
        aaaaaaaa <br>
        aaaaaaaa <br>
        aaaaaaaa <br>
        aaaaaaaa <br>
        BBB <br>
        aaaaaaaa <br>
        aaaaaaaa <br>
        aaaaaaaa <br>
        aaaaaaaa <br>
        aaaaaaaa <br>
        CC <br>
        aaaaaaaa <br>
        aaaaaaaa <br>
        aaaaaaaa <br>
        aaaaaaaa <br>
        aaaaaaaa <br>
        DDD <br>
        aaaaaaaa <br>
        aaaaaaaa <br>
        aaaaaaaa <br>
        aaaaaaaa <br>
        aaaaaaaa <br>
        EEE <br>
        aaaaaaaa <br>
        aaaaaaaa <br>
        aaaaaaaa <br>
        aaaaaaaa <br>
        aaaaaaaa <br>
      </div>
    </s-shadowed>

    <s-shadowed class="example-2" has-left-shadow has-right-shadow>
      <div class="wrapper2">
        <div>aaaaaaaaaaaaaa</div>
        <div>bbbbbbbbbbbbbbbbb</div>
        <div>aaaaaaaaaaaaaa</div>
        <div>aaaaaaaaaaaaaa</div>
        <div>aaaaaaaaaaaaaa</div>
        <div>aaaaaaaaaaaaaa</div>
        <div>aaaaaaaaaaaaaa</div>
        <div>aaaaaaaaaaaaaa</div>
        <div>aaaaaaaaaaaaaa</div>
        <div>aaaaaaaaaaaaaa</div>
        <div>aaaaaaaaaaaaaa</div>
        <div>aaaaaaaaaaaaaa</div>
        <div>aaaaaaaaaaaaaa</div>
        <div>aaaaaaaaaaaaaa</div>
        <div>aaaaaaaaaaaaaa</div>
        <div>aaaaaaaaaaaaaa</div>
        <div>aaaaaaaaaaaaaa</div>
        <div>aaaaaaaaaaaaaa</div>
        <div>aaaaaaaaaaaaaa</div>
        <div>aaaaaaaaaaaaaa</div>
        <div>aaaaaaaaaaaaaa</div>
        <div>xxxxxxxxxxxxxxxxxx</div>
        <div>zzzzzzzzzzzzzzzzzzzz</div>
      </div>
    </s-shadowed>
  </div>
</template>

<script>
import SShadowed from '../src/Shadowed.vue'

export default {
  components: { SShadowed }
}
</script>

<style lang="scss">
.example {
  width: 500px;
  padding: 100px;
  margin: 0 auto;

  & > .example-1 {
    & > .wrapper {
      height: 400px;
      overflow-y: scroll;
      background-color: gray;
    }
  }

  & > .example-2 {
    margin-top: 50px;

    & > .wrapper2 {
      display: flex;
      width: 500px;
      height: 50px;
      overflow-x: scroll;
      background-color: gray;
    }
  }
}
</style>
