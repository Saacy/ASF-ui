<template>
	<div class="navigation-statistics">
		<navigation-statistic :name="$t('statistics-memory-usage')" icon="tachometer-alt" :value="memory"></navigation-statistic>
		<navigation-statistic :name="$t('statistics-uptime')" icon="clock" :value="uptime"></navigation-statistic>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import NavigationStatistic from './NavigationStatistic.vue';

	export default {
		name: 'navigation-statistics',
		components: { NavigationStatistic },
		computed: mapGetters({
			memory: 'status/memory',
			uptime: 'status/uptime'
		})
	};
</script>

<style lang="scss">
	.navigation-statistics {
		display: flex;
		flex-direction: column;
	}
</style>
