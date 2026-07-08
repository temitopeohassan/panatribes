<?php
/**
 * Simple bridge to read .env variables for the Headless React App
 * Place this file in your /react/ folder on the server.
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

// Check current dir and up to 3 levels up for .env
$env_paths = [
    __DIR__ . '/.env',
    __DIR__ . '/../.env',
    __DIR__ . '/../../.env',
    __DIR__ . '/../../../.env'
];

$keys_to_find = [
    'VITE_PAYSTACK_PUBLIC_KEY' => 'paystack_key',
    'PAYSTACK_PUBLIC_KEY' => 'paystack_key',
    'PAYSTACK_KEY' => 'paystack_key',
    'CONSUMER_KEY' => 'consumer_key',
    'CONSUMER_SECRET' => 'consumer_secret',
    'WC_CONSUMER_KEY' => 'consumer_key',
    'WC_CONSUMER_SECRET' => 'consumer_secret'
];

$found_values = [
    'paystack_key' => null,
    'consumer_key' => null,
    'consumer_secret' => null
];

foreach ($env_paths as $env_file) {
    if (file_exists($env_file)) {
        $lines = file($env_file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        foreach ($lines as $line) {
            $line = trim($line);
            if (empty($line) || strpos($line, '#') === 0) continue;
            
            $parts = explode('=', $line, 2);
            if (count($parts) < 2) continue;

            $name = trim($parts[0]);
            $value = trim($parts[1]);

            // Remove quotes if present
            $value = trim($value, '"\'');

            if (isset($keys_to_find[$name])) {
                // Only set if not already found (prioritize first match)
                if ($found_values[$keys_to_find[$name]] === null) {
                    $found_values[$keys_to_find[$name]] = $value;
                }
            }
        }
    }
}

echo json_encode($found_values);
