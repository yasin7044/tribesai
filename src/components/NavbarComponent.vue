<template>
  <div>
    <vs-navbar v-model="activeItem" class="nabarx">
      <div slot="title">
        <vs-navbar-title>
          Tribes Test
        </vs-navbar-title>
      </div>

      <vs-navbar-item index="0">
        <a href="#">Home</a>
      </vs-navbar-item>
      
    </vs-navbar>
  </div>
</template>
<script>
export default {
  data:()=>({
    activeItem: 0
  })
}
</script>