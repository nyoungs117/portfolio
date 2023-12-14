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






$(document).ready(function() {

    $('.skill1, .skill2, .skill3, .skill4, .skill5, .skill6, .skill7').draggable(); // 각 skill 클래스를 가진 요소를 드래그 가능하도록 만듦

    $('.skill1, .skill2, .skill3, .skill4, .skill5, .skill6, .skill7').click(function() {
        // 모든 .skill 요소들의 z-index를 1로 설정
        $('.skill1, .skill2, .skill3, .skill4, .skill5, .skill6, .skill7').css('z-index', 1);
    
        // 클릭한 요소의 z-index를 더 높은 값으로 변경하여 최상위로 올림
        $(this).css('z-index', 2);
      });
    
    var skills = ['.skill3', '.skill6', '.skill5', '.skill2', '.skill4', '.skill1', '.skill7'];
    $('.skill > div').css('opacity', 0); // 페이지 로드 시 모든 스킬을 투명하게 만듦

    function showNextSkillWithDelay() {
      if (skills.length > 0) {
        var skillToShow = skills.shift(); // 배열에서 다음 스킬 가져오기
        var delayTime = 50; // 기본 딜레이
        if (skillToShow === '.skill2') {
          delayTime = 800; // .skill5에서 .skill2로 넘어갈 때 3초의 딜레이 설정
        }
        $(skillToShow).delay(delayTime).animate({ opacity: 1 }, 50, function() {
          showNextSkillWithDelay(); // 다음 스킬 나타내기
        });
      }
    }

    setTimeout(function() {
      showNextSkillWithDelay(); // 2초 뒤에 순차적인 스킬 보이기 시작
    }, 2100); // 2초 뒤에 시작되도록 설정
  });








//스크롤 따른 svg 변화

$(document).ready(function() {
  var path = $('.path')[0];
  var pathLength = path.getTotalLength();

  $(window).scroll(function() {
      var blockBounds = $('#image')[0].getBoundingClientRect();
      var screenHeight = $(window).height();
      var scroll1percent = (screenHeight - blockBounds.y - 300) / (blockBounds.height + screenHeight - 10) * 250;

      var currentLength = (pathLength * scroll1percent) / 100;
      $(path).css("stroke-dasharray", currentLength + " " + pathLength);
  });
});







//section importantskill 부분 스크롤시 왼쪽으로 천천히 이동
const scrollableList = document.querySelector('.scrollable-list');
const originalListItems = document.querySelectorAll('.scrollable-list li');
const numOfItemsToClone = 14;

for (let i = 0; i < numOfItemsToClone; i++) {
    originalListItems.forEach((item) => {
        const clone = item.cloneNode(true);
        scrollableList.appendChild(clone);
    });
}

scrollableList.addEventListener('mouseenter', function() {
    scrollableList.classList.add('paused');
});

scrollableList.addEventListener('mouseleave', function() {
    scrollableList.classList.remove('paused');
});




