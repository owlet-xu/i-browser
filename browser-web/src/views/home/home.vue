<template>
  <div class="home">
    <Navbar 
    @goSearch="goSearch" 
    @alyzeWeb="alyzeWeb"
    @goBack="goBack"
    @goForward="goForward"
    @pre="pre"
    @next="next"
    @openDevTools="openDevTools"
    ></Navbar>
    <webview ref="myWebView" :src="url" class="browser-body" autosize="on" allowpopups="on"></webview>
    <el-dialog title="分析结果" :visible.sync="showMessage" width="50%">
      <el-table :data="data" max-height="500">
        <el-table-column label="标题" prop="title"></el-table-column>
         <el-table-column label="内容" prop="content"></el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button @click="showMessage = false">取 消</el-button>
        <el-button type="primary" @click="showMessage = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script lang="ts" src="./home.ts"></script>
<style lang="scss" scoped src="./home.scss"></style>


