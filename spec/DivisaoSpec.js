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