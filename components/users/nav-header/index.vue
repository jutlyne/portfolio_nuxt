<template>
  <header class="header-container">
    <a-flex class="logo-container" gap="middle" align="center">
      <NuxtLink to="/">
        <NuxtImg src="/logo.svg" alt="" srcset="" />
      </NuxtLink>
    </a-flex>

    <a-menu
      class="nav-header font-large"
      theme="dark"
      mode="horizontal"
      :items="items"
      :selectedKeys="current"
      @click="handleMenuClick"
    />
  </header>
</template>

<script lang="ts" src="./index.ts" default />
