var handlers = {
    checkNumberOfWords: function(){
	  var warningMessage = document.getElementById('incorrectInput');
	  warningMessage.textContent = '';
	  var displayMessage = document.getElementById('transposedInput');
	  displayMessage.textContent = '';
	  var userInput = document.getElementById('userInput');
	  console.log(userInput.value.split(' '));
	    if (userInput.value.split(' ').length !== 2) {
	      console.log('incorrect no of words');
	      view.askForAnotherInput();
	    } else {
	      console.log('correct number of words');
	      this.verticalSignCreator();
	    }
	    userInput.value = '';
    },
    verticalSignCreator: function(){
 	  var userInput = document.getElementById('userInput');
      userInput = userInput.value.split(' ');
      var maxLength = 0;
	  var longest;

	  for(var i = 0; i < userInput.length; i++){
	      if(userInput[i].length > maxLength){
	          maxLength = userInput[i].length;
	          longest = userInput[i];
	      }      
	  }

	  var arr = [];
	  userInput.forEach(function(value){
	       arr.push(value.split(''));
	  });

	  var newWords = [];

	  for (var i = 0; i < longest.length; i++) {
	    newWords.push((arr[0][i] ? arr[0][i] : '&nbsp') + '&nbsp&nbsp&nbsp' + (arr[1][i] ? arr[1][i] : '&nbsp'));
	  }

	  var final_text = newWords.join('<br>');
      console.log(final_text);
	  var transposedInput = document.getElementById('transposedInput');
      transposedInput.innerHTML = final_text;
  }
}

var view = {
  askForAnotherInput: function(){
    var incorrectInput = document.getElementById('incorrectInput');
    incorrectInput.textContent = 'Please try again. Remember to enter two words';
  }
}

	