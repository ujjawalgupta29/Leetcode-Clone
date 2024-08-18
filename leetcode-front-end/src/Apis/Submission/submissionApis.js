async function submitCode (code) {
    try {
        const response = await fetch('http://localhost:8080/submission/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ code }), // Send the code in the request body
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        console.log('Submission Successful:', response);
        return await response.text();
    } catch (error) {
        console.error('Error submitting code:', error);
    }
};

export default submitCode