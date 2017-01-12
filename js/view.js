define(
  'view',
  ['model'],

function() {
  return {
    View: function(model) {
      var self = this;

      function init() {
        var wrapper = tmpl($('#wrapper-template').html());
        $('body').append(wrapper);
        self.elements = {
          input: $('.item-value'),
          addBtn: $('.item-add'),
          listContainer: $('.item-list'),
          editBtn: $('.edit')
        };
        self.renderList(model.data);
      };

      self.renderList = function(data) {
        var list = tmpl($('#list-template').html(), {data:data});
        self.elements.listContainer.html(list);
        $('.edit').css("display", "none");
      };

      self.editItem = function(item, item2) {
        item2.text('');
        item2.removeClass();
        item2.append('<input class="item-edit" type="text" value="'+ item +'">');
        $('.edit').css("display", "block");
      };

      init();
}
}
}
)
