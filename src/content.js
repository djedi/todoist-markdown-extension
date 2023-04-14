// Wait for the #content div to load before executing the script
let divChecker = setInterval(() => {
  let content = document.getElementById("content");

  // Once the content div is loaded, stop checking and execute the script
  if (content) {
    clearInterval(divChecker);

    // Find the button area in the top right corner of the Todoist UI
    let buttonArea = document.querySelector(
      "#top_bar_inner > div.top_right_button_group"
    );

    // Create a new button element for exporting to Markdown
    let exportButton = document.createElement("button");
    exportButton.innerText = "MD";
    exportButton.className = "top_bar_btn";
    exportButton.id = "export_markdown";
    buttonArea.prepend(exportButton);

    // Add an event listener to the export button to export tasks to Markdown format and copy them to the clipboard
    exportButton.onclick = () => {
      // Get all tasks on the page
      let tasks = document.querySelectorAll(".task_content");

      // Convert tasks to Markdown format
      let markdown = "";
      tasks.forEach((task) => {
        markdown += `- [ ] ${task.innerText}\n`;
      });

      // Copy Markdown text to clipboard
      navigator.clipboard.writeText(markdown).then(
        function () {
          console.log("Tasks copied to clipboard.");
        },
        function () {
          console.error("Failed to write to clipboard.");
        }
      );
    };
  }
}, 300);
