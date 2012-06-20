class window.PortfolioPage

  constructor: -> 
    @options = $(".option")
    @current_index = 0

  load: ->
    for option, i in @options
      @current_index = i if $(option).hasClass("current")

    $("#left_click").click =>
      @current_index -= 1
      @current_index = @options.length - 1 if @current_index == -1
      this.update_view()


    $("#right_click").click =>
      @current_index += 1
      @current_index = 0 if @current_index == @options.length
      this.update_view()

  unload: ->
  

  update_view: =>
    old_current = $(".current")
    new_current = $(@options[@current_index])

    old_current.removeClass("current")
    old_id = old_current.attr("id").replace("_choice", "")
    $("." + old_id).addClass("hidden")

    new_current.addClass("current")
    new_id = new_current.attr("id").replace("_choice", "")
    $("." + new_id).removeClass("hidden")