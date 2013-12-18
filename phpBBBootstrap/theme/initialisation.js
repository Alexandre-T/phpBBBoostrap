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
    $('#st').addClass('form-control');
    $('#sk').addClass('form-control');
    $('#sd').addClass('form-control');
    
    $('a','.pagination-line').addClass('btn btn-default btn-xs');
    $('span.page-dots','.pagination-line').addClass('btn btn-default btn-xs disabled');
    $('strong','.pagination-line').addClass('btn btn-default btn-xs disabled');
    //$('strong','.btn').removeClass('btn btn-xs disabled');
    $('span.page-sep','.pagination-line').remove();
    $('img','.forum-avatar-cadre').addClass('img-thumbnail');
    $('img','span.avatar').addClass('thumbnail');
    //$('.tooltip-link').tooltip()
    //$('.popover-test').popover()
    
    //Pramétrage pour la recherche de membres
    $('#button_active_select').html($('#active_select_cache option:selected').html() + ' ' + $('#button_active_select').html());
    $('#active_select').val($('#active_select_cache').val());
    $('#button_joined_select').html($('#joined_select_cache option:selected').html() + ' ' + $('#button_joined_select').html());
    $('#joined_select').val($('#joined_select_cache').val());
    $('#button_count_select').html($('#count_select_cache option:selected').html() + ' ' + $('#button_count_select').html());
    $('#count_select').val($('#count_select_cache').val());
    $('#button_sd').html($('#sd_cache option:selected').html() + ' ' + $('#button_sd').html());
    $('#sd').val($('#sd_cache').val());
  })
}(window.jQuery)