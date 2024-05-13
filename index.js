const data = [
    [
        {
            id: 1,
            number: "01",
            sample: "TSRT1425",
            btn1: "Take white",
            btn2: "Start"
        },
        {
            id: 2,
            number: "02",
            sample: "TSRT1425",
            btn1: "Take white",
            btn2: "Start"
        },
        {
            id: 3,
            number: "03",
            sample: "White?",
            btn1: "Yes",
            btn2: "No"
        },
        {
            id: 4,
            number: "04",
            sample: "TSRT1425",
            greenBtn: "03:34"
        },
    ],
    [
        {
            id: 5,
            number: "01",
            sample: "TSRT1425",
            btn1: "Take white",
            btn2: "Start"
        },
        {
            id: 6,
            number: "02",
            sample: "TSRT1425",
            btn1: "Take white",
            btn2: "Start"
        },
        {
            id: 7,
            number: "03",
            sample: "White?",
            btn1: "Yes",
            btn2: "No"
        },
        {
            id: 8,
            number: "04",
            sample: "TSRT1425",
            greenBtn: "03:34"
        },
    ],
    [
        {
            id: 9,
            number: "01",
            sample: "TSRT1425",
            btn1: "Take white",
            btn2: "Start"
        },
        {
            id: 10,
            number: "02",
            sample: "TSRT1425",
            btn1: "Take white",
            btn2: "Start"
        },
        {
            id: 11,
            number: "03",
            sample: "White?",
            btn1: "Yes",
            btn2: "No"
        },
        {
            id: 12,
            number: "04",
            sample: "TSRT1425",
            greenBtn: "03:34"
        },
    ],
    [
        {
            id: 13,
            number: "01",
            sample: "TSRT1425",
            btn1: "Take white",
            btn2: "Start"
        },
        {
            id: 14,
            number: "02",
            sample: "TSRT1425",
            btn1: "Take white",
            btn2: "Start"
        },
        {
            id: 15,
            number: "03",
            sample: "White?",
            btn1: "Yes",
            btn2: "No"
        },
        {
            id: 16,
            number: "04",
            sample: "TSRT1425",
            greenBtn: "03:34"
        },
    ]
];


const sampleDetails = document.getElementById("sample-details");

window.addEventListener("DOMContentLoaded", showDetails);

function showDetails(){
    data.forEach((value)=>{
        const container = document.createElement("div");
        container.className = "data-container";
        value.forEach((item)=>{
            const test = document.createElement("div");
            test.className = "test";
            if(item.number === "04"){
                test.classList.add("border-green");
            }
            const testNumber = document.createElement("div");
            testNumber.className = "test-number";
            testNumber.appendChild(document.createTextNode(item.number));
            const testSample = document.createElement("div");
            testSample.className = "test-sample";
            testSample.appendChild(document.createTextNode(item.sample));
            const btnGroup = document.createElement("div");
            btnGroup.className = "btn-group";
            if(item.number === "04"){
                const btn = document.createElement("button");
                btn.className = "green-btn";
                btn.appendChild(document.createTextNode(item.greenBtn));
                btnGroup.appendChild(btn);
            }else{
                const left = document.createElement("button");
                left.className = "left";
                if(item.number === "03"){
                    left.classList.add("yes");
                }
                left.appendChild(document.createTextNode(item.btn1));
                const right = document.createElement("button");
                right.className = "right";
                right.appendChild(document.createTextNode(item.btn2));
                btnGroup.appendChild(left);
                btnGroup.appendChild(right);
            }
            test.appendChild(testNumber);
            test.appendChild(testSample);
            test.appendChild(btnGroup);
            if(item.number === "01" || item.number === "02"){
                const selectedDiv = document.createElement("div");
                selectedDiv.className = "selected-div";
                const image = document.createElement("img");
                image.setAttribute("src", "./assests/check.svg");
                image.setAttribute("alt", "Check");
                selectedDiv.appendChild(image);
                test.appendChild(selectedDiv);
            }
            container.appendChild(test);
        })
        sampleDetails.appendChild(container);
    })
}

sampleDetails.addEventListener("mouseover", function(event){
    if(event.target.classList.contains("test")){
        event.target.classList.add("selected-test");
        const selectedDiv = event.target.querySelector(".selected-div");
        if(selectedDiv){
            selectedDiv.classList.add("showCheck");
        }
    }
});

sampleDetails.addEventListener("mouseout", function(event){
    if(event.target.classList.contains("test")){
        event.target.classList.remove("selected-test");
        const selectedDiv = event.target.querySelector(".selected-div");
        if(selectedDiv){
            selectedDiv.classList.remove("showCheck");
        }
    }
});