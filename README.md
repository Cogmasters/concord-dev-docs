# Testing Manually

Run the following commands from your `concord/` repository

## Setting Up

The following commands should be run from your `concord/` repository

### Clone this repository into `concord/`
```sh
git clone https://github.com/Cogmasters/concord-docs
```

### Installing Dependencies
#### Doxygen 1.9.3
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
./doxygen
```

Generated files located at `concord-docs/docs/html`
