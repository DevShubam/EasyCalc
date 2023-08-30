function calculateDownloadTime() {
    // get input values
    const downloadSpeed = document.getElementById("download-speed").value;
    const fileSize = document.getElementById("file-size").value;
    const fileSizeUnit = document.getElementById("fileSizeUnit").value;
    const downloadSpeedUnit = document.getElementById("downloadSpeedUnit").value;

    // convert file size

    const conversion = {
        'b': 1,
        'kb': 1024,
        'mb': 1024 * 1024,
        'gb': 1024 * 1024 * 1024,
        'tb': 1024 * 1024 * 1024 * 1024,
        'pb': 1024 * 1024 * 1024 * 1024 * 1024,

        'bps': 1,
        'kbps': 1024,
        'mbps': 1024 * 1024,
        'gbps': 1024 * 1024 * 1024,
        'tbps': 1024 * 1024 * 1024 * 1024,
        'pbps': 1024 * 1024 * 1024 * 1024 * 1024,
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
