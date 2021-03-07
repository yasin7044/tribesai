<template>
     <vs-card>
         asdasd
          <div slot="header">
        <h3>
          Employee Summary
        </h3>
      <vs-button
        type="gradient"
        style="font-size: 13.8px; padding: 7px; float: right; margin-top: -50px"
        @click.prevent="localValue = !localValue"
      >
        {{ localValue ? `Minimize` : `Maximize` }}
      </vs-button>
      <div class="vx-row" v-if="localValue">
        <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
         
        </div>
        <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
         
        </div>
        <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
          
        </div>
        <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
         
        </div>
      </div>
    </vs-card>
</template>

<script>
export default {
  props: {
    value: {},
  },
  computed: {
    localValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
</style>