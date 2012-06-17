class window.AboutPage
  
  @nav_links: $("#site_links")
  @navigation: $("#navigation")
  @original_width: "" + @nav_links.width() + "px"

  @load: ->
    navigation = @navigation
    @nav_links.animate({"width": "100px"}, "slow").promise().done( ->
      image_tag = $('<img id="mypic" width="210" src="/images/me.png">')
      navigation.append(image_tag)
      image_tag.fadeIn("slow")
    )

  @unload: ->
    nav_links = @nav_links
    original_width = @original_width

    @navigation.find("#mypic").fadeOut('fast', ->
      $(this).remove()
      nav_links.animate({"width": original_width}, "slow")
    )