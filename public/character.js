async function createCustomer() {
  await fetch(`/customer`, {
    method: 'POST',
    body: JSON.stringify({
      firstName: `${document.getElementById('firstName').value}`,
      lastName: `${document.getElementById('lastName').value}`,
    }),
    headers: {
      'content-type': 'application/json',
    },
  }).then((result) => result.json());

  console.log('working');

  await loadCustomerData();
}

async function loadCustomerData() {
  await fetch('/customers')
    .then((result) => result.json())
    .then((resultJson) => {
      console.log(resultJson);
      const table = document.createElement('table');
      table.setAttribute('id', 'customerInfo');
      // Setting up table Heading Row
      const tableRow = document.createElement('tr');

      const tableHeadingFirstName = document.createElement('th');
      tableHeadingFirstName.innerHTML = 'First Name';

      const tableHeadingLastName = document.createElement('th');
      tableHeadingLastName.innerHTML = 'Last Name';

      const tableHeadingState = document.createElement('th');
      tableHeadingState.innerHTML = 'State';

      tableRow.appendChild(tableHeadingFirstName);
      tableRow.appendChild(tableHeadingLastName);
      tableRow.appendChild(tableHeadingState);

      table.appendChild(tableRow);

      // Adding Data to table
      resultJson.forEach((customer) => {
        const customerTableRow = document.createElement('tr');
        const customerTableFirstName = document.createElement('td');
        const customerTableLastName = document.createElement('td');
        const customerTableState = document.createElement('td');

        customerTableFirstName.innerHTML = customer['customer_first_name'];
        customerTableLastName.innerHTML = customer['customer_last_name'];
        customerTableState.innerHTML = customer['customer_state'];

        customerTableRow.appendChild(customerTableFirstName);
        customerTableRow.appendChild(customerTableLastName);
        customerTableRow.appendChild(customerTableState);

        table.appendChild(customerTableRow);
      });

      const preExistingTable = document.getElementById('customerInfo');
      if (preExistingTable) {
        preExistingTable.remove();
      }

      document.body.appendChild(table);
    });
}

window.onload = loadCustomerData;


async function getEmoji(){

   const container =
        document.getElementById("emojiContainer");

      // Clear old emojis
      container.innerHTML = "";

      try {

        // Number of emojis to generate
        const amount = 5;

        for (let i = 0; i < amount; i++) {

          const response = await fetch(
            "https://emojihub.yurace.pro/api/random"
          );

          const data = await response.json();

          // Create emoji element
          const emoji = document.createElement("th");

          emoji.innerHTML = data.htmlCode[0];

          // Add to page
          container.appendChild(emoji);
        }

      } catch (error) {
        console.error("Error:", error);
      }
    }