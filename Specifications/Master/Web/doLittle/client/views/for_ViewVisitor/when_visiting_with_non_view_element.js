import Context from "./given/a_view_visitor";

describe("when visiting with non view element", () => {
    let context = null;
    const element = { localName : "notView" };
    let actions = {
        append: sinon.stub()
    };

    beforeEach(() => {
        context = new Context();
        (becauseOf => context.visitor.visit(element, actions))();
    });

    it("should not append any action", () => actions.append.called.should.be.false);
});