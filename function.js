function toggleCoverAndExecuteFunction(funcToRun) {
  const existingCover = document.getElementById('fullPageCover');

  if (existingCover) {
    document.body.removeChild(existingCover);
  } else {
    const coverDiv = document.createElement('div');
    coverDiv.id = 'fullPageCover';
    coverDiv.style.position = 'fixed';
    coverDiv.style.top = '0';
    coverDiv.style.left = '0';
    coverDiv.style.width = '100%';
    coverDiv.style.height = '100%';
    coverDiv.style.backgroundColor = 'rgba(0,0,0,0.5)';
    coverDiv.style.zIndex = '1000';

    // Create an X button to close the overlay
    const closeButton = document.createElement('button');
    closeButton.innerText = 'X';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '20px';
    closeButton.style.right = '20px';
    closeButton.style.zIndex = '1001'; // Ensure it's above the overlay

    // Add click event listener to the button to toggle the overlay off
    closeButton.addEventListener('click', function() {
      toggleCoverAndExecuteFunction(funcToRun); // Recursively calls the main function
    });

    coverDiv.appendChild(closeButton);
    document.body.appendChild(coverDiv);

    funcToRun();
  }
}

// Example function to execute
function myCustomFunction() {
  console.log('Overlay toggled and custom function executed.');
}

/*
Example:

window.onload = function() {
    const element = document.querySelector("#myElement");
    if (element) {
        toggleCoverAndExecuteFunction(myCustomFunction);
    }
};

OnClick Example: 

document.querySelector("#myButton").addEventListener("click", function() {
    const element = document.querySelector("#myElement");
    if (element) {
        toggleCoverAndExecuteFunction(myCustomFunction);
    }
});

*/