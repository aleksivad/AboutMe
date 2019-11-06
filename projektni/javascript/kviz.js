function check() {
   var pitanje = document.quiz.zanr.value;
   pitanje = pitanje.toLowerCase();
   var correct = 0;

   if (pitanje == "комедија" || pitanje == "komedija") {
      document.getElementById("number_correct").innerHTML = "Комедија је тачан одговор";
   }
   else {
      document.getElementById("number_correct").innerHTML = "Погрешан одговор! Покушајте поново.";
   }

   document.getElementById("after_submit").style.visibility = "visible";
}

// scripts here:

function submitQuiz() {
   console.log('submitted');

   // get each answer score
   function answerScore(qName) {
      var radiosNo = document.getElementsByName(qName);

      for (var i = 0, length = radiosNo.length; i < length; i++) {
         if (radiosNo[i].checked) {
            // do something with radiosNo
            var answerValue = Number(radiosNo[i].value);
         }
      }
      // change NaNs to zero
      if (isNaN(answerValue)) {
         answerValue = 0;
      }
      return answerValue;
   }

   // calc score with answerScore function
   var calcScore = (answerScore('q1') + answerScore('q2') + answerScore('q3') + answerScore('q4') + answerScore('q5'));
   console.log("CalcScore: " + calcScore); // it works!

   // function to return correct answer string
   function correctAnswer(correctStringNo, qNumber) {
      console.log("qNumber: " + qNumber);  // logs 1,2,3,4 after called below
      return ("Тачан одговор на " + qNumber + ". питање је" + ": &nbsp;<strong>" +
         (document.getElementById(correctStringNo).innerHTML) + "</strong>");
   }

   // print correct answers only if wrong (calls correctAnswer function)
   if (answerScore('q1') === 0) {
      document.getElementById('correctAnswer1').innerHTML = correctAnswer('correctString1', 1);
   }
   if (answerScore('q2') === 0) {
      document.getElementById('correctAnswer2').innerHTML = correctAnswer('correctString2', 2);
   }
   if (answerScore('q3') === 0) {
      document.getElementById('correctAnswer3').innerHTML = correctAnswer('correctString3', 3);
   }
   if (answerScore('q4') === 0) {
      document.getElementById('correctAnswer4').innerHTML = correctAnswer('correctString4', 4);
   }
   if (answerScore('q5') === 0) {
      document.getElementById('correctAnswer5').innerHTML = correctAnswer('correctString5', 5);
   }

   document.getElementById('div1').className="prozor";

   // calculate "possible score" integer
   var questionCountArray = document.getElementsByClassName('question');

   var questionCounter = 0;
   for (var i = 0, length = questionCountArray.length; i < length; i++) {
      questionCounter++;
   }

   // show score as "score/possible score"
   var showScore = "Ваш резултат је: " + calcScore + "/" + questionCounter;
   // if 4/4, "perfect score!"
   if (calcScore === questionCounter) {
      showScore = showScore + "&nbsp; <strong>Честитам!</strong>"
   };
   document.getElementById('userScore').innerHTML = showScore;
}

$(document).ready(function () {

   $('#submitButton').click(function () {
      $(this).addClass('hide');
   });


});
