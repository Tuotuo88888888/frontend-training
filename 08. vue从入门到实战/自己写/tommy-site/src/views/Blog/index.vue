<template>
  <Layout>
    <BlogList />
    <template #right><BlogCategory /> </template>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout";
import BlogCategory from "./components/BlogCategory";
import BlogList from "./components/BlogList";
export default {
  components: { Layout, BlogCategory, BlogList },
};
</script>

<style>
</style>