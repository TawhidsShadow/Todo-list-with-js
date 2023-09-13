const addForm = document.querySelector('.add');
const tasks = document.querySelector('.tasks');
const clearAll = document.querySelector('.clear');
const message = document.querySelector('.message');
const searchForm = document.querySelector('.search');

const taskCount = function () {
   message.firstElementChild.textContent = `You have ${tasks.children.length} pending tasks.`;
};

addForm.addEventListener('submit', (event) => {
   event.preventDefault();

   const value = addForm.task.value.trim();

   if (value.length) {
      tasks.innerHTML += `<li>
                              <span>${value}</span>
                              <span class="delete">🗑️</span>
                           </li>`;
      addForm.reset();
      taskCount();
   }
});

tasks.addEventListener('click', (event) => {
   if (event.target.classList.contains('delete')) {
      event.target.parentElement.remove();
      taskCount();
   }
});

clearAll.addEventListener('click', (event) => {
   tasks.innerHTML = '';
   taskCount();
});

taskCount();

const filterTask = function (term) {
   Array.from(tasks.children)
      .filter((task) => !task.textContent.toLowerCase().includes(term))
      .forEach((task) => task.classList.add('hide'));
   Array.from(tasks.children)
      .filter((task) => task.textContent.toLowerCase().includes(term))
      .forEach((task) => task.classList.remove('hide'));
};

searchForm.addEventListener('keyup', (event) => {
   const term = searchForm.task.value.toLowerCase().trim();
   filterTask(term);
});

searchForm.addEventListener('click', (event) => {
   if (event.target.classList.contains('reset')) {
      searchForm.reset();
      const term = searchForm.task.value.toLowerCase().trim();
      filterTask(term);
   }
});
