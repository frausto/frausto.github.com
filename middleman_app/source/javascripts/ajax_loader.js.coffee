
window.load_page = (page_name) ->
  main = $("#main")
  url = "/content/" + page_name + ".html"
  main.empty()

  $.ajax url,
      type: 'GET'
      dataType: 'html'
      error: (jqXHR, textStatus, errorThrown) ->
        main.append "<div class=\"headline\"><p>EGHAD!</p><p>We could not find the \"" + page_name + "\" page!</p></div>"
      success: (data, textStatus, jqXHR) ->
        main.append data