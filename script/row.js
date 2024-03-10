
let count = 0;

const row = document.getElementById('row');
row.style.display = 'block';

function addRow(n = 10){
    setTimeout(
        ()=>{
            while(count <= 500){
                for(let a=0; a<=n; a++){
                    const new_row = document.createElement('tr');
                    const cell1 = document.createElement('td');
                    const cell2 = document.createElement('td');
                    const cell3 = document.createElement('td');
                    const cell4 = document.createElement('td');

                    cell1.className = 'No';
                    cell2.className = 'Task';
                    cell3.className = 'DueDate';
                    cell4.className = 'Completed';

                    cell1.innerHTML = count;

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