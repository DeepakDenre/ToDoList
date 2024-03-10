
let count = 0;

const row = document.getElementById('content-table');

function addRow(n = 10){
    setTimeout(
        ()=>{
            while(count <= 100){
                for(let a=0; a<=n; a++){
                    const new_row = document.createElement('tr');
                    const cell1 = document.createElement('td');
                    const cell2 = document.createElement('td');
                    const cell3 = document.createElement('td');
                    const cell4 = document.createElement('td');

                    cell1.id = 'No'+count;
                    cell2.id = 'Task'+count;
                    cell3.id = 'DueDate'+count;
                    cell4.id = 'Completed'+count;

                    cell2.innerHTML = "<input type='text' class='task-input'>";
                    cell3.innerHTML = "<input type='date' class='date-input'>";
                    cell4.innerHTML = "<input type='checkbox' class='completed-input'>";

                    cell1.className = 'No';
                    cell2.className = 'Task';
                    cell3.className = 'DueDate';
                    cell4.className = 'Completed';

                    new_row.appendChild(cell1);
                    new_row.appendChild(cell2);
                    new_row.appendChild(cell3);
                    new_row.appendChild(cell4);
                    row.append(new_row);

                    count++;

                };
            }
        },
        100
    )
}

window.addEventListener(
    'scroll',
    ()=>{
        if(document.documentElement.scrollTop + window.innerHeight >= document.documentElement.scrollHeight){
            addRow();
        }
    }
)

addRow();