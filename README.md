# Testing Manually

## Setting Up

### Installing Dependencies

* `$ apt install doxygen`
* `$ pip install sphinx`
* `$ pip install breathe`
* `$ git clone https://github.com/cee-studio/orca.git`
* `$ cd orca && ./scripts/get-cee-utils.sh && cd ..`

### Generating Static Files

* `$ doxygen`
* `$ make -C docs html`

Generated files at `docs/build/html`
