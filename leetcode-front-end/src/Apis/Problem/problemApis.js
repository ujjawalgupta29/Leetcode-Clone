export async function getAllProblems () {
    try {
        const response = await fetch('http://localhost:8080/problem/getAllProblems', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json(); // Assuming the response is JSON
        console.log('Submission Successful:', result);
        return result
    } catch (error) {
        console.error('Error submitting code:', error);
    }
};

export async function getProblem (id) {
    try {
        const response = await fetch(`http://localhost:8080/problem/getProblem/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json(); // Assuming the response is JSON
        console.log('Submission Successful:', result);
        return result
    } catch (error) {
        console.error('Error submitting code:', error);
    }
};
