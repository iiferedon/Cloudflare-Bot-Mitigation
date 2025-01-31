<!DOCTYPE html>
<html lang="en">
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
