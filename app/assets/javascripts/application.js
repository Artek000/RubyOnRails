// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery3
//= require jquery_ujs
//= require popper
//= require bootstrap-sprockets
//= require activestorage
//= require icheck
//= require select2

  function Show() {
    $('#backBlack').show().css('visibility', 'visible');
    $('.create_todo').show().css('visibility', 'visible');
  }


  function Hide() {
    $('.create_todo').slideUp().css('visibility', 'hidden');
    $('#backBlack').hide().css('visibility', 'hidden');
  }

  function icheck(){
  if($(".icheck-me").length > 0){
    $(".icheck-me").each(function(){
      var $el = $(this);
      var skin = ($el.attr('data-skin') !== undefined) ? "_" + $el.attr('data-skin') : "",
      color = ($el.attr('data-color') !== undefined) ? "-" + $el.attr('data-color') : "";
      var opt = {
        checkboxClass: 'icheckbox' + skin + color,
        radioClass: 'iradio' + skin + color,
      }
      $el.iCheck(opt);

      if ($el.prop('checked') == true) {
        $el.parent().parent().parent().find('#text').css('text-decoration', 'line-through');
      }else if ($el.prop('checked') == false) {
        $el.parent().parent().parent().find('#text').css('text-decoration', 'none');
      }

    });
  }


$(".icheck-me").on('ifChanged', function(event) {
  var isChecked = event.currentTarget.checked;
  if(isChecked == true){
    $(this).attr('checked', true);
    $(this).parent().parent().parent().find('#text').css('text-decoration', 'line-through');
    $(this).parent().parent().submit();
  }else if (isChecked == false) {
    $(this).attr('checked', false);
    $(this).parent().parent().parent().find('#text').css('text-decoration', 'none');
    $(this).parent().parent().submit();
  }else {
    alert('error');
  }
});

}

$(function(){
  icheck();
})
