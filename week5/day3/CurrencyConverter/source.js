const API_KEY = '542d2f3c1b1945bda4de2b1b';
const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}`;


const fromCurrencySelect = document.getElementById('from-currency');
const toCurrencySelect = document.getElementById('to-currency');
const amountInput = document.getElementById('amount');
const convertBtn = document.getElementById('convert-btn');
const switchBtn = document.getElementById('switch-btn');
const resultDiv = document.getElementById('result');


async function fetchSupportedCurrencies() {
    try {
        const response = await fetch(`${BASE_URL}/codes`);
        const data = await response.json();
        
        if (data.result === 'success') {
            return data.supported_codes;
        } else {
            throw new Error(data['error-type']);
        }
    } catch (error) {
        console.error('Error fetching currencies:', error);
        resultDiv.textContent = 'Error loading currencies. Please try again later.';
        return [];
    }
}


async function populateCurrencyDropdowns() {
    const currencies = await fetchSupportedCurrencies();
    
    if (currencies.length > 0) {
        currencies.forEach(([code, name]) => {
            const option1 = document.createElement('option');
            option1.value = code;
            option1.textContent = `${code} - ${name}`;
            fromCurrencySelect.appendChild(option1);
            
            const option2 = document.createElement('option');
            option2.value = code;
            option2.textContent = `${code} - ${name}`;
            toCurrencySelect.appendChild(option2);
        });

        fromCurrencySelect.value = 'USD';
        toCurrencySelect.value = 'ILS';
    }
}


async function convertCurrency() {
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;
    const amount = amountInput.value;
    
    if (!amount || isNaN(amount) || amount <= 0) {
        resultDiv.textContent = 'Please enter a valid amount';
        return;
    }
    
    try {
        const response = await fetch(`${BASE_URL}/pair/${fromCurrency}/${toCurrency}/${amount}`);
        const data = await response.json();
        
        if (data.result === 'success') {
            const convertedAmount = data.conversion_result;
            resultDiv.textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
        } else {
            throw new Error(data['error-type']);
        }
    } catch (error) {
        console.error('Error converting currency:', error);
        resultDiv.textContent = 'Error converting currency. Please try again.';
    }
}


function switchCurrencies() {
    const temp = fromCurrencySelect.value;
    fromCurrencySelect.value = toCurrencySelect.value;
    toCurrencySelect.value = temp;
    

    convertCurrency();
}


convertBtn.addEventListener('click', convertCurrency);
switchBtn.addEventListener('click', switchCurrencies);


populateCurrencyDropdowns();