const collectFormData = () => {
  const p1NameInput = document.getElementById('p1Name');
  const p1Name = p1NameInput.value;

  const p2TypeInput = document.getElementById('p2Type');
  let p2Name = 'Computer';
  const isP2Human = p2TypeInput.value === 'computer' ? false : true;
  if (isP2Human) {
    const p2NameInput = document.getElementById('p2Name');
    p2Name = p2NameInput.value;
  }

  return { p1Name, p2Name, isP2Human };
};

const handleTextInput = () => {
  const p2TypeInput = document.getElementById('p2Type');
  const p2NameInput = document.getElementById('p2Name');

  p2NameInput.disabled = true;
  p2NameInput.required = false;

  if (p2TypeInput.value === 'human') {
    p2NameInput.disabled = false;
    p2NameInput.required = true;
  } else {
    p2NameInput.disabled = true;
    p2NameInput.required = false;
  }
};

export { collectFormData, handleTextInput };
