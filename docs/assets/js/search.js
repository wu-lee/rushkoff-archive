(function($) {

  var titles = [];
  var listSelector = '#search-list';
  var searchInputSelector = '.search-input';
  var searchButtonSelector = '.search-button';
  
  function init() {
    $(searchInputSelector).on('input', onChange);
    $(searchButtonSelector).on('click', clear);
  }

  function onChange() {
    var searchText = $(searchInputSelector).val();
    filter(simplify(searchText));
  }

  function clear() {
    console.log("clear"); // DEBUG
    $(searchInputSelector).val('');
    filter('');
  }
  
  function simplify(text) {
    if (!text) return '';
    return text.toLowerCase()
               .replace(/\s+/g, ' ')
               .replace(/\W+/g, '');
  }
  
  function filter(text) {
    // console.log("search:",text); // DEBUG
    var items = $(listSelector).children('li');
    items.each(function (ix) {
      var title = $('.post-list-title', this).text();
      var subtitle = $('.post-list-subtitle', this).text();
      var isMatching = !!simplify(title+' '+subtitle).match(text);
      // console.log("match:",simplify(title),isMatching); // DEBUG
      $(this).toggle(isMatching);
    })
  }
  // run init on document ready
  $(document).ready(init);

})(jQuery);
