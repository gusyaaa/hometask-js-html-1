let body = document.querySelector("body");
let h1 = document.createElement("h1")

h1.innerHTML = "List of bootcamp participants:"
body.prepend(h1)

let p = document.createElement("p")
p.innerHTML = "The list is randomly generated, any matches are random."


let ul = document.createElement("ul")

ul.innerHTML = `
<li>Andrey Sitnik</li>
<li>Charlie Gerard</li>
<li>Alex Blom</li>
<li>Emma Brillhart</li>
<li>Luis Montes</li>
<li>Dylan Schiemann</li>
<li>Christian Heilmann</li>
<li>Jyoti Bishnoi</li>
<li>Paul Shannon</li>
<li>Liz Parody</li>
<li>Daniel Khan</li>
<li>April Wensel</li>
<li>Yan Cui</li>
<li>Marcus Blankenship</li>
<li>Tony Edwards</li>
<li>Emma Wedekind</li>
<li>Nader Dabit</li>
<li>Callum Macrae</li>
<li>Kye Hohenberger</li>
<li>Evan You</li>
<li>Sarah Dresner</li>
<li>Natalia Tepluhina</li>
<li>Adam Johnson</li>
<li>Zhang Weill</li>
<li>Tim Cook</li>
`;
body.append(ul)
body.insertBefore(p,ul)



function addStudent(firstName, lastName) {
    let newItem = document.createElement("li");
    newItem.textContent = `${firstName} ${lastName}`;
    let ul = document.querySelector("ul");
    ul.append(newItem);
}

addStudent("Tony", "Soprano");
addStudent("Christopher", "Moltisanti");
addStudent("Silvio", "Dante");
