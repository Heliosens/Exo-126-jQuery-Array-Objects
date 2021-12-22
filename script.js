
let arrObj = [
    {"person" : "Mark","age":25, "avatar":"https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Blank&hairColor=Auburn&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=Overall&clotheColor=Gray01&eyeType=Close&eyebrowType=UpDown&mouthType=Sad&skinColor=Black"},
    {"person" : "Bill", "age":65, "avatar" : "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Wayfarers&hairColor=SilverGray&facialHairType=MoustacheMagnum&facialHairColor=Black&clotheType=ShirtCrewNeck&clotheColor=Gray02&eyeType=Surprised&eyebrowType=SadConcernedNatural&mouthType=Default&skinColor=Light"},
    {"person" : "Spencer", "age" : 34, "avatar" : "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Prescription02&hairColor=Blonde&facialHairType=BeardMedium&facialHairColor=Black&clotheType=CollarSweater&clotheColor=PastelRed&eyeType=Dizzy&eyebrowType=SadConcerned&mouthType=Sad&skinColor=Yellow"}
];

//Methode js native pour parcourir un tableau d'objets ( avec for...in )
for(let i in arrObj) {
    // i est l'index de mon tableau d'objet
    console.log("index = " + i);

    // j'accède à mon tableau d'objet comme n'importe quel tableau
    console.log("arrObj = " + arrObj[i]);

    // J'accéde à une propriété particuliére de mon objet ,ici l'age
    console.log("age = " + arrObj[i].age);
}

//Autre méthode : utilisation de forEach
arrObj.forEach(function(arr) {
    //Afficher la propriété age pour chaque objet contenu dans mon tableau
   console.log("Resultat avec foreach = " + arr.age);
});

//Méthode utilisant jQuery
$.each(arrObj, function(index, value) {
    //Afficher la propriété age pour chaque objet contenu dans mon tableau
   console.log("Affichage age utilisant jQuery = " + value.age);
});


/**    exo     **/
// create frame for avatar & info & nav
let frame = document.createElement('div');
frame.style.cssText = `
    text-align : center;
    margin : 5vh auto;
`;

let personImg = document.createElement('img');

let info = document.createElement('p');


let nav = document.createElement('div');
let span1 = document.createElement('span');
let span2 = document.createElement('span');

span1.innerHTML = "<";
span1.style.margin = "1rem";
span2.innerHTML = ">";
span2.style.margin = "1rem";

nav.style.cssText = `
    display : flex;
    justify-content : center;
    font-size : 2rem;
`;

document.body.appendChild(frame);
frame.appendChild(personImg);
frame.appendChild(info);
nav.appendChild(span1);
nav.appendChild(span2);
frame.appendChild(nav);

let p = 0;
personImg.src = arrObj[p].avatar;
info.innerHTML = arrObj[p].person + " (" + arrObj[p].age + ")";

span1.style.visibility = 'hidden';

$('span').click(function (){

    if($(this).index() === 0){
        p--;
    }
    else {
        p++;
    }

    if(p === 0){
        span1.style.visibility = 'hidden';
    }
    else if (p === arrObj.length -1){
        span2.style.visibility = 'hidden';
    }
    else{
        span1.style.visibility = 'visible';
        span2.style.visibility = 'visible';
    }

    personImg.src = arrObj[p].avatar;
    info.innerHTML = arrObj[p].person + " (" + arrObj[p].age + ")";
})

