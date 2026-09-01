// Replace this URL with your Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw159sXtUMGyvCQCl1QprOyrgxUeBg58NLLBttAIkIjbROmVNaoAC5_Y3b-iLrS6bhwmA/exec';

const teachersData = [
  { id: 3, name: "Akshay Kamble", image: "./akshay_kamble.jpg.jpeg", adjectives: ["Creative", "Supportive", "Dedicated", "Polite"] },
  { id: 4, name: "Amit Gupta", image: "./amit_gupta.jpg.jpeg", adjectives: ["Engaging", "Patient", "Smart", "Friendly"] },
  { id: 6, name: "ANAGHA SAMUDRA", image: "./anagha_samudra.jpg.jpeg", adjectives: ["Knowledgeable", "Dedicated", "Strict & Fair", "Polite"] },
  { id: 8, name: "Ashutosh Thorat", image: "./ashutosh_thorat.jpg.jpeg", adjectives: ["Energetic", "Humorous", "Creative", "Smart"] },
  { id: 9, name: "Binita Mohapatra", image: "./binita_mohapatra.jpg.jpeg", adjectives: ["Kind", "Inspiring", "Encouraging", "Patient"] },
  { id: 10, name: "Dhara Vyas", image: "./dhara_vyas.jpg.jpeg", adjectives: ["Engaging", "Friendly", "Supportive", "Sweet"] },
  { id: 11, name: "Dinesh Lagad", image: "./dinesh_lagad.jpg.jpeg", adjectives: ["Dedicated", "Knowledgeable", "Helpful", "Calm"] },
  { id: 12, name: "INDIKA ARNAKAL", image: "./indika_arnakal.jpg.jpeg", adjectives: ["Creative", "Patient", "Encouraging", "Friendly"] },
  { id: 13, name: "Jayanti Dash", image: "./jayanti_dash.jpg.jpeg", adjectives: ["Inspiring", "Kind", "Understanding", "Helpful"] },
  { id: 15, name: "Khairunnisa Sayed", image: "./khairunnisa_sayed.jpg.jpeg", adjectives: ["Patient", "Friendly", "Encouraging", "Kind"] },
  { id: 17, name: "Mamta Yadav", image: "./mamta_yadav.jpg.jpeg", adjectives: ["Inspiring", "Kind", "Helpful", "Dedicated"] },
  { id: 19, name: "Neeta Patil", image: "./neeta_patil.jpg.jpeg", adjectives: ["Knowledgeable", "Kind", "Helpful", "Sweet"] },
  { id: 20, name: "PANKAJ", image: "./pankaj.jpg.jpeg", adjectives: ["Energetic", "Dedicated", "Friendly", "Smart"] },
  { id: 22, name: "PRASANT KUMAR PANDEY", image: "./prasant_kumar_pandey.jpg.jpeg", adjectives: ["Inspiring", "Helpful", "Engaging", "Dedicated"] },
  { id: 23, name: "Prerna Poojari", image: "./prerna_poojari.jpg.jpeg", adjectives: ["Creative", "Friendly", "Sweet", "Supportive"] },
  { id: 24, name: "Priyanka Redekar", image: "./priyanka_redekar.jpg.jpeg", adjectives: ["Patient", "Kind", "Encouraging", "Helpful"] },
  { id: 25, name: "ROSHANI RAUT", image: "./roshani_raut.jpg.jpeg", adjectives: ["Energetic", "Engaging", "Supportive", "Kind"] },
  { id: 27, name: "Santoshi Padhi", image: "./santoshi_padhi.jpg.jpeg", adjectives: ["Kind", "Patient", "Encouraging", "Sweet"] },
  { id: 30, name: "SHALINI PANDEY", image: "./shalini_pandey.jpg.jpeg", adjectives: ["Engaging", "Patient", "Creative", "Sweet"] },
  { id: 31, name: "Sharvari Hirlekar", image: "./sharvari_hirlekar.jpg.jpeg", adjectives: ["Encouraging", "Friendly", "Helpful", "Kind"] },
  { id: 32, name: "SHRUTI SAXENA", image: "./shruti_saxena.jpg.jpeg", adjectives: ["Creative", "Inspiring", "Supportive", "Energetic"] },
  { id: 34, name: "SULOCHANA NAIR", image: "./sulochana_nair.jpg.jpeg", adjectives: ["Inspiring", "Dedicated", "Encouraging", "Calm"] },
  { id: 36, name: "Swati Khaire", image: "./swati_khaire.jpg.jpeg", adjectives: ["Patient", "Kind", "Understanding", "Dedicated"] },
  { id: 38, name: "Vikash Yadav", image: "./vikash_yadav.jpg.jpeg", adjectives: ["Awesome", "Smart", "Encouraging", "Helpful"] },
  { id: 39, name: "VINAY KUMAR UPADHYAY", image: "./vinay_kumar_upadhyay.jpg.jpeg", adjectives: ["Energetic", "Friendly", "Supportive", "Knowledgeable"] },
  { id: 40, name: "VINOD TAPASE", image: "./vinod_tapase.jpg.jpeg", adjectives: ["Dedicated", "Kind", "Calm", "Helpful"] }
];
// Render teacher cards
function renderTeachers(teachers) {
  const grid = document.getElementById('teacher-grid');
  if (!grid) return;
  
  grid.innerHTML = '';

  teachers.forEach(teacher => {
    const card = document.createElement('div');
    card.className = 'card';
    card.setAttribute('data-teacher-name', teacher.name);

    const adjectivesHTML = teacher.adjectives
      .map(adj => `<span class="tag" onclick="toggleTag(this)">${adj}</span>`)
      .join('');

    card.innerHTML = `
      <img src="${teacher.image}" alt="${teacher.name}" onerror="this.src='https://via.placeholder.com/110?text=Teacher'">
      <h3>${teacher.name}</h3>
      
      <div class="rating-label">Share Your Impression (Required):</div>
      <div class="emojis-scale" data-rating="0">
        <span class="emoji-face" data-value="1" title="1 - Okay" onclick="rateEmoji(this)">😠</span>
        <span class="emoji-face" data-value="2" title="2 - Fair" onclick="rateEmoji(this)">🙁</span>
        <span class="emoji-face" data-value="3" title="3 - Good" onclick="rateEmoji(this)">😐</span>
        <span class="emoji-face" data-value="4" title="4 - Great" onclick="rateEmoji(this)">😊</span>
        <span class="emoji-face" data-value="5" title="5 - Awesome!" onclick="rateEmoji(this)">😍</span>
      </div>

      <div class="tags-label">Select Qualities (At least 1 Required):</div>
      <div class="tags">
        ${adjectivesHTML}
      </div>

      <textarea class="wish-input" placeholder="Write your warm message or feedback here... (Optional)"></textarea>
    `;

    grid.appendChild(card);
  });

  // Global submit button
  let submitContainer = document.getElementById('global-submit-container');
  if (!submitContainer) {
    submitContainer = document.createElement('div');
    submitContainer.id = 'global-submit-container';
    submitContainer.style.textAlign = 'center';
    submitContainer.style.margin = '2rem 0 4rem';
    submitContainer.innerHTML = `
      <button id="submit-btn" class="btn-submit" style="max-width: 300px; padding: 0.8rem 1.5rem; font-size: 1.1rem;" onclick="submitAllWishes()">
        Send All Appreciations 🎉
      </button>
    `;
    grid.after(submitContainer);
  }
}

function toggleTag(element) {
  element.classList.toggle('selected');
}

function rateEmoji(element) {
  const container = element.parentElement;
  const ratingValue = element.getAttribute('data-value');
  const allFaces = container.querySelectorAll('.emoji-face');

  allFaces.forEach(face => {
    if (parseInt(face.getAttribute('data-value')) <= parseInt(ratingValue)) {
      face.classList.add('active');
    } else {
      face.classList.remove('active');
    }
  });

  container.setAttribute('data-rating', ratingValue);
}

// Submit all teacher feedback directly to Google Sheet
function submitAllWishes() {
  const grade = document.getElementById('student-grade').value;
  const rollNumber = document.getElementById('student-roll').value;

  if (!grade) {
    alert('Please select your Class before submitting!');
    return;
  }
  if (!rollNumber) {
    alert('Please select your Roll Number before submitting!');
    return;
  }

  // Prevent duplicate submissions per student via local storage
  const studentKey = `submitted_${grade}_${rollNumber}`;
  if (localStorage.getItem(studentKey)) {
    alert(`Submission blocked! Feedback for ${grade}, Roll No. ${rollNumber} has already been submitted from this device.`);
    return;
  }

  const cards = document.querySelectorAll('.card');
  const submissions = [];

  // Strictly enforce rating and quality selection for EVERY teacher card
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    const teacherName = card.getAttribute('data-teacher-name');
    const rating = card.querySelector('.emojis-scale').getAttribute('data-rating');
    const message = card.querySelector('.wish-input').value.trim();
    const selectedTags = Array.from(card.querySelectorAll('.tag.selected')).map(t => t.innerText);

    if (rating === '0') {
      alert(`Please select an emoji rating for ${teacherName}! All teachers must be rated.`);
      card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    if (selectedTags.length === 0) {
      alert(`Please select at least one quality tag for ${teacherName}! All teachers must have at least one quality selected.`);
      card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    submissions.push({
      teacherName: teacherName,
      rating: rating,
      qualities: selectedTags,
      message: message
    });
  }

  const submitBtn = document.getElementById('submit-btn');
  submitBtn.disabled = true;
  submitBtn.innerText = 'Submitting... ⏳';

  const payload = {
    grade: grade,
    rollNumber: rollNumber,
    submissions: submissions
  };

  fetch(GOOGLE_SCRIPT_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(payload)
  })
  .then(() => {
    localStorage.setItem(studentKey, 'true');

    alert(`Thank you! Your feedback for all ${submissions.length} teachers has been saved successfully! 🎉`);

    // Reset inputs
    cards.forEach(card => {
      card.querySelector('.wish-input').value = '';
      card.querySelectorAll('.tag').forEach(t => t.classList.remove('selected'));
      card.querySelectorAll('.emoji-face').forEach(e => e.classList.remove('active'));
      card.querySelector('.emojis-scale').setAttribute('data-rating', '0');
    });

    document.getElementById('student-grade').value = '';
    document.getElementById('student-roll').value = '';

    submitBtn.disabled = false;
    submitBtn.innerText = 'Send All Appreciations 🎉';
  })
  .catch(err => {
    console.error(err);
    alert('Failed to send submissions. Please check your internet connection.');
    submitBtn.disabled = false;
    submitBtn.innerText = 'Send All Appreciations 🎉';
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderTeachers(teachersData);
});
