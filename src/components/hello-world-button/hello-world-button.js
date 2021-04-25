import './hello-world-button.scss';

class HelloWorldButton {
    render() {
        const button = document.createElement('button');
        button.innerHTML = 'Hello Art';
        button.classList.add('hello-world-button');
        button.onclick = function() {
            const p = document.createElement('p');
            p.innerHTML = 'Hello Art';
            p.classList.add('hello-world-text');
            body.appendChild(p);
        }
        const body = document.querySelector('body');
        body.appendChild(button);
    }
}

export default HelloWorldButton;