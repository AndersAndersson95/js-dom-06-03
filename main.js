const appStyle = `
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`;


const app = document.getElementById("app");
app.style = appStyle;

const textarea = createTextArea();
const button = createButton("Save note");
const list = createList(); 

app.appendChild(textarea);
app.appendChild(button);
app.appendChild(list);

function countNotes() {
    return list.querySelectorAll("li").length;
}

button.addEventListener("click", function(event){
    const textValue = textarea.value;
    const count = countNotes();
    const color = COLORS[count % COLORS.length];

    const li = createLi(textValue, color);
    list.appendChild(li);

    textarea.value = "";
});