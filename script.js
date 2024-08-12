
    // Price rules for different locations, sizes, and furnished statuses
const priceRules = {
    'Ibadan North': {
        'Self Contain': {
            'Yes': { min: 20000000, max: 30000000 },
            'No': { min: 18000000, max: 28000000 }
        },
        '1 Bedroom': {
            'Yes': { min: 24000000, max: 34000000 },
            'No': { min: 22000000, max: 32000000 }
        },
        '2 Bedroom': {
            'Yes': { min: 30000000, max: 40000000 },
            'No': { min: 28000000, max: 38000000 }
        },
        '3 Bedroom': {
            'Yes': { min: 40000000, max: 50000000 },
            'No': { min: 38000000, max: 48000000 }
        }
    },
    'Ibadan North East': {
        'Self Contain': {
            'Yes': { min: 22000000, max: 32000000 },
            'No': { min: 20000000, max: 30000000 }
        },
        '1 Bedroom': {
            'Yes': { min: 26000000, max: 36000000 },
            'No': { min: 24000000, max: 34000000 }
        },
        '2 Bedroom': {
            'Yes': { min: 32000000, max: 42000000 },
            'No': { min: 30000000, max: 40000000 }
        },
        '3 Bedroom': {
            'Yes': { min: 43000000, max: 53000000 },
            'No': { min: 39000000, max: 49000000 }
        }
    },
    'Ibadan North West': {
        'Self Contain': {
            'Yes': { min: 24000000, max: 34000000 },
            'No': { min: 21000000, max: 31000000 }
        },
        '1 Bedroom': {
            'Yes': { min: 27000000, max: 37000000 },
            'No': { min: 24000000, max: 34000000 }
        },
        '2 Bedroom': {
            'Yes': { min: 30000000, max: 40000000 },
            'No': { min: 27000000, max: 37000000 }
        },
        '3 Bedroom': {
            'Yes': { min: 44000000, max: 54000000 },
            'No': { min: 39000000, max: 49000000 }
        }
    },
    'Ibadan South East': {
        'Self Contain': {
            'Yes': { min: 25000000, max: 35000000 },
            'No': { min: 22000000, max: 32000000 }
        },
        '1 Bedroom': {
            'Yes': { min: 28000000, max: 38000000 },
            'No': { min: 25000000, max: 35000000 }
        },
        '2 Bedroom': {
            'Yes': { min: 29000000, max: 39000000 },
            'No': { min: 27000000, max: 37000000 }
        },
        '3 Bedroom': {
            'Yes': { min: 43000000, max: 53000000 },
            'No': { min: 38000000, max: 48000000 }
        }
    },
    'Ibadan South West': {
        'Self Contain': {
            'Yes': { min: 20000000, max: 30000000 },
            'No': { min: 14000000, max: 24000000 }
        },
        '1 Bedroom': {
            'Yes': { min: 25000000, max: 35000000 },
            'No': { min: 20000000, max: 30000000 }
        },
        '2 Bedroom': {
            'Yes': { min: 27000000, max: 37000000 },
            'No': { min: 25000000, max: 35000000 }
        },
        '3 Bedroom': {
            'Yes': { min: 40000000, max: 50000000 },
            'No': { min: 35000000, max: 45000000 }
        }
    },
    'Oshodi-Lagos': {
        'Self Contain': {
            'Yes': { min: 45000000, max: 55000000 },
            'No': { min: 36000000, max: 46000000 }
        },
        '1 Bedroom': {
            'Yes': { min: 50000000, max: 60000000 },
            'No': { min: 45000000, max: 55000000 }
        },
        '2 Bedroom': {
            'Yes': { min: 57000000, max: 67000000 },
            'No': { min: 55000000, max: 65000000 }
        },
        '3 Bedroom': {
            'Yes': { min: 67000000, max: 77000000 },
            'No': { min: 63000000, max: 73000000 }
        }
    },
    'Surulere-Lagos': {
        'Self Contain': {
            'Yes': { min: 47000000, max: 57000000 },
            'No': { min: 39000000, max: 49000000 }
        },
        '1 Bedroom': {
            'Yes': { min: 53000000, max: 63000000 },
            'No': { min: 47000000, max: 57000000 }
        },
        '2 Bedroom': {
            'Yes': { min: 57000000, max: 67000000 },
            'No': { min: 55000000, max: 65000000 }
        },
        '3 Bedroom': {
            'Yes': { min: 68000000, max: 78000000 },
            'No': { min: 64000000, max: 74000000 }
        }
    },
    'Lekki-Lagos': {
        'Self Contain': {
            'Yes': { min: 48000000, max: 58000000 },
            'No': { min: 40000000, max: 50000000 }
        },
        '1 Bedroom': {
            'Yes': { min: 54000000, max: 64000000 },
            'No': { min: 48000000, max: 58000000 }
        },
        '2 Bedroom': {
            'Yes': { min: 58000000, max: 68000000 },
            'No': { min: 56000000, max: 66000000 }
        },
        '3 Bedroom': {
            'Yes': { min: 69000000, max: 79000000 },
            'No': { min: 65000000, max: 75000000 }
        }
    },
    'Eti-Osa-Lagos': {
        'Self Contain': {
            'Yes': { min: 49000000, max: 59000000 },
            'No': { min: 41000000, max: 51000000 }
        },
        '1 Bedroom': {
            'Yes': { min: 55000000, max: 65000000 },
            'No': { min: 49000000, max: 59000000 }
        },
        '2 Bedroom': {
            'Yes': { min: 59000000, max: 69000000 },
            'No': { min: 57000000, max: 67000000 }
        },
        '3 Bedroom': {
            'Yes': { min: 70000000, max: 80000000 },
            'No': { min: 66000000, max: 76000000 }
        }
    },
    'Lagos-Island': {
        'Self Contain': {
            'Yes': { min: 50000000, max: 60000000 },
            'No': { min: 42000000, max: 52000000 }
        },
        '1 Bedroom': {
            'Yes': { min: 56000000, max: 66000000 },
            'No': { min: 50000000, max: 60000000 }
        },
        '2 Bedroom': {
            'Yes': { min: 60000000, max: 70000000 },
            'No': { min: 58000000, max: 68000000 }
        },
        '3 Bedroom': {
            'Yes': { min: 71000000, max: 81000000 },
            'No': { min: 67000000, max: 77000000 }
        }
    },
    'Modomo-Osun': {
        'Self Contain': {
            'Yes': { min: 8000000, max: 11000000 },
            'No': { min: 6000000, max: 9000000 }
        },
        '1 Bedroom': {
            'Yes': { min: 15000000, max: 18000000 },
            'No': { min: 13000000, max: 16000000 }
        },
        '2 Bedroom': {
            'Yes': { min: 19000000, max: 22000000 },
            'No': { min: 17000000, max: 19000000 }
        },
        '3 Bedroom': {
            'Yes': { min: 21000000, max: 23000000 },
            'No': { min: 19000000, max: 21000000 }
        }
    },
    'Powerline-Osun': {
        'Self Contain': {
            'Yes': { min: 10000000, max: 13000000 },
            'No': { min: 8000000, max: 10000000 }
        },
        '1 Bedroom': {
            'Yes': { min: 15000000, max: 18000000 },
            'No': { min: 13000000, max: 17000000 }
        },
        '2 Bedroom': {
            'Yes': { min: 20000000, max: 24000000 },
            'No': { min: 18000000, max: 21000000 }
        },
        '3 Bedroom': {
            'Yes': { min: 24000000, max: 29000000 },
            'No': { min: 22000000, max: 25000000 }
        }
    },
    'Eleyele-Osun': {
        'Self Contain': {
            'Yes': { min: 11000000, max: 14000000 },
            'No': { min: 8000000, max: 11000000 }
        },
        '1 Bedroom': {
            'Yes': { min: 16000000, max: 19000000 },
            'No': { min: 14000000, max: 16700000 }
        },
        '2 Bedroom': {
            'Yes': { min: 19000000, max: 22000000 },
            'No': { min: 17000000, max: 199000000 }
        },
        '3 Bedroom': {
            'Yes': { min: 23000000, max: 26000000 },
            'No': { min: 21000000, max: 23000000 }
        }
    },
    'Asherifa-Osun': {
        'Self Contain': {
            'Yes': { min: 10000000, max: 13000000 },
            'No': { min: 7000000, max: 10000000 }
        },
        '1 Bedroom': {
            'Yes': { min: 12000000, max: 14000000 },
            'No': { min: 10000000, max: 13000000 }
        },
        '2 Bedroom': {
            'Yes': { min: 18000000, max: 21300000 },
            'No': { min: 9000000, max: 15000000 }
        },
        '3 Bedroom': {
            'Yes': { min: 26000000, max: 27800000 },
            'No': { min: 24000000, max: 26300000 }
        }
    }
};

function populatePrices() {
    const location = document.getElementById('location').value;
    const size = document.getElementById('size').value;
    const furnished = document.getElementById('furnished').value;
    const minPriceSelect = document.getElementById('min_price');
    const maxPriceSelect = document.getElementById('max_price');

    // Clear existing options
    minPriceSelect.innerHTML = '';
    maxPriceSelect.innerHTML = '';

    // Populate new options based on selection
    if (priceRules[location] && priceRules[location][size] && priceRules[location][size][furnished]) {
        const priceRange = priceRules[location][size][furnished];
        const minPrice = priceRange.min;
        const maxPrice = priceRange.max;

        for (let i = minPrice; i <= maxPrice; i += 1000000) {
            const minOption = document.createElement('option');
            minOption.value = i;
            minOption.textContent = '₦' + i.toLocaleString();
            minPriceSelect.appendChild(minOption);

            const maxOption = document.createElement('option');
            maxOption.value = i;
            maxOption.textContent = '₦' + i.toLocaleString();
            maxPriceSelect.appendChild(maxOption);
        }
    } else {
        console.log('No price rules found for the selected options.');
    }
}

// Initial population of prices
document.addEventListener('DOMContentLoaded', populatePrices);



let currentSlide = 0;
const slides = document.querySelectorAll('.carousel img');

function showSlide(n) {
  slides[currentSlide].style.display = 'none';
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].style.display = 'block';
}

setInterval(() => {
  showSlide(currentSlide + 1);
}, 3000);

showSlide(currentSlide);

