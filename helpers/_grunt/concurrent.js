module.exports = {
        syncing: {
            tasks: [
                'sync'
            ],
            options: {
                logConcurrentOutput: true
            }
        },
        build: {
            tasks: [
                'assemble',
                'beauty-scss'
            ],
            options: {
                logConcurrentOutput: true,
                limit: 5
            }
		}
};