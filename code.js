
const container = document.querySelector(".main-summary-article__div-section-container");

fetch('data.json')
  .then(response => response.json())
  .then(data => {

    let sections = ''; 

    data.forEach(item => {
        sections += `
        <section class="article__${item.category}-section">

            <div class="article-section__div-img-title-container">

                <img src="${item.icon}" alt="${item.category} icon">

                <h2>${item.category}</h2>

            </div>
            
            <span>${item.score} <span>/ 100</span></span>
  
        </section>
        `;
    });
    container.innerHTML = sections;
  })
  .catch(error => console.error('Error JSON: ', error));
