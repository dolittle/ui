import Context from "./given/a_view_visitor";
import { CreateRegion } from "doLittle/client/views/CreateRegion";
import { CreateBindingContext } from "doLittle/client/values/CreateBindingContext";
import { RenderView } from "doLittle/client/views/RenderView";
import { LoadAndRenderView } from "doLittle/client/views/LoadAndRenderView";

describe("when visiting with view element without existing view", () => {
    let context = null;
    const pathToView = {
        value: "something"
    };
    const element = {
        localName: "view",
        attributes: {
            getNamedItem: sinon.stub().returns(pathToView)
        }
    };
    let tasks = null;
    let viewPath = null;

    beforeEach(() => {
        context = new Context();
        context.viewDefinitions.exists.returns(false);
        constructors.ViewPath = sinon.stub().callsFake(() => viewPath = this);
        (becauseOf => tasks = context.visitor.visit(element, context.tasks, context.results))();
    });

    it("should create a create region task", () => constructors.CreateRegion.calledWith(context.regionManager, element).should.be.true);
    it("should create a create binding context task", () => constructors.CreateBindingContext.calledWith(context.bindingContextManager, element).should.be.true);
    it("should create a view path with the proper path", () => constructors.ViewPath.calledWith(pathToView));
    it("should create a load view with the proper path", () => constructors.LoadAndRenderView.calledWith(context.viewLoader, viewPath).should.be.true);
    it("should add a create region task", () => tasks.some(task => task instanceof CreateRegion).should.be.true);
    it("should add a create binding context task", () => tasks.some(task => task instanceof CreateBindingContext).should.be.true);
    it("should add a load view task", () => tasks.some(task => task instanceof LoadAndRenderView).should.be.true)
});