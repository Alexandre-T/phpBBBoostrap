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

  })
}(window.jQuery)