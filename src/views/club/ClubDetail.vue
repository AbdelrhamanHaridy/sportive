<template>
<div class="">
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, perferendis distinctio eaque tenetur aspernatur exercitationem similique excepturi dolore voluptatibus deleniti. Ea commodi a minus, sed aperiam corrupti doloribus natus aliquid.</p>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import JsonPosts from "../../../public/assets/club_posts.json";
export default defineComponent({
data(){
  return{
    data:JsonPosts
  }
}
});
</script>