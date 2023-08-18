describe("Adição de Valores", function () {

    var resultado = "";
    beforeEach(function () {
        resultado = new Soma(2, 3);

    });

    describe("Adição", function () {

        it("Espera-se que a soma seja igual a 5", function () {
            expect(resultado.adicao()).toEqual(5);
        });
    });
});