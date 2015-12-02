$(function() {
  var handlers = {
    container: $('#contacts').find('tbody'),
    addContact: function(index, contact) {
      var tr = $('<tr>').appendTo(handlers.container);
        $('<td>').text(contact.firstname).appendTo(tr);
        $('<td>').text(contact.lastname).appendTo(tr);
        $('<td>').text(contact.email).appendTo(tr);
    },
    receiveContacts: function(contacts) {
      $.each(contacts, handlers.addContact);
    },
    getContacts: function(){
      handlers.container.empty();
      $.getJSON('/contacts', handlers.receiveContacts);
    }
  };
  $('#load_contacts').on('click', handlers.getContacts);
});

