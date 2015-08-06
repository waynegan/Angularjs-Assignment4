var APIeasy = require('api-easy'),
    assert = require('assert');

var suite = APIeasy.describe('Contacts API');

var fullList = [
	{ "first" : "Jim", "last" : "Cooper", "extension" : "3219" , "id" : "jim", "imageUrl" : "img/jim.png" },
	{ "first" : "Liane", "last" : "Cooper", "extension" : "3336" , "id" : "liane", "imageUrl" : "img/liane.png" },
	{ "first" : "Rick", "last" : "Brown", "extension" : "3376" , "id" : "rick", "imageUrl" : "img/rick.png" },
	{ "first" : "Len", "last" : "Payne", "extension" : "3418" , "id" : "len", "imageUrl" : "img/len.png" },
	{ "first" : "Shannon", "last" : "Smith", "extension" : "3418" , "id" : "shannon", "imageUrl" : "img/shannon.png" },
	{ "first" : "Samantha", "last" : "Spencer", "extension" : "3385" , "id" : "samantha", "imageUrl" : "img/samantha.png" }
];
var jim = { 
	"first" : "Jim", 
	"last" : "Cooper", 
	"extension" : "3219" , 
	"id" : "jim", 
	"imageUrl" : "img/jim.png",
	"office" : "N203A",
	"department" : "School of Technology",
	"manager" : "Dean of Technology"
};
var liane = { 
	"first" : "Liane", 
	"last" : "Cooper", 
	"extension" : "3336" , 
	"id" : "liane", 
	"imageUrl" : "img/liane.png",
	"office" : "E202-21",
	"department" : "School of Business",
	"manager" : "Dean of Business"
};
var rick = { 
	"first" : "Rick", 
	"last" : "Brown", 
	"extension" : "3376" , 
	"id" : "rick", 
	"imageUrl" : "img/rick.png",
	"office" : "D100",
	"department" : "Information Technology",
	"manager" : "IT Manager"
};
var len = { 
	"first" : "Len", 
	"last" : "Payne", 
	"extension" : "3418" , 
	"id" : "len", 
	"imageUrl" : "img/len.png",
	"office" : "N203B",
	"department" : "School of Technology",
	"manager" : "Dean of Technology"
};
var shannon = { 
	"first" : "Shannon", 
	"last" : "Smith", 
	"extension" : "3418" , 
	"id" : "shannon", 
	"imageUrl" : "img/shannon.png",
	"office" : "N203B",
	"department" : "School of Technology",
	"manager" : "Dean of Technology"
};
var samantha = { 
	"first" : "Samantha", 
	"last" : "Spencer", 
	"extension" : "3385" , 
	"id" : "samantha", 
	"imageUrl" : "img/samantha.png",
	"office" : "D100",
	"department" : "Information Technology",
	"manager" : "IT Manager"
};

suite.discuss('Testing the Contacts API')
     .use('localhost', 8001)
     .post('/').expect(200, fullList)
	 .post('/contacts').expect(200, fullList)
	 .post('/bob').expect(404)
	 .post('/jim').expect(200, jim)
	 .post('/liane').expect(200, liane)
	 .post('/rick').expect(200, rick)
	 .post('/len').expect(200, len)
	 .post('/shannon').expect(200, shannon)
	 .post('/samantha').expect(200, samantha)
     .export(module);