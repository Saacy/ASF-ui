<template>
	<transition name="form-item__description" @enter="enter" @after-enter="afterEnter" @leave="leave">
		<div class="form-item__description" :class="{ 'form-item__description--shown': shown }">
			<div class="form-item__description-content" v-html="description"></div>
		</div>
	</transition>
</template>

<script>
	export default {
		name: 'input-description',
		props: {
			description: String,
			shown: Boolean
		},
		methods: {
			enter(element) {
				element.style.width = getComputedStyle(element).width;
				element.style.position = 'absolute';
				element.style.visibility = 'hidden';
				element.style.height = 'auto';

				const height = getComputedStyle(element).height;

				element.style.width = null;
				element.style.position = null;
				element.style.visibility = null;
				element.style.height = 0;

				setTimeout(() => element.style.height = height, 0);
			},
			afterEnter(element) {
				element.style.height = 'auto';
			},
			leave(element) {
				element.style.height = getComputedStyle(element).height;
				setTimeout(() => element.style.height = 0, 0);
			}
		}
	};
</script>

<style lang="scss">
	.form-item__description {
		will-change: height;
		transform: translateZ(0);
		backface-visibility: hidden;
		perspective: 1000px;
	}

	.form-item__description-enter, .form-item__description-leave-to {
		opacity: 0;
	}

	.form-item__description-enter-active, .form-item__description-leave-active {
		transition: height .25s, opacity .25s;
	}
</style>
