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
    let CaltFontColor = "#F9613F";
    let CMarginRight = "0.3vw";
    let CMarginLeft = "5vw";
  
    let currentState = 'original'; // 초기 상태
  
    $(".s").click(function() {
        if (currentState !== 'salt') {
            $(".skill3").css({"width": SaltWidth, "height": SaltHeight});
            $(".ms3b h1").text("저는 기본이 되는 마크업 조차도 구현할 줄 몰랐어요");
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
  
    $(".b").click(function() {
        if (currentState !== 'balt') {
            $(".skill3").css({"width": BaltWidth, "height": BaltHeight});
            $(".ms3b h1").text("이젠 웹 기술의 폭넓은 범위를 탐험하며, 새로운 기술들을 자신 있게 습득해나가고 있어요");
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
  
    $(".c").click(function() {
        if (currentState !== 'calt') {
            $(".skill3").css({"width": CaltWidth, "height": CaltHeight});
            $(".ms3b h1").text("저의 열정은 꺼지지 않아요!");
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
  });
  
  