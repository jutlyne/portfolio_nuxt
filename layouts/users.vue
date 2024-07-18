<template>
  <div>
    <UsersNavHeader />
    <UsersHotNotice />
    <div class="user-content">
      <slot />
    </div>
    <UsersFooterItem />
  </div>
</template>

<script lang="ts" src="./user/index.ts" default />
<style lang="scss" src="./user/style.scss" />
