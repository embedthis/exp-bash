Expansive.load({
    transforms: {
        name:   'shell',
        mappings: {
            'bash', 
            'sh'
        },
        script: `
            function transform(contents, meta, service)
                run(file.extension, contents)
        `
    }
})
