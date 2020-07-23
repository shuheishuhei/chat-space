$(function() {
  function buildHTML(message) {
    if (message.image) {
      let html =
      `<div class="MessageBox" data-message-id=${message.id}>
        <div class="chat-main__message-list">
        <div class="chat-main__message-list__name">
        ${message.user_name}
        </div>
        <div class="chat-main__message-list__time">
        ${message.created_at}
        </div>
        <div class=""chat-main__message-list__message">
        ${message.content}
        </div>
        <img class="chat-main__message-list__image" src="${message.image}">
      </div>`
        return html;
    } else {
      let html =
      `<div class="MessageBox" data-message-id=${message.id}>  
        <div class="chat-main__message-list">
        <div class="chat-main__message-list__name">
        ${message.user_name}
        </div>
        <div class="chat-main__message-list__time">
        ${message.created_at}
        </div>
        <div class=""chat-main__message-list__message">
        ${message.content}
        </div>
      </div>`  
        return html;
    };
  }

  $('.Form').on("submit", function(e) {
    e.preventDefault()
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax( {
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data) {
      let html = buildHTML(data);
      $('.chat-main__message').append(html);
      $('form')[0].reset();
      $('.chat-main__message').animate({scrollTop: $('.chat-main__message')[0].scrollHeight});
      $('.send').prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージの送信に失敗しました");
      $('.send').prop('disabled', false);
    });
  });
});