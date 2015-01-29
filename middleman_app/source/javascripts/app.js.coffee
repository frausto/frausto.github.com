#= require "jquery-1.8.3.min"
#= require_tree .


wrap = $("body")
links = $("#navigation")

$(window).scroll((e) ->
  if wrap.scrollTop() > 530
    links.addClass("fixy")
  else
    links.removeClass("fixy")
)


$(->
  $('a[href*=#]:not([href=#])').click(->
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname)
      target = $(this.hash)
      target = if target.length then target else $('[name=' + this.hash.slice(1) +']')
      if (target.length)
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000)
        false
  )
)
