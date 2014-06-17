#= require "jquery-1.8.3.min"
#= require_tree .

current_page = ""
all_links = ['#home_link', '#portfolio_link', '#blog_link', '#about_link', '#contact_link']

enable_links = ->
  for hash_tag in all_links
    $(hash_tag).unbind('click')
    $(hash_tag).bind 'click', {hash_tag: hash_tag}, (event) =>
      event.preventDefault()
      hash_tag = event.data.hash_tag.replace("_link", "")
      window.location.hash = hash_tag
      load_page(hash_tag.replace("#", ""))
      false

disable_links = ->
  for hash_tag in all_links
    $(hash_tag).unbind('click')
    $(hash_tag).bind 'click', {hash_tag: hash_tag}, (event) =>
      event.preventDefault()
      false


load_page = (page_name) ->
  return if current_page == page_name
  main = $("#main")
  url = location.origin + "/content/" + page_name
  $(".target").removeClass("target")
  $("#" + page_name + "_link").addClass("target")
  disable_links()

  $.ajax url,
      type: 'GET'
      dataType: 'html'
      error: (jqXHR, textStatus, errorThrown) ->
        main.empty()
        main.append "<div class=\"headline\"><p>EGHAD!</p><p>There seems to be a problem loading the \"" + page_name + "\" page!</p></div>"
        enable_links()
      success: (data, textStatus, jqXHR) ->
        page_class(current_page).unload()
        main.fadeOut('fast', ->
          main.empty()
          main.append data
          page_class(page_name).load()
          current_page = page_name
          main.fadeIn('fast', ->
            enable_links()
          )
        )


page_class = (page_name) ->
  return AboutPage if page_name == "about"
  GenericPage

disable_links()
$(document).ready ->
  initial_page = window.location.hash.replace("#", "")

  if initial_page == "" || initial_page == "home"
    $("#home_link").addClass("target")
    enable_links()
  else
    load_page(initial_page)

  for image_name in ["me", "bgov", "zearn", "diobox", "champd", "github", "gmail", "linkedin", "twitter"]
    image_tag = $('<img id="mypic" width="210" src="/images/' + image_name + '.png">')
    image_tag.css('display', 'none')
    $('#hidden_images').append(image_tag)

