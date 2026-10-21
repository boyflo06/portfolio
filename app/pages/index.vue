<template>
	<div class="flex justify-center items-center h-dvh flex-col">
		<h1 class="text-4xl p-2 ">my Portfolio</h1>
		<div class="flex">
			<NuxtLink to="./about" class=" mx-2 hover:px-4 transition-all duration-150 ease-in-out">About Me</NuxtLink>
			<NuxtLink to="/projects" class=" mx-2 hover:px-4 transition-all duration-150 ease-in-out">Featured Projects</NuxtLink>
			<NuxtLink to="https://github.com/boyflo06" class=" mx-2 hover:px-4 transition-all duration-150 ease-in-out">Github</NuxtLink>
		</div>
	</div>
</template>