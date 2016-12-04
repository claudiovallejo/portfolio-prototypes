###
# General configuration
###

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
end

# Activate directory indexes
activate :directory_indexes

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false
