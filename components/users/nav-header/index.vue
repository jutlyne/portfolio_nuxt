<template>
  <header class="header-container">
    <a-flex class="logo-container" gap="middle" align="center">
      <NuxtLink to="/">
        <NuxtImg src="/logo.svg" alt="" srcset="" />
      </NuxtLink>
    </a-flex>

    <a-menu
      class="nav-header font-large"
      :selectedKeys="current"
      theme="dark"
      mode="horizontal"
      :items="items"
      @click="handleMenuClick"
    />
  </header>
</template>

<script lang="ts" src="./scripts.ts" default />
<style lang="scss" src="./style.scss" />
