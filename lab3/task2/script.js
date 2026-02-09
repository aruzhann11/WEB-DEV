
    const input = document.getElementById('input-box');
    const addBtn = document.getElementById('button');
    const list = document.getElementById('list');

    function addItem() {
      const text = input.value.trim();
      if (text === '') return;

      const li = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      const span = document.createElement('span');
      span.textContent = text;
      const deleteBtn = document.createElement('button');
      deleteBtn.innerHTML = '❌';
      deleteBtn.className = 'delete-btn';
      

      checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
          li.classList.add('done');
        } else {
          li.classList.remove('done');
        }
      });

      deleteBtn.addEventListener('click', () => {
        list.removeChild(li);
      });

      li.appendChild(checkbox);
      li.appendChild(span);
      li.appendChild(deleteBtn);

      list.appendChild(li);

      input.value = '';
      input.focus();
    }

    addBtn.addEventListener('click', addItem);
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') addItem();
    });
