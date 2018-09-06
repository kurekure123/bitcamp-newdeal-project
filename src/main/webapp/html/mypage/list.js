'use strict'

var liTemplateSrc = $('#li-template').text();
var template = Handlebars.compile(liTemplateSrc);

loadList();

$('#name-list').on('click', 'div', (e) => {
    $('#name-list div.list-group-item-secondary')
        .removeClass('list-group-item-secondary');
    $(e.target).addClass('list-group-item-secondary');
    var no = $(e.target).attr('data-no');
    console.log(no);
    $.getJSON(`${serverApiAddr}/json/html/${no}`, (result) => {
		var json = {
    			bEmail : result.data[0].bEmail,
    			bName : result.data[0].bName,
    			bPhon : result.data[0].bPhon,
    			bno : result.data[0].bno,
    			cAdd : result.data[0].cAdd,
    			cName : result.data[0].cName,
    			cPhon : result.data[0].cPhon,
    			cardName : result.data[0].cardName,
    			fBook : result.data[0].fBook,
    			fax : result.data[0].fax,
    			insta : result.data[0].insta,
    			job : result.data[0].job,
    			memNo : result.data[0].memNo,
    			web : result.data[0].web
    	} 
    	console.log(json);
		$('div#test2').html(loadCard(json));
    })
});

$(document.body).on('refresh.list', () => loadList());

function loadList() {
    $.getJSON(`${serverApiAddr}/json/html/list`, (result) => {
    	console.log(result.list);
        var html = template(result);
        $('#name-list').html(html);
        $('#name-list li:first-child').click();
    })
}

function loadCard(x){
	console.log(x);
	console.log('test', x.bno);
	var front = '<div id = "bizTotal001">'
        + '<div id="bizinfo001">'
        + '<p> Email : '+x.bEmail+'</p>'
        + '<p> Contact : '+x.bPhon+'</p>'
        + '<p> Name : '+x.bName+'</p>'

	if(x.fax != undefined || x.fBook != null){
		front += `<p>${x.fBook}</p>`
	}
    if(x.insta != undefined || x.insta != null){
    	front += `<p>${x.insta}</p>`
	}
    if(x.job != undefined || x.fBook != null){
    	front += `<p> Position : ${x.job}</p>`
	}
    if(x.web != undefined || x.fBook != null){
    	front += `<p>${x.web}</p>`
	}
    front += '</div></div>'
   return front;
	
}