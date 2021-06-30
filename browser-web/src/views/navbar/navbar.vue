<template>
  <div class="navbar">
     <div class="browser-header" style="-webkit-app-region: drag">
      <div class="browser-title">
        <img src="../../assets/logo.png" alt="" class="app-icon" @click="alyzeWeb">
        <span class="el-icon-arrow-left app-go" title="后退"  @click="goBack"></span>&nbsp;
        <span class="el-icon-arrow-right app-go" title="前进" @click="goForward"></span>&nbsp;
        <span class="app-title" v-if="title" :title="title">{{title}}</span>
      </div>
      <div class="browser-search">
        <el-input class="search-input" v-model="searchWorld" size="mini"></el-input>&nbsp;
        <el-button class="search-btn" icon="el-icon-search" circle size="mini" @click="goSearch"></el-button>
      </div>
      <div class="browser-tools">
        <button class="ctrl-icon minimize" title="最小化窗口" @click="handleMinimize">-</button>
        <button class="ctrl-icon maximize" title="最大化窗口" @click="handleMaximize">o</button>
        <button class="ctrl-icon close" title="关闭窗口" @click="handleClose">x</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./navbar.ts"></script>
<style lang="scss" scoped src="./navbar.scss"></style>


