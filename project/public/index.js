function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

let jsonResponse = [];
const desktop = document.querySelector('#fetch-area');
const mobile = document.querySelector('#fetch-area2');

//load dataBase and show data
const loadTodoList = async () => {
        const data = await fetch('http://localhost:8080/todolist')
        jsonResponse = await data.json()
        displayTodoList1(jsonResponse)
        displayTodoList2(jsonResponse)
        displayId1(jsonResponse)
        displayId2(jsonResponse) 
        displayId3(jsonResponse)
        disEdit1(jsonResponse)
};

searchStudy1.addEventListener('click', (e) => {
    const searchString = searchStudy1.dataset.id.toLowerCase();

    const filter = jsonResponse.filter((i) => {
 
            return (
                i.category.toLowerCase().includes(searchString)
            );
        
    });
    displayTodoList3(filter);
});

searchWork1.addEventListener('click', (e) => {
    const searchString = searchWork1.dataset.id.toLowerCase();

    const filter = jsonResponse.filter((i) => {
 
            return (
                i.category.toLowerCase().includes(searchString)
            );
        
    });
    displayTodoList3(filter);
});

searchFamily1.addEventListener('click', (e) => {
    const searchString = searchFamily1.dataset.id.toLowerCase();

    const filter = jsonResponse.filter((i) => {
 
            return (
                i.category.toLowerCase().includes(searchString)
            );
        
    });
    displayTodoList3(filter);
});

searchUndo1.addEventListener('click', (e) => {
    displayTodoList1(jsonResponse);
});

searchAllItem1.addEventListener('click', (e) => {
    displayTodoList3(jsonResponse);
});

searchComplete1.addEventListener('click', (e) => {
    const searchString = searchComplete1.dataset.id.toLowerCase();

    const filter = jsonResponse.filter((i) => {
 
            return (
                i.status.toLowerCase().includes(searchString)
            );
        
    });
    displayTodoList3(filter);
});

searchStudy2.addEventListener('click', (e) => {
    const searchString = searchStudy2.dataset.id.toLowerCase();

    const filter = jsonResponse.filter((i) => {
 
            return (
                i.category.toLowerCase().includes(searchString)
            );
        
    });
    displayTodoList4(filter);
});

searchWork2.addEventListener('click', (e) => {
    const searchString = searchWork2.dataset.id.toLowerCase();

    const filter = jsonResponse.filter((i) => {
 
            return (
                i.category.toLowerCase().includes(searchString)
            );
        
    });
    displayTodoList4(filter);
});

searchFamily2.addEventListener('click', (e) => {
    const searchString = searchFamily2.dataset.id.toLowerCase();

    const filter = jsonResponse.filter((i) => {
 
            return (
                i.category.toLowerCase().includes(searchString)
            );
        
    });
    displayTodoList4(filter);
});

searchUndo2.addEventListener('click', (e) => {
    displayTodoList2(jsonResponse);
});

searchAllItem2.addEventListener('click', (e) => {
    displayTodoList4(jsonResponse);
});

searchComplete2.addEventListener('click', (e) => {
    const searchString = searchComplete2.dataset.id.toLowerCase();

    const filter = jsonResponse.filter((i) => {
 
            return (
                i.status.toLowerCase().includes(searchString)
            );
        
    });
    displayTodoList4(filter);
});
//searching
searchBar1.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filter = jsonResponse.filter((i) => {
 
            return (
                i.id.toLowerCase().includes(searchString)||
                i.item.toLowerCase().includes(searchString) ||
                i.dueDate.toLowerCase().includes(searchString) ||
                i.startDate.toLowerCase().includes(searchString) ||
                i.startTime.toLowerCase().includes(searchString) ||
                i.endDate.toLowerCase().includes(searchString) ||
                i.endTime.toLowerCase().includes(searchString) ||
                i.category.toLowerCase().includes(searchString) ||
                i.assignedTo.toLowerCase().includes(searchString) ||
                i.content.toLowerCase().includes(searchString) ||
                i.status.toLowerCase().includes(searchString)
            );
        
    });
    displayTodoList3(filter);
});

//searching
searchBar2.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filter = jsonResponse.filter((i) => {
        return (
            i.id.toLowerCase().includes(searchString) ||
            i.item.toLowerCase().includes(searchString) ||
            i.dueDate.toLowerCase().includes(searchString) ||
            i.startDate.toLowerCase().includes(searchString) ||
            i.startTime.toLowerCase().includes(searchString) ||
            i.endDate.toLowerCase().includes(searchString) ||
            i.endTime.toLowerCase().includes(searchString) ||
            i.category.toLowerCase().includes(searchString) ||
            i.assignedTo.toLowerCase().includes(searchString) ||
            i.content.toLowerCase().includes(searchString) ||
            i.status.toLowerCase().includes(searchString)
        );
    });
    displayTodoList4(filter);
});

chooseId1.addEventListener('click', (e) => {
    disEdit1(jsonResponse);
});

async function disEdit1(jsonResponse) {
    let displayArea = document.querySelector('#showEditItem1');
    let displayhtml = ""
    for (let i of jsonResponse) {
        if(i.id == chooseId1.value){
            displayhtml = displayhtml +
            `<div class="col-12">
            <label class="form-label">Item:</label>
            <input type='text' name='fetchItem2' id='fetchItem2' value="${i.item}"/>
        </div>
        <div class="col-12">
            <label class="form-label" placeholder="name">Assigned to:</label>
            <input type='text' name='fetchAssignedTo2' id='fetchAssignedTo2' value="${i.assignedTo}"/>
        </div>
        <div class="col-6">
            <label class="form-label">Status:</label>
            <select id="fetchStatus2" class="form-select">
                        <option selected>${i.status}</option>
                            <option>todo</option>
                            <option>in-progress</option>
                            <option>review</option>
                            <option>complete</option>
                        </select>
            <p><br></p>
        </div>
        <div class="col-6">
            <label class="form-label" placeholder="name">Category:</label>
            <select id="fetchCategory2" class="form-select">
                            <option selected>${i.category}</option>
                            <option>study</option>
                            <option>work</option>
                            <option>family</option>
                            <option>null</option>
                        </select>
        </div>
        <p><br></p>
        <div class="col-12">
            <label>Due Date:</label>
            <input type="date" id="fetchDueDate2" name="fetchDueDate2" value="${i.dueDate}">
        </div>
        <p><br></p>
        <div class="col-12">
            <label>Start Date:</label>
            <input type="date" id="fetchStartDate2" name="fetchStartDate2" value="${i.startDate}">
        </div>
        <p><br></p>
        <div class="col-12">
            <label>Start Time:</label>
            <input type="time" id="fetchStartTime2" name="fetchStartTime2" value="${i.startTime}">
        </div>
        <p><br></p>
        <div class="co-12">
            <label>End Date:</label>
            <input type="date" id="fetchEndDate2" name="fetchEndDate2" value="${i.endDate}">
        </div>
        <p><br></p>
        <div class="col-12">
            <label>End Time:</label>
            <input type="time" id="fetchEndTime2" name="fetchEndTime2" value="${i.endTime}">
        </div>
        <p><br></p>
        <div class="col-12">
            <label class="form-label">Description:</label><br>
            <input type='text' name='fetchDescription2' id='fetchDescription2' style="width:100%;"/ value="${i.content}">
        </div>`
        }
    }
    displayArea.innerHTML = displayhtml;
};

async function displayId1(jsonResponse) {
    let displayArea = document.querySelector('#chooseId1');
    let displayhtml = ""
    for (let i of jsonResponse) {
        displayhtml = displayhtml +
        `<option>${i.id}</option>`
    }
    displayArea.innerHTML = displayhtml;
};

async function displayId2(jsonResponse) {
    let displayArea = document.querySelector('#chooseId2');
    let displayhtml = ""
    for (let i of jsonResponse) {
        displayhtml = displayhtml +
        `<option>${i.id}</option>`
    }
    displayArea.innerHTML = displayhtml;
};

async function displayId3(jsonResponse) {
    let displayArea = document.querySelector('#itemId');
    let displayhtml = ""
    for (let i = 0 ; i < jsonResponse.length; i++) {
        if(i == (jsonResponse.length -1)){
            newId = `00${(parseInt(jsonResponse[i].id, 10) + 1)}`
            displayhtml = displayhtml +
            `<label class="form-label">ID:</label>
            <input type="text" name='fetchId' id='fetchId' value="${newId}" disabled>`
        }
    }
    displayArea.innerHTML = displayhtml;
};


//show any item in desktop
async function displayTodoList1(jsonResponse) {
    let displayArea = desktop
    let displayhtml = ""
    for (let i of jsonResponse) {
        if(! i.status.includes("complete")){
            displayhtml = displayhtml +
            `<div class="row" id="item1">
            <div class="col-12">
            <h2>
                <p>Task<a>${i.id}</a></p>
            </h2>
            </div>
            <div class="col-6" style="line-height: 50px;">
                <h2>
                    <p>Item: ${i.item}</p>
                </h2>
            </div>
            <div class="col-6" style="line-height: 50px;">
                <h2>
                    <p>Due Date: ${i.dueDate}</p>
                </h2>
            </div>
            <div class="col-6" style="line-height: 50px;">
                <h2>
                    <p>Start Date: ${i.startDate}</p>
                </h2>
            </div>
            <div class="col-6" style="line-height: 50px;">
                <h2>
                    <p>Start Time: ${i.startTime}</p>
                </h2>
            </div>
            <div class="col-6" style="line-height: 50px;">
                <h2>
                    <p>End Date: ${i.endDate}</p>
                </h2>
            </div>
            <div class="col-6" style="line-height: 50px;">
                <h2>
                    <p>End Time: ${i.endTime}</p>
                </h2>
            </div>
            <div class="col-6" style="line-height: 50px;">
            <h2>
                <p>category: ${i.category}</p>
            </h2>
            </div>
            <div class="col-6" style="line-height: 50px;">
                <h2>
                    <p>Assigned To: ${i.assignedTo}</p>
                </h2>
            </div>
            <div class="col-6" style="line-height: 50px;">
                <h2>
                    <p>Description: ${i.content}</p>
                </h2>
            </div>
            <div class="col-6" style="line-height: 50px;">
                <h2>                     
                    <p>status: ${i.status}</p>
                </h2>
            </div>
        </div>`
        }
    }
    displayArea.innerHTML = displayhtml;
};

//show any item in mobile
async function displayTodoList2(jsonResponse) {
    let displayArea = mobile
    let displayhtml = ""
    for (let i of jsonResponse) {
        if(! i.status.includes("complete")){
            displayhtml = displayhtml +
            `<div class="row" id="item1">
            <div class="col-12">
            <h2>
                <p>Task<a>${i.id}</a></p>
            </h2>
            </div>
            <div class="col-6" style="line-height: 50px;">
                <h2>
                    <p>Item: ${i.item}</p>
                </h2>
            </div>
            <div class="col-6" style="line-height: 50px;">
                <h2>
                    <p>Due Date: ${i.dueDate}</p>
                </h2>
            </div>
            <div class="col-6" style="line-height: 50px;">
                <h2>
                    <p>Start Date: ${i.startDate}</p>
                </h2>
            </div>
            <div class="col-6" style="line-height: 50px;">
                <h2>
                    <p>Start Time: ${i.startTime}</p>
                </h2>
            </div>
            <div class="col-6" style="line-height: 50px;">
                <h2>
                    <p>End Date: ${i.endDate}</p>
                </h2>
            </div>
            <div class="col-6" style="line-height: 50px;">
                <h2>
                    <p>End Time: ${i.endTime}</p>
                </h2>
            </div>
            <div class="col-6" style="line-height: 50px;">
            <h2>
                <p>category: ${i.category}</p>
            </h2>
            </div>
            <div class="col-6" style="line-height: 50px;">
                <h2>
                    <p>Assigned To: ${i.assignedTo}</p>
                </h2>
            </div>
            <div class="col-6" style="line-height: 50px;">
                <h2>
                    <p>Description: ${i.content}</p>
                </h2>
            </div>
            <div class="col-6" style="line-height: 50px;">
                <h2>                     
                    <p>status: ${i.status}</p>
                </h2>
            </div>
        </div>`
        }
    }
    displayArea.innerHTML = displayhtml;
};

async function displayTodoList3(jsonResponse) {
    let displayArea = desktop
    let displayhtml = ""
    for (let i of jsonResponse) {
            displayhtml = displayhtml +
            `<div class="row" id="item1">
            <div class="col-12">
            <h2>
                <p>Task<a>${i.id}</a></p>
            </h2>
            </div>
            <div class="col-6" style="line-height: 50px;">
                <h2>
                    <p>Item: ${i.item}</p>
                </h2>
            </div>
            <div class="col-6" style="line-height: 50px;">
                <h2>
                    <p>Due Date: ${i.dueDate}</p>
                </h2>
            </div>
            <div class="col-6" style="line-height: 50px;">
                <h2>
                    <p>Start Date: ${i.startDate}</p>
                </h2>
            </div>
            <div class="col-6" style="line-height: 50px;">
                <h2>
                    <p>Start Time: ${i.startTime}</p>
                </h2>
            </div>
            <div class="col-6" style="line-height: 50px;">
                <h2>
                    <p>End Date: ${i.endDate}</p>
                </h2>
            </div>
            <div class="col-6" style="line-height: 50px;">
                <h2>
                    <p>End Time: ${i.endTime}</p>
                </h2>
            </div>
            <div class="col-6" style="line-height: 50px;">
            <h2>
                <p>category: ${i.category}</p>
            </h2>
            </div>
            <div class="col-6" style="line-height: 50px;">
                <h2>
                    <p>Assigned To: ${i.assignedTo}</p>
                </h2>
            </div>
            <div class="col-6" style="line-height: 50px;">
                <h2>
                    <p>Description: ${i.content}</p>
                </h2>
            </div>
            <div class="col-6" style="line-height: 50px;">
                <h2>                     
                    <p>status: ${i.status}</p>
                </h2>
            </div>
        </div>`
    }
    displayArea.innerHTML = displayhtml;
};

async function displayTodoList4(jsonResponse) {
    let displayArea = mobile
    let displayhtml = ""
    for (let i of jsonResponse) {
            displayhtml = displayhtml +
            `<div class="row" id="item1">
            <div class="col-12">
            <h2>
                <p>Task<a>${i.id}</a></p>
            </h2>
            </div>
            <div class="col-6" style="line-height: 50px;">
                <h2>
                    <p>Item: ${i.item}</p>
                </h2>
            </div>
            <div class="col-6" style="line-height: 50px;">
                <h2>
                    <p>Due Date: ${i.dueDate}</p>
                </h2>
            </div>
            <div class="col-6" style="line-height: 50px;">
                <h2>
                    <p>Start Date: ${i.startDate}</p>
                </h2>
            </div>
            <div class="col-6" style="line-height: 50px;">
                <h2>
                    <p>Start Time: ${i.startTime}</p>
                </h2>
            </div>
            <div class="col-6" style="line-height: 50px;">
                <h2>
                    <p>End Date: ${i.endDate}</p>
                </h2>
            </div>
            <div class="col-6" style="line-height: 50px;">
                <h2>
                    <p>End Time: ${i.endTime}</p>
                </h2>
            </div>
            <div class="col-6" style="line-height: 50px;">
            <h2>
                <p>category: ${i.category}</p>
            </h2>
            </div>
            <div class="col-6" style="line-height: 50px;">
                <h2>
                    <p>Assigned To: ${i.assignedTo}</p>
                </h2>
            </div>
            <div class="col-6" style="line-height: 50px;">
                <h2>
                    <p>Description: ${i.content}</p>
                </h2>
            </div>
            <div class="col-6" style="line-height: 50px;">
                <h2>                     
                    <p>status: ${i.status}</p>
                </h2>
            </div>
        </div>`
    }
    displayArea.innerHTML = displayhtml;
};


// example for fetch: POST with JSON format
const fetchAddItem = document.querySelector('#fetchAddItem')
fetchAddItem.addEventListener('submit', async(event) => {
    event.preventDefault();
    const form = event.target;
    const formObject = {};
    formObject['id'] = form.fetchId.value;
    formObject['item'] = form.fetchItem.value;
    formObject['assignedTo'] = form.fetchAssignedTo.value;
    formObject['status'] = form.fetchStatus.value;
    formObject['category'] = form.fetchCategory.value;
    formObject['dueDate'] = form.fetchDueDate.value;
    formObject['startDate'] = form.fetchStartDate.value;
    formObject['startTime'] = form.fetchStartTime.value;
    formObject['endDate'] = form.fetchEndDate.value;
    formObject['endTime'] = form.fetchEndTime.value;
    formObject['content'] = form.fetchDescription.value;
    const response = await fetch('http://localhost:8080/todolist', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formObject),
    })
    location.reload();
})

// example for fetch: Put with JSON format
const updateItem = document.querySelector('#updateItem')
updateItem.addEventListener('submit', async(event) => {
    event.preventDefault();
    const form = event.target;
    const formObject = {};
    formObject['id'] = form.chooseId1.value;
    formObject['item'] = form.fetchItem2.value;
    formObject['assignedTo'] = form.fetchAssignedTo2.value;
    formObject['status'] = form.fetchStatus2.value;
    formObject['category'] = form.fetchCategory2.value;
    formObject['dueDate'] = form.fetchDueDate2.value;
    formObject['startDate'] = form.fetchStartDate2.value;
    formObject['startTime'] = form.fetchStartTime2.value;
    formObject['endDate'] = form.fetchEndDate2.value;
    formObject['endTime'] = form.fetchEndTime2.value;
    formObject['content'] = form.fetchDescription2.value;
    updateAllItem(formObject)
    location.reload();
})

async function updateAllItem(item) {
    try {
        let response = await fetch(`http://localhost:8080/todolist/${item.id}`, {
            method: "PUT",
            body: JSON.stringify(item),
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (err) {
    }
}

// example for fetch: Delete with JSON format
const removeItem = document.querySelector('#removeItem')
removeItem.addEventListener('submit', async(event) => {
    event.preventDefault();
    const form = event.target;
    removeAllItem(form.chooseId2.value)
    location.reload();
})

async function removeAllItem(id) {
    try {
        let response = await fetch(`http://localhost:8080/todolist/${id}`, {
            method: "DELETE",
        });
    } catch (err) {
    }
}

//run function for load dataBase and show data
loadTodoList();








