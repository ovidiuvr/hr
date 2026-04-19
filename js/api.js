const API_URL = 'http://localhost:3000/api';

export const api = {
    // Obține toți angajații
    getEmployees: async () => {
        const response = await fetch(`${API_URL}/employees`);
        return await response.json();
    },

    // Adaugă un angajat nou
    addEmployee: async (employeeData) => {
        const response = await fetch(`${API_URL}/employees`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(employeeData)
        });
        return await response.json();
    }
};