<template>
	<main class="main-container main-container--center">
		<div class="container container--small">
			<h2 class="title">{{ $t('ipc-configuration') }}</h2>

			<div class="form-item">
				<label for="password" class="form-item__label">{{ $t('password') }}</label>
				<input id="password" class="form-item__input" type="password" v-model="password" @keydown.enter="update">
			</div>

			<div class="form-item">
				<button class="button button--confirm" @click="update">{{ $t('Save') }}</button>
			</div>
		</div>
	</main>
</template>

<script>
	export default {
		name: 'ipc-configuration',
		metaInfo: { title: 'IPC Configuration' },
		components: {},
		data() {
			return {
				password: this.$store.getters['auth/password']
			};
		},
		methods: {
			async update() {
				this.$store.commit('auth/setPassword', this.password);
				try {
					const validPassword = await this.$store.dispatch('auth/validate');
					if (!validPassword) await this.$router.replace({ name: 'setup' });
				} catch (err) {
					this.$error(err.message);
				}
			}
		}
	};
</script>
