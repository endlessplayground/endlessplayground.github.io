  const introKey = `introClosed-{{ include.intro | slugify }}`;
  const introDiv = document.getElementById('intro-{{ include.intro | slugify }}');

  if (introDiv && !sessionStorage.getItem(introKey)) {
    introDiv.style.display = 'block';
    introDiv.querySelector('.intro_close').addEventListener('click', () => {
      introDiv.style.display = 'none';
      sessionStorage.setItem(introKey, 'true');
    });
  }
