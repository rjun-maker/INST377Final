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