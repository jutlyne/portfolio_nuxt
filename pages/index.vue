<template>
  <div class="home-container">
    <section class="page-title">
      <UsersParticle />
      <UsersHomeTitle />
    </section>
    <section class="page-profile">
      <UsersProfile />
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'users'
})
</script>

<!-- <script lang="ts" src="./home/index.ts" default /> -->
<style lang="scss" src="./home/style.scss" />
