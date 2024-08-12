<?php
// Define the function to predict price based on location, size, min price, max price, and furniture option
function predict_price($location, $size, $min_price, $max_price, $furnished) {
    // Define price rules based on location and size
    $price_rules = [
        'Ibadan North' => [
            'Self Contain' => [
                'Yes' => 20000000,
                'No' => 18000000
            ],
            '1 Bedroom' => [
                'Yes' => 24000000,
                'No' => 22000000
            ],
            '2 Bedroom' => [
                'Yes' => 30000000,
                'No' => 28000000
            ],
            '3 Bedroom' => [
                'Yes' => 40000000,
                'No' => 38000000
            ]
        ],
        'Ibadan North East' => [
            'Self Contain' => [
                'Yes' => 22000000,
                'No' => 20000000
            ],
            '1 Bedroom' => [
                'Yes' => 26000000,
                'No' => 24000000
            ],
            '2 Bedroom' => [
                'Yes' => 32000000,
                'No' => 30000000
            ],
            '3 Bedroom' => [
                'Yes' => 43000000,
                'No' => 39000000
            ]
        ],
        'Ibadan North West' => [
            'Self Contain' => [
                'Yes' => 24000000,
                'No' => 21000000
            ],
            '1 Bedroom' => [
                'Yes' => 27000000,
                'No' => 24000000
            ],
            '2 Bedroom' => [
                'Yes' => 30000000,
                'No' => 27000000
            ],
            '3 Bedroom' => [
                'Yes' => 44000000,
                'No' => 39000000
            ]
        ],
        'Ibadan South East' => [
            'Self Contain' => [
                'Yes' => 25000000,
                'No' => 22000000
            ],
            '1 Bedroom' => [
                'Yes' => 28000000,
                'No' => 25000000
            ],
            '2 Bedroom' => [
                'Yes' => 29000000,
                'No' => 27000000
            ],
            '3 Bedroom' => [
                'Yes' => 43000000,
                'No' => 38000000
            ]
        ],
        'Ibadan South West' => [
            'Self Contain' => [
                'Yes' => 20000000,
                'No' => 14000000
            ],
            '1 Bedroom' => [
                'Yes' => 25000000,
                'No' => 20000000
            ],
            '2 Bedroom' => [
                'Yes' => 27000000,
                'No' => 25000000
            ],
            '3 Bedroom' => [
                'Yes' => 40000000,
                'No' => 35000000
            ]
        ],
        'Oshodi-Lagos' => [
            'Self Contain' => [
                'Yes' => 45000000,
                'No' => 36000000
            ],
            '1 Bedroom' => [
                'Yes' => 50000000,
                'No' => 45000000
            ],
            '2 Bedroom' => [
                'Yes' => 57000000,
                'No' => 55000000
            ],
            '3 Bedroom' => [
                'Yes' => 67000000,
                'No' => 63000000
            ]
        ],
        'Surulere-Lagos' => [
            'Self Contain' => [
                'Yes' => 47000000,
                'No' => 39000000
            ],
            '1 Bedroom' => [
                'Yes' => 53000000,
                'No' => 47000000
            ],
            '2 Bedroom' => [
                'Yes' => 57000000,
                'No' => 55000000
            ],
            '3 Bedroom' => [
                'Yes' => 68000000,
                'No' => 64000000
            ]
        ],
        'Lekki-Lagos' => [
            'Self Contain' => [
                'Yes' => 48000000,
                'No' => 40000000
            ],
            '1 Bedroom' => [
                'Yes' => 54000000,
                'No' => 48000000
            ],
            '2 Bedroom' => [
                'Yes' => 58000000,
                'No' => 56000000
            ],
            '3 Bedroom' => [
                'Yes' => 69000000,
                'No' => 65000000
            ]
        ],
        'Eti-Osa-Lagos' => [
            'Self Contain' => [
                'Yes' => 49000000,
                'No' => 41000000
            ],
            '1 Bedroom' => [
                'Yes' => 55000000,
                'No' => 49000000
            ],
            '2 Bedroom' => [
                'Yes' => 59000000,
                'No' => 57000000
            ],
            '3 Bedroom' => [
                'Yes' => 70000000,
                'No' => 66000000
            ]
        ],
        'Lagos-Island' => [
            'Self Contain' => [
                'Yes' => 50000000,
                'No' => 42000000
            ],
            '1 Bedroom' => [
                'Yes' => 56000000,
                'No' => 50000000
            ],
            '2 Bedroom' => [
                'Yes' => 60000000,
                'No' => 58000000
            ],
            '3 Bedroom' => [
                'Yes' => 71000000,
                'No' => 67000000
            ]
        ],
        'Modomo-Osun' => [
            'Self Contain' => [
                'Yes' => 8000000,
                'No' => 6000000
            ],
            '1 Bedroom' => [
                'Yes' => 15000000,
                'No' => 13000000
            ],
            '2 Bedroom' => [
                'Yes' => 19000000,
                'No' => 17000000
            ],
            '3 Bedroom' => [
                'Yes' => 21000000,
                'No' => 19000000
            ]
        ],
        'Powerline-Osun' => [
            'Self Contain' => [
                'Yes' => 10000000,
                'No' => 8000000
            ],
            '1 Bedroom' => [
                'Yes' => 15000000,
                'No' => 13000000
            ],
            '2 Bedroom' => [
                'Yes' => 20000000,
                'No' => 18000000
            ],
            '3 Bedroom' => [
                'Yes' => 24000000,
                'No' => 22000000
            ]
        ],
        'Eleyele-Osun' => [
            'Self Contain' => [
                'Yes' => 11000000,
                'No' => 8000000
            ],
            '1 Bedroom' => [
                'Yes' => 16000000,
                'No' => 14000000
            ],
            '2 Bedroom' => [
                'Yes' => 19000000,
                'No' => 17000000
            ],
            '3 Bedroom' => [
                'Yes' => 23000000,
                'No' => 21000000
            ]
        ],
        'Asherifa-Osun' => [
            'Self Contain' => [
                'Yes' => 7000000,
                'No' => 5000000
            ],
            '1 Bedroom' => [
                'Yes' => 10000000,
                'No' => 8000000
            ],
            '2 Bedroom' => [
                'Yes' => 15000000,
                'No' => 13000000
            ],
            '3 Bedroom' => [
                'Yes' => 24000000,
                'No' => 22000000
            ]
        ]
    ];

     // Check if location and size exist in price rules
     if (array_key_exists($location, $price_rules) && array_key_exists($size, $price_rules[$location])) {
        // Get the base price based on location, size, and furnished status
        $base_price = $price_rules[$location][$size][$furnished];

        // Calculate predicted price as the average of min and max prices
        if (is_numeric($min_price) && is_numeric($max_price)) {
            $predicted_price = ($min_price + $max_price) / 2;
        } else {
            return "Invalid min or max price.";
        }
        
        // Ensure the predicted price doesn't fall below the base price
        $predicted_price = max($base_price, $predicted_price);
        
        return $predicted_price;
    } else {
        return "Price not available for the given location and size.";
    }
}

// Get user inputs from the form
$location = $_POST['location'] ?? '';
$size = $_POST['size'] ?? '';
$min_price = $_POST['min_price'] ?? 0; // Default to 0 if not set
$max_price = $_POST['max_price'] ?? 0; // Default to 0 if not set
$furnished = $_POST['furnished'] ?? 'No'; // Default to 'No' if not set

// Predict price based on inputs
$predicted_price = predict_price($location, $size, $min_price, $max_price, $furnished);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
    <link rel="stylesheet" href="styles2.css">
</head>
<body>
   <div class="welcome-container">
        <!-- Display the predicted price -->
        <?php if ($predicted_price): ?>
            <div class="result">
                <h2>Predicted Price: <?php echo $predicted_price = '₦' . number_format($predicted_price);
; ?></h2>
            </div>
        <?php endif; ?>
    </div>
</body>
</html>
