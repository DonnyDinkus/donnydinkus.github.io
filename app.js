var getFilter = function (category) {
  var filter = $("#filters ." + category + ":checked").map(function () {
      return '[data-filter*="' + this.value + '"]';
  }).get().join(",");
  filter = (filter.length > 0) ? filter : "*";
  return filter;
}

$("#filters :checkbox").click(function () {
  var all = $(".filterme");
  var tgts = all.filter(getFilter("brand")).filter(getFilter("project-type")).filter(getFilter("year"));
  all.not(tgts).hide();
  tgts.show();
});