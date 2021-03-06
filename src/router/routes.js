export default [
	{
		path: '/',
		redirect: { name: 'home' }
	},
	{
		path: '/page/home',
		name: 'home',
		component: () => import('../views/Home.vue')
	},
	{
		path: '/page/setup',
		name: 'setup',
		component: () => import('../views/Setup.vue'),
		meta: { noPasswordRequired: true }
	},
	{
		path: '/page/ipc-configuration',
		name: 'ipc-configuration',
		component: () => import('../views/IPCConfiguration.vue')
	},
	{
		path: '/page/bots',
		name: 'bots',
		component: () => import('../views/Bots.vue')
	},
	{
		path: '/page/bot/new',
		name: 'bot-create',
		components: {
			default: () => import('../views/Bots.vue'),
			modal: () => import('../views/modals/BotCreate.vue')
		},
		meta: { modal: true }
	},
	{
		path: '/page/bot/:bot',
		name: 'bot',
		components: {
			default: () => import('../views/Bots.vue'),
			modal: () => import('../views/modals/Bot.vue')
		},
		meta: { modal: true }
	},
	{
		path: '/page/bot/:bot/config',
		name: 'bot-config',
		components: {
			default: () => import('../views/Bots.vue'),
			modal: () => import('../views/modals/BotConfiguration.vue')
		},
		meta: { modal: true }
	},
	{
		path: '/page/bot/:bot/bgr',
		name: 'bot-bgr',
		components: {
			default: () => import('../views/Bots.vue'),
			modal: () => import('../views/modals/BotBGR.vue')
		},
		meta: { modal: true }
	},
	{
		path: '/page/bot/:bot/delete',
		name: 'bot-delete',
		components: {
			default: () => import('../views/Bots.vue'),
			modal: () => import('../views/modals/BotDelete.vue')
		},
		meta: { modal: true }
	},
	{
		path: '/page/bot',
		redirect: { name: 'bots' }
	},
	{
		path: '/page/commands',
		name: 'commands',
		component: () => import('../views/Commands.vue')
	},
	{
		path: '/page/log',
		name: 'log',
		component: () => import('../views/Log.vue')
	},
	{
		path: '/page/config',
		name: 'global-config',
		component: () => import('../views/GlobalConfig.vue')
	},
	{
		path: '*',
		name: '404',
		redirect: { name: 'home' }
	}
];
