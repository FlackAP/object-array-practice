var Dogs =  [	
	{
	name:'Rockefeller',
	color:'brindle', 
	nickName:'rocky',
	owner:'Andy',
	},

	{
	name:'Phineas',
	color:'black',
	nickName:'Phin',
	owner:'David',
	},

	{
	name:'Lexi',
	color:'black and tan',
	nickName:'Lex',
	owner:'Randall',
	},

	{
	name:'Wolfgang',
	color:'black and tan',
	nickName:'Wolfie',
	owner:'Rachel',
	},

	{
	name:'Rascal',
	color:'white and brown',
	nickName:'Raz',
	owner:'Ann',
	}
]

Dogs.forEach(function(item) {
item.favoritePhrase = 'who is a good boy?'
})

Dogs.sort()