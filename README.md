# Setting Up

## Installing Dependencies
### Doxygen 1.9.3
```sh
wget https://www.doxygen.nl/files/doxygen-1.9.3.linux.bin.tar.gz
tar -xvf doxygen-1.9.3.linux.bin.tar.gz
cp doxygen-1.9.3/bin/doxygen .
```

## Get latest concord-dev
```sh
git submodule update --init --recursive
git submodule update --remote
```

## Prepare concord-dev files for documentation
```sh
make -C concord docs
```

## Generating Static Files
```sh
cd concord && ./doxygen
```

Generated files located at `concord/docs/html`
