#= require "jquery"
#= require_tree .

current_page = ""

load_page = (page_name) ->
  return if current_page == page_name
  main = $("#main")
  url = "/content/" + page_name + ".html"

  $.ajax url,
      type: 'GET'
      dataType: 'html'
      error: (jqXHR, textStatus, errorThrown) ->
        main.empty()
        main.append "<div class=\"headline\"><p>EGHAD!</p><p>We could not find the \"" + page_name + "\" page!</p></div>"
      success: (data, textStatus, jqXHR) ->
        page_class(current_page).unload()
        main.fadeOut('fast', ->
          main.empty()
          main.append data
          page_class(page_name).load()
          current_page = page_name
          main.fadeIn('fast')
        )

for hash_tag in ['#home', '#portfolio', '#blog', '#about', '#contact']
  $(hash_tag).bind 'click', {hash_tag: hash_tag}, (event) =>
    event.preventDefault()
    window.location.hash = event.data.hash_tag
    load_page(event.data.hash_tag.replace("#", ""))

page_class = (page_name) ->
  return AboutPage if page_name == "about"
  GenericPage


$(document).ready ->
  initial_page = window.location.hash.replace("#", "")
  
  if initial_page == ""
    initial_page = "home" 
    window.location.hash = "#home"

  load_page(initial_page)