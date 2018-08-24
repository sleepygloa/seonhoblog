function blogChileListToggle(count){
	var listCss = $('.blogSubject_'+count);
	if(listCss.is(":visible")){
		listCss.css('display', 'none');
	}else{
		listCss.css('display', 'block');
	}

}
var blogJs = function(){
	"use strict";

	var $grid = $('#blogGrid');

	return {
		init : function(){

			getBlogContent();

			getEvents();

		}
	}

	  function getBlogContent(){
			$grid.fnList({
				programId 	: 'blog',
				programNm 	: '블로그',
				url 		: '/manage/blog/',
				colName		: ['IDX', 'TITLE', 'SUBJECT'],
				viewContents : true,
				viewContentsRe : true,
				btn			: ['add']
			});

	  }


	  function getEvents(){
		//글쓰기
		  $(document).on('click', '#blogAddBtn', function(){
			  mainBlogInsertBtn();
		  })
	  }

}();

$(document).ready(function(){
	blogJs.init();
})