# Testing Manually

Run the following commands from your `concord/` repository

## Setting Up

Clone this repository into `concord/`
* $ `git clone https://github.com/Cogmasters/concord-docs`

### Installing Dependencies

* $ `sudo apt install doxygen && pip install sphinx && && pip install pydata_sphinx_theme && pip install breathe`
* $ `make cog_utils && cp concord-docs/Doxyfile Doxyfile`

### Generating Static Files

* $ `doxygen && mv docs/xml concord-docs/docs/ && make -C concord-docs/docs html`

Generated files located at `concord-docs/docs/build/html`
