<template>
	<div class="bot" :class="[`status--${bot.status}`]">
		<a :href="bot.profileURL" target="_blank" class="bot__profile--link">
		    <img class="bot__avatar" :src="bot.avatarURL" />
		    <div class="bot__profile--button">
		        <font-awesome-icon icon="external-link-alt"></font-awesome-icon>
            </div>
		</a>

		<router-link tag="div" :to="{ name: 'bot', params: { bot: bot.name } }" class="bot__status">
			<span class="bot__status-property bot__status-property--name">{{ bot.name }}</span>
			<span class="bot__status-property bot__status-property--text">{{ bot.statusText }}</span>
		</router-link>

		<div class="bot__actions">
			<span class="bot__action bot__action--resume" v-if="bot.paused && bot.active" @click="resume"><font-awesome-icon icon="play"></font-awesome-icon></span>
			<span class="bot__action bot__action--pause" v-if="!bot.paused && bot.active" @click="pause"><font-awesome-icon icon="pause"></font-awesome-icon></span>
			<span class="bot__action bot__action--start" v-if="!bot.active" @click="start"><font-awesome-icon icon="power-off"></font-awesome-icon></span>
			<span class="bot__action bot__action--stop" v-if="bot.active" @click="stop"><font-awesome-icon icon="power-off"></font-awesome-icon></span>
		</div>
	</div>
</template>

<script>
	import { botAction } from '../utils/http';

	export default {
		name: 'bot-card',
		props: {
			bot: Object
		},
		methods: {
			async pause() {
				try {
					const message = await botAction(this.bot.name, 'pause', { permanent: true, resumeInSeconds: 0 });
					await this.$store.dispatch('bots/updateBot', { name: this.bot.name, paused: true });
				} catch (err) {
					this.$error(err.message);
				}
			},
			async resume() {
				try {
					const message = await botAction(this.bot.name, 'resume');
					await this.$store.dispatch('bots/updateBot', { name: this.bot.name, paused: false });
				} catch (err) {
					this.$error(err.message);
				}
			},
			async start() {
				try {
					const message = await botAction(this.bot.name, 'start');
					await this.$store.dispatch('bots/updateBot', { name: this.bot.name, active: true });
				} catch (err) {
					this.$error(err.message);
				}
			},
			async stop() {
				try {
					const message = await botAction(this.bot.name, 'stop');
					await this.$store.dispatch('bots/updateBot', { name: this.bot.name, active: false });
				} catch (err) {
					this.$error(err.message);
				}
			}
		}
	};
</script>

<style lang="scss">
	.bot {
		display: grid;
		grid-template-columns: auto 1fr auto;
		border-top: 3px solid var(--color-status);
		padding: 0.5em;
		background: var(--color-background-light);
		border-radius: 0 0 4px 4px;
		transition: border .3s;
	}

	.bot__profile--link {
	    display: inline-block;
		margin-right: 0.5em;
		position: relative;
	}

	.bot__profile--button   {
	    position: absolute;
	    display: none;
	    width: 100%;
	    height: 100%;
	    background: var(--color-theme-dark);
	    content: " ";
	    color: #fff;
	    top: 0;
	    text-align: center;
	    line-height: 2em;
	}

	.bot__profile--link:hover .bot__profile--button {
	    display: block;
	}

	.bot__avatar {
	    min-width: 2.5em;
		max-height: 100%;
	}

	.bot__status {
		display: flex;
		flex-direction: column;
		overflow: hidden;
		cursor: pointer;
	}

	.bot__status-property {
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		display: inline-block;
	}

	.bot__status-property--name {
		font-weight: 600;
	}

	.bot__status-property--text {
		font-size: 0.8em;
		font-style: italic;
	}

	.bot__actions {
		display: flex;
		align-items: center;
	}

	.bot__action {
		padding: 0.5em;
		cursor: pointer;
		transition: color .3s;
		color: var(--color-text-disabled);

		&:hover {
			color: var(--color-text-dark);

			.app--dark-mode & {
				color: var(--color-text);
			}
		}
	}

	.bot__action--start:hover,
	.bot__action--resume:hover {
		color: green;
	}

	.bot__action--pause:hover {
		color: orange;
	}

	.bot__action--stop:hover,
	.bot__action--delete:hover {
		color: red;
	}
</style>
