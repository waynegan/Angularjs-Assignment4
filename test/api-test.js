var APIeasy = require('api-easy'),
    assert = require('assert');

var suite = APIeasy.describe('Contacts API');

var blankTest = [
  {
    "first": "Jim",
    "last": "Cooper",
    "extension": 3219,
    "id": "jim",
    "imageUrl": "http://ipro.lambton.on.ca/img/jim.png",
    "office": "N203A",
    "department": "School of Technology",
    "manager": "Dean of Technology"
  },
  {
    "first": "Len",
    "last": "Payne",
    "extension": 3418,
    "id": "len",
    "imageUrl": "http://ipro.lambton.on.ca/img/len.png",
    "office": "N203B",
    "department": "School of Technology",
    "manager": "Dean of Technology"
  },
  {
    "first": "Liane",
    "last": "Cooper",
    "extension": 3336,
    "id": "liane",
    "imageUrl": "http://ipro.lambton.on.ca/img/liane.png",
    "office": "E202-21",
    "department": "School of Business",
    "manager": "Dean of Business"
  },
  {
    "first": "Rick",
    "last": "Brown",
    "extension": 3376,
    "id": "rick",
    "imageUrl": "http://ipro.lambton.on.ca/img/rick.png",
    "office": "D100",
    "department": "Information Technology",
    "manager": "IT Manager"
  },
  {
    "first": "Samantha",
    "last": "Spencer",
    "extension": 3385,
    "id": "samantha",
    "imageUrl": "http://ipro.lambton.on.ca/img/samantha.png",
    "office": "D100",
    "department": "Information Technology",
    "manager": "IT Manager"
  },
  {
    "first": "Shannon",
    "last": "Smith",
    "extension": 3418,
    "id": "shannon",
    "imageUrl": "http://ipro.lambton.on.ca/img/shannon.png",
    "office": "N203B",
    "department": "School of Technology",
    "manager": "Dean of Technology"
  }
];
var firstTest = {
  "first": "Jim",
  "last": "Cooper",
  "extension": 3219,
  "id": "jim",
  "imageUrl": "http://ipro.lambton.on.ca/img/jim.png",
  "office": "N203A",
  "department": "School of Technology",
  "manager": "Dean of Technology"
};
var lastTest = [
  {
    "first": "Jim",
    "last": "Cooper",
    "extension": 3219,
    "id": "jim",
    "imageUrl": "http://ipro.lambton.on.ca/img/jim.png",
    "office": "N203A",
    "department": "School of Technology",
    "manager": "Dean of Technology"
  },
  {
    "first": "Liane",
    "last": "Cooper",
    "extension": 3336,
    "id": "liane",
    "imageUrl": "http://ipro.lambton.on.ca/img/liane.png",
    "office": "E202-21",
    "department": "School of Business",
    "manager": "Dean of Business"
  }
];
var extTest = {
  "first": "Liane",
  "last": "Cooper",
  "extension": 3336,
  "id": "liane",
  "imageUrl": "http://ipro.lambton.on.ca/img/liane.png",
  "office": "E202-21",
  "department": "School of Business",
  "manager": "Dean of Business"
};
var idTest = {
  "first": "Rick",
  "last": "Brown",
  "extension": 3376,
  "id": "rick",
  "imageUrl": "http://ipro.lambton.on.ca/img/rick.png",
  "office": "D100",
  "department": "Information Technology",
  "manager": "IT Manager"
};
var officeTest = [
  {
    "first": "Len",
    "last": "Payne",
    "extension": 3418,
    "id": "len",
    "imageUrl": "http://ipro.lambton.on.ca/img/len.png",
    "office": "N203B",
    "department": "School of Technology",
    "manager": "Dean of Technology"
  },
  {
    "first": "Shannon",
    "last": "Smith",
    "extension": 3418,
    "id": "shannon",
    "imageUrl": "http://ipro.lambton.on.ca/img/shannon.png",
    "office": "N203B",
    "department": "School of Technology",
    "manager": "Dean of Technology"
  }
];
var deptTest = [
  {
    "first": "Jim",
    "last": "Cooper",
    "extension": 3219,
    "id": "jim",
    "imageUrl": "http://ipro.lambton.on.ca/img/jim.png",
    "office": "N203A",
    "department": "School of Technology",
    "manager": "Dean of Technology"
  },
  {
    "first": "Len",
    "last": "Payne",
    "extension": 3418,
    "id": "len",
    "imageUrl": "http://ipro.lambton.on.ca/img/len.png",
    "office": "N203B",
    "department": "School of Technology",
    "manager": "Dean of Technology"
  },
  {
    "first": "Shannon",
    "last": "Smith",
    "extension": 3418,
    "id": "shannon",
    "imageUrl": "http://ipro.lambton.on.ca/img/shannon.png",
    "office": "N203B",
    "department": "School of Technology",
    "manager": "Dean of Technology"
  }
];
var mgrTest = {
  "first": "Liane",
  "last": "Cooper",
  "extension": 3336,
  "id": "liane",
  "imageUrl": "http://ipro.lambton.on.ca/img/liane.png",
  "office": "E202-21",
  "department": "School of Business",
  "manager": "Dean of Business"
};
var firstLastTest = {
  "first": "Samantha",
  "last": "Spencer",
  "extension": 3385,
  "id": "samantha",
  "imageUrl": "http://ipro.lambton.on.ca/img/samantha.png",
  "office": "D100",
  "department": "Information Technology",
  "manager": "IT Manager"
};
var findTest = [
  {
    "first": "Jim",
    "last": "Cooper",
    "extension": 3219,
    "id": "jim",
    "imageUrl": "http://ipro.lambton.on.ca/img/jim.png",
    "office": "N203A",
    "department": "School of Technology",
    "manager": "Dean of Technology"
  },
  {
    "first": "Liane",
    "last": "Cooper",
    "extension": 3336,
    "id": "liane",
    "imageUrl": "http://ipro.lambton.on.ca/img/liane.png",
    "office": "E202-21",
    "department": "School of Business",
    "manager": "Dean of Business"
  }
];

suite.discuss('Testing the Contacts API')
     .use('localhost', 8001)
     .get('/').expect(200, blankTest)
	 .get('/first/Jim').expect(200, firstTest)
	 .get('/last/Cooper').expect(200, lastTest)
	 .get('/extension/3336').expect(200, extTest)
	 .get('/id/rick').expect(200, idTest)
	 .get('/office/N203B').expect(200, officeTest)
	 .get('/department/School of Technology').expect(200, deptTest)
	 .get('/manager/Dean of Business').expect(200, mgrTest)
	 .get('/first/Samantha/last/Spencer').expect(200, firstLastTest)
	 .get('/find/last/oo').expect(200, findTest)
     .export(module);