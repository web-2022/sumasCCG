let num1, num2, correctAnswer;

function generateQuestion() {
    // Generar dos números aleatorios entre 1 y 20
    num1 = Math.floor(Math.random() * 20) + 1;
    num2 = Math.floor(Math.random() * 20) + 1;
    correctAnswer = num1 + num2;

    // Mostrar la pregunta
    document.getElementById('sum').innerText = `${num1} + ${num2}`;

    // Generar opciones de respuesta
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = ''; // Limpiar opciones anteriores

    const answers = new Set([correctAnswer]);
    while (answers.size < 4) {
        answers.add(Math.floor(Math.random() * 40) + 1);
    }

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'btn btn-primary btn-lg btn-option mx-1'; // Aplicar clase personalizada para margen
        button.innerText = answer;
        button.onclick = () => checkAnswer(answer);
        optionsDiv.appendChild(button);
    });
}

function checkAnswer(answer) {
    const resultDiv = document.getElementById('resultado');

    if (answer === correctAnswer) {
        resultDiv.innerText = '¡Correcto!';
        resultDiv.className = 'h3 text-success mt-4';
    } else {
        resultDiv.innerText = 'Incorrecto, intenta de nuevo.';
        resultDiv.className = 'h3 text-danger mt-4';
    }

    // Mostrar el mensaje durante 5 segundos
    setTimeout(() => {
        resultDiv.innerText = '';
        generateQuestion(); // Generar una nueva pregunta después de mostrar el mensaje
    }, 5000);
}

// Generar la primera pregunta al cargar la página
generateQuestion();
