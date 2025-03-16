  document.getElementById('playButton').addEventListener('click', function() {
    // Hide the play button
    document.getElementById('playButton').style.display = 'none';
    
    // Hide the placeholder image
    document.getElementById('videoPlaceholder').style.display = 'none';
    
    // Show the video iframe
    document.getElementById('videoIframe').style.display = 'block';
    
    // Start video automatically by adding the autoplay parameter in the iframe URL
    const iframe = document.getElementById('videoIframe');
    iframe.src = iframe.src + "?autoplay=1"; // Ensure the video starts playing instantly
  });