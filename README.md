# Testing Manually

Run the following commands from your `orca/` repository

## Setting Up

Clone this repository into `orca/`
* $ `git clone https://github.com/cee-studio/orca-docs`

### Installing Dependencies

* $ `sudo apt install doxygen && pip install sphinx && && pip install pydata_sphinx_theme && pip install breathe`
* $ `./scripts/get-cee-utils.sh && cp orca-docs/Doxyfile Doxyfile`

### Generating Static Files

* $ `doxygen && mv docs/xml orca-docs/docs/ && make -C orca-docs/docs html`

Generated files located at `orca-docs/docs/build/html`
