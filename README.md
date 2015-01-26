exp-shell
===

Expansive plugin for shell scripts.

Provides the 'shell' service to run shell scripts and capture the output 
into HTML pages.

### To install:

    pak install shell

### To configure in expansive.json:

* shell.input &mdash; Array of shell file extensions to service.

```
{
    services: {
        shell: {
            input: [ 'bash', 'sh' ],
        }
    }
}
```

### Get Pak from

[https://embedthis.com/pak/](https://embedthis.com/pak/download.html)
