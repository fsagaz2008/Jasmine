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
