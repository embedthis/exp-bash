Expansive.load({
    expansive: {
        transforms: {
            name:   'shell',
            input:  [ 'bash', 'sh' ],
            output: '*',
            script: `
                function transform(contents, meta, service)
                    run('bash', contents)
            `
        }
    }
})
