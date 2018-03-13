1. 웹 어플리케이션의 진화
2. 확장성 좋고 깔끔한 애플리케이션 아키텍쳐 구축의 어려움
3. 객체지향 방식의 한계: 자바스크립트는 동적인 언어이다보니 조금만 시간이 지나도 복잡해지며, 가독성이 떨어지고, 관리하기 어려움
4. 리액티브 프로그래밍: 데이터 흐름과 변경 전파에 초점. 비동기 또는 이벤트 중심 코드 다룰 떄도.
5. 프로그래밍 패러다임
   1. 확장성
   2. 모듈화 용이성
   3. 재사용성
   4. 테스트성
   5. 헤아리기 쉬움

-------

첫 챕터에서 이야기하는 바는…? 서론을 떼는 것.

웹 앱이 진화해가면서 개발자들이 확장성 좋고 깔끔한 아키텍쳐 구축을 고민하게 되었다. 개인적으로도 B type 서버 개발과 C type 서버 개발을 하게 되면서 ORM 관리, 중복되는 api들이 나타나는 것들을 보면서 고민스러운 부분이 생겼었다. 나는 FP가 이런 고민을 해결해줄 수 있는 key라고 생각이 든다.

----------







1. FP는 유용한가?
   1. 매우 표현적인 특성을 가다듬어 깔끔하고도 모듈적인 테스트하기 좋고 간결한 코드 작성에 도움
   2. 능률 증대
   3. 순수 함수 기반
   4. 애플리케이션 품질 향상
   5. 자바스크립트 언어 이해도 향상
   6. 직관적

---

1.1에서 이야기 하는 바는?

FP의 장점



2. FP란?

   1. 목적

      1. 부수효과(side effect) 방지

      2. 상태 변이를 감소하기위해 데이터의 제어 흐름과 연산을 추상

      3. 예제

         1. ​

            ```javascript
            function printMessage(elementId, format, message) {
                document.querySelector(`#${elementId}`).innerHTML = `<${format}>${message}</${format}>`;
            }

            printMessage('msg', 'h1', 'hello world');
            ```

            이런 코드가

            ```javascript
            var printMessage = run(addToDom('msg'), h1, echo);

            printMessage("Hello world");

            ```

         2. **재사용성, 믿음성, 이해하기 쉬운, 더 작은 조각**

         3. ```javascript
            var printMessage = run(console.log, repeat(2), h2, echo);

            printMessage("GetFunctional");
            ```

            1. 위와 같이 고치는 것도 쉬워짐.
            2. 시각적으로 명료함
            3. 함수형, 비함수형 해법 견줘보면 근본적으로 스타일이 다름.
            4. 선언적 개발 방식.

         4. 기본 개념

            1. 선언적 프로그래밍
            2. 순수함수
            3. 참조 투명성
            4. 불변성

         5. ​

----

이 챕터에서 이야기하는 바는

함수형과 비함수형 프로그래밍의 비교

함수형의 특징 소개

기본 개념 4가지

---



1. FP는 선언적

   1. 선언적: 내부적으로 코드를 어떻게 구현했는지, 데이터는 어떻게 흘러가는지 밝히지 않은 채 연산/작업을 표현하는 사상

      1. 현재는 명령형, 절차적 모델이 더 많이 쓰임

   2. 예제

      1. 명령형

         1. 예제

            ```javascript
            var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
            for(let i = 0; i < array.length; i++) {
                array[i] = Math.pow(array[i], 2);
            }
            array;
            ```

         2. 원하는 작업을 **어떻게**하는지 상세히 이름

      2. 선언적

         1. **서술부, 평가부**를 분리

         2. 표현식으로 나타냄

         3. 예제

            ```javascript
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(function (num) {
                return Math.pow(num, 2);
            });

            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => Math.pow(num, 2));
            ```

         4. 특징

            1. 루프 카운터 관리, 배열 인덱스 정확히 접근하는 일 등은 신경 안써도 됨
               1. 루프는 재사용이 어려움, 다른 연산에 끼워넣기 어려움, 반복할 때마다 값과 상태가 계속 바뀜
            2. **무상태성**과 **불변성** 지향
               1. 무상태성을 위해 **순수 함수**를 씀



----

이 챕터에서 이야기하는 바

명령형과 선언형 비교

선언적 프로그래밍의 특징

---

1. 순수함수와 부수 효과

   1. FP는 순수함수로 구성된 불변 프로그램 구축을 전제로 함

   2. 특성

      1. 주어진 입력에만 의존
      2. 평가 도중 또는 호출 간 변경될 수 있는 숨겨진 값이나 외부 상태와 무관하게 작동
      3. 전역 객체나 레퍼런스로 전달된 매개변수를 수정하는 등 함수 스코프 밖에서 어떠한 변경도 일으키지 않음.

   3. 불순한 함수

      1. ```
         var counter = 0;

         function increment() {
             return ++counter;
         }
         ```

      2. 스코프 바깥에 있는 외부 변수 `counter`를 읽고 있으므로 불순함. `Date.now()`도 순수함수가 아님

      3. this 역시도 안 쓰는게 좋다.

   4. 부수효과 발생하는 상황

      1. 전역 범위에서 변수, 속성, 자료구조 변경
      2. 함수의 원래 인수 값을 변경
      3. 사용자 입력을 처리
      4. 예외를 일으킨 해당 함수가 붙잡지 않고 그대로 예외를 던짐
      5. 화면 또는 로그 파일에 출력
      6. HTML 문서, 브라우저 쿠키, DB에 질의

   5. 순수함수를 그럼 언제 쓸 수 있냐.

      1. 모든 상태 변이를 근절하자는 말이 아님
      2. 상태 변이를 줄이고 관리할 수 있는 프레임워크를 제공하여 순수/불순 함수를 구분하자는 것

   6.  부수효과 일으키는 명령형 예제

      1. ```
         function showStudent(ssn) {
             let student = db.find(ssn);
             if(student !== null) {
                 document.querySelector(`#${elementId}`).innerHTML = 
                 `${student.ssn}, 
                 ${student.firstName},
                 ${student.lastName}`;
             } else {
                 throw new Error("학생을 찾을 수 없습니다.");
             }
         }

         showStudent('444-44-4444');
         ```

      2. 문제점

         1. 외부 변수 db를 통해 데이터 접근: 이 변수가 실행 도중 null을 참조하거나 호출 단계마다 상이한 값을 가리킨다면 결괏값이 달라지고 프로그램의 무결성이 깨질수 있다.
         2. elementId는 그 값이 언제라도 바뀔 수 있는 전역 변수
         3. HTML 요소를 직접 고침. DOM은 전역 공유 자원.
         4. 학생 레코드를 찾지 못해 예외 던지면 전체 프로그램 스택이 툭 풀리며 종료될 것

   7. 개선해보자

      1. 긴 함수를 하나의 목적을 가진 짧은 함수로

      2. 함수가 해야 할 작업에 필요한 인수를 모두 명시하여 부수효과 개수를 줄임

      3. Step by step

         1. **커링**으로 학생 레코드 조회, 화면 그리는 일 분리

            1. ```javascript
               var find = curry((db, id) => {
                   let obj = db.find(id);
                   if(obj === null) {
                       throw new Error("객체를 찾을 수 없습니다.");
                   }
                   return obj;
               });

               var csv = student => `${student.ssn}, ${student.firstName}, ${student.lastName}`;

               var append = curry((selector, info) => {
                   document.querySelector(selector).innerHTML = info;
               });
               ```

            2. 장점

               1. 재사용 가능한 컴포넌트가 3개로 분리되어 코드가 유연해짐
               2. 관리할 코드 크기가 줄어 생산성 향상
               3. 고수준에서 단계별로 명확하게 보여주는 선언적 스타일을 따르므로 코드 가독성 향상
               4. HTML 객체와의 상호작용을 자체 함수로 빼내어 순수하지 않은 로직을 순수함수에서 배제 (4장)

            3. 특징

               1. **참조 투명성** : find 함수의 null 체크 분기문에서 함수가 일관된 반환값을 보장하도록 하여 전체 함수 결과를 예측 가능한 방향으로 유도하면 이로움.

----

이 챕터에서는

순수함수

부수효과

참조 투명성에 대해 이야기함

순수함수는? 주어진 입력에만 의존한다. 외부 상태와 무관하게 작동한다. 함수 스코프 밖에서 아무런 일도 일어나지 않는다.

참조 투명성이란? 함수의 결과를 예측 가능한 방향으로 유도하는 것

---

1. 참조 투명성(등식 적합성)과 치환성

   1. 순수성: 함수의 인수와 결괏값 사이의 순수한 매핑 관계. 어떤 함수가 동일한 입력을 받았을 때 동일한 결과를 내면 이를 **참조 투명한** 함수라고 함.

      1. 아까 increment 함수는 참조 투명하지 않음.

      2. `var increment = counter => counter + 1;` 은 같은 입력에 같은 결과를 반환함.

      3. 장점

         1. 전체 로직 파악에 용이

         2. 작동 방식 비교

            1. ```javascript
               //명령형
               increment();
               increment();
               print(counter);
               // counter의 초깃값에 의존, 호출 도중 변경 시 값이 어떻게 변할지 불명확
               ```

            2. ```javascript
               // 함수형
               var plus2 = run(increment, increment);

               print(plus2(0));
               // 항상 초기값을 2만큼 증가시킴
               ```

         3. **재작성**하거나 **치환**하더라도 원하는 결과를 얻을수 있음

            1. ```
               var sum = (total, current) => total + current;
               var total = arr => arr.reduce(sum);
               var size = arr = > arr.length;
               var divide = (a, b) => a / b;
               var average = arr => divide(total(arr), size(arr));
               average(input);
               ```



---

이 챕터에서는

참조 투명성: 인수와 결괏값. 동일한 입력, 동일한 결과

재작성, 치환



---

1. 불변 데이터 유지하기

   1. 배열 같은 객체는 불변이 아니라서 함수 인수로 전달해도 원래 내용이 변경되서 부수효과 발생할 소지가 남아있음.

   2. 예제

      1. ```javascript
         var sortDesc = arr => {
             arr.sort(
             (a, b) => b -a
             )
         };
         ```

      2. Array.sort는 원본 레퍼런스가 가리키는 배열의 원소를 정렬하는 부수효과를 일으킴.

   3. 함수형 프로그래밍의 정의 : **외부에서 관찰가능한 부수효과가 제거된 불변 프로그래밍을 작성하기 위해 순수 함수를 선언적으로 평가하는 것**

   4. js 개발자가 직면한 문제

      1. 뚜렷한 체계 없이 분기 체계 남발
      2. 외부 공유 변수에 지나치게 의존하는 덩치 큰 함수 과용

   5. 해결책

      1. 순수 연산의 관점에서 데이터를 절대 변경하지 않는 고정된 **작업 단위**로 바라보라.

---

이 챕터에서는

**외부에서 관찰가능한 부수효과가 제거된 불변 프로그래밍을 작성하기 위해 순수 함수를 선언적으로 평가하는 것**을 이야기하고 싶었음.

---

1. 함수형 프로그래밍의 좋은 점
   1. 함수형 인지력 향상을 위한 핵심 기법
      1. 간단한 함수들로 작업 분해
      2. 흐름 체인으로 데이터를 처리
      3. 리액티브 패러다임을 실현하여 이벤트 중심 코드의 복잡성을 줄임



---

이 챕터에서는

별거 없다. 서론 같은 것.

---

1. 복잡한 작업을 분해하도록 유도
   1. FP는 분해와 합성 간의 상호작용
   2. 모듈적, 효율적으로 동작
   3. showStudent를 find, csv, append로 분리하듯.
   4. 모둘화
      1. 단일성의 원리와 관련됨.
      2. 함수는 한가지 목표만 바라봐야 한다
   5. 합성
      1. `f . g = f(g(x))`
      2. g 반환값과 f 인수 간에 느슨하고 형식 안전한 관계가 맺어짐
      3. `var showStudent = compose(append('#student-info'), csv, find(db));`
         1. 444-444-4444 -> find -> student -> csv -> ssn, first, last -> append
      4. compose 함수
         1. 앱 모듈성과 재사용성 학습에 매우 각별한 의미
         2. 함수형 합성 코드는 전체 표현식 의미를 개별 조각 의미에서 추론 가능
         3. 고수준 추상화를 통해 자세한 내막을 밝히지 않아도 코드가 수행하는 전 단계를 일목요연하게 나타냄
         4. 고계 함수라고 불림.



----

이 챕터에서는

분해하라고 하는 이유

합성에 대해 설명, 특징 설명



---

1. 데이터를 매끄럽게 체이닝하여 처리

   1. 예제: 복수 과목을 수강한 학생들의 평균 점수 계산

   2. ```
      let enrollment = [
          {enrolled: 2, grade:100},
          {enrolled: 2, grade:80},
          {enrolled: 1, grade:89}
      ];

      var totalGrades = 0;
      var totalStudentFound = 0;
      for(let i = 0; i < enrollment.length; i++) {
          let student = enrollment[i];
          if(student !== null) {
              if(student.enrolled > 1) {
                  totalGrades += student.grade;
                  totalStudentsFound++;
              }
          }
      }

      var average = totalGrades / totalStudentsFound;
      ```

   3. 문제 분해

      1. 수강과목이 두개 이상인 자료 집합을 적절히 선택

      2. 학생의 점수 얻기

      3. 평균 점수 계산

      4. 함수 체인 이용 방식

         1. ```
            _.chain(enrollment)
            .filter(student => student.enrolled > 1)
            .pluck('grade')
            .average()
            .value();
            ```

         2. 특징

            1. 느긋한 평가(게으른 평가) 수행: 필요한 시점까지 실행을 미룸 -> cpu 부하가 줆 (**필요 시 호출** 개념 모방)

         3. 에러 처리

            1. 위 코드는 사실 에러처리를 모두 건너 뜀
            2. 순수하게 학문적인 FP는 예외가 존재하지 않지만, 예외를 완전히 배제하기란 사실 어렵다.
            3. 우리의 목표
               1. 순수 에러 처리를 구현
               2. 진짜 예외적인 상황에서 예외가 나게끔 허용하는 것

      5. 우리가 실제 개발하는 웹 앱 같은데서는 어떻게 활용할까?

---

체인 소개



---

1. 복잡한 비동기 애플리케이션에서도 신속하게 반응

   1. 비동기 코드, 이벤트 중심 코드 복잡도를 줄이는데 도움

   2. 리액티브 패러다임

      1. 코드 추상화
      2. 비동기, 이벤트 기반 프로그램 설정하느라 반복되는 판박이 코드 -> 비즈니스 로직에만 전념
      3. 체인 및 합성으로 FP 능력 최대화

   3. 명령형 예제

      1. ```javascript
         //명령형
         var valid = false;
         var elem = document.querySelector("#student-ssn");
         elem.onkeyup = function (event) {
             var val = elem.value;
             if(val != null && val.length !== 0) {
                 val = val.replace(/^\s*|\s*$|\-s/g, '');
                 if(val.length === 9) {
                     console.log(`올바른 SSN: ${val}!`);
                     valid = true;
                 }
             }
             else {
                 console.log(`잘못된 SSN: ${val}!`);
             }
         }
         ```

      2. 단점

         1. 복잡해보임
         2. 비즈니스 로직이 한곳에 집중됨
         3. 모듈성 결여
         4. 외부 상태에 의존 -> 재사용성의 어려움

   4. 함수형 예제

      1. 옵저버블: 데이터 스트림을 구독하여 원하는 연산을 우아하게 합성 및 체이닝하여 처리

      2. ```javascript
         Rx.Observable.fromEvent(document.querySelector('#student-ssn'), 'keyup')
         	.pluck('srcElement', 'value')
         	.map(ssn => ssn.replace(/^\s*|\s*$|\-s/g, ''))
         	.filter(ssn => ssn !== null && ssn.length ===9)
             .subscribe(validSsn => {
         	    console.log(`올바른 SSN: ${val}!`);
         })
         ```

      3. 특징

         1. 수행하는 모든 연산이 불변
         2. 비즈니스 로직이 개별 함수로 나뉨
         3. 리액티브와 함수형을 섞어 쓸 필요는 없지만 함수형 사고를 하다보면 함수형 리액티브 프로그래밍에 눈을 뜨게 됨.

   5. ​

   6. ​

---

FRP에 대해서 소개



---

1. 마치며
   1. 순수함수를 사용한 코드는 전역 상태를 바꾸거나 깨뜨릴 일이 전혀 없으므로 테스트, 유지보수가 더 쉬운 코드를 개발하는데 도움이 됨
   2. 함수형 프로그래밍은 코드를 선언적으로 작성하므로 헤아리기 쉽고 전체 애플리케이션의 가독성 역시 향상됨. 함수와 람다 표현식을 조합하여 깔끔하게 코딩할 수 있다.
   3. 여러 원소로 구성된 컬렉션 데이터는 map, reduce 같은 연산을 함수 체인으로 연결하여 물 흐르듯 매끄럽게 처리할 수 있다.
   4. 함수형 프로그래밍은 함수를 기본적인 구성 요소로 추급한다. 이는 일급/고계함수 개념에 기반을 두며 코드의 모듈성, 재사용성을 높인다.
   5. 리액티브/함수형 프로그래밍을 융합하면 이벤트 기반 프로그램 특유의 복잡성을 줄일 수 있다.



