// object with answers from user
var userAnswers =[];
var q = 0;
var otherIndex = 1;
var correctQuestions = 0;
//question iteratior

const quiz = [{question : "What is the Sharpe Ratio?",
               choices : ["A measurement used to calculate the return of asset compared to the risk-free rate divided by its mean return.",
               "A chemical ratio used to compare the sharpeness of California's cheeses vs Wisconsin's.", "A measurement used to calculated the sharpness of knives.","Sharpe Ratio is a person."],
               answer :"A measurement used to calculate the return of asset compared to the risk-free rate divided by its mean return."
  },
            {
              question: "What is IRR?",
             choices : ["IRR , internal rate of return, is a measurement of return of all cashflows from a project discounted to where the  NPV equals zero.","Internal Rate Recording is a government organization that determines acceptable returns on capital investments.","IRR is an acronym for internal refactored rules, a concept akin to the KISS principle.","IRR is intelligent reduction rate technique that value bonds in distress capital markets.","None of the above."],
             answer: "IRR , internal rate of return, is a measurement of return of all cashflows from a project discounted to where the  NPV equals zero."
            },
             {
               question :"What is the 'accounting equation'?",
              choices:["Assets = Liabilities + Owners' Equity","Credit = Debit","1 + 1 = 11","profit - (profit*tax rate-1) = after tax profit"],
              answer: "Assets = Liabilities + Owners' Equity"
            },
              {
                question: "What does a corelation of one mean when the formula returns that value?",
               choices: ["A very strong relationship.", "A very negative relationship.","Nothing", "An indeterminant relationship."],
               answer: "A very strong relationship."
              },
              {
                question: "What is monopolistic competiton?",
                choices: ["A market enviroment where many competitors can enter and exit easily with relatively similar products. Demand is very elastic and there is little profit made.", "When Parker Brother is the sole provider of the board game Monopoly.","It is when other restaurants other than McDonald's bring Monopoly as a marketing promotion.","It is a market enviroment where there is only one seller of a good."],
                answer: "A market enviroment where many competitors can enter and exit easily with relatively similar products. Demand is very elastic and there is little profit made."
              },
              {
                question: "Can sales made on credit be recognized as revenue on income statements according to GAAP?",
                choices : ["Yes","No", "Maybe","Depends on the size of bribes to the accountants."],
                answer: "Yes"
              },
              {
                question: "Bonds that are trading at the current market rate and have similar yields are…?",
              choices: ["At par.","At a discount.","At a premium.","James Bond's children."],
              answer: "At par."
              },
              {
                question: "What is a Chapter 13 Bankruptcy?",
                choices: ["A plan by a debtor to pay creditors a fix amount for debt by court order with certain legal protections.","A liquidation of assets of the borrower to satisfy creditors.","A popular fiction book.","A plan to receive government subsidies in bankruptcy to pay excessive debt obligations to credtors by court orders."],
                answer:"A plan by a debtor to pay creditors a fix amount for debt by court order with certain legal protections."
              },
              {
                question: "What is the UCC?",
                choices: ["Uniform Commercial Code","Unicorn Circus Corporation","Unified Commerical Clasues","University of Central Connecticut"],
                answer: "Uniform Commercial Code"
              },
              {
                question: "Can oil and gas leases be split up?",
                choices: ["Yes",	"No", "Maybe",	"Depends on the what is written in the contract between the lessee and lessor."],
                answer: "Yes"
              },
                {
                  question: "Shareholders of publicly traded companies have rights to…",
                  choices: ["Inspect corporate financial records.","Use company property.", "Force a dividend payment.","To get a company's assets first before bondholders in a liquidation event."],
                  answer: "Shareholders of publicly traded companies have rights to…"
                },
                {
                  question: "What is one of the 7 C's of Credit?",
                  choices: ["Character","Chipmunks"	,"Candidness",	"Cost"],
                  answer: "Character"
                },
                {
                  question:"Who was the leading figure in getting the Federal Reserve formed?",
                  choices: ["J.P. Morgan",	"Woodrow Wilson"	,"Alexander Hamilton"	,"Andrew Jackson"],
                  answer: "J.P. Morgan"
                }
  ];
  

//rewrite quiz, have a listener that works
function createEventListener(){
  $(".right").click(function(event){
    event.preventDefault();
    $('form').show();
    $('form').html(htmlQuestion(quiz[q]));//questionObject??
    renderStatus();
    // ++q;
    $('main').hide();
    $('.buttons').show();
    $('.status').show();
  });
  // add next listener
  $(".submitted").click(function(e){
    e.preventDefault();
    
    let answer = $('input[name="userAnswer"]:checked').val();
    correctAnswers(answer);
    ++q;
    if (q >= 13){
    $('main').show();
    $('form').hide();
    $('.buttons').hide();
    $('p').text(`Do you want to restart the quiz? Your score is ${correctQuestions} out of ${quiz.length}.`)
    q = 0;
    correctQuestions = 0;
    $('.status').hide();
    //listener for starting again
    } else{
    $('form').html(htmlQuestion(quiz[q]));//questionObject??
    //loops through questions
    
    }
    renderStatus();
    
  });
  $(".wrong").click(function(e){
    e.preventDefault();
    
    warrenImg = '<img src="https://georgecouros.ca/blog/wp-content/uploads/2017/08/Investment_Buffett.jpg">'
    $('body').html(warrenImg)
  });
}
createEventListener()

function renderStatus(){
    //adding 1 to the value due to zero based index
    $('.status').html(`Question ${q+1} of ${quiz.length}: <span class="right">${correctQuestions}</span> Correct out of ${quiz.length}`);// q function end status
}
  
function htmlQuestion(questionObject,index){
  // added index
  
  return `
	
		<legend>${questionObject.question}</legend>
		  <label>
		  <input value="${questionObject.choices[0]}" type="radio" name="userAnswer" >${questionObject.choices[0]}
		  </label>
			<br>
			<label>
			<input type="radio" value="${questionObject.choices[1]}"name="userAnswer" >${questionObject.choices[1]}</label>
			<br>
			<label>
			<input type="radio" value="${questionObject.choices[2]}"name="userAnswer" >${questionObject.choices[2]}</label>
			<br>
			<label>
			<input type="radio" value="${questionObject.choices[3]}"name="userAnswer" >${questionObject.choices[3]}</label>`
			
}
  
//
function correctAnswers(userAnswer){
  
  if( userAnswer === quiz[q].answer){
    correctQuestions++;
  } else {
    return 
    var answerStr = `
<div class="modal-content">
    <span class="close">${quiz[q].answer}</span>
    <p>Some text in the Modal..</p>
  </div>`
    //add class to highlight right answer use jquery
  }
  return correctQuestions;
}
