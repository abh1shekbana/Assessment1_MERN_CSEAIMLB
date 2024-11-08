
        document.getElementById('converter-form').addEventListener('submit', function(event) {
            event.preventDefault();
            const amount = document.getElementById('amount').value;
            const fromCurrency = document.getElementById('from-currency').value;
            const toCurrency = document.getElementById('to-currency').value;

            fetch('https://api.exchangerate-api.com/v4/latest/USD')
                .then(response => response.json())
                .then(data => {
                    const rates = data.rates;
                    const conversionRate = rates[toCurrency] / rates[fromCurrency];
                    const convertedAmount = (amount * conversionRate).toFixed(2);
                    document.getElementById('converted-amount').value = convertedAmount;
                })
                .catch(error => console.error('Error fetching the exchange rates:', error));
        });
