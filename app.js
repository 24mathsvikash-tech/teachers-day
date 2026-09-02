// Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw159sXtUMGyvCQCl1QprOyrgxUeBg58NLLBttAIkIjbROmVNaoAC5_Y3b-iLrS6bhwmA/exec';

// Student Database mapped by Grade
const studentsByGrade = {
  "Grade 6": [
    "AARADHYA RAHUL PAWAR", "AAROHI GANESH PATIL", "AARYA PATIL", "AARYA SINGH", "AAYUSHI ROY",
    "ADITYA CHOUDHARY", "ADITYAKUMAR MOHANTY", "ADVAITH VAIDYANATH", "ANSHIKA SANJAYKUMAR GUPTA",
    "ARJUN BHATTALWAR", "AVANIKA MAHESH FULSE", "Charmi Bagul", "DEVANSH SUTAR", "DHRUVI RAVI SINGH",
    "HARDIK PANDEY", "HETH SUNIL NAKHUVA", "JAYDIP YOGESH GAGARE", "JAZZLEEN KAUR NAVEET VAID",
    "JINAL DNYANESHWAR PATIL", "JINISHA PATIL", "K. PRAGATHE", "Kanu", "PRITHVI PAVAN RAUT",
    "RADHIKA RAMSURAT MISHRA", "Rishi Karande", "RITIK RAJNISH PAYASI", "RUTVIKA PRITAM PATIL",
    "S. SIVAKRISH", "SHLOK SAGAR SALUNKHE", "SHIVI SAXENA", "SONALI -", "TEJAS YOGESH KHAIRNAR",
    "UMM E HANI", "VANSH YOGESH KUMAR", "VIHANA SAINATH PATIL", "YASHIKA SHARMA"
  ],
  "Grade 7": [
    "AARADH DYANDEV KOLI", "AAYUSH BALWANT GUPTA", "AAYUSH JAGDISH PATIL", "AKRITI KUMARI",
    "ANSH SANJAYKUMAR GUPTA", "ANSHU KAMLESH GAUD", "APOORV JWALITH BOMMI", "AVIYANSH GUPTA",
    "BHAVYA SINGH", "DIVYA KISHANSINGH CHAUHAN", "DIVYANSHI VAISHYA", "GIA RAJVI SUNDARRAJ",
    "INAAYA HOSSAIN", "JANVI KISHANSINGH CHOUHAN", "JASFER SAMPSON SASANI", "KIRTI LAXMAN GURJAR",
    "MAHESH SANDEEP DIVATE", "MAYURESH PRAVIN MAHIRE", "MOHIT YATIN PALAV", "Naman Patil",
    "NANDINI BIPIN YADAV", "PRATHAM MAHESH SHETTY", "PRATIK PAL", "PRISHA ANURA", "RADHIKA PARMAR",
    "RAJNANDINI SAHURAJ DIGGE", "RUDRA SAMEER BERDE", "RUNMAYEE VIJAY MARATHE", "SAKSHAM MALUSARE",
    "SAMRUDDHI PHADNIS", "Satyam Yadav", "SOHAM DEBKUMAR PAUL", "Soham Rathod", "SWARA SANDIP SHEWALE",
    "SWASTIK ASHOK SAHU", "TANMAYEE VIJAY MARATHE", "TASHI MAHESH SHETTY", "VEERESH KUMARESH KALAL",
    "YASH MAHESH DATILKAR"
  ],
  "Grade 8": [
    "AARADHAYA TRIPATHI", "AARAV VIJAY SINGH", "ADITYA RAJKUMAR SINGH", "ANANT DUBEY",
    "ANURAG PRADEEP PANDEY", "ANVI PANDEY", "ARNAV KUMAR", "ARYA DUBEY", "AVANI TUSHAR KAMBLE",
    "DURVA SACHIN CHAVAN", "HARSHAL KRISHNA LADWA", "HIMANSHU JANGID", "ISHWARI MANDARE",
    "JIDNYASA NANDKISHOR PATIL", "KABIR YOGESH MHATRE", "KANISH GANESH PAKKI", "KARAN KUNAL JOSHI",
    "KAUSHAL GANESH PATIL", "KAVYA GANESH PAKKI", "Khushi Dhongadi", "KUSMITHA SRI BOMMI",
    "MAYANK KUMAR", "NADEESH MANTARAM KONAR", "NEHA YOGESH KUMAR", "NIRBHAY SANDESH PATIL",
    "RAKSHITA SAGAR GAIKWAD", "RISHI GYANCHANDRA PAL", "SAKSHI PANDEY", "SAKSHAM KIRAN PATIL",
    "SAKSHAM SHAMBHULAL JAAT", "SHUBHAM SWAPNIL SAKALE", "SNEHA SHREE GHADIA", "SWARAJ REVANNATH ROTE",
    "TAJASA MAHIRE", "TANISHQ VISHAL PATIL", "Vihan Choudhari"
  ],
  "Grade 9": [
    "AAYAAN HARDIK GALA", "AMAN JITENDRA GOSWAMI", "ANSH GYANCHANDRA PAL", "ANSHU LALMAN CHOUDHARY",
    "ATHRAW VINOD SONWANE", "DEVANSH JITENDRA SHARMA", "GARGI MAHESH DAWANGE", "JEET DATTATRAY VIRKAR",
    "KAVITA LAXMANLAL GURJAR", "KETAN RAVINDRA PRAJAPATI", "NIVEDITA NEERAJ DUBEY", "Pratam Mali",
    "RUDRA DIVEKAR", "SAMARTH ABHAY JADHAV", "SAPNA RAMMILAN HARIJAN", "SARTHAK ARUN JADHAV",
    "VINAYAK VIJAY GUPTA", "YUG SINGH SENGAR"
  ],
  "Grade 10": [
    "ALOK YOGESH AGRAWAL", "ANUSHKA SWAPNIL SAKALE", "ANUSHREE DAS", "ARYAN SUMIT SAHU",
    "ASHWI GIRISH PANDEY", "DAKSHATA MAHESH DATILKAR", "DEVANSH BHANUSHALI", "DIPA DEBKUMAR PAUL",
    "GANESH VISHWAKARMA", "GOPIKA TARUN", "HIMANSHU PARMAR", "ISHAN MONU KUMAR BHATTI",
    "JANVI RAMESH HEGDE", "JYOTHIKHA M P", "MANU SHREYA SUNDARRAJ", "MIHIKA YADAV",
    "NIDHI JAYWANT KHAIRE", "OM PANKAJ BAWNE", "PAVANRAJ REVANNATH ROTE", "PRIYA PATEL",
    "SALONI JOGENDAR PAL", "SAPNA RAMNATH GUPTA", "SHANVI MAHINDRA JAIN", "SHARDUL NILESH MORE",
    "SHIVRAJ BHUSHAN NAWALE", "SHREENIDHI VINOD VISHWAKARMA", "SONAM RAJESH MISHRA",
    "TARANJEET KHULLAR", "VIHAAN"
  ]
};

// Teacher list
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

// Dynamically populate student names based on selected class
function updateStudentNames() {
  const gradeSelect = document.getElementById('student-grade');
  const nameSelect = document.getElementById('student-name');
  const selectedGrade = gradeSelect.value;

  nameSelect.innerHTML = '';

  if (!selectedGrade || !studentsByGrade[selectedGrade]) {
    nameSelect.innerHTML = '<option value="">-- Select Class First --</option>';
    return;
  }

  const defaultOption = document.createElement('option');
  defaultOption.value = '';
  defaultOption.innerText = '-- Choose Your Name --';
  nameSelect.appendChild(defaultOption);

  studentsByGrade[selectedGrade].forEach(student => {
    const opt = document.createElement('option');
    opt.value = student;
    opt.innerText = student;
    nameSelect.appendChild(opt);
  });
}

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
  const studentName = document.getElementById('student-name').value;

  if (!grade) {
    alert('Please select your Class before submitting!');
    return;
  }
  if (!studentName) {
    alert('Please select your Name before submitting!');
    return;
  }

  // Prevent duplicate submissions per student via local storage
  const studentKey = `submitted_${grade}_${studentName.replace(/\s+/g, '_')}`;
  if (localStorage.getItem(studentKey)) {
    alert(`Submission blocked! Feedback for ${studentName} (${grade}) has already been submitted from this device.`);
    return;
  }

  const cards = document.querySelectorAll('.card');
  const submissions = [];

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
    rollNumber: studentName, // Transmit Student Name in place of Roll Number
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

    alert(`Thank you, ${studentName}! Your feedback for all ${submissions.length} teachers has been saved successfully! 🎉`);

    // Reset inputs
    cards.forEach(card => {
      card.querySelector('.wish-input').value = '';
      card.querySelectorAll('.tag').forEach(t => t.classList.remove('selected'));
      card.querySelectorAll('.emoji-face').forEach(e => e.classList.remove('active'));
      card.querySelector('.emojis-scale').setAttribute('data-rating', '0');
    });

    document.getElementById('student-grade').value = '';
    document.getElementById('student-name').innerHTML = '<option value="">-- Select Class First --</option>';

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
