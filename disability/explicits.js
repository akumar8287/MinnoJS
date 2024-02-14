define(['questAPI'], function(Quest){
	
	var API = new Quest();
	var isTouch = API.getGlobal().isTouch;
	
	API.addSettings('DEBUG', {level: 'error'});
	/**
	* Page prototype
	*/
	API.addPagesSet('basicPage',{
		noSubmit:false, //Change to true if you don't want to show the submit button.
		v1style: 2,
		header: 'Questionnaire',
		decline: true,
		declineText: isTouch ? 'Decline' : 'Decline to Answer', 
		progressBar: isTouch ? 'Page <%= pagesMeta.number %> out of 3' : 'Page <%= pagesMeta.number %> out of 10',
		autoFocus:true
	});
	
    /**
	* Question prototypes
	*/
	API.addQuestionsSet('basicQ',{
		decline: 'true',
		required : true, 		
		errorMsg: {
			required: isTouch ? "Please select an answer, or click 'Decline'" : 
			"Please select an answer, or click 'Decline to Answer'"
		},
		help: '<%= pagesMeta.number < 3 %>',
		helpText: 'Tip: For quick response, click to select your answer, and then click again to submit.',
		autoSubmit:'true',
		numericValues:'true'
	
	});

	API.addQuestionsSet('basicSelect',{
		inherit :'basicQ',
		type: 'selectOne'
	});
	
		API.addQuestionsSet('multiSelect',{
		inherit :'basicQ',
		type: 'selectMulti'
	});
	
    API.addQuestionsSet('basicDropdown',{
		inherit :'basicQ',
		type : 'dropdown',
		autoSubmit:false
	});
	
    API.addQuestionsSet('therm',{
		inherit: 'basicSelect',
		answers: [
			{text:'10 - Extremely warm', value:10},
			{text:'9 - Very warm', value:9},
			{text:'8 - Moderately warm', value:8},
			{text:'7 - Somewhat warm', value:7},
			{text:'6 - Slightly warm', value:6},
			{text:'5 - Neither warm nor cold', value:5},
			{text:'4 - Slightly cold', value:4},
			{text:'3 - Somewhat cold', value:3},
			{text:'2 - Moderately cold', value:2},
			{text:'1 - Very cold', value:1},
			{text:'0 - Extremely cold', value:0}
		]
	});

    // A list of disability types
    // This will be used in more than one place so I set it in a variable
    var DISTYPES = [
        'Visual',
        'Hearing',
        'Profound and complex',
        'Dyscalculia',
        'Dyslexia',
        'Wheelchair user',
        'Disability affecting mobility',
        'Mental health',
        'Emotional/behavioral',
        'Other learning difficulty',
        'Other physical difficulty',
        'Something else'
    ];

    API.addQuestionsSet('distypeResponse',{
		inherit: 'multiSelect',
        numericValues: true,
		answers: DISTYPES 
	});
		
			
    API.addQuestionsSet('yn',{
		inherit: 'basicSelect',
		answers: [
			{text:'Yes', value:1},
			{text:'No', value:2}
		]
	});
		
					
    API.addQuestionsSet('temperm',{
		inherit: 'basicSelect',
		answers: [
			{text:'Temporary', value:1},
			{text:'Permanent', value:2},
			{text:'Don&#39;t know',value:3}
		]
	});
		
    API.addQuestionsSet('affect',{
		inherit: 'basicSelect',
		answers: [
			{text:'None', value:1},
			{text:'Mild', value:2},
			{text:'Moderate',value:3},
			{text:'Severe',value:4},
			{text:'Cannot do', value:5}
		]
	});
	
		  API.addQuestionsSet('severe',{
		inherit: 'basicSelect',
		answers: [
			{text:'None', value:1},
			{text:'Mild', value:2},
			{text:'Moderate',value:3},
			{text:'Severe',value:4}
		]
	});	
		
			
    API.addQuestionsSet('years',{
		inherit: 'basicDropdown',
		answers: [
			{text:'Less than 1',value:0},
			{text:'1',value:1},
			{text:'2',value:2},
			{text:'3',value:3},
			{text:'4',value:4},
			{text:'5',value:5},
			{text:'6',value:6},
			{text:'7',value:7},
			{text:'8',value:8},
			{text:'9',value:9},
			{text:'10',value:10},
			{text:'11',value:11},
			{text:'12',value:12},
			{text:'13',value:13},
			{text:'14',value:14},
			{text:'15',value:15},
			{text:'16',value:16},
			{text:'17',value:17},
			{text:'18',value:18},
			{text:'19',value:19},
			{text:'20',value:20},
			{text:'21',value:21},
			{text:'22',value:22},
			{text:'23',value:23},
			{text:'24',value:24},
			{text:'25',value:25},
			{text:'26',value:26},
			{text:'27',value:27},
			{text:'28',value:28},
			{text:'29',value:29},
			{text:'30',value:30},
			{text:'31',value:31},
			{text:'32',value:32},
			{text:'33',value:33},
			{text:'34',value:34},
			{text:'35',value:35},
			{text:'36',value:36},
			{text:'37',value:37},
			{text:'38',value:38},
			{text:'39',value:39},
			{text:'40',value:40},
			{text:'41',value:41},
			{text:'42',value:42},
			{text:'43',value:43},
			{text:'44',value:44},
			{text:'45',value:45},
			{text:'46',value:46},
			{text:'47',value:47},
			{text:'48',value:48},
			{text:'49',value:49},
			{text:'50',value:50},
			{text:'51',value:51},
			{text:'52',value:52},
			{text:'53',value:53},
			{text:'54',value:54},
			{text:'55',value:55},
			{text:'56',value:56},
			{text:'57',value:57},
			{text:'58',value:58},
			{text:'59',value:59},
			{text:'60',value:60},
			{text:'61',value:61},
			{text:'62',value:62},
			{text:'63',value:63},
			{text:'64',value:64},
			{text:'65',value:65},
			{text:'66',value:66},
			{text:'67',value:67},
			{text:'68',value:68},
			{text:'69',value:69},
			{text:'70',value:70},
			{text:'71',value:71},
			{text:'72',value:72},
			{text:'73',value:73},
			{text:'74',value:74},
			{text:'75',value:75},
			{text:'76',value:76},
			{text:'77',value:77},
			{text:'78',value:78},
			{text:'79',value:79},
			{text:'80',value:80},
			{text:'81',value:81},
			{text:'82',value:82},
			{text:'83',value:83},
			{text:'84',value:84},
			{text:'85',value:85},
			{text:'86',value:86},
			{text:'87',value:87},
			{text:'88',value:88},
			{text:'89',value:89},
			{text:'90+',value:90}
		]	
	});
	
	/**
	*Specific questions
	*/	
    API.addQuestionsSet('att',{
		inherit : 'basicSelect',
		name: 'att',
		stem: 'Which statement best describes you?',
		answers: [
			{text:'I strongly prefer Physically Abled People to Physically Disabled People.',value:7},
			{text:'I moderately prefer Physically Abled People to Physically Disabled People.',value:6},
			{text:'I slightly prefer Physically Abled People to Physically Disabled People.',value:5},
			{text:'I like Physically Abled People and Physically Disabled People equally.',value:4},
			{text:'I slightly prefer Physically Disabled People to Physically Abled People.',value:3},
			{text:'I moderately prefer Physically Disabled People to Physically Abled People.',value:2},
			{text:'I strongly prefer Physically Disabled People to Physically Abled People.',value:1}
		]
	});
	
    API.addQuestionsSet('thermDisabled',{
		inherit : 'therm',
		name: 'Tdisabled',
		stem: 'How warm or cold do you feel towards <b>Physically Disabled People</b>?'
	});
    API.addQuestionsSet('thermAbled',{
		inherit : 'therm',
		name: 'Tabled',
		stem: 'How warm or cold do you feel towards <b>Physically Abled People</b>?'
	});


	API.addQuestionsSet('disabled',{
		inherit : 'yn',
		name: 'disabled_001',
		stem: 'Do you have a disability or learning difficulty?'
	});
		
	
	API.addQuestionsSet('distype',{
		inherit : 'distypeResponse',
		name: 'distypes',
		stem: 'Please select all that apply:'
	});

	API.addQuestionsSet('duration',{
		inherit : 'years',
		name: 'duration_<%= pagesData.disId %>',
		stem: 'Now we will ask you some follow-up questions about your selection.<br/><br/><b><%= pagesData.disability %></b><br/><br/>For how many years have you had this difficulty?'
	});
			
	API.addQuestionsSet('severity',{
		inherit : 'severe',
		name: 'severe_<%= pagesData.disId %>',
		stem: '<b><%= pagesData.disability %></b><br/><br/>Please rate the severity of this difficulty.'
	});
			
	API.addQuestionsSet('permanent',{
		inherit : 'temperm',
		name: 'permanent_<%= pagesData.disId %>',
		stem: '<b><%= pagesData.disability %></b><br/><br/>Is this difficulty:'
	});
			
	API.addQuestionsSet('household',{
		inherit : 'affect',
		name: 'household',
		stem: 'In the last 30 days, how much health-related difficulty did you have in taking care of your household responsibilities?'
	});	
		
				
	API.addQuestionsSet('emotionally',{
		inherit : 'affect',
		name: 'emotionally',
		stem: 'In the last 30 days, how much were you emotionally affected by your health?'
	});	
		
				
	API.addQuestionsSet('communityactive',{
		inherit : 'affect',
		name: 'communityactive',
		stem: 'In the last 30 days, how much did your health cause problems for joining community activities (e.g., birthday parties, religious activities, festivities)?'
	});	
		
				
	API.addQuestionsSet('financialdrain',{
		inherit : 'affect',
		name: 'financialdrain',
		stem: 'In the last 30 days, how much was your health a drain on the financial resources of you and your family?'
	});	
			
						
	API.addQuestionsSet('disabledfamilymem',{
		inherit : 'yn',
		name: 'disabledfamilymem_001',
		stem: 'Do you have a close friend or family member with a disability or learning difficulty?'		
	});	
			
	API.addQuestionsSet('distypefamilymem',{
		inherit : 'distypeResponse',
		name: 'distypefamilymem',
		stem: 'Please select all that apply:'
	
	});	
			
	
	
	if (isTouch)
	{//Only three questions for touch
		API.addSequence([
			{
				mixer : 'random', 
				data : [
					{
						mixer : 'random', 
						wrapper:true, 
						data : [
							{
								inherit:'basicPage', 
								questions: {inherit:'thermDisabled'}
							},
							{
								inherit:'basicPage', 
								questions: {inherit:'thermAbled'}							
							}
						]
					},
					{
						inherit:'basicPage', 
						questions: {inherit:'att'}
					}
				]
			}		
		]);
	}
	else
	{
		API.addSequence([
			//First, we present the three direct liking questions.
			{
				mixer : 'random', 
				data : [
					{
						mixer : 'random', 
						wrapper:true, 
						data : [
							{
								inherit:'basicPage', 
							questions: {inherit:'thermDisabled'}
							},
							{
								inherit:'basicPage', 
							questions: {inherit:'thermAbled'}							
							}
						]
					},
					{
						inherit:'basicPage', 
						questions: {inherit:'att'}
					}
				]
			},
			//Next, all the other questions
		
					{
						mixer : 'random',
						wrapper:true, 
						data : [
							{
								inherit:'basicPage', 
							questions: {inherit:'household', required:true}
							},
							{
								inherit:'basicPage', 
							questions: {inherit:'emotionally', required:true}
							},
							{
								inherit:'basicPage', 
							questions: {inherit:'communityactive', required:true}
							},
							{
								inherit:'basicPage', 
								questions: {inherit:'financialdrain', required:true}
							}
						]
					},
					
					{
							inherit:'basicPage',
							wrapper:true,
							questions: [{inherit:'disabled', required:true},
							
							{
								mixer: 'branch',
								remix:true,
								conditions:[{compare: 'questions.disabled_001.response',to:1}],
								data: [{inherit: 'distype'}]
							}
						]
					},

                    // creeate a page for each dissability type
                    // use a custom mixer because we want (potentially) multiple elements here
                    {
                        mixer: 'custom',
                        fn: function(obj){
                            var questions = API.getCurrent().questions;
                            var distypes = questions.distypes ? questions.distypes.response : [];

                            // for each value in the distypes question produce a basicPage
                            // the page should have three questions
                            // the data element should hold the disability type that we get from DISTYPES and a zerofilled unique id for the question
                            return distypes.map(function(disId){
                                var type = DISTYPES[disId-1];
                                return {
                                    inherit: 'basicPage',
                                    data: {disability: type, disId: zeroFill(disId)},
                                    questions: [
                                        {inherit: 'duration',  autoSubmit:false}, 
                                        {inherit: 'severity',  autoSubmit:false},
                                        {inherit: 'permanent', autoSubmit:false}
                                    ]
                                }
                            
                            });

                            function zeroFill(num){
                                num = num.toString();
                                while (num.length < 3) num = '0' + num;
                                return num;
                            }
                        }
                    },
					
					{
							inherit:'basicPage', 
						    questions: [{inherit:'disabledfamilymem', required:true},
					
							{
								mixer: 'multiBranch',
								remix:true,
								branches: [
							{
								conditions:[{compare: 'questions.disabledfamilymem_001.response',to:1}],
								data: [{inherit: 'distypefamilymem'}]
							}
							
						]
					}
			    ]
			}
		

	
				
			
		]);
	}
	return API.script;
});




