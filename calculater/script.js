document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.btn');
  const resultField = document.querySelector('.input');

  // Handle button clicks
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const value = button.textContent;
      resultField.value += value;
    });
  });

  // Handle Clear button
  const clearButton = document.querySelector('.btn-clr');
  clearButton.addEventListener('click', () => {
    resultField.value = "";
  });

  // Handle Delete button
  const deleteButton = document.querySelector('.btn-del');
  deleteButton.addEventListener('click', () => {
    resultField.value = resultField.value.slice(0, -1);
  });

  // Handle Equal button
  const equalButton = document.querySelector('.btn-eq');
  equalButton.addEventListener('click', () => {
    evaluateExpression();
  });

  // Handle Enter key
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent default behavior of Enter key
      evaluateExpression();
    }
    else if (event.key === 'Backspace') {
      resultField.value = resultField.value.slice(0, -1);
    }
    else if(event.key==='Delete'){
      resultField.value = "";
    }
    
  });

  // Function to evaluate the expression
  function evaluateExpression() {
       if(resultField.value==='Error'){
          resultField.value = 'Error';
          return;
       }

       try {
       
    
        // Get the user-entered expression
        const expression = resultField.value;
    
        // Use math.js to evaluate the expression securely
        const result = math.evaluate(expression);
    
        // Display the result in the input field
        resultField.value = result;
      } catch (error) {
        console.error('Invalid expression:', resultField.value);
    
        // Display an error message in the input field
        resultField.value = 'Error';
      }
    }
});
