

describe("Adição de Valores", function () {

    var resultado = "";
    beforeEach(function () {
        resultado = new Soma(2, 3);

    });

    describe("Adição", function () {

        it("Espera-se que a soma seja igual a 5", function () {
            expect(resultado.adicao()).toEqual(8);
        });
    });
});

describe("Multiplicação de Valores", function () {

    var resultado = "";
    beforeEach(function () {
        resultado = new Multiplicacao(2, 4);

    });

    describe("Multiplicação", function () {

        it("Espera-se que a multiplicaçao seja seja 8", function () {
            expect(resultado.multiplicacao()).toEqual(8);
        });
    });
});

describe("Divisão de Valores", function () {

    var resultado = "";
    beforeEach(function () {
        resultado = new Divisao(20, 5);

    });

    describe("Divisão", function () {

        it("Espera-se que o resultado da Divisão seja 4", function () {
            expect(resultado.divisao()).toEqual(4);
        });
    });
});

describe("SubTração de Valores", function () {

    var resultado = "";
    beforeEach(function () {
        resultado = new Subtracao(20, 5);

    });

    describe("Subtração", function () {

        it("Espera-se que a subtração dos valores seja 15", function () {
            expect(resultado.subtracao()).toEqual(15);
        });
    });
});



