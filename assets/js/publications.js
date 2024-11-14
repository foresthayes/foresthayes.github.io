document.addEventListener('DOMContentLoaded', function() {
  // Function to highlight publications based on selected topic
  function highlightPublications(topic = null) {
      const publications = document.querySelectorAll('.publication');
      publications.forEach(pub => {
          const topics = pub.getAttribute('data-topics').split(',').map(t => t.trim());
          pub.classList.toggle('highlight', topics.includes(topic));
      });
  }

  // Toggle the topic filter on and off
  function toggleTopicFilter(topic) {
      const button = document.querySelector(`#topic-buttons button[data-topic="${topic}"]`);
      if (button.classList.contains('active')) {
          button.classList.remove('active');
          highlightPublications();  // Show all publications
      } else {
          clearActiveButtons();
          button.classList.add('active');
          highlightPublications(topic);  // Highlight selected publications
      }
  }

  // Clear active buttons
  function clearActiveButtons() {
      const buttons = document.querySelectorAll('#topic-buttons button');
      buttons.forEach(button => button.classList.remove('active'));
  }

  // Check for topic query parameter in the URL and apply filter if necessary
  const urlParams = new URLSearchParams(window.location.search);
  const topic = urlParams.get('topic');
  if (topic) {
      toggleTopicFilter(topic);
  }

  // Event listeners for each topic button
  const buttons = document.querySelectorAll('#topic-buttons button');
  buttons.forEach(button => {
      button.addEventListener('click', function() {
          const topic = button.getAttribute('data-topic');
          toggleTopicFilter(topic);
      });
  });
});
