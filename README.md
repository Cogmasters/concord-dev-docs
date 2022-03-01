# Setting Up

## Installing Dependencies
### Doxygen 1.9.3
```sh
wget https://www.doxygen.nl/files/doxygen-1.9.3.linux.bin.tar.gz
tar -xvf doxygen-1.9.3.linux.bin.tar.gz
cp doxygen-1.9.3/bin/doxygen .
```

## Prepare concord files for documentation
```sh
make -C concord docs
```

## Generating Static Files
```sh
cd concord && ./doxygen
```

Generated files located at `concord/docs/html`
