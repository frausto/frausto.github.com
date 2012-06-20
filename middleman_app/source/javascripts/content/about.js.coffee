class window.AboutPage
  
  @nav_links: $("#site_links")
  @navigation: $("#navigation")
  @original_width: "" + @nav_links.width() + "px"

  @load: ->
    navigation = @navigation
    @nav_links.animate({"width": "100px"}, "slow")
    image_tag = $('<img id="mypic" width="210" src="/images/me.png">')
    image_tag.css('position', 'absolute')
    image_tag.css('display', 'none')
    navigation.append(image_tag)
    image_tag.fadeIn('slow')
    

  @unload: ->
    nav_links = @nav_links
    original_width = @original_width
    pic = @navigation.find("#mypic")
    nav_links.animate({"width": original_width}, "slow", ->
      pic.remove()
    )
    pic.fadeOut('slow')