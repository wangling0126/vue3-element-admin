<template>
	<button @click="modalOpen = true">
		Open full screen modal!
	</button>

	<div v-if="modalOpen" class="modal">
		<div>
			I'm a modal!
			<button @click="modalOpen = false">Close</button>
		</div>
	</div>
</template>

<script setup lang="ts" name="">
import { Ref, ref } from "vue";
const modalOpen: Ref<boolean> = ref(false);
</script>

<style scoped lang="scss"></style>
