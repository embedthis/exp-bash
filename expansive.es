Expansive.load({
    services: {
        name:   'shell',
    
        transforms: {
            mappings: [ 'bash', 'sh' ],
            render: function(contents, meta) run(meta.sourcePath.extension, contents)
        }
    }
})
