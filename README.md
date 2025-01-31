<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>README</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            max-width: 800px;
        }
        h1, h2 {
            color: #333;
        }
        ul {
            background: #f4f4f4;
            padding: 15px;
            border-radius: 5px;
        }
        li {
            margin: 10px 0;
        }
    </style>
</head>
<body>
    <h1>Cloudflare Worker Security Script</h1>
    <p>This script implements a basic security mechanism using Cloudflare Workers. It helps mitigate automated bot traffic and ensures session validation.</p>
    
    <h2>Features</h2>
    <ul>
        <li><strong>✅ Basic Session Validation:</strong> Ensures each visitor has a unique session tied to their IP, preventing some forms of abuse.</li>
        <li><strong>✅ IP-Based Challenge:</strong> If an attacker changes IPs frequently, they will need to pass the challenge again.</li>
        <li><strong>✅ Token Expiry:</strong> The session expires after 10 minutes, reducing the risk of long-lived tokens being reused.</li>
        <li><strong>✅ Basic Obfuscation:</strong> Uses a simple XOR encryption, but it's not strong enough to be considered secure encryption.</li>
    </ul>

    <h2>How It Works</h2>
    <p>The script validates users by storing an encrypted token in cookies and checking against the IP and timestamp on every request.</p>
</body>
</html>
