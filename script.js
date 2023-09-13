const addForm = document.querySelector('.add');

addForm.addEventListener('submit', (event) => {
   const tasks = document.querySelector('.tasks');
   event.preventDefault();

   const value = addForm.task.value.trim();

   if (value.length) {
      tasks.innerHTML += `<li>
                              <span>${value}</span>
                              <span class="delete">🗑️</span>
                           </li>`;
      addForm.reset();
   }
});
