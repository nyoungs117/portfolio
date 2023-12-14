//헤더 트렌지션

let prevScrollpos = window.pageYOffset;

  window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    const header = document.querySelector('header');

    if (prevScrollpos > currentScrollPos) {
      header.classList.remove('hide'); // 헤더를 나타내는 클래스를 추가합니다.
    } else {
      header.classList.add('hide'); // 헤더를 숨기는 클래스를 추가합니다.
    }

    prevScrollpos = currentScrollPos;
  };



//top버튼

$(document).ready(function() {
  var lastScrollTop = 0;
  var $topBtn = $('#topBtn');

  $(window).scroll(function() {
      var currentScroll = $(this).scrollTop();

      if (currentScroll > 300) { // 스크롤이 300px 이상 되었을 때 버튼이 나타남
          $topBtn.fadeIn();
      } else {
          $topBtn.fadeOut();
      }

      lastScrollTop = currentScroll;
  });

  // When the user clicks on the button, scroll to the top of the document
  $topBtn.click(function() {
      $('html, body').animate({ scrollTop: 0 }, 'slow');
      return false;
  });
});




// smooth scrolling 해당 위치로 이동
$('a[href*="#"]').on('click', function (e) {
  e.preventDefault();

  $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
  }, 500, 'linear');
});





// 처음로딩이 되거나 새로고침 또는 화면에 섹션이 도달할때마다 
// 2초후에 계속 모션이 실행되도록 

$(document).ready(function() {
  $('.skill1, .skill2, .skill3, .skill4, .skill5, .skill6, .skill7').draggable();
  $('.skill1, .skill2, .skill3, .skill4, .skill5, .skill6, .skill7').click(function() {
    $('.skill1, .skill2, .skill3, .skill4, .skill5, .skill6, .skill7').css('z-index', 1);
    $(this).css('z-index', 2);
  });

  function showSkills() {
    var skills = ['.skill3', '.skill6', '.skill5', '.skill2', '.skill4', '.skill1', '.skill7'];
    $('.skill > div').css('opacity', 0).stop(true, true); // stop any ongoing animation

    function showNextSkillWithDelay() {
      if (skills.length > 0) {
        var skillToShow = skills.shift();
        var delayTime = 50;
        if (skillToShow === '.skill2') {
          delayTime = 800;
        }
        $(skillToShow).delay(delayTime).animate({ opacity: 1 }, 50, function() {
          showNextSkillWithDelay();
        });
      }
    }
    
    setTimeout(function() {
      showNextSkillWithDelay();
    }, 2100);
  }

  // 페이지 로드 시에 스킬 모션 시작
  showSkills();

  // 스크롤 이벤트를 감지하여 해당 섹션에 도달하면 스킬들이 나타나도록 함
  $(window).scroll(function() {
    var skillPosition = $('.skill').offset().top;
    var scrollPosition = $(window).scrollTop();
    if (scrollPosition + $(window).height() / 2 > skillPosition) {
      setTimeout(function() {
        showSkills();
      });  // 스크롤이 아래서 위로 올라왔을 때도 2초 후에 스킬 모션이 시작됩니다.
    }
  });
});



//스킬버튼 깜빡거리도록

// 요소 선택 후 클래스 토글링
$(document).ready(function() {
  setInterval(function() {
      $('.s4').toggleClass('active');
  }, 500); // 1초 간격으로 클래스 토글

});








  // #aboutme 에 화면이 도달하면 svg도 그려지고 
  // strong으로 된 텍스트가 1초 후 순차적으로 컬러가 바뀌게

  var isDrawn = false;

  function drawSVG() {
    var svg = document.querySelector('svg');
    var path = document.querySelector('.path');
    var length = path.getTotalLength();
    path.style.transition = path.style.WebkitTransition = 'none';
    path.style.strokeDasharray = length + ' ' + length;
    path.style.strokeDashoffset = length;
    path.getBoundingClientRect();
    path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 2s ease-in-out';
    path.style.strokeDashoffset = '0';
    svg.style.opacity = '0.3';
    
    // 색상 변경 코드
    setTimeout(() => {
      var strongTags = document.querySelectorAll('#aboutme ul li strong');
      strongTags.forEach((tag, index) => {
        setTimeout(() => {
          tag.style.color = '#DDFF21';
          tag.style.transition = 'color 0.5s ease-in-out';  // 색상 변경에 애니메이션 효과를 추가합니다.
        }, index * 500);  // 500ms 간격으로 각각의 태그에 대해 색상 변경을 실행합니다.
      });
    }, 1000);  // 색상 변경을 1초 후에 시작합니다.
  }
  
  function resetSVG() {
    var svg = document.querySelector('svg');
    var path = document.querySelector('.path');
    svg.style.opacity = '0';
    path.style.strokeDashoffset = path.getTotalLength();
    
    // 색상 변경 코드
    var strongTags = document.querySelectorAll('#aboutme ul li strong');
    strongTags.forEach(tag => {
      tag.style.color = '';
      tag.style.transition = 'color 0.5s ease-in-out';  // 색상 변경에 애니메이션 효과를 추가합니다.
    });
  }
  
  window.addEventListener('scroll', function() {
    var aboutMePosition = document.getElementById('aboutme').getBoundingClientRect().top;
  
    if(aboutMePosition < window.innerHeight / 2 && aboutMePosition > 0) {
      if(!isDrawn) {
        drawSVG();
        isDrawn = true;
      }
    } else {
      if(isDrawn) {
        resetSVG();
        isDrawn = false;
      }
    }
  });





 

// work 섹션에 화면이 도달하면 ul li들이  순차적으로 나타나도록

$(document).ready(function() {
  var workOffset = $('#work').offset().top; // work 섹션의 위치를 계산

  // 스크롤 이벤트를 감지
  $(window).scroll(function() {
      var scrollTop = $(window).scrollTop(); // 현재 스크롤 위치를 계산

      // 현재 스크롤 위치가 work 섹션의 위치에 도달하면
      if (scrollTop >= workOffset) {
          // 각 요소의 opacity를 1초 간격으로 1로 변경
          $('.wk1').delay(500).animate({opacity: 1});
          $('.wk2').delay(1500).animate({opacity: 1});
          $('.wk3').delay(2500).animate({opacity: 1});
      }
  });
});






//work 섹션중 shakeat 모달창

$(document).ready(function() {
  // 이미지를 클릭했을 때, 모달창이 부드럽게 나타나게 합니다.
  $('.w_k .sh_img').on('click', function() {
      $('#wk1_modal').fadeIn('slow');
  });

  $('.w_k .b_img').on('click', function() {
    $('#wk2_modal').fadeIn('slow');
});

$('.w_k .gs_img').on('click', function() {
  $('#wk3_modal').fadeIn('slow');
});


  // 모달창 내부의 버튼을 클릭했을 때, 모달창이 부드럽게 사라지게 합니다.
  $('#wk1_modal').on('click', 'button', function() {
      $('#wk1_modal').fadeOut('slow');
  });

  $('#wk2_modal').on('click', 'button', function() {
    $('#wk2_modal').fadeOut('slow');
});

$('#wk3_modal').on('click', 'button', function() {
  $('#wk3_modal').fadeOut('slow');
});


});







//자기소개 애니메이션 

$(document).ready(function() {
  $(window).scroll(function() {
    var contactPosition = $('#contact').offset().top;
    var scrollPosition = $(window).scrollTop();
    var windowHeight = $(window).height();

    if (scrollPosition + windowHeight > contactPosition) {
      const text = $('.ct_contentsleft p').html().split('<br>'); // 텍스트를 <br> 태그를 기준으로 분할
      $('.ct_contentsleft p').empty(); // 텍스트 내용 초기화

      text.forEach(function(line, index) {
        if (index !== 0) {
          $('.ct_contentsleft p').append('<br>'); // <br> 태그 추가
        }

        for (let i = 0; i < line.length; i++) {
          const span = $('<span>')
            .text(line[i])
            .css({
              color: 'gray',
              transition: 'color 0.5s ease-in-out',
            })
            .appendTo('.ct_contentsleft p');

          setTimeout(function() {
            span.css('color', '#ffffff');
          }, 70 * (index * text[0].length + i));
        }
      });

      // 한 번만 실행되도록 이벤트 제거
      $(window).off('scroll');
    }
  });
});











// 내용복사

$(document).ready(function() {
  $('#contact ul li').on('click', function() {
    let textToCopy = $(this).data('text');
    
    let tempTextarea = $('<textarea>').val(textToCopy).css({
      position: 'absolute',
      left: '-9999px'
    }).appendTo('body').select();
    
    document.execCommand('copy');
    
    tempTextarea.remove();

    // 복사가 완료된 후 알림창을 띄웁니다.
    alert('복사되었습니다: ' + textToCopy);
  });
});
