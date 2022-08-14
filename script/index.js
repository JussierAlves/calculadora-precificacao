const tableBody = document.querySelector('#tableBody');
const ingredient = document.querySelector('#textIngredient');
const ingredientPrice = document.querySelector('#ingredientPrice');
const ingredientWeight = document.querySelector('#ingredientweight');
const typeMeasureList = document.querySelector('#typeMeasureList');
const usedOnRecipe = document.querySelector('#usedOnRecipe');
const addButton = document.querySelector('#addButton')
const pendingRequirement = document.querySelector('#pendingRequirement');
const msgRequirement = 'Por favor, selecione a medida do igrediente!';





// Mensagem requisito de medida
function showMsg() {
    const elementP = document.createElement('p');
    elementP.textContent = msgRequirement;
    pendingRequirement.appendChild(elementP);
    
}


// Cria uma linha na tabela de precificação com os dados do ingrediente
addButton.addEventListener('click', function() {
    if (typeMeasureList.value === 'none') {
        showMsg();
    } else {
        
        const ingredientDetails = [ingredient.value, parseFloat(ingredientPrice.value), ingredientWeight.value + 'g', '', usedOnRecipe.value + 'g', custPerGram(ingredientWeight.value, ingredientPrice.value, usedOnRecipe.value)];

        tableBody.appendChild(addTableRow(ingredientDetails));        

    }    
    
});


// Adiciona uma linha na tabela de precificação com os dados do ingrediente

function addTableRow(ingredientDetails) {
    const elementTR = document.createElement("tr");
    
    for (let i = 0; i < ingredientDetails.length; i++) {
        const elementTD = document.createElement("td");
        elementTD.textContent = ingredientDetails[i];
        // ingredientDetails[i].value = ''
        elementTR.appendChild(elementTD);
        
    };

        
    return elementTR;

};


// Retorna o valor de custo do ingrediente 
function custPerGram(ingredientWeight, ingredientPrice, usedOnRecipe) {
    const usedQnt = parseFloat(usedOnRecipe)
    const weight = parseFloat(ingredientWeight);
    const value = parseFloat(ingredientPrice);
    const custPerGram = (value / weight) * usedQnt;
    

    return custPerGram;
};