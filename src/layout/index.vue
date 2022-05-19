<template>
  <el-container>
    <el-aside>
      haha
<!--        <Menu></Menu>-->
    </el-aside>
    <el-container>
      <el-header>
<!--          <Header></Header>-->
<!--          <Tabs></Tabs>-->
      </el-header>
      <el-main>
        <section class="main-box">
          <router-view v-slot="{ Component, route }">
            <transition appear name="fade-transform" mode="out-in">
              <keep-alive :include="cacheRouter">
                <component :is="Component" :key="route.path"></component>
              </keep-alive>
            </transition>
          </router-view>
        </section>
      </el-main>
      <el-footer>
        <Footer></Footer>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import cacheRouter from "@/router/cacheRouter";

</script>

<style scoped lang="less">
 @import "index";
</style>
