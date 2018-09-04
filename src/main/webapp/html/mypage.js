'use strict'
$(document).ready(function() {
            $('#sidebarCollapse').on('click', function() {
                $('#sidebar').toggleClass('active');
            });
            $('div#test2').load('mypage/form.html');
            $('footer').load('mypage/footer.html');
        });
        
        
        var serverApiAddr = "http://localhost:8080/bitcamp-newdeal-project";

        $.post(`${serverApiAddr}/json/html/mypage`, function (result) {
            
            if (result.status === 'login-fail') {
                swal({
                    type: 'error',
                    title: `${result.message}`,
                    text: '정상적인 경로로 진입하지 않았습니다.',
                    footer: '<a href>Why do I have this issue?</a>'
                  })
                setTimeout(function () {
                     location.replace( './login/main.html');
                 }, 3000)
                
            }
            
              $('#nav-title').append(`${result.lname}님 환영합니다 :)`);
        });   
        
        $('#logout').on('click',() => {
        $.post(`${serverApiAddr}/json/member/logout`,function(result) {
               if(result === 'success'){
                   location.href = './login/main.html'
               }
             }, 'json')
        });