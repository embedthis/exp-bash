Expansive.load({
    expansive: {
        transforms: {
            name:   'shell',
            from:   [ 'bash', 'sh' ],
            to:     '*',
            script: `
                function transform(contents, meta, service)
                    run('bash', contents)
            `
        }
    }
})
