<template>
  <div>
    <UsersNavHeader v-show='!isLoading' />
    <UsersHotNotice v-show='!isLoading' />
    <div class="user-content">
      <UsersSkillHeader v-if="categories && categories.length" :data="categories" />
      <UsersLoading v-if="isLoading" />
      <div v-show="!isLoading">
        <slot />
      </div>
    </div>
    <UsersPaginate
      v-if="needPaginate && !isLoading"
      :total="totalItem"
      :currentPage="currentPage"
      :onPageChange="onPageChange"
    />
    <UsersFooterItem />
  </div>
</template>

<script lang="ts" src="./user/index.ts" default />
<style lang="scss" src="./user/style.scss" />
