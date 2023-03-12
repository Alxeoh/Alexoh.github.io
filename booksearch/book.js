// API : Application Programming Interface
// ㄴ Open API : 다양한 기업에서 공익의 목적으로 또는 다른 이유로 무료로 인터페이스를 이용할 수 있게 제공을 하는 것 
// ㄴ Private API :  유료 
// ajax
// fetch()로도 구현이 가능 (일부 브라우저 또는 하위 버전의 스크립트에서 호환 X)
// -> jQuery.ajax() 메소드를 활용
// 비동기 방식으로 페이지의 일부 정보를 갱신할 수 있는 기술


// Open API
// ㄴ 공공 데이터 포털
// ㄴ 카카오 개발자센터
// ㄴ 


let page = 1;
const query = document.querySelector(".query");

const searchBox = document.querySelector(".search-box");
searchBox.addEventListener("submit", e =>{
    e.preventDefault();
    if(query !== ""){
        searchRequest(query.value, page);
        page = 1;
    }
    console.log(query.value);
    
});

function searchRequest(query, page){   
    console.log("query : ",query);
    $.ajax( {
        "url": `https://dapi.kakao.com/v3/search/book?query=${query}&page=${page}&size=10&target=title`,
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Authorization": "KakaoAK 1443eefdf61533db439cbc61db7f9226"
        },
    })
    .done((response) => {
        console.log(response);

    // container 안에 
    //  <div class="result-card">
    //     <img class = "book-img" src="/book.png" alt="">
    //     <h4 class="book-title">도서제목</h4>
    //     <p class="book-description">도서상세정보</p>
    //     <span class="price">1000원</span>
    //     <p>
    //         <span class="author">저자</span>|<span class="publisher">출판사</span>
    //     </p>
    // </div>

    // 새로 생성 및 구성 완료한 result-card요소를 추가




    });
}