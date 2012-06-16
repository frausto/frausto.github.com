#= require "jquery"
#= require_tree .

for hash_tag in ['#home', '#portfolio', '#blog', '#about', '#contact']
  $(hash_tag).bind 'click', {hash_tag: hash_tag}, (event) =>
    event.preventDefault()
    window.location.hash = event.data.hash_tag
    load_page(event.data.hash_tag.replace("#", ""))
  

$(document).ready ->
  initial_page = window.location.hash.replace("#", "")
  
  if initial_page == ""
    initial_page = "home" 
    window.location.hash = "#home"

  load_page(initial_page)