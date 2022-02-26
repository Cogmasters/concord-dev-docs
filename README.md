# Testing Manually

Run the following commands from your `concord/` repository

## Setting Up

The following commands should be run from your `concord/` repository

### Clone this repository into `concord/`
```sh
git clone https://github.com/Cogmasters/concord-docs
```

### Installing Dependencies
#### Install Sphinx
```sh
pip install sphinx && pip install pydata_sphinx_theme
```
#### Install Breathe
```sh
pip install breathe
```
#### Install doxygen 1.9.3
```sh
wget https://www.doxygen.nl/files/doxygen-1.9.3.linux.bin.tar.gz
tar -xvf doxygen-1.9.3.linux.bin.tar.gz
cp doxygen-1.9.3/bin/doxygen .
```

### Prepare concord files for documentation
```sh
make docs && cp concord-docs/Doxyfile Doxyfile
```

### Generating Static Files
```sh
make -C concord-docs/docs clean && rm -rf concord-docs/docs/xml && ./doxygen && mv docs/xml concord-docs/docs/ && make -C concord-docs/docs html
```

Generated files located at `concord-docs/docs/build/html`
