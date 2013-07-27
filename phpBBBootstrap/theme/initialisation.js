/**
* Find a member
*/
function find_username(url)
{
	popup(url, 1000, 570, '_usersearch');
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
    $('#st').addClass('input-medium');
    $('#sk').addClass('input-medium');
    $('#sd').addClass('input-medium');
    
    $('a','.pagination-line').addClass('btn btn-mini');
    $('span.page-dots','.pagination-line').addClass('btn btn-mini disabled');
    $('strong','.pagination-line').addClass('btn btn-mini disabled');
    //$('strong','.btn').removeClass('btn btn-mini disabled');
    $('span.page-sep','.pagination-line').remove();
    $('img','.forum-avatar-cadre').addClass('img-polaroid');
    //$('.tooltip-link').tooltip()
    //$('.popover-test').popover()

  })
}(window.jQuery)