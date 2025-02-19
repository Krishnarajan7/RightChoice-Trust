const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx4dHwlTDG7nm0dDIB3U2ecze89fFqaHTdHDCJfyhMwzZjDsRBVRsMGsvTBgJvBW4Tr/exec';

class RegistrationForm {
    constructor() {
        this.form = document.getElementById('studentRegistrationForm');
        this.submitButton = document.getElementById('submitButton');
        this.loadingIndicator = document.getElementById('loadingIndicator');
        this.successAlert = document.getElementById('successAlert');
        this.errorAlert = document.getElementById('errorAlert');

        this.initializeForm();
    }

    initializeForm() {
        this.form.addEventListener('submit', async (e) => {
            e.preventDefault();
            this.hideAlerts();
            
            if (this.validateForm()) {
                await this.submitForm();
            }
        });
    }

    hideAlerts() {
        this.successAlert.style.display = 'none';
        this.errorAlert.style.display = 'none';
    }

    validateForm() {
        const mobileNumber = this.form.mobileNumber.value;
        const whatsappNumber = this.form.whatsappNumber.value;
        const age = parseInt(this.form.age.value);

        // Validate all required fields are filled
        const requiredFields = [
            'studentName', 'mobileNumber', 'whatsappNumber', 'age', 
            'dateOfBirth', 'community', 'studyingGroup', 'schoolName', 
            'district', 'courseWillingness'
        ];

        for (const field of requiredFields) {
            if (!this.form[field].value.trim()) {
                this.showError(`Please fill in ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`);
                return false;
            }
        }

        if (!/^\d{10}$/.test(mobileNumber)) {
            this.showError('Please enter a valid 10-digit mobile number');
            return false;
        }

        if (!/^\d{10}$/.test(whatsappNumber)) {
            this.showError('Please enter a valid 10-digit WhatsApp number');
            return false;
        }

        if (age < 15 || age > 25) {
            this.showError('Age must be between 15 and 25 years');
            return false;
        }

        return true;
    }

    showError(message) {
        this.errorAlert.textContent = message;
        this.errorAlert.style.display = 'block';
        // Scroll to error message
        this.errorAlert.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    formatDateForSheet(dateStr) {
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-GB'); // DD/MM/YYYY format
    }

    getFormData() {
        return {
            timestamp: new Date().toISOString(),
            studentName: this.form.studentName.value.trim(),
            mobileNumber: this.form.mobileNumber.value.trim(),
            whatsappNumber: this.form.whatsappNumber.value.trim(),
            age: parseInt(this.form.age.value),
            dateOfBirth: this.formatDateForSheet(this.form.dateOfBirth.value),
            community: this.form.community.value,
            studyingGroup: this.form.studyingGroup.value,
            schoolName: this.form.schoolName.value.trim(),
            district: this.form.district.value.trim(),
            courseWillingness: this.form.courseWillingness.value
        };
    }

    async submitForm() {
        this.submitButton.disabled = true;
        this.loadingIndicator.style.display = 'flex';

        try {
            const formData = this.getFormData();
            
            // Using URLSearchParams to send data
            const params = new URLSearchParams();
            for (const [key, value] of Object.entries(formData)) {
                params.append(key, value);
            }

            const response = await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: params.toString()
            });

            await new Promise(resolve => setTimeout(resolve, 1000));

            this.successAlert.style.display = 'block';
            this.successAlert.scrollIntoView({ behavior: 'smooth', block: 'center' });
            this.form.reset();

        } catch (error) {
            console.error('Error:', error);
            this.showError('An error occurred. Please try again later.');

        } finally {
            this.submitButton.disabled = false;
            this.loadingIndicator.style.display = 'none';
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new RegistrationForm();
});