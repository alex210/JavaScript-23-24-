define(
  'controller',
  ['view'],

function() {
  return {
    Controller: function(model, view) {
      var self = this;
      view.elements.addBtn.on('click', addItem);
      view.elements.listContainer.on('click', '.item-delete', removeItem);
      view.elements.listContainer.on('click', '.text', editItem);
      view.elements.editBtn.on('click', edit);

      function addItem() {
        var newItem = view.elements.input.val();
        model.addItem(newItem);
        view.renderList(model.data);
        view.elements.input.val('');
      };

      function removeItem() {
        var item = $(this).attr('data-value');
        model.removeItem(item);
        view.renderList(model.data);
      };

      function editItem() {
        var item = $(this).text();
        var item2 = $(this);
        view.editItem(item, item2);
      };

      function edit() {
        var item = $('.item-edit').val();
        var index = $('.item-edit').parent().attr('id');
        model.editItem(item, index);
        view.renderList(model.data);
      };
}
}
}
)
