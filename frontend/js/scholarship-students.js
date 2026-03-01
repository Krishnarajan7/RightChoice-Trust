/* Authorized Students Page Logic */

document.addEventListener('DOMContentLoaded', () => {
    const studentTableBody = document.getElementById('studentTableBody');
    const modal = document.getElementById('idModal');
    const closeModal = document.querySelector('.close-modal');
    
    // Accurate data extracted from Excel (122 records)
    const scholarshipData = [
        {"sno": 1, "id": "26RCT0001", "name": "ASMITHA", "school": "AMGHSS-THIRUKKUVALAI", "dept": "ENGG"},
        {"sno": 2, "id": "26RCT0002", "name": "PAVITHRA", "school": "NDHSS-NAGAPATTINAM", "dept": "ENGG"},
        {"sno": 3, "id": "26RCT0003", "name": "MOUNIKA", "school": "AMGHSS-THIRUKKUVALAI", "dept": "MEDICAL"},
        {"sno": 4, "id": "26RCT0004", "name": "LAVANYA G", "school": "NDHSS-NAGAPATTINAM", "dept": "ENGG"},
        {"sno": 5, "id": "26RCT0005", "name": "BAVADHARANI", "school": "AMGHSS-THIRUKKUVALAI", "dept": "MEDICAL"},
        {"sno": 6, "id": "26RCT0006", "name": "HARISH", "school": "AMGHSS-THIRUKKUVALAI", "dept": "AGRI"},
        {"sno": 7, "id": "26RCT0007", "name": "DHAYANITHI", "school": "AMGHSS-THIRUKKUVALAI", "dept": "ENGG"},
        {"sno": 8, "id": "26RCT0008", "name": "YOGESHWARI", "school": "NDHSS-NAGAPATTINAM", "dept": "ENGG"},
        {"sno": 9, "id": "26RCT0009", "name": "ABISHEIK", "school": "AMGHSS-THIRUKKUVALAI", "dept": "MEDICAL"},
        {"sno": 10, "id": "26RCT0010", "name": "SABA", "school": "AMGHSS-THIRUKKUVALAI", "dept": "MEDICAL"},
        {"sno": 11, "id": "26RCT0011", "name": "KANNAGI", "school": "NDHSS-NAGAPATTINAM", "dept": "ENGG"},
        {"sno": 12, "id": "26RCT0012", "name": "PRIYADHARSHIKA", "school": "AMGHSS-THIRUKKUVALAI", "dept": "MEDICAL"},
        {"sno": 13, "id": "26RCT0013", "name": "RESHMI", "school": "GHSS-PULIVALAM", "dept": "MEDICAL"},
        {"sno": 14, "id": "26RCT0014", "name": "PAVITHRA", "school": "GHSS-PULIVALAM", "dept": "MEDICAL"},
        {"sno": 15, "id": "26RCT0015", "name": "TAMIZHARASAN", "school": "AMGHSS-THIRUKKUVALAI", "dept": "AGRI"},
        {"sno": 16, "id": "26RCT0016", "name": "POOJASRI", "school": "AMGHSS-THIRUKKUVALAI", "dept": "MEDICAL"},
        {"sno": 17, "id": "26RCT0017", "name": "SUJITHA", "school": "AMGHSS-THIRUKKUVALAI", "dept": "MEDICAL"},
        {"sno": 18, "id": "26RCT0018", "name": "PRIYADHARSHINI", "school": "AMGHSS-THIRUKKUVALAI", "dept": "MEDICAL"},
        {"sno": 19, "id": "26RCT0019", "name": "GUNAVATHI", "school": "AMGHSS-THIRUKKUVALAI", "dept": "MEDICAL"},
        {"sno": 20, "id": "26RCT0020", "name": "DIVYANISHA", "school": "AMGHSS-THIRUKKUVALAI", "dept": "MEDICAL"},
        {"sno": 21, "id": "26RCT0021", "name": "DHANASEELAN", "school": "AMGHSS-THIRUKKUVALAI", "dept": "MEDICAL"},
        {"sno": 22, "id": "26RCT0022", "name": "KIRANIGASRI", "school": "NDHSS-NAGAPATTINAM", "dept": "LAW"},
        {"sno": 23, "id": "26RCT0023", "name": "SAFIYA", "school": "AL-AMAN MATRIC", "dept": "MEDICAL"},
        {"sno": 24, "id": "26RCT0024", "name": "KAVIYA", "school": "AMGHSS-THIRUKKUVALAI", "dept": "LAW"},
        {"sno": 25, "id": "26RCT0025", "name": "NIRAIMATHI", "school": "GHSS-PULIVALAM", "dept": "ENGG-CIVIL"},
        {"sno": 26, "id": "26RCT0026", "name": "SAROJINI", "school": "AMGHSS-THIRUKKUVALAI", "dept": "MEDICAL"},
        {"sno": 27, "id": "26RCT0027", "name": "KANIMOZHI", "school": "AMGHSS-THIRUKKUVALAI", "dept": "MEDICAL"},
        {"sno": 28, "id": "26RCT0028", "name": "YOGESHWARI", "school": "GHSS-KURUKKATHI", "dept": "MEDICAL"},
        {"sno": 29, "id": "26RCT0029", "name": "SUWETHA", "school": "GHSS-MAHADEVAPATNAM", "dept": "MEDICAL"},
        {"sno": 30, "id": "26RCT0030", "name": "ANUSUYA", "school": "GHSS-THIRUKANNAPURAM", "dept": "MEDICAL"},
        {"sno": 31, "id": "26RCT0031", "name": "DHARSHINI", "school": "GHSS-THIRUKANNAPURAM", "dept": "MEDICAL"},
        {"sno": 32, "id": "26RCT0032", "name": "ISWARYA", "school": "GHSS-THIRUKANNAPURAM", "dept": "MEDICAL"},
        {"sno": 33, "id": "26RCT0033", "name": "HARINI", "school": "NDHSS-NAGAPATTINAM", "dept": "ENGG"},
        {"sno": 34, "id": "26RCT0034", "name": "KAVIYASRI", "school": "MGHSS-NAGAPATTINAM", "dept": "NOT DECIED"},
        {"sno": 35, "id": "26RCT0035", "name": "SIVASANKARI", "school": "MGHSS-NAGAPATTINAM", "dept": "ENGG"},
        {"sno": 36, "id": "26RCT0036", "name": "JASMEENA FARHANA", "school": "CSI SCHOOL", "dept": "MEDICAL-NEET"},
        {"sno": 37, "id": "26RCT0037", "name": "SUSMITHA", "school": "V.D.H.S.S-VALIVALAM", "dept": "MEDICAL"},
        {"sno": 38, "id": "26RCT0038", "name": "SAFIYA", "school": "NDHSS-NAGAPATTINAM", "dept": "ENGG"},
        {"sno": 39, "id": "26RCT0039", "name": "PREETHI", "school": "AMGHSS-THIRUKKUVALAI", "dept": "ARTS"},
        {"sno": 40, "id": "26RCT0040", "name": "NIVETHITHA", "school": "GRM- THIRUVARUR", "dept": "MEDICAL"},
        {"sno": 41, "id": "26RCT0041", "name": "NIRANJANA", "school": "AMGHSS-THIRUKKUVALAI", "dept": "MEDICAL"},
        {"sno": 42, "id": "26RCT0042", "name": "BOWJIKA", "school": "AMGHSS-THIRUKKUVALAI", "dept": "MEDICAL"},
        {"sno": 43, "id": "26RCT0043", "name": "SIVAMAHATHI", "school": "MGHSS-NAGAPATTINAM", "dept": "MEDICAL"},
        {"sno": 44, "id": "26RCT0044", "name": "PARKAVI", "school": "GRM- THIRUVARUR", "dept": "MEDICAL"},
        {"sno": 45, "id": "26RCT0045", "name": "THIKIYA", "school": "GRM- THIRUVARUR", "dept": "ENGG"},
        {"sno": 46, "id": "26RCT0046", "name": "V.THAMIZHINI", "school": "GRM- THIRUVARUR", "dept": "ENGG"},
        {"sno": 47, "id": "26RCT0047", "name": "RAGAVI", "school": "NDHSS-NAGAPATTINAM", "dept": "ENGG"},
        {"sno": 48, "id": "26RCT0048", "name": "DHARSHAN", "school": "NHSS-NAGAI", "dept": "NOT DECIDED"},
        {"sno": 49, "id": "26RCT0049", "name": "THEJASVINI", "school": "GRM- THIRUVARUR", "dept": "MEDICAL"},
        {"sno": 50, "id": "26RCT0050", "name": "YOGAVARSHINI", "school": "AMGHSS-THIRUKKUVALAI", "dept": "MEDICAL"},
        {"sno": 51, "id": "26RCT0051", "name": "NASEEKA SAFIYA", "school": "MGHSS-NAGAPATTINAM", "dept": "MEDICAL"},
        {"sno": 52, "id": "26RCT0052", "name": "KOKILAPUNITHA", "school": "MGHSS-NAGAPATTINAM", "dept": "MEDICAL"},
        {"sno": 53, "id": "26RCT0053", "name": "R.Aswin", "school": "NHSS-NAGAPATTINAM", "dept": "ENGG"},
        {"sno": 54, "id": "26RCT0054", "name": "SATHYA PRIYA", "school": "MGHSS-NAGAPATTINAM", "dept": "ENGG"},
        {"sno": 55, "id": "26RCT0055", "name": "SAFRIN SAHANA", "school": "MGHSS-NAGAI", "dept": "MEDICAL"},
        {"sno": 56, "id": "26RCT0056", "name": "MEHNAZ", "school": "MGHSS-NAGAPATTINAM", "dept": "ENGG"},
        {"sno": 57, "id": "26RCT0057", "name": "MOHAMED ASEEM", "school": "GHOUTHIA-NAGORE", "dept": "ENGG"},
        {"sno": 58, "id": "26RCT0058", "name": "SAKTHI KUMARAN", "school": "NHSS-NAGORE", "dept": "ENGG"},
        {"sno": 59, "id": "26RCT0059", "name": "RITHTHISH", "school": "NHSS-NAGORE", "dept": "NOT DECIDED"},
        {"sno": 60, "id": "26RCT0060", "name": "SWATHIKA", "school": "CSI SCHOOL", "dept": "NOT DECIDED"},
        {"sno": 61, "id": "26RCT0061", "name": "SAHIRA", "school": "NDHSS-NAGAPATTINAM", "dept": "MEDICAL"},
        {"sno": 62, "id": "26RCT0062", "name": "SUKRAN", "school": "NHSS-NAGORE", "dept": "ENGG"},
        {"sno": 63, "id": "26RCT0063", "name": "NAZILA", "school": "MGHSS-NAGAI", "dept": "MEDICAL"},
        {"sno": 64, "id": "26RCT0064", "name": "HARIHARAN", "school": "NHSS-NAGAPATTINAM", "dept": "NOT DECIDED"},
        {"sno": 65, "id": "26RCT0065", "name": "GUNASRI", "school": "MGHSS-NAGAPATTINAM", "dept": "MEDICAL"},
        {"sno": 66, "id": "26RCT0066", "name": "ABISHINI", "school": "GMHSS-THOPPUTHURAI", "dept": "MEDICAL"},
        {"sno": 67, "id": "26RCT0067", "name": "ANUSHA", "school": "GMHSS-THOPPUTHURAI", "dept": "NOT DECIDED"},
        {"sno": 68, "id": "26RCT0068", "name": "HARIPRIYA", "school": "GMHSS-THOPPUTHURAI", "dept": "NOT DECIDED"},
        {"sno": 69, "id": "26RCT0069", "name": "MISHRIYA BEGAM", "school": "MGHSS-NAGAI", "dept": "MEDICAL"},
        {"sno": 70, "id": "26RCT0070", "name": "KANNIKADEVI", "school": "NDHSS-NAGAPATTINAM", "dept": "MEDICAL"},
        {"sno": 71, "id": "26RCT0071", "name": "DEVADHARSHINI.M", "school": "GMHS-THOPPUTHURAI", "dept": "MEDICAL"},
        {"sno": 72, "id": "26RCT0072", "name": "SUBASHREE.K", "school": "NDHSS-NAGAPATTINAM", "dept": "MEDICAL"},
        {"sno": 73, "id": "26RCT0073", "name": "MUKILAN", "school": "NHSS-NAGAPATTINAM", "dept": "ENGG"},
        {"sno": 74, "id": "26RCT0074", "name": "ABISRI", "school": "NDHSS ", "dept": "MEDICAL"},
        {"sno": 75, "id": "26RCT0075", "name": "KALAIRAJ", "school": "NHSS-NAGAPATTINAM", "dept": "AGRI"},
        {"sno": 76, "id": "26RCT0076", "name": "RAGAVI", "school": "GMS -THOPPUTHURAI", "dept": "NOT DECIDED"},
        {"sno": 77, "id": "26RCT0077", "name": "S.SABARINATHAN ", "school": "   NHSS-NAGAPATTINAM", "dept": "ENGG"},
        {"sno": 78, "id": "26RCT0078", "name": "K.KISHORE", "school": "NHSS-NAGAPATTINAM", "dept": "ENGG"},
        {"sno": 79, "id": "26RCT0079", "name": "HARIHARAN", "school": "GHSS-THANIKOTTAGAM", "dept": "MEDICAL"},
        {"sno": 80, "id": "26RCT0080", "name": "DURGA", "school": "GHSS-VEDARNIYAM", "dept": "MEDICAL"},
        {"sno": 81, "id": "26RCT0081", "name": "FARHANA BEGUM", "school": "", "dept": "MEDICAL"},
        {"sno": 82, "id": "26RCT0082", "name": "AFRA", "school": "NIVEDHA MATRIC-PORAYAR", "dept": "MEDICAL"},
        {"sno": 83, "id": "26RCT0083", "name": "MAKILA", "school": "GGHSS-AYAKARNYAPULAM", "dept": "MEDICAL"},
        {"sno": 84, "id": "26RCT0084", "name": "KEERTHANA", "school": "GHSS-THANIKOTTAGAM", "dept": "MEDICAL/ENGG"},
        {"sno": 85, "id": "26RCT0085", "name": "N. Prabhakaran", "school": "SKS BOYS  SCHOOL-VEDARNIYAM", "dept": "MEDICAL"},
        {"sno": 86, "id": "26RCT0086", "name": "VETHALAKSHMI", "school": "GGHSS-AYAKARNYAPULAM", "dept": "MEDICAL"},
        {"sno": 87, "id": "26RCT0087", "name": "DHANUSRI", "school": "GMHSS-THOPPUTHURAI", "dept": "MEDICAL"},
        {"sno": 88, "id": "26RCT0088", "name": "ARUNTHATHI", "school": "GGHSS-AYAKARNYAPULAM", "dept": "ENGG"},
        {"sno": 89, "id": "26RCT0089", "name": "SIVAPRIYA", "school": "GHSS-KURUKKATHI", "dept": "MEDICAL"},
        {"sno": 90, "id": "26RCT0090", "name": "AISHA SHERIN", "school": "NIVEDHA MATRIC-PORAYAR", "dept": "MEDICAL"},
        {"sno": 91, "id": "26RCT0091", "name": "DHILIP", "school": "QUAIDE MATRIC THOPPUTHURAI", "dept": "ENGG"},
        {"sno": 92, "id": "26RCT0092", "name": "SANTHIYA", "school": "GHSS -AYAKARANYAPULAM", "dept": "MEDICAL"},
        {"sno": 93, "id": "26RCT0093", "name": "AADHARSH", "school": "SARATHAMBAL -THETHAKUDI", "dept": "ENGG"},
        {"sno": 94, "id": "26RCT0094", "name": "YOGESH", "school": "NHSS-NAGAPATTINAM", "dept": "ENGG"},
        {"sno": 95, "id": "26RCT0095", "name": "NISHANTHINI", "school": "GGHSS-AYAKARNYAPULAM", "dept": "ENGG"},
        {"sno": 96, "id": "26RCT0096", "name": "PRAVEENKUMAR", "school": "GHSS-SEMBODAI", "dept": "ENGG"},
        {"sno": 97, "id": "26RCT0097", "name": "DHARUNESH K", "school": "R.NATESANAR HR SCHOOL-AYAKARANYAPULAM", "dept": "ENGG"},
        {"sno": 98, "id": "26RCT0098", "name": "SRIDEVI", "school": "", "dept": "NOT DECIDED"},
        {"sno": 99, "id": "26RCT0099", "name": "KOWSIKA", "school": "GMHSS-THOPPUTHURAI", "dept": "MEDICAL"},
        {"sno": 100, "id": "26RCT0100", "name": "DEENA", "school": "", "dept": "NOT DECIDED"},
        {"sno": 101, "id": "26RCT0101", "name": "YOGITHA", "school": "MGHSS-NAGAI", "dept": "MEDICAL"},
        {"sno": 102, "id": "26RCT0102", "name": "MANISHA", "school": "MGHSS-NAGAI", "dept": "MEDICAL"},
        {"sno": 103, "id": "26RCT0103", "name": "SREEKA", "school": "MGHSS-NAGAI", "dept": "MEDICAL"},
        {"sno": 104, "id": "26RCT0104", "name": "SARMITHA", "school": "", "dept": "NOT DECIDED"},
        {"sno": 105, "id": "26RCT0105", "name": "TAMILILAVARASI", "school": "", "dept": "NOT DECIDED"},
        {"sno": 106, "id": "26RCT0106", "name": "SUVATHI", "school": "", "dept": "NOT DECIDED"},
        {"sno": 107, "id": "26RCT0107", "name": "ANITHIRAN", "school": "", "dept": "NOT DECIDED"},
        {"sno": 108, "id": "26RCT0108", "name": "AKALYA T", "school": "", "dept": "NOT DECIDED"},
        {"sno": 109, "id": "26RCT0109", "name": "SATHYA.U", "school": "GMHSS-THOPPUTHURAI", "dept": "MEDICAL"},
        {"sno": 110, "id": "26RCT0110", "name": "DHARSHINI M", "school": "", "dept": "NOT DECIDED"},
        {"sno": 111, "id": "26RCT0111", "name": "MAHALAKSHMI", "school": "", "dept": "NOT DECIDED"},
        {"sno": 112, "id": "26RCT0112", "name": "JASHEERA", "school": "MGHSS-NAGAI", "dept": "ENGG"},
        {"sno": 113, "id": "26RCT0113", "name": "TAMIZHINI", "school": "", "dept": "NOT DECIDED"},
        {"sno": 114, "id": "26RCT0114", "name": "POOJA", "school": "", "dept": "NOT DECIDED"},
        {"sno": 115, "id": "26RCT0115", "name": "KRISHNA RAJ", "school": "", "dept": "NOT DECIDED"},
        {"sno": 116, "id": "26RCT0116", "name": "SANKEERTHANA", "school": "", "dept": "NOT DECIDED"},
        {"sno": 117, "id": "26RCT0117", "name": "NOOR JAFRIN", "school": "", "dept": "NOT DECIDED"},
        {"sno": 118, "id": "26RCT0118", "name": "SABITHA", "school": "", "dept": "NOT DECIDED"},
        {"sno": 119, "id": "26RCT0119", "name": "vishali.K", "school": "", "dept": "NOT DECIDED"},
        {"sno": 120, "id": "26RCT0120", "name": "M.thamizhmathi", "school": "Government higher secondary school thagattur", "dept": "NOT DECIDED"},
        {"sno": 121, "id": "26RCT0121", "name": "U. Atshaya", "school": "", "dept": "NOT DECIDED"},
        {"sno": 122, "id": "26RCT0122", "name": "DHANASEELAN", "school": "", "dept": "NOT DECIDED"}
    ];

    // Populate table
    scholarshipData.forEach(student => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${student.sno}</td>
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.school}</td>
            <td>${student.dept}</td>
            <td>
                <button class="view-id-btn" data-student='${JSON.stringify(student)}'>
                    <i class="fas fa-id-card"></i> View ID Card
                </button>
            </td>
        `;
        studentTableBody.appendChild(tr);
    });

    // Modal Logic
    document.addEventListener('click', (e) => {
        if (e.target.closest('.view-id-btn')) {
            const btn = e.target.closest('.view-id-btn');
            const studentData = JSON.parse(btn.getAttribute('data-student'));
            showIdCard(studentData);
        }
    });

    function showIdCard(student) {
        modal.style.display = 'flex';
    }

    closeModal.onclick = () => {
        modal.style.display = 'none';
    };

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
});
