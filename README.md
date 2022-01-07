# Testing Manually

Run the following commands from your `concord/` repository

## Setting Up

Clone this repository into `concord/`
```sh
$ git clone https://github.com/Cogmasters/concord-docs
```

### Installing Dependencies

```sh
$ sudo apt install doxygen && pip install sphinx && && pip install pydata_sphinx_theme && pip install breathe
```

```sh
$ make docs && cp concord-docs/Doxyfile Doxyfile
```

### Generating Static Files

```sh
make -C concord-docs/docs clean && rm -rf concord-docs/docs/xml && doxygen && mv docs/xml concord-docs/docs/ && make -C concord-docs/docs html
```

Generated files located at `concord-docs/docs/build/html`
