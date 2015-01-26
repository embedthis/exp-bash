Expansive.load({
    transforms: {
        name:   'shell',
        input:  [ 'bash', 'sh' ],
        output: '*',
        script: `
            function transform(contents, meta, service)
                run(file.extension, contents)
        `
    }
})
