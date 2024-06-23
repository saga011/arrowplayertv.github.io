document.addEventListener('DOMContentLoaded', function() {
    var downloadLinksContainer = document.getElementById('downloadLinks');
  
    // Define your categories and APK files here
    var categories = [
      { name: 'Category video player', path: 'apk', files: ['Arrow Player MAX.apk'] },
    //   { name: 'Category 2', path: 'category2', files: ['app3.apk', 'app4.apk'] }
      // Add more categories as needed
    ];
  
    // Function to create download links dynamically
    function createDownloadLinks(category) {
      var categoryHeader = document.createElement('h2');
      categoryHeader.textContent = category.name;
      downloadLinksContainer.appendChild(categoryHeader);
  
      var ul = document.createElement('ul');
  
      category.files.forEach(function(file) {
        var li = document.createElement('li');
        var link = document.createElement('a');
        link.href = category.path + '/' + file;
        link.setAttribute('download', '');
        link.textContent = file.split('.')[0]; // Display file name without extension
        li.appendChild(link);
        ul.appendChild(li);
      });
  
      downloadLinksContainer.appendChild(ul);
    }
  
    // Generate download links for each category
    categories.forEach(function(category) {
      createDownloadLinks(category);
    });
  });
  const video = document.getElementById('myVideo');

video.addEventListener('click', () => {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});
