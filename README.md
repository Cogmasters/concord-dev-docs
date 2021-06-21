# Setting Up

1. `$ apt install doxygen`
2. `$ apt install graphviz`
3. `$ apt install python3-sphinx`
4. `pip install sphinx_rtd_theme`
5. `pip install breathe`
6. ln -s {ABSOLUTE PATH}/orca {ABSOLUTE PATH}/orca-docs/orca
7. Generate XML files by running `doxygen Doxyfile`
8. Run `make` to convert these XML files via Sphinx
9. Open  `_build/html/index.html`
