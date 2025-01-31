# Cloudflare Worker Security Script

This script implements a basic security mechanism using Cloudflare Workers. It helps mitigate automated bot traffic and ensures session validation.

## Features

- **✅ Basic Session Validation:** Ensures each visitor has a unique session tied to their IP, preventing some forms of abuse.
- **✅ IP-Based Challenge:** If an attacker changes IPs frequently, they will need to pass the challenge again.
- **✅ Token Expiry:** The session expires after 10 minutes, reducing the risk of long-lived tokens being reused.
- **✅ Basic Obfuscation:** Uses a simple XOR encryption, but it's not strong enough to be considered secure encryption.

## How It Works
A script that injects into the users browser.
The script validates users by storing an encrypted token in cookies and checking against the IP and timestamp on every request.

