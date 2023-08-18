
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
