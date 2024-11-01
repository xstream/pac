function FindProxyForURL(url, host) {
    const youtubeDomains = [
        "youtube.com", ".youtube.com", ".ytimg.com", ".googlevideo.com",
        "chatgpt.com", ".chatgpt.com",
        "jigsaw24.com", ".jigsaw24.com",
    ];

    for (let domain of youtubeDomains) {
        if (dnsDomainIs(host, domain)) {
            return "SOCKS5 192.168.0.150:1080";
        }
    }

    return "DIRECT";
}
