function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

let jsonResponse = [];
const desktop = document.querySelector('#fetch-area');
const mobile = document.querySelector('#fetch-area2');

const loadTodoList = async () => {
        const data = await fetch('http://localhost:8080/todolist')
        jsonResponse = await data.json()
        displayTodoList1(jsonResponse)
        displayTodoList2(jsonResponse)
};

searchBar1.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredCharacters = jsonResponse.filter((i) => {
 
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
                i.statu.toLowerCase().includes(searchString)
            );
        
    });
    displayTodoList1(filteredCharacters);
});

searchBar2.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredCharacters = jsonResponse.filter((i) => {
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
            i.statu.toLowerCase().includes(searchString)
        );
    });
    displayTodoList2(filteredCharacters);
});

async function displayTodoList1(jsonResponse) {
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
                <p>status: ${i.statu}</p>
            </h2>
        </div>
        <div class="d-flex flex-row-reverse">
        <div class="p-2 ">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style="width: 30px; height: 30px;">
        <label class="form-check-label" for="flexCheckDefault"></label>
        </div>
        </div>
    </div>`
    }
    displayArea.innerHTML = displayhtml;
};

async function displayTodoList2(jsonResponse) {
    let displayArea = mobile
    let displayhtml = ""
    for (let i of jsonResponse) {
        displayhtml = displayhtml +
            `<div class="row" style="padding: 40px; border-style: groove;">
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
                <p>status: ${i.statu}</p>
            </h2>
        </div>
        <div class="d-flex flex-row-reverse">
        <div class="p-2 ">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style="width: 30px; height: 30px;">
        <label class="form-check-label" for="flexCheckDefault"></label>
        </div>
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
    formObject['statu'] = form.fetchStatu.value;
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

const updateItem = document.querySelector('#updateItem')
updateItem.addEventListener('submit', async(event) => {
    event.preventDefault();
    const form = event.target;
    const formObject = {};
    formObject['id'] = form.fetchId2.value;
    formObject['item'] = form.fetchItem2.value;
    formObject['assignedTo'] = form.fetchAssignedTo2.value;
    formObject['statu'] = form.fetchStatu2.value;
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

const removeItem = document.querySelector('#removeItem')
removeItem.addEventListener('submit', async(event) => {
    event.preventDefault();
    const form = event.target;
    removeAllItem(form.fetchId2.value)
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

loadTodoList();








