//메인 스킬 축소,확대,닫기 내용바꿈에 대한 js

$(document).ready(function() {
    let originalWidth = "23vw";
    let originalHeight = "12.5vw";
    let originalFontSize = "3.5vw";
    let originalFontColor = "#ffffff";
    let originalMarginRight = "0.3vw";
    let originalMarginLeft = "5vw";
  
    let SaltWidth = "21vw";
    let SaltHeight = "10.5vw";
    let SaltFontSize = "0.8vw";
    let SMarginRight = "0.2vw";
    let SMarginLeft = "3.5vw";
  
    let BaltWidth = "24vw";
    let BaltHeight = "13.5vw";
    let BaltFontSize = "1.1vw";
    let BMarginRight = "0.2vw";
    let BMarginLeft = "6.8vw";
  
    let CaltWidth = "23vw";
    let CaltHeight = "12.5vw";
    let CaltFontSize = "1.5vw";
    let CaltFontColor = "#DDFF21";
    let CMarginRight = "0.3vw";
    let CMarginLeft = "5vw";
  
    let currentState = 'original'; // 초기 상태
  
    //es5
    $(".s1").click(function() {
        if (currentState !== 'salt') {
            $(".skill1").css({"width": SaltWidth, "height": SaltHeight});
            $(".ms1b h1").text("표준화된 자바스크립트 언어를 배우고 있습니다.");
            $(".ms1b h1").css({"font-size": SaltFontSize, "color": originalFontColor});
            $(".ms1t ul").css("margin-left", SMarginLeft);
            $(".ms1t ul li").css("margin-right", SMarginRight);
            currentState = 'salt';
        } else {
            $(".skill1").css({"width": originalWidth, "height": originalHeight});
            $(".ms1b h1").text("ES5");
            $(".ms1b h1").css("font-size", originalFontSize);
            $(".ms1b h1").css("color", originalFontColor);
            $(".ms1t ul").css("margin-left", originalMarginLeft);
            $(".ms1t ul li").css("margin-right", originalMarginRight);
            currentState = 'original';
        }
    });
  
    $(".b1").click(function() {
        if (currentState !== 'balt') {
            $(".skill1").css({"width": BaltWidth, "height": BaltHeight});
            $(".ms1b h1").text("더 나아가 ES6까지 할 수 있으며, javascript를 효율적이고 기본을 지키며 작성할 수 있도록 할 예정니다.");
            $(".ms1b h1").css({"font-size": BaltFontSize, "color": originalFontColor});
            $(".ms1t ul").css("margin-left", BMarginLeft);
            $(".ms1t ul li").css("margin-right", BMarginRight);
            currentState = 'balt';
        } else {
            $(".skill1").css({"width": originalWidth, "height": originalHeight});
            $(".ms1b h1").text("ES5");
            $(".ms1b h1").css("font-size", originalFontSize);
            $(".ms1b h1").css("color", originalFontColor);
            $(".ms1t ul").css("margin-left", originalMarginLeft);
            $(".ms1t ul li").css("margin-right", originalMarginRight);
            currentState = 'original';
        }
    });
  
    $(".c1").click(function() {
        if (currentState !== 'calt') {
            $(".skill1").css({"width": CaltWidth, "height": CaltHeight});
            $(".ms1b h1").text("저의 미래를 기대하세요!");
            $(".ms1b h1").css("font-size", CaltFontSize);
            $(".ms1b h1").css("color", CaltFontColor);
            $(".ms1t ul").css("margin-left", CMarginLeft);
            $(".ms1t ul li").css("margin-right", CMarginRight);
            currentState = 'calt';
        } else {
            $(".skill1").css({"width": originalWidth, "height": originalHeight});
            $(".ms1b h1").text("ES5");
            $(".ms1b h1").css("font-size", originalFontSize);
            $(".ms1b h1").css("color", originalFontColor);
            $(".ms1t ul").css("margin-left", originalMarginLeft);
            $(".ms1t ul li").css("margin-right", originalMarginRight);
            currentState = 'original';
        }
    });

    //javascript
    $(".s2").click(function() {
        if (currentState !== 'salt') {
            $(".skill2").css({"width": SaltWidth, "height": SaltHeight});
            $(".ms2b h1").text("가장 기본이 되는 vanilla javascript를 사용하기 위해 꾸준한 노력을 하고 있습니다.");
            $(".ms2b h1").css({"font-size": SaltFontSize, "color": originalFontColor});
            $(".ms2t ul").css("margin-left", SMarginLeft);
            $(".ms2t ul li").css("margin-right", SMarginRight);
            currentState = 'salt';
        } else {
            $(".skill2").css({"width": originalWidth, "height": originalHeight});
            $(".ms2b h1").text("Javascript");
            $(".ms2b h1").css("font-size", originalFontSize);
            $(".ms2b h1").css("color", originalFontColor);
            $(".ms2t ul").css("margin-left", originalMarginLeft);
            $(".ms2t ul li").css("margin-right", originalMarginRight);
            currentState = 'original';
        }
    });
  
    $(".b2").click(function() {
        if (currentState !== 'balt') {
            $(".skill2").css({"width": BaltWidth, "height": BaltHeight});
            $(".ms2b h1").text("vanilla javscript에서 jQuery로도 자유자재로 사용하며 효율성을 높일 것 입니다.");
            $(".ms2b h1").css({"font-size": BaltFontSize, "color": originalFontColor});
            $(".ms2t ul").css("margin-left", BMarginLeft);
            $(".ms2t ul li").css("margin-right", BMarginRight);
            currentState = 'balt';
        } else {
            $(".skill2").css({"width": originalWidth, "height": originalHeight});
            $(".ms2b h1").text("Javascript");
            $(".ms2b h1").css("font-size", originalFontSize);
            $(".ms2b h1").css("color", originalFontColor);
            $(".ms2t ul").css("margin-left", originalMarginLeft);
            $(".ms2t ul li").css("margin-right", originalMarginRight);
            currentState = 'original';
        }
    });
  
    $(".c2").click(function() {
        if (currentState !== 'calt') {
            $(".skill2").css({"width": CaltWidth, "height": CaltHeight});
            $(".ms2b h1").text("저의 열정은 꺼지지 않아요!");
            $(".ms2b h1").css("font-size", CaltFontSize);
            $(".ms2b h1").css("color", CaltFontColor);
            $(".ms2t ul").css("margin-left", CMarginLeft);
            $(".ms2t ul li").css("margin-right", CMarginRight);
            currentState = 'calt';
        } else {
            $(".skill2").css({"width": originalWidth, "height": originalHeight});
            $(".ms2b h1").text("Javascript");
            $(".ms2b h1").css("font-size", originalFontSize);
            $(".ms2b h1").css("color", originalFontColor);
            $(".ms2t ul").css("margin-left", originalMarginLeft);
            $(".ms2t ul li").css("margin-right", originalMarginRight);
            currentState = 'original';
        }
    });


//html5
    $(".s3").click(function() {
        if (currentState !== 'salt') {
            $(".skill3").css({"width": SaltWidth, "height": SaltHeight});
            $(".ms3b h1").text("웹 표준에 맞춰 시멘틱 태그를 사용해 마크업을 자유롭게 할 수 있습니다.");
            $(".ms3b h1").css({"font-size": SaltFontSize, "color": originalFontColor});
            $(".ms3t ul").css("margin-left", SMarginLeft);
            $(".ms3t ul li").css("margin-right", SMarginRight);
            currentState = 'salt';
        } else {
            $(".skill3").css({"width": originalWidth, "height": originalHeight});
            $(".ms3b h1").text("HTML5");
            $(".ms3b h1").css("font-size", originalFontSize);
            $(".ms3b h1").css("color", originalFontColor);
            $(".ms3t ul").css("margin-left", originalMarginLeft);
            $(".ms3t ul li").css("margin-right", originalMarginRight);
            currentState = 'original';
        }
    });
  
    $(".b3").click(function() {
        if (currentState !== 'balt') {
            $(".skill3").css({"width": BaltWidth, "height": BaltHeight});
            $(".ms3b h1").text("반응형까지 기본구조를 지키며 자유롭게 구현하며, 화면을 줄이거나 늘려도 흐트러짐이 없도록 마크업 할 예정입니다.");
            $(".ms3b h1").css({"font-size": BaltFontSize, "color": originalFontColor});
            $(".ms3t ul").css("margin-left", BMarginLeft);
            $(".ms3t ul li").css("margin-right", BMarginRight);
            currentState = 'balt';
        } else {
            $(".skill3").css({"width": originalWidth, "height": originalHeight});
            $(".ms3b h1").text("HTML5");
            $(".ms3b h1").css("font-size", originalFontSize);
            $(".ms3b h1").css("color", originalFontColor);
            $(".ms3t ul").css("margin-left", originalMarginLeft);
            $(".ms3t ul li").css("margin-right", originalMarginRight);
            currentState = 'original';
        }
    });
  
    $(".c3").click(function() {
        if (currentState !== 'calt') {
            $(".skill3").css({"width": CaltWidth, "height": CaltHeight});
            $(".ms3b h1").text("저는 분명 해낼겁니다!");
            $(".ms3b h1").css("font-size", CaltFontSize);
            $(".ms3b h1").css("color", CaltFontColor);
            $(".ms3t ul").css("margin-left", CMarginLeft);
            $(".ms3t ul li").css("margin-right", CMarginRight);
            currentState = 'calt';
        } else {
            $(".skill3").css({"width": originalWidth, "height": originalHeight});
            $(".ms3b h1").text("HTML5");
            $(".ms3b h1").css("font-size", originalFontSize);
            $(".ms3b h1").css("color", originalFontColor);
            $(".ms3t ul").css("margin-left", originalMarginLeft);
            $(".ms3t ul li").css("margin-right", originalMarginRight);
            currentState = 'original';
        }
    });



//css
    $(".s4").click(function() {
        if (currentState !== 'salt') {
            $(".skill4").css({"width": SaltWidth, "height": SaltHeight});
            $(".ms4b h1").text("css의 기본 순서를 지키려고 노력하며, 남이 봐도 알아보기 쉽게 적으려 합니다.");
            $(".ms4b h1").css({"font-size": SaltFontSize, "color": originalFontColor});
            $(".ms4t ul").css("margin-left", SMarginLeft);
            $(".ms4t ul li").css("margin-right", SMarginRight);
            currentState = 'salt';
        } else {
            $(".skill4").css({"width": originalWidth, "height": originalHeight});
            $(".ms4b h1").text("CSS");
            $(".ms4b h1").css("font-size", originalFontSize);
            $(".ms4b h1").css("color", originalFontColor);
            $(".ms4t ul").css("margin-left", originalMarginLeft);
            $(".ms4t ul li").css("margin-right", originalMarginRight);
            currentState = 'original';
        }
    });
  
    $(".b4").click(function() {
        if (currentState !== 'balt') {
            $(".skill4").css({"width": BaltWidth, "height": BaltHeight});
            $(".ms4b h1").text("HTML로 마크업을 하고 동적일 수 있는 부분에 대해서는 모든 css 태그를 알고 사용할 수 있도록 할 예정입니다.");
            $(".ms4b h1").css({"font-size": BaltFontSize, "color": originalFontColor});
            $(".ms4t ul").css("margin-left", BMarginLeft);
            $(".ms4t ul li").css("margin-right", BMarginRight);
            currentState = 'balt';
        } else {
            $(".skill4").css({"width": originalWidth, "height": originalHeight});
            $(".ms4b h1").text("CSS");
            $(".ms4b h1").css("font-size", originalFontSize);
            $(".ms4b h1").css("color", originalFontColor);
            $(".ms4t ul").css("margin-left", originalMarginLeft);
            $(".ms4t ul li").css("margin-right", originalMarginRight);
            currentState = 'original';
        }
    });
  
    $(".c4").click(function() {
        if (currentState !== 'calt') {
            $(".skill4").css({"width": CaltWidth, "height": CaltHeight});
            $(".ms4b h1").text("저의 열정은 꺼지지 않아요!");
            $(".ms4b h1").css("font-size", CaltFontSize);
            $(".ms4b h1").css("color", CaltFontColor);
            $(".ms4t ul").css("margin-left", CMarginLeft);
            $(".ms4t ul li").css("margin-right", CMarginRight);
            currentState = 'calt';
        } else {
            $(".skill4").css({"width": originalWidth, "height": originalHeight});
            $(".ms4b h1").text("CSS");
            $(".ms4b h1").css("font-size", originalFontSize);
            $(".ms4b h1").css("color", originalFontColor);
            $(".ms4t ul").css("margin-left", originalMarginLeft);
            $(".ms4t ul li").css("margin-right", originalMarginRight);
            currentState = 'original';
        }
    });

//react.js
    $(".s5").click(function() {
        if (currentState !== 'salt') {
            $(".skill5").css({"width": SaltWidth, "height": SaltHeight});
            $(".ms5b h1").text("HTML, CSS,javascript에서 더 나아가 사용자와 상호작용 할 수 있게 동적이고 쉬운 UI를 만들고자 공부하고 있습니다.");
            $(".ms5b h1").css({"font-size": SaltFontSize, "color": originalFontColor});
            $(".ms5t ul").css("margin-left", SMarginLeft);
            $(".ms5t ul li").css("margin-right", SMarginRight);
            currentState = 'salt';
        } else {
            $(".skill5").css({"width": originalWidth, "height": originalHeight});
            $(".ms5b h1").text("React.js");
            $(".ms5b h1").css("font-size", originalFontSize);
            $(".ms5b h1").css("color", originalFontColor);
            $(".ms5t ul").css("margin-left", originalMarginLeft);
            $(".ms5t ul li").css("margin-right", originalMarginRight);
            currentState = 'original';
        }
    });
  
    $(".b5").click(function() {
        if (currentState !== 'balt') {
            $(".skill5").css({"width": BaltWidth, "height": BaltHeight});
            $(".ms5b h1").text("사용자가 보다 더 쉽게 웹 페이지를 이용할 수 있도록 react.js를 사용할 예정입니다.");
            $(".ms5b h1").css({"font-size": BaltFontSize, "color": originalFontColor});
            $(".ms5t ul").css("margin-left", BMarginLeft);
            $(".ms5t ul li").css("margin-right", BMarginRight);
            currentState = 'balt';
        } else {
            $(".skill5").css({"width": originalWidth, "height": originalHeight});
            $(".ms5b h1").text("React.js");
            $(".ms5b h1").css("font-size", originalFontSize);
            $(".ms5b h1").css("color", originalFontColor);
            $(".ms5t ul").css("margin-left", originalMarginLeft);
            $(".ms5t ul li").css("margin-right", originalMarginRight);
            currentState = 'original';
        }
    });
  
    $(".c5").click(function() {
        if (currentState !== 'calt') {
            $(".skill5").css({"width": CaltWidth, "height": CaltHeight});
            $(".ms5b h1").text("저를 뽑아주세요!");
            $(".ms5b h1").css("font-size", CaltFontSize);
            $(".ms5b h1").css("color", CaltFontColor);
            $(".ms5t ul").css("margin-left", CMarginLeft);
            $(".ms5t ul li").css("margin-right", CMarginRight);
            currentState = 'calt';
        } else {
            $(".skill5").css({"width": originalWidth, "height": originalHeight});
            $(".ms5b h1").text("React.js");
            $(".ms5b h1").css("font-size", originalFontSize);
            $(".ms5b h1").css("color", originalFontColor);
            $(".ms5t ul").css("margin-left", originalMarginLeft);
            $(".ms5t ul li").css("margin-right", originalMarginRight);
            currentState = 'original';
        }
    });

//jquery
    $(".s6").click(function() {
        if (currentState !== 'salt') {
            $(".skill6").css({"width": SaltWidth, "height": SaltHeight});
            $(".ms6b h1").text("js를 보다 더 쉽고 간소화하기 위해 사용하지만 vanilla js를 기반으로 공부하고 있습니다.");
            $(".ms6b h1").css({"font-size": SaltFontSize, "color": originalFontColor});
            $(".ms6t ul").css("margin-left", SMarginLeft);
            $(".ms6t ul li").css("margin-right", SMarginRight);
            currentState = 'salt';
        } else {
            $(".skill6").css({"width": originalWidth, "height": originalHeight});
            $(".ms6b h1").text("jQuery");
            $(".ms6b h1").css("font-size", originalFontSize);
            $(".ms6b h1").css("color", originalFontColor);
            $(".ms6t ul").css("margin-left", originalMarginLeft);
            $(".ms6t ul li").css("margin-right", originalMarginRight);
            currentState = 'original';
        }
    });
  
    $(".b6").click(function() {
        if (currentState !== 'balt') {
            $(".skill6").css({"width": BaltWidth, "height": BaltHeight});
            $(".ms6b h1").text("javascript와 jQuery의 문법,언어의 차이를 제대로 알며 사용 할 예정입니다.");
            $(".ms6b h1").css({"font-size": BaltFontSize, "color": originalFontColor});
            $(".ms6t ul").css("margin-left", BMarginLeft);
            $(".ms6t ul li").css("margin-right", BMarginRight);
            currentState = 'balt';
        } else {
            $(".skill6").css({"width": originalWidth, "height": originalHeight});
            $(".ms6b h1").text("jQuery");
            $(".ms6b h1").css("font-size", originalFontSize);
            $(".ms6b h1").css("color", originalFontColor);
            $(".ms6t ul").css("margin-left", originalMarginLeft);
            $(".ms6t ul li").css("margin-right", originalMarginRight);
            currentState = 'original';
        }
    });
  
    $(".c6").click(function() {
        if (currentState !== 'calt') {
            $(".skill6").css({"width": CaltWidth, "height": CaltHeight});
            $(".ms6b h1").text("저는 최선을 다합니다!");
            $(".ms6b h1").css("font-size", CaltFontSize);
            $(".ms6b h1").css("color", CaltFontColor);
            $(".ms6t ul").css("margin-left", CMarginLeft);
            $(".ms6t ul li").css("margin-right", CMarginRight);
            currentState = 'calt';
        } else {
            $(".skill6").css({"width": originalWidth, "height": originalHeight});
            $(".ms6b h1").text("jQuery");
            $(".ms6b h1").css("font-size", originalFontSize);
            $(".ms6b h1").css("color", originalFontColor);
            $(".ms6t ul").css("margin-left", originalMarginLeft);
            $(".ms6t ul li").css("margin-right", originalMarginRight);
            currentState = 'original';
        }
    });

//sass
    $(".s7").click(function() {
        if (currentState !== 'salt') {
            $(".skill7").css({"width": SaltWidth, "height": SaltHeight});
            $(".ms7b h1").text("CSS의 단점을 보완할 수 있도록 공부하며, 코드작성 시간을 줄이려고 노력합니다.");
            $(".ms7b h1").css({"font-size": SaltFontSize, "color": originalFontColor});
            $(".ms7t ul").css("margin-left", SMarginLeft);
            $(".ms7t ul li").css("margin-right", SMarginRight);
            currentState = 'salt';
        } else {
            $(".skill7").css({"width": originalWidth, "height": originalHeight});
            $(".ms7b h1").text("SASS");
            $(".ms7b h1").css("font-size", originalFontSize);
            $(".ms7b h1").css("color", originalFontColor);
            $(".ms7t ul").css("margin-left", originalMarginLeft);
            $(".ms7t ul li").css("margin-right", originalMarginRight);
            currentState = 'original';
        }
    });
  
    $(".b7").click(function() {
        if (currentState !== 'balt') {
            $(".skill7").css({"width": BaltWidth, "height": BaltHeight});
            $(".ms7b h1").text("CSS의 확장 언어지만 더 다양하고 동적인 코드를 위해 배워 기능들을 사용할겁니다.");
            $(".ms7b h1").css({"font-size": BaltFontSize, "color": originalFontColor});
            $(".ms7t ul").css("margin-left", BMarginLeft);
            $(".ms7t ul li").css("margin-right", BMarginRight);
            currentState = 'balt';
        } else {
            $(".skill7").css({"width": originalWidth, "height": originalHeight});
            $(".ms7b h1").text("SASS");
            $(".ms7b h1").css("font-size", originalFontSize);
            $(".ms7b h1").css("color", originalFontColor);
            $(".ms7t ul").css("margin-left", originalMarginLeft);
            $(".ms7t ul li").css("margin-right", originalMarginRight);
            currentState = 'original';
        }
    });
  
    $(".c7").click(function() {
        if (currentState !== 'calt') {
            $(".skill7").css({"width": CaltWidth, "height": CaltHeight});
            $(".ms7b h1").text("저와 함께해요!");
            $(".ms7b h1").css("font-size", CaltFontSize);
            $(".ms7b h1").css("color", CaltFontColor);
            $(".ms7t ul").css("margin-left", CMarginLeft);
            $(".ms7t ul li").css("margin-right", CMarginRight);
            currentState = 'calt';
        } else {
            $(".skill7").css({"width": originalWidth, "height": originalHeight});
            $(".ms7b h1").text("SASS");
            $(".ms7b h1").css("font-size", originalFontSize);
            $(".ms7b h1").css("color", originalFontColor);
            $(".ms7t ul").css("margin-left", originalMarginLeft);
            $(".ms7t ul li").css("margin-right", originalMarginRight);
            currentState = 'original';
        }
    });


    

  });
  
  