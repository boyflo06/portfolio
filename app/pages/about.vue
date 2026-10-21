<script setup lang="tsx">
	const birthdate = new Date(2006, 1, 3);
	const now = new Date();
	let years = now.getFullYear() - birthdate.getFullYear()

	const monthdiff = birthdate.getMonth() - now.getMonth();
	if (monthdiff > 0 || (monthdiff == 0 && birthdate.getDate() > now.getDate())) {
		years--;
	}

	const age = ref(years);
</script>

<template>
	<NuxtLink to="/" class="flex items-center p-5 absolute">
		<Icon name="bx:arrow-back" class=" size-8"/>
		<p class="text-2xl mx-1.5">Back</p>
	</NuxtLink>
	<div class="h-dvh flex justify-center items-center flex-col">
		<h1 class=" text-5xl mb-10">About Me</h1>
		<div class="flex flex-col w-1/2 max-w-full mb-10">
			<h3 class=" text-2xl">Who Am I?</h3>
			<p class="text-pretty">
				I am {{ age }} years old, come from brussels, belgium and 
				currently studying at KU Leuven as a second year in Bachelor of Business Engineering.
				I have had an interest in coding for a little while, starting off with simple little projects 
				for my calculator or even modding games like minecraft or GTA5.
			</p>
		</div>
		<div class="flex flex-col w-1/2 max-w-full mb-10">
			<h3 class=" text-2xl">My Coding Experience</h3>
			<p class="text-pretty">
				As stated in the last section, I started coding when I was young. But I started getting real experience and
				a coding intuition when i joined 42 Brussels (formely known as 19 Brussels) at the age of 17. There i have learned 
				how to understand lower level programing thanks to C and C++, and gained a coding "rigor" thanks to the school's strict 
				coding norm.<br/>
				I have completed the common core in 2 years and some of my projects are available on my Github / this portfolio.
			</p>
		</div>
		<div class="flex flex-col w-1/2 max-w-full">
			<h3 class=" text-2xl">After 42</h3>
			<p class="text-pretty">
				I enrolled at KU Leuven as i ended my common core at 42. The idea was to combine my coding knowledge with upcoming business
				knowledge which sounds to me like mandatory skills in the near future. I have although kept programming on my free time to 
				keep my skills at check.
			</p>
		</div>
	</div>
</template>