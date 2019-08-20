<template>
  <div>
    <Container url="/profile" ref="container">
      <template v-slot:header>
        <div>
          Header
        </div>
      </template>
      <template v-slot:content>
        <div>
          <h1>content1</h1>
          <h2>content2</h2>
          <h3>content3</h3>
        </div>
      </template>
      <template #footer="{info:{name}}">
        {{name}}
        default
      </template>
    </Container>
  </div>
</template>

<script>
import Container from './NavigationLink'
export default {
  components:{
    Container
  },
  created() {
    this.$nextTick(() => {
      console.log(this.$refs.container.info)
    })
  },
  data() {
    return {
      use: {
        name: 'andy',
        age: 24
      }
    }
  }
}
</script>