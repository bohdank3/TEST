let schemaData = [
    { name: "Jou Doe", dob: "21-03-1991", favorite_animals: ["cat", "dog"] },
    { name: "Ivan Deshek", dob: "24-04-2005", favorite_animals: ["dog"] },
    { name: "Denis Xevin", dob: "12-06-1951", favorite_animals: ["cat"] },
    { name: "Jak Baed", dob: "02-09-1961", favorite_animals: ["cat", "rabbit"] },
    { name: "Lolla Nekson", dob: "14-01-1971", favorite_animals: ["rabbit", "dog"] },
    { name: "Mariya Arroka", dob: "21-12-1981", favorite_animals: ["rabbit", "dog", "rabbit"] }
];


function newArr (arr) {
	let newArray = arr.map(elem => Object.values(elem));
    let finalyArray =[];

    let now = new Date().toLocaleDateString();
    now = now.split('.');
    now  = now.map(elem=>elem*1);

    function Obj(name ='-',surname ='-',age='-',favorite_animals='-'){
        this.name = name,
        this.surname = surname,
        this.age = age;  
        this.favorite_animals   = favorite_animals;
   }
   

 
    newArrName  = newArray.map(elem =>{
        let spliceArr = elem.splice(0,1).join(' ').split(' ');

        let elemDate = elem.splice(0,1).join('-').split('-');
        elemDate = elemDate.map(elem => elem*1);

        let years = now[2]-elemDate[2];
        let month = now[1]-elemDate[1];
        let days = now[0]-elemDate[0];
        if(month<0||days||0){
            years--
        }

        let user =  new Obj(spliceArr[0],spliceArr[1],years,elem);
        finalyArray.push(user)

        
    })

    finalyArray.sort((a, b) => a.age > b.age ? 1 : -1)

    console.log(finalyArray)
}
newArr(schemaData);

















  
