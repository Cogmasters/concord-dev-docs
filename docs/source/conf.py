# Generate Doxygen XML Files
import subprocess
import os
import sys

read_the_docs_build = os.environ.get('READTHEDOCS', None) == 'True'

if read_the_docs_build:
    print("RTD build...")
    #subprocess.call('doxygen Doxyfile; ls', shell=True)
else:
    print("Normal build...")
# ----------------------------------------------------------------------------

# Configuration file for the Sphinx documentation builder.
#
# This file only contains a selection of the most common options. For a full
# list see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Path setup --------------------------------------------------------------

# If extensions (or modules to document with autodoc) are in another directory,
# add these directories to sys.path here. If the directory is relative to the
# documentation root, use os.path.abspath to make it absolute, like shown here.
#
# import os
# import sys
# sys.path.insert(0, os.path.abspath('.'))

# -- Project information -----------------------------------------------------

project = 'Orca'
copyright = '2021, Cee-Studio'
author = 'Cee-Studio'


# -- General configuration ---------------------------------------------------

# Add any Sphinx extension module names here, as strings. They can be
# extensions coming with Sphinx (named 'sphinx.ext.*') or your custom
# ones.
extensions = [
        'breathe'
        ]

pygments_style = 'sphinx'
highlight_language = 'c'
primary_domain = 'c'

# Breathe Configuration

breathe_domain_by_extension = { "h" : "c" }
breathe_projects = { "Orca": '../xml' }
breathe_default_project = 'Orca'

breathe_default_members = ('members', 'undoc-members')
breathe_show_define_initializer = True
breathe_show_enumvalue_initializer = True

# Add any paths that contain templates here, relative to this directory.
templates_path = ['_templates']

# The suffix of source filenames
source_suffix = '.rst'

# List of patterns, relative to source directory, that match files and
# directories to ignore when looking for source files.
# This pattern also affects html_static_path and html_extra_path.
exclude_patterns = []


# -- Options for HTML output -------------------------------------------------

# The theme to use for HTML and HTML Help pages.  See the documentation for
# a list of builtin themes.
#
html_favicon = "https://raw.githubusercontent.com/cee-studio/orca-docs/master/docs/source/images/icon.ico"
# html_logo = "https://raw.githubusercontent.com/cee-studio/orca-docs/master/docs/source/images/icon.svg"
html_theme_options = {
    "github_url": "https://github.com/cee-studio/orca",
    "external_links": [
        {"name": "SaiphC", "url": "https://www.cee.studio/"}
    ],
    "use_edit_page_button": True
}
html_context = {
    # "github_url": "https://github.com", # or your GitHub Enterprise interprise
    "github_user": "cee-studio",
    "github_repo": "orca-docs",
    "github_version": "master",
    "doc_path": "docs/source",
}

if read_the_docs_build:
    html_theme = 'default'
else:
    html_theme = 'pydata_sphinx_theme'

# Add any paths that contain custom static files (such as style sheets) here,
# relative to this directory. They are copied after the builtin static files,
# so a file named "default.css" will overwrite the builtin "default.css".
html_static_path = ['_static']
