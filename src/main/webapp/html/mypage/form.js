 $('#next-btn').text(' NEXT >');
 var click_id ="";

 $('#add-info').on('click', (e)=>{
	 		click_id = e.target.getAttribute('id');
            var text = $(`#${click_id}`).text();
            var form_id = text.replace(' ', '');
            var serverApiAddr = "http://localhost:8080/bitcamp-newdeal-project";
            if($('.form-group').length == 4){
            	alert('현재 버전에서 추가 가능한 항목은 최대 4가지입니다');
            	return;
            }
            
            if($(`#e${form_id}`).length === 0){
                if(click_id !== '' && click_id !== undefined){
                    $('#info-form').append(`\
                    <div id="e${form_id}-form" class="form-group"> \
                      <label for="e${form_id}">${text}</label> \
                      <input type="text" class="form-control" id="e${form_id}"> \
                    </div>`);
                }
            }else {
                alert(text + '항목을 이미 추가하셨습니다.');
            }
        });
        
        $('#next-btn').on('click', ()=>{
        	var email = $('#eEmail').val();
        	var name = $('#eName').val();
        	var phone = $('#ePhone').val();
        	if( email == '' || name == '' || phone==''){
        		alert('이메일, 이름, 연락처는 반드시 입력하셔야 합니다');
        		return;
        	}
        	
        	
        	
            var json = {
                bEmail : email,
                bName : name,
                bPhone: phone,
                bno:$('#ebno').val(),
                cName:$('#eCompanyname').val(),
                cPhone:$('#eCompanyphone').val(),
                fBook:$('#eFacebook').val(),
                fax:$('#eFax').val(),
                insta:$('#eInstagram').val(),
                job:$('#ePosition').val(),
                web:$('#eWebSite').val()
            }
            
            loadcard(json)

        });
        
        function loadcard(json){
            $('div #test2').html(cardlist());
            
            $('#card1').append(businesscard1());
            $('#card2').append(businesscard2());
            $('#card3').append(businesscard3());
      
            $('#info-btn').text('< PREV');
            $('#final-btn').text(' SUBMIT >');
            
            $('#info-btn').on('click', ()=>{
            	$('div#test2').load('form.html');
            });
            
            $('input[type="radio"][name="check"]').on('click', (e)=>{
            	click_id = e.target.getAttribute('id');
            	console.log(click_id);
            });
            
            $('#prev1').on('click', ()=>{
            	$('#modalcardfr01').append(frontUI1(json));
            });
            
            $('#prev2').on('click', ()=>{
            	$('#modalcardfr02').append(frontUI2(json));
            });
            
            $('#prev3').on('click', ()=>{
            	$('#modalcardfr03').append(frontUI3(json));
            });
            
            $('#final-btn').on('click',()=>{
            	console.log(click_id);
        		$.post(`${serverApiAddr}/json/html/addCard`,{
        			'cardName': click_id,
        			'bName': json.bName,
        			'bEmail': json.bEmail,
        			'bPhon': json.bPhone,
        			'fBook': json.fBook,
        			'insta': json.insta,
        			'cName': json.cName,
        			'cAdd': json.cAdd,
        			'cPhon': json.cPhone,
        			'job': json.job,
        			'fax': json.fax,
        			'web': json.web
        		}, (result) =>{
        			if (result.status === 'success'){
                        location.href = 'mypage.html'
                    }else {
                            swal({
                                type: 'error',
                                title: '카드정보 실패!'
                              })
                    }
                }, 'json')
        	});
        }
  

            
            

        
        var cardlist =x=>{
            return `<div class="site-wrapper-inner contents-wrapper">\
                <div class="cover-container mid-content">\
                    <div class="container">\
                        <div class="cardlist-wrapper">\
                            <div class="row mb-3">\
                                <div id="card1" class="col-md-4"></div>\
                                <div id="card2" class="col-md-4"></div>\
                                <div id="card3" class="col-md-4"></div>\
                            </div>\
                        </div>\
                        <div class="d-flex">\
                            <button id="info-btn"\
                                class="btn btn-primary btn-lg mr-auto prev-btn"></button>\
                            <button id="final-btn" class="btn btn-primary btn-lg next-btn"></button>\
                        </div>\
                    </div>\
                </div>\
            </div>\
            `
        }
 
        var businesscard1 = x => {
            return `\
            <div id="total-div">\
               <div class="card-container">\
                     <div id="card-front">\
                        <div id="cardfront01"></div>\
                  </div>\
                  <div id="mdcont-container">\
                     <button type="button" id="prev1" class="fa fa-search-plus"\
                        aria-hidden="true" data-toggle="modal" data-target="#cardModal01">\
                     </button>\
                       <div class="form-check">\
					    <input type="radio" name="check" id="businesscard1">\
					    <label class="form-check-label" for="businesscard1">businesscard1</label>\
					  </div>\
                     <div id="cardModal01" class="modal fade " tabindex="-1"\
                        role="dialog modal-lg">\
                        <div class="modal-dialog modal-lg" role="dialog">\
                           <div class="modal-content">\
                              <div class="modal-header">\
                                 <h5 class="modal-title">BIZCARD-EXAMPLE</h5>\
                              </div>\
                              <div class="modal-body">\
                                 <div class="modal-container">\
                                          <div id="modalcardfr01"></div>\
                                 </div>\
                              </div>\
                              <div class="modal-footer">\
                                 <button type="button" class="btn btn-outline-danger"\
                                    data-dismiss="modal">Close</button>\
                              </div>\
                           </div>\
                        </div>\
                     </div>\
                  </div>\
               </div>\
            </div>\
            `
        }
        var businesscard2 = x => {
            return `\
            <div id="total-div">\
               <div class="card-container">\
                     <div id="card-front">\
                        <div id="cardfront02"></div>\
                  </div>\
                  <div id="mdcont container">\
                     <button type="button" id="prev2" class="fa fa-search-plus"\
                        aria-hidden="true" data-toggle="modal" data-target="#cardModal03">\
                     </button>\
                     <div class="form-check">\
					    <input type="radio" name="check" id="businesscard2">\
					    <label class="form-check-label" for="businesscard2">businesscard2</label>\
					  </div>\
                     <div id="cardModal02" class="modal fade " tabindex="-1"\
                        role="dialog modal-lg">\
                        <div class="modal-dialog modal-lg" role="dialog">\
                           <div class="modal-content">\
                              <div class="modal-header">\
                                 <h5 class="modal-title">BIZCARD-EXAMPLE</h5>\
                              </div>\
                              <div class="modal-body">\
                                 <div class="modal-container">\
                                          <div id="modalcardfr02"></div>\
                                 </div>\
                              </div>\
                              <div class="modal-footer">\
                                 <button type="button" class="btn btn-outline-danger"\
                                    data-dismiss="modal">Close</button>\
                              </div>\
                           </div>\
                        </div>\
                     </div>\
                  </div>\
               </div>\
            </div>\
            `
        }
        
        var businesscard3 = x => {
            return `\
            <div id="total-div">\
               <div class="card-container">\
                     <div id="card-front">\
                        <div id="cardfront03"></div>\
                  </div>\
                  <div id="mdcont container">\
                     <button type="button" id="prev3" class="fa fa-search-plus"\
                        aria-hidden="true" data-toggle="modal" data-target="#cardModal03">\
                     </button>\
                     <div class="form-check">\
					    <input type="radio" name="check" id="businesscard3">\
					    <label class="form-check-label" for="businesscard3">businesscard3</label>\
					  </div>\
                     <div id="cardModal03" class="modal fade " tabindex="-1"\
                        role="dialog modal-lg">\
                        <div class="modal-dialog modal-lg" role="dialog">\
                           <div class="modal-content">\
                              <div class="modal-header">\
                                 <h5 class="modal-title">BIZCARD-EXAMPLE</h5>\
                              </div>\
                              <div class="modal-body">\
                                 <div class="modal-container">\
                                          <div id="modalcardfr03"></div>\
                                       </div>\
                                 </div>\
                              </div>\
                              <div class="modal-footer">\
                                 <button type="button" class="btn btn-outline-danger"\
                                    data-dismiss="modal">Close</button>\
                              </div>\
                           </div>\
                        </div>\
                     </div>\
                  </div>\
               </div>\
            </div>\
            `
        }
        
        function frontUI1(x){ 
        	console.log('test :', x);
            var front = '<div id = "bizTotal001">'
                + '<div id="bizinfo001">'
                + '<p>'+x.bEmail+'</p>'
                + '<p>'+x.bPhone+'</p>'
                + '<p>'+x.bName+'</p>'

        	if(x.fax != undefined || x.fBook != null){
        		front += `<p>${x.fBook}</p>`
        	}
            if(x.insta != undefined || x.insta != null){
            	front += `<p>${x.insta}</p>`
        	}
            if(x.job != undefined || x.fBook != null){
            	front += `<p>${x.job}</p>`
        	}
            if(x.web != undefined || x.fBook != null){
            	front += `<p>${x.web}</p>`
        	}
            front += '</div></div>'
 return front;  
        }
        
      
        function frontUI2(x){ 
        	console.log('test :', x);
            var front = '<div id = "bizTotal">'
                + '<div id="bizinfo002">'
                + '<p>'+x.bEmail+'</p>'
                + '<p>'+x.bPhone+'</p>'
                + '<p>'+x.bName+'</p>'

        	if(x.fax != undefined || x.fBook != null){
        		front += `<p>${x.fBook}</p>`
        	}
            if(x.insta != undefined || x.fBook != null){
            	front += `<p>${x.insta}</p>`
        	}
            if(x.job != undefined || x.fBook != null){
            	front += `<p>${x.job}</p>`
        	}
            if(x.web != undefined || x.fBook != null){
            	front += `<p>${x.web}</p>`
        	}
            
            
           front += '</div></div>'
            
            return front;
           
        }

        function frontUI3(x){ 
        	console.log('test :', x);
            var front = '<div id = "bizTotal">'
                + '<div id="bizinfo003">'
                + '<p>'+x.bEmail+'</p>'
                + '<p>'+x.bPhone+'</p>'
                + '<p>'+x.bName+'</p>'

        	if(x.fax != undefined || x.fBook != null){
        		front += `<p>${x.fBook}</p>`
        	}
            if(x.insta != undefined || x.fBook != null){
            	front += `<p>${x.insta}</p>`
        	}
            if(x.job != undefined || x.fBook != null){
            	front += `<p>${x.job}</p>`
        	}
            if(x.web != undefined || x.fBook != null){
            	front += `<p>${x.web}</p>`
        	}
            
            
           front += '</div></div>'
            
            return front;
           
        }
        
   