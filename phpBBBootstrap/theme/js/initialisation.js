$(document)
	.on('change', '.btn-file :file', function() {
		var input = $(this),
		numFiles = input.get(0).files ? input.get(0).files.length : 1,
		label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
		input.trigger('fileselect', [numFiles, label]);
});

$(document).ready( function() {
	$('.btn-file :file').on('fileselect', function(event, numFiles, label) {
		
		var input = $(this).parents('.input-group').find(':text'),
			log = numFiles > 1 ? numFiles + ' files selected' : label;
		
		if( input.length ) {
			input.val(log);
		} else {
			if( log ) alert(log);
		}
	});
});		

/**
* Find a member
*/
function find_username(url)
{
	popup(url, 1000, 570, '_usersearch');
	return false;
}
function search_after_active(){
	$('#active_select').val('gt');
	$('#button_active_select').html( $('#search_after_active').html() + ' <span class="caret"></span>');
	return false;
}
function search_before_active(){
	$('#active_select').val('lt');
	$('#button_active_select').html( $('#search_before_active').html() + ' <span class="caret"></span>');
	return false;
}
function search_after_joined(){
	$('#joined_select').val('gt');
	$('#button_joined_select').html( $('#search_after_joined').html() + ' <span class="caret"></span>');
	return false;
}
function search_before_joined(){
	$('#joined_select').val('lt');
	$('#button_joined_select').html( $('#search_before_joined').html() + ' <span class="caret"></span>');
	return false;
}
function search_less_count(){
	$('#count_select').val('lt');
	$('#button_count_select').html( $('#search_less_count').html() + ' <span class="caret"></span>');
	return false;
}
function search_equal_count(){
	$('#count_select').val('eq');
	$('#button_count_select').html( $('#search_equal_count').html() + ' <span class="caret"></span>');
	return false;
}
function search_more_count(){
	$('#count_select').val('gt');
	$('#button_count_select').html( $('#search_more_count').html() + ' <span class="caret"></span>');
	return false;
}
function search_asc_sd(){
	$('#sd').val('a');
	$('#button_sd').html( $('#search_asc_sd').html() + ' <span class="caret"></span>');
	return false;
}
function search_desc_sd(){
	$('#sd').val('d');
	$('#button_sd').html( $('#search_desc_sd').html() + ' <span class="caret"></span>');
	return false;
}
function sort_asc_sd(){
	$('#sd').val('a');
	$('#button_sort_sd').html( $('#sort_asc_sd').html() + ' <span class="caret"></span>');
	return true;
}
function sort_desc_sd(){
	$('#sd').val('d');
	$('#button_sort_sd').html( $('#sort_desc_sd').html() + ' <span class="caret"></span>');
	return true;
}
function message_asc_sd(){
	$('#sd').val('a');
	$('#button_sort').html( $('#message_asc_sd').html());
	return false;
}
function message_desc_sd(){
	$('#sd').val('d');
	$('#button_sort').html( $('#message_desc_sd').html());
	return false;
}

/**
* Change language
*/
function change_language(lang_iso)
{
	$("input[name='change_lang']",'#register').val(lang_iso);
	$('#register').submit();
}
function update_language(lang_iso)
{
	document.forms['register'].change_lang.value = lang_iso;
	document.forms['register'].submit.click();
}
	
!function ($) {
  $(function(){
    var $window = $(window)
    // tooltip demo
    $('.tooltip-link').tooltip({      
      container : 'body',
      placement : 'bottom'
    })
    $('.tooltip-left').tooltip({      
        container : 'body',
        placement : 'left'
      });
    $('.tooltip-top').tooltip({      
        container : 'body'
      });
    
    $('a','.pagination-line').addClass('btn btn-default btn-xs');
    $('span.page-dots','.pagination-line').addClass('btn btn-default btn-xs disabled');
    $('strong','.pagination-line').addClass('btn btn-default btn-xs disabled');
    $('span.page-sep','.pagination-line').remove();
    $('img','.forum-avatar-cadre').addClass('img-thumbnail img-responsive');
    $('img','.avatar').addClass('img-thumbnail img-responsive');
    
    //Paramétrage pour la recherche de membres
    $('#button_active_select').html($('#active_select_cache option:selected').html() + ' ' + $('#button_active_select').html());
    $('#active_select').val($('#active_select_cache').val());
    $('#button_joined_select').html($('#joined_select_cache option:selected').html() + ' ' + $('#button_joined_select').html());
    $('#joined_select').val($('#joined_select_cache').val());
    $('#button_count_select').html($('#count_select_cache option:selected').html() + ' ' + $('#button_count_select').html());
    $('#count_select').val($('#count_select_cache').val());
    $('#button_sd').html($('#sd_cache option:selected').html() + ' ' + $('#button_sd').html());
    $('#button_sort').html($( '[selected="selected"]','#sd' ).html());
    if ($('#sd_cache').val()){
    	$('#sd').val($('#sd_cache').val());
    }
    //Paramètre pour les tris
    $('select#st').addClass('form-control ');
    $('select#sk').addClass('form-control ');
    $('select#sd').addClass('sr-only');
    
    //@todo Optimiser pour ne le faire que si nécessaire (en même temps on pourrait ajouter cette classe à tous les select...)
	$("select[name='topic_st']").addClass('form-control');
	$("select[name='topic_sk']").addClass('form-control');
	$("select[name='topic_sd']").addClass('form-control');
	$("select[name='post_st']").addClass('form-control');
	$("select[name='post_sk']").addClass('form-control');
	$("select[name='post_sd']").addClass('form-control');
	
	$("select#quick-mod-select").addClass('form-control');
	
	$('#qr_ns_editor_div').hide();
	$('#qr_editor_div').hide();


  })
}(window.jQuery)