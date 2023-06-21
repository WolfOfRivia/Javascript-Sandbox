// What I tried to do
/*
const insert = document.getElementById('insert');

function getKey(e) {
  const keyData = [e.key, e.keyCode, e.code];
  for(const key in keyData) {
    insert.innerHTML += `<div class="key">
                          ${keyData[key]}
                          <small></small>
                        </div>`;
    console.log(e);
  }

}

document.addEventListener('keydown', getKey);

*/

// Method 1 (Quick and Dirty)
// window.addEventListener('keydown', (e) => {
//   const insert = document.getElementById('insert');
//   insert.innerHTML = `
//     <div class="key">
//       ${e.key === ' ' ? 'Space' : e.key}
//       <small>e.key</small>
//     </div>
//     <div class="key">
//       ${e.keyCode}
//       <small>e.keyCode</small>
//     </div>
//     <div class="key">
//       ${e.code}
//       <small>e.code</small>
//     </div>
//   `;
// })

// Method 2 (Recommended way) // I forgot all about looping through an object with for in loops
function showkeyCodes(e) {
  const insert = document.getElementById('insert');

  insert.innerHTML = '';
  const keyCodes = {
    'e.key': e.key === ' ' ? 'Space' : e.key,
    'e.keyCode': e.keyCode,
    'e.code' : e.code,
  }

  for(let key in keyCodes) {
    const div = document.createElement('div');
    div.className = 'key';
    const small = document.createElement('small');

    const keyText = document.createTextNode(key);
    const valueText = document.createTextNode(keyCodes[key]);

    small.appendChild(keyText);
    div.appendChild(valueText);
    div.appendChild(small);

    insert.appendChild(div);
  }

}

window.addEventListener('keydown', showkeyCodes);