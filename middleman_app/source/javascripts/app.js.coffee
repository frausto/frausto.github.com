#= require "jquery-1.8.3.min"
#= require_tree .


wrap = $("body")
links = $("#navigation")

$(window).scroll((e) ->
  console.log(wrap.scrollTop())
  if wrap.scrollTop() > 530
    links.addClass("fixy")
  else
    links.removeClass("fixy")
)

