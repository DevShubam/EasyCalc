function calculateDownloadTime() {
    // get input values
    const fileSize = parseFloat(document.getElementById('fileSize').value);
    const fileSizeUnit = document.getElementById('fileSizeUnit').value;

    const downloadSpeed = parseFloat(document.getElementById('downloadSpeed').value);
    const downloadSpeedUnit = document.getElementById('downloadSpeedUnit').value;


    // convert file size

    const conversion = {
        'B': 1,
        'KB': 1024,
        'MB': 1024 * 1024,
        'GB': 1024 * 1024 * 1024,
        'TB': 1024 * 1024 * 1024 * 1024,
        'PB': 1024 * 1024 * 1024 * 1024 * 1024,

        'bps': 1,
        'Kbps': 1024,
        'Mbps': 1024 * 1024,
        'Gbps': 1024 * 1024 * 1024,
        'Tbps': 1024 * 1024 * 1024 * 1024,
        'Pbps': 1024 * 1024 * 1024 * 1024 * 1024,
    };

    // convert the file size to bytes
    const fileSizeInBytes = fileSize * conversion[fileSizeUnit];
    
    // convert the download speed to bytes per second
    const fileSizeInBPS = downloadSpeed * conversion[downloadSpeedUnit];

    // calculate the download speed (in seconds)
    const downloadSpeedInSeconds = fileSizeInBytes / fileSizeInBPS;

    // convert the seconds to hours, minutes, and seconds
    const hours = Math.floor(downloadSpeedInSeconds / 3600);
    const minutes = Math.floor((downloadSpeedInSeconds % 3600) / 60);
    const seconds = Math.floor(downloadSpeedInSeconds % 60);

    // display the final result
    const result = document.getElementById("result");
    result.innerHTML = `The download will take ${hours} hours, ${minutes} minutes, and ${seconds} seconds to complete.`;
}
