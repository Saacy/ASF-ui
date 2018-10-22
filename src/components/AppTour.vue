<template>
	<v-tour name="introduction" :steps="steps"></v-tour>
</template>

<script>
	export default {
		name: 'app-tour',
		data() {
			return {
				steps: [
					{
						target: '.brand',
						content: 'You can click here to access some hidden buttons.',
						params: {
							placement: 'right'
						}
					},
					{
						target: '.navigation-button',
						content: 'Click here to open or close the side navigation.'
					}
				]
			}
		}
	}
</script>
