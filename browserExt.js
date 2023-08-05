const inputBtn = document.getElementById("inputBtn");
const deleteBtn=document.getElementById("deleteBtn");
const tabBtn=document.getElementById("tabBtn");
let myLeads=[];
const inputEl = document.getElementById("inputEl");
const ulEl = document.getElementById("ulEl");
inputBtn.addEventListener("click",clickBtn);
deleteBtn.addEventListener("dblclick",deleteAll);
tabBtn.addEventListener("click", saveTab);

function saveTab(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads);
    });
    myLeads.push(tabs[0].url)
    localStorage.setItem("myleads", JSON.stringify(myLeads))

}

const leadsLS= JSON.parse(localStorage.getItem("myLeads"));

if(leadsLS){
    myLeads=leadsLS;
    render(myLeads);
}


function clickBtn() {
    myLeads.push(inputEl.value);
    render(myLeads);
    inputEl.value="";
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
}

function deleteAll(){
    localStorage.clear();
    myLeads=[];
    render(myLeads);
}

function render(item){
    let listItems="";
    for(let i=0;i<item.length;i++){
       // listItems += "<li><a target='_blank' href=' " + myLeads[i] + "'>" + myLeads[i] + "</a></li>";
        listItems += `<li>
            <a target='_blank' href='${item[i]}'>  ${item[i]}  </a>
        </li>`;
       
    }
    ulEl.innerHTML=listItems;
}

