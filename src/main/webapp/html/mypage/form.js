 $('#next-btn').text(' NEXT >');

$('#add-info').on('click', (e)=>{
            var click_id = e.target.getAttribute('id');
            var text = $(`#${click_id}`).text();
            var form_id = text.replace(' ', '');
            var serverApiAddr = "http://localhost:8080/bitcamp-newdeal-project";
            
            console.log(click_id);
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
            alert('what the fxxx?')
            var json = {
                bEmail :$('#eEmail').val(),
                bName :$('#eName').val(),
                bPhon:$('#ePhon').val(),
                bno:$('#ebno').val(),
                cName:$('#eCompanyname').val(),
                cPhone:$('#eCompanyphone').val(),
                fBook:$('#eFacebook').val(),
                fax:$('#eFax').val(),
                insta:$('#eInstagram').val(),
                job:$('#ePosition').val(),
                web:$('#eWebSite').val()
            }
            $('div #test2').html(cardlist());
            $('#card2').append(businesscard2());
            $('#card1').append(businesscard1());
            $('#modalcardfr01').append(front1(json));
        });
        
        var front1 =x=>{ 
            console.log(x);
            return `<div id = "bizTotal" style="border:1px solid black;\
                width: 420px; height: 240px;">\
                <div id="bizinfo">\
                <p>${x.bEmail}</p>`
        }
        
        var cardlist =x=>{
            return `\
            <div class="site-wrapper-inner contents-wrapper">\
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
               <input type="checkbox" id="check01" name="feature" />\
               <div class="card-container">\
                  <div id="card-flipper" class="card-flipper">\
                     <div id="card-front">\
                        <div id="cardfront01"></div>\
                     </div>\
                     <div id="card-back">\
                        <div id="cardback01"></div>\
                     </div>\
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
                                    <div id="card-flipper" class="card-flipper">\
                                       <div id="card-front">\
                                          <div id="modalcardfr01"></div>\
                                       </div>\
                                       <div id="card-back">\
                                          <div id="modalcardbc01"></div>\
                                       </div>\
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
        var businesscard2 = x => {
            return ` \
            <div id="total-div">\
                <input type="checkbox" id="check02" name="feature" />\
                <div class="card-container">\
                    <div id="card-flipper" class="card-flipper">\
                        <div id="card-front">\
                            <div id="cardfront02"></div>\
                        </div>\
                        <div id="card-back">\
                            <div id="cardback02"></div>\
                        </div>\
                    </div>\
                   <div id="mdcont container">\
                        <button type="button" id="prev2" class="fa fa-search-plus"\
                            aria-hidden="true" data-toggle="modal" data-target="#cardModal02">\
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
                                            <div id="card-flipper" class="card-flipper">\
                                                <div id="card-front">\
                                                    <div id="modalcardfr02"></div>\
                                                </div>\
                                                <div id="card-back">\
                                                    <div id="modalcardbc02"></div>\
                                                </div>\
                                            </div>\
                                        </div>\
                                    </div>\
                                    <div class="modal-footer">\
                                   <button type="button" class="btn btn-outline-danger" data-dismiss="modal">Close</button>\
                                    </div>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                </div>\
                </div>\
                `
        }