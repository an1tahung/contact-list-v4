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
      handlers.container.empty();
      $.each(contacts, handlers.addContact);
    },
    getContacts: function(){
      $.getJSON('/contacts', handlers.receiveContacts);
    }
  };

  $('#load_contacts').on('click', handlers.getContacts);

  $('#create_contact').on('click', function(){
    var fname = $('#firstname').val();
    var lname = $('#lastname').val();
    var email = $('#email').val();
    var contact = {firstname: fname, lastname: lname, email: email};

    $.post('/new_contact', contact, function(data){
        if(data.result) {
          handlers.addContact(0, contact);
        } else {
          alert("This contact cannot be added! Please check your inputs.");
        }
    }, 'json');
  });
});

