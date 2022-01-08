# Generate Doxygen XML Files
import subprocess
import os
import sys

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

project = 'Concord'
copyright = '2022, Cogmasters'
author = 'Cogmasters'


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
breathe_projects = { "Concord": '../xml' }
breathe_default_project = 'Concord'

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
html_theme = 'pydata_sphinx_theme'
html_theme_options = {
    "icon_links": [
        {
            "name": "Github",
            "url": "https://github.com/Cogmasters/concord",
            "icon": "fab fa-github"
        },
        {
            "name": "Discord",
            "url": "https://discord.gg/Y7Xa6MA82v",
            "icon": "fab fa-discord"
        }
    ],
    "use_edit_page_button": True
}
html_context = {
    # "github_url": "https://github.com", # or your GitHub Enterprise interprise
    "github_user": "Cogmasters",
    "github_repo": "concord-docs",
    "github_version": "master",
    "doc_path": "docs/source",
}
html_favicon = "icon.ico"
html_logo = "icon.svg"

# Add any paths that contain custom static files (such as style sheets) here,
# relative to this directory. They are copied after the builtin static files,
# so a file named "default.css" will overwrite the builtin "default.css".
html_static_path = ['_static']

html_css_files = [
    'css/custom.css',
]
