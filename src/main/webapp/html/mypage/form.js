 $('#next-btn').text(' NEXT >');
 

 $('#add-info').on('click', (e)=>{
            var click_id = e.target.getAttribute('id');
            var text = $(`#${click_id}`).text();
            var form_id = text.replace(' ', '');
            var serverApiAddr = "http://localhost:8080/bitcamp-newdeal-project";
            
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
            var json = {
                bEmail :$('#eEmail').val(),
                bName :$('#eName').val(),
                bPhone:$('#ePhone').val(),
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
      
            $('div #test2').html(cardlist());
            $('#card1').append(businesscard1());
            $('#modalcardfr01').append(frontUI1(json));
            $('#card2').append(businesscard2());
            $('#modalcardfr02').append(frontUI2(json));
            $('#card3').append(businesscard3());
            $('#modalcardfr03').append(frontUI3(json));
        }

            $('#info-btn').text('< PREV');
       	$('#final-btn').text(' SUBMIT >');
            
  
/*
 * $('#modalcardfr01').on('click', ()=>{ });
 */
            $('#prev1').on('click', ()=>{
            	$('#modalcardfr01').append(frontUI1(json));
            });
            
           /*
			 * $('#modalcardfr02').on('click', ()=>{ });
			 */
            $('#prev2').on('click', ()=>{
            	$('#modalcardfr02').append(frontUI2(json));
            });
            
            /*
			 * $('#modalcardfr03').on('click', ()=>{ });
			 */
            $('#prev3').on('click', ()=>{
            	$('#modalcardfr03').append(frontUI3(json));
      });
            
            

        
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
                  <div id="mdcont container">\
                     <button type="button" id="prev1" class="fa fa-search-plus"\
                        aria-hidden="true" data-toggle="modal" data-target="#cardModal01">\
                     </button>\
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
        
   