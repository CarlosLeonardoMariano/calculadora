function criarCalculadora() {
  return {
    display: document.querySelector('.display'),

    iniciar() {
      this.botao();
      this.pressionaEnter();
    },

    pressionaEnter() {
      this.display.addEventListener('keyup', evento => {
        if (evento.keyCode === 13) {
          this.realizaConta();
        }
      });
    },

    clearDisplay() {
      this.display.value = '';
    },

    apagaUm() {
      this.display.value = this.display.value.slice(0, -1);
    },

    realizaConta() {
      let conta = this.display.value;

      try {
        conta = eval(conta);

        if (typeof conta !== 'number' || isNaN(conta)) {
          alert('Conta Inválida');
          return;
        }

        this.display.value = String(conta);
      } catch (erro) {
        alert('Conta Inválida');
      }
    },

    botao() {
      document.addEventListener('click', evento => {
        const clickBtn = evento.target;

        if (clickBtn.classList.contains('btn-num')) {
          this.botaoDisplay(clickBtn.innerText);
        }

        if (clickBtn.classList.contains('btn-clear')) {
          this.clearDisplay();
        }

        if (clickBtn.classList.contains('btn-del')) {
          this.apagaUm();
        }

        if (clickBtn.classList.contains('btn-eq')) {
          this.realizaConta();
        }
      });
    },

    botaoDisplay(valor) {
      this.display.value += valor;
    }
  };
}

const calculadora = criarCalculadora();
calculadora.iniciar();
